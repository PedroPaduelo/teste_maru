export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export type Theme = 'light' | 'dark' | 'system'

export interface AppConfig {
  theme: Theme
  language: string
  notifications: boolean
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface PaginationParams {
  page: number
  limit: number
  total: number
}

export interface ListResponse<T> {
  items: T[]
  pagination: PaginationParams
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>

export * from './components'
export * from './forms'