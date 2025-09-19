import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue] as const
}

export function useLocalStorageWithExpiry<T>(key: string, initialValue: T, expiryInMinutes: number) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (!item) return initialValue
      
      const { value, expiry } = JSON.parse(item)
      
      if (new Date().getTime() > expiry) {
        window.localStorage.removeItem(key)
        return initialValue
      }
      
      return value
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      const now = new Date()
      const expiry = now.getTime() + expiryInMinutes * 60 * 1000
      const item = JSON.stringify({ value, expiry })
      
      setStoredValue(value)
      window.localStorage.setItem(key, item)
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue] as const
}