# Teste Maru - React + TypeScript + Vite

A modern React application built with TypeScript, Vite, and TailwindCSS. This project serves as a solid foundation for building scalable web applications with best practices and modern tooling.

## 🚀 Features

- ⚡ **Vite** - Fast development server and optimized builds
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 📘 **TypeScript** - Type safety and better developer experience
- 🧹 **ESLint & Prettier** - Code quality and formatting
- 🎯 **React 18** - Latest React features and concurrent rendering
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Custom Components** - Reusable UI components
- 💾 **Local Storage Hooks** - Custom hooks for data persistence

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, CSS3
- **Build Tool**: Vite
- **Code Quality**: ESLint, Prettier
- **Package Manager**: npm

## 📦 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PedroPaduelo/teste_maru.git
cd teste_maru
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
teste_maru/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Images and static files
│   │   └── react.svg      # React logo
│   ├── components/        # Reusable components
│   │   └── ui/            # UI components
│   │       ├── Button.tsx # Button component
│   │       └── Card.tsx   # Card component
│   ├── hooks/             # Custom React hooks
│   │   └── useLocalStorage.ts # Local storage hook
│   ├── styles/            # Global styles
│   │   └── globals.css    # Tailwind imports and global styles
│   ├── types/             # TypeScript type definitions
│   │   ├── index.ts       # Main type exports
│   │   ├── components.ts  # Component types
│   │   └── forms.ts       # Form types
│   ├── utils/             # Utility functions
│   │   └── helpers.ts     # Common helpers
│   ├── App.tsx            # Main App component
│   ├── App.css            # App-specific styles
│   ├── main.tsx           # Application entry point
│   └── vite-env.d.ts      # Vite type definitions
├── .env.example           # Environment variables template
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore            # Git ignore rules
├── .prettierrc           # Prettier configuration
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json    # TypeScript node configuration
└── vite.config.ts        # Vite configuration
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Styling

This project uses **TailwindCSS** for styling. The configuration includes:

- Custom color palette with primary colors
- Responsive design utilities
- Custom animations and utilities
- Component-focused styling approach

## 📝 TypeScript

The project is fully typed with TypeScript, featuring:

- Strict type checking
- Component prop interfaces
- Custom type definitions
- API response types
- Form validation types

## 🔧 Configuration Files

- **Vite** (`vite.config.ts`) - Development server and build configuration
- **TypeScript** (`tsconfig.json`) - TypeScript compiler options
- **TailwindCSS** (`tailwind.config.js`) - Tailwind configuration
- **ESLint** (`.eslintrc.cjs`) - Code linting rules
- **Prettier** (`.prettierrc`) - Code formatting rules

## 📱 Responsive Design

The application is built with a mobile-first approach using TailwindCSS responsive utilities:

- Responsive grid system
- Mobile-optimized components
- Flexible typography scaling

## 🧪 Testing

To ensure code quality:

```bash
# Run linting
npm run lint

# Format code
npm run format
```

## 📦 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Platforms

The project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Traditional hosting**: Upload `dist` contents

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or issues, please open an issue on GitHub.

---

Built with ❤️ using React, TypeScript, and Vite