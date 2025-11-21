# Headhunter Frontend

> **AI Resume Polisher** - A Next.js application for optimizing resumes with AI integration for hh.ru (HeadHunter) job platform.

## 🎯 Project Overview

This is a modern, production-ready Next.js 16 application built with React 19, TypeScript, and Tailwind CSS 4. The project aims to provide AI-powered resume optimization specifically tailored for the Russian job platform hh.ru. The application helps users enhance their resumes by analyzing job descriptions and suggesting improvements.

**Current Status**: Landing page implementation (MVP phase)  
**Target Platform**: hh.ru integration  
**Development Stage**: Active development

---

## 🏗️ Architecture & Design Philosophy

### Core Principles

1. **Component-Driven Architecture**: Self-contained, reusable components with clear separation of concerns
2. **Type Safety First**: Strict TypeScript configuration with comprehensive type checking
3. **Server Components by Default**: Leveraging Next.js 16 App Router with React Server Components
4. **Utility-First Styling**: Tailwind CSS 4 with custom design tokens and CSS variables
5. **Accessibility & Performance**: Built with web vitals and analytics tracking from day one

### Architectural Patterns

- **Feature-Sliced Design Influence**: Shared resources separated from application-specific code
- **Barrel Exports**: Clean import paths using index files for better developer experience
- **Composition over Inheritance**: React components favor composition patterns
- **No Client Components Yet**: Currently all components are server components (no `"use client"` directives)

---

## 📁 Folder Structure

```
headhunter-frontend/
├── app/                          # Next.js App Router directory
│   ├── components/               # Page-specific components (landing page sections)
│   │   ├── header.tsx           # Sticky navigation header
│   │   ├── hero-section.tsx     # Hero/banner section
│   │   ├── features-section.tsx # Features showcase
│   │   ├── how-it-works-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── cta-section.tsx      # Call-to-action section
│   │   └── footer.tsx           # Site footer
│   ├── layout.tsx               # Root layout with metadata & fonts
│   ├── page.tsx                 # Home page composition
│   └── globals.css              # Global styles, Tailwind imports, CSS variables
│
├── shared/                       # Shared resources across the application
│   ├── ui/                      # Pure UI components (no business logic)
│   │   ├── button.tsx           # Button component with variants (CVA)
│   │   └── index.ts             # Barrel export
│   ├── utils/                   # Utility functions
│   │   ├── classNames.ts        # cn() utility for class merging
│   │   └── index.ts             # Barrel export
│   ├── lib/                     # Third-party library configurations (future)
│   ├── hooks/                   # Custom React hooks (future)
│   └── components/              # Shared complex components (future)
│
├── public/                       # Static assets
│   ├── *.svg                    # SVG icons
│   ├── *.png                    # Image assets
│   └── *.jpg                    # Image assets
│
├── node_modules/                 # Dependencies (gitignored)
├── .next/                        # Next.js build output (gitignored)
│
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration (v4)
├── postcss.config.mjs            # PostCSS configuration
├── eslint.config.mjs             # ESLint flat config
├── components.json               # shadcn/ui configuration
└── README.md                     # This file
```

### Folder Structure Philosophy

**Current Structure** (Landing Page Phase):

- `app/components/` - Contains all landing page section components
- `shared/` - Reusable UI primitives and utilities

**Planned Structure** (Feature Development Phase):

```
app/
├── (auth)/                       # Authentication pages group
│   ├── login/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   └── register/
│       └── page.tsx
│
├── (dashboard)/                  # Protected dashboard routes
│   ├── resumes/
│   │   ├── widgets/             # Self-sufficient UI blocks with logic
│   │   │   ├── resume-list-widget.tsx
│   │   │   └── resume-editor-widget.tsx
│   │   ├── components/          # Structural blocks of widgets
│   │   │   ├── resume-card.tsx
│   │   │   └── resume-form.tsx
│   │   ├── ui/                  # Pure presentational components
│   │   │   ├── resume-badge.tsx
│   │   │   └── resume-status.tsx
│   │   ├── utils/               # Page-specific utilities
│   │   ├── hooks/               # Page-specific hooks
│   │   ├── lib/                 # Page-specific libraries
│   │   ├── page.tsx             # Page component
│   │   └── layout.tsx           # Page layout
│   └── jobs/
│       ├── widgets/
│       ├── components/
│       ├── ui/
│       ├── page.tsx
│       └── layout.tsx
│
└── api/                          # API routes (future)
    └── resumes/
        └── route.ts
```

### Component Hierarchy

1. **Widgets** - Self-sufficient UI blocks with business logic, state management, and data fetching
2. **Components** - Structural building blocks that compose widgets, may contain local state
3. **UI** - Pure presentational components with no logic, only props and styling
4. **Utils** - Helper functions, formatters, validators
5. **Hooks** - Custom React hooks for reusable logic
6. **Lib** - Third-party library wrappers and configurations

---

## 🛠️ Tech Stack

### Core Framework

- **Next.js 16.0.2** - React framework with App Router
- **React 19.2.0** - UI library (latest stable)
- **TypeScript 5.x** - Type-safe JavaScript

### Styling

- **Tailwind CSS 4.x** - Utility-first CSS framework (latest major version)
- **PostCSS** - CSS processing with `@tailwindcss/postcss`
- **CSS Variables** - Design tokens using OKLCH color space
- **tw-animate-css 1.4.0** - Animation utilities

### UI Components & Utilities

- **shadcn/ui** - Component system (New York style)
- **Radix UI** - Headless UI primitives
  - `@radix-ui/react-slot` - Composition utility
- **Lucide React 0.553.0** - Icon library
- **class-variance-authority 0.7.1** - CVA for component variants
- **clsx 2.1.1** - Conditional class names
- **tailwind-merge 3.4.0** - Merge Tailwind classes intelligently

### Development Tools

- **ESLint 9.x** - Linting with flat config
  - `eslint-config-next` - Next.js specific rules
  - Core Web Vitals rules enabled
- **TypeScript** - Strict mode enabled

### Analytics & Monitoring

- **Vercel Analytics 1.5.0** - Performance and user analytics

### Fonts

- **Inter** - Primary font family (Google Fonts)
- **Geist Mono** - Monospace font (fallback configured)

---

## 🎨 Coding Style & Conventions

### TypeScript Patterns

```typescript
// ✅ Explicit type imports
import type React from 'react'
import type { Metadata } from 'next'

// ✅ Named exports for components
export function ComponentName() {}

// ✅ Default exports only for pages and layouts
export default function Page() {}

// ✅ Readonly props with explicit types
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {}

// ✅ Type-safe component props with intersection types
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {}
```

### Component Patterns

```typescript
// ✅ Server Components (default - no "use client")
export function ServerComponent() {
  return <div>Server rendered</div>
}

// ✅ Functional components with arrow functions for utilities
const buttonVariants = cva('base-classes', {
  variants: {
    /* ... */
  },
})

// ✅ Named function exports for components
export function Button({ className, ...props }) {
  return <button className={cn(buttonVariants({ className }))} {...props} />
}

// ✅ Composition pattern with Slot from Radix
const Comp = asChild ? Slot : 'button'
return <Comp {...props} />
```

### Styling Conventions

```typescript
// ✅ Tailwind utility classes with single quotes
className='flex items-center gap-2'

// ✅ Template literals for dynamic classes
className={`${inter.className} antialiased`}

// ✅ cn() utility for conditional classes
className={cn(buttonVariants({ variant, size, className }))}

// ✅ Responsive design with mobile-first approach
className='text-sm md:text-base lg:text-lg'

// ✅ Custom colors using CSS variables or hex
className='text-[#D6001C]'  // hh.ru brand color
className='bg-background text-foreground'  // Design tokens
```

### Import Conventions

```typescript
// ✅ Absolute imports using @ alias
import { Button } from '@/shared/ui'
import { cn } from '@/shared/utils'
import { Header } from '@/app/components/header'

// ✅ Grouped imports: React → Next.js → Third-party → Local
import type React from 'react'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { Button } from '@/shared/ui'
```

### File Naming

- **Components**: `kebab-case.tsx` (e.g., `hero-section.tsx`, `cta-section.tsx`)
- **Utilities**: `camelCase.ts` (e.g., `classNames.ts`)
- **Config files**: `kebab-case` with extensions (e.g., `next.config.ts`)
- **Barrel exports**: `index.ts` or `index.tsx`

### Code Organization

```typescript
// ✅ Component file structure
// 1. Imports
import { Icon } from 'lucide-react'
import { Button } from '@/shared/ui'

// 2. Constants/Data (if needed)
const data = [/* ... */]

// 3. Component definition
export function Component() {
  return (/* JSX */)
}

// 4. No default export for components (except pages/layouts)
```

### Data Handling

```typescript
// ✅ Inline data for static content
const testimonials = [
  {
    quote: '...',
    author: 'Name',
    role: 'Title',
    avatar: '/path.png',
  },
]

// ✅ Map over data in JSX
{
  testimonials.map((item) => <div key={item.author}>{/* ... */}</div>)
}
```

---

## ⚙️ Configuration Files

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Key Settings**:

- Strict mode enabled
- Path alias `@/` points to root
- React JSX transform
- Bundler module resolution

### Next.js Configuration (`next.config.ts`)

Currently using default Next.js 16 configuration. Future additions may include:

- Image optimization domains
- Environment variables
- Redirects/rewrites for hh.ru integration
- API proxy configuration

### Tailwind Configuration

**Version**: Tailwind CSS 4.x (latest)  
**Approach**: CSS-first configuration using `@theme` directive in `globals.css`

**Key Features**:

- OKLCH color space for better color perception
- CSS variables for theming (light/dark mode)
- Custom design tokens
- No separate `tailwind.config.ts` needed (v4 feature)

### shadcn/ui Configuration (`components.json`)

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/shared/components",
    "utils": "@/shared/utils",
    "ui": "@/shared/ui",
    "lib": "@/shared/lib",
    "hooks": "@/shared/hooks"
  }
}
```

**Customizations**:

- New York style (more refined, modern aesthetic)
- RSC (React Server Components) enabled
- Custom aliases pointing to `shared/` directory
- Lucide icons as default icon library

### ESLint Configuration (`eslint.config.mjs`)

```javascript
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
```

**Features**:

- Flat config format (ESLint 9+)
- Next.js Core Web Vitals rules
- TypeScript support
- Ignores build artifacts

---

## 🎨 Design System

### Color Palette

**Primary Brand Color**: `#D6001C` (hh.ru red)

**Design Tokens** (CSS Variables in OKLCH):

- `--background` / `--foreground` - Base colors
- `--primary` / `--primary-foreground` - Primary actions
- `--secondary` / `--secondary-foreground` - Secondary actions
- `--muted` / `--muted-foreground` - Muted/disabled states
- `--accent` / `--accent-foreground` - Accent highlights
- `--destructive` / `--destructive-foreground` - Error/danger states
- `--border` / `--input` / `--ring` - UI element colors

**Dark Mode**: Automatic theme switching via CSS variables

### Typography

- **Font Family**: Inter (sans-serif)
- **Font Weights**: Regular, Medium, Semibold, Bold
- **Scale**: Responsive typography using Tailwind utilities

### Spacing & Layout

- **Container**: Responsive container with padding
- **Grid**: CSS Grid for layouts
- **Flexbox**: Primary layout tool
- **Gap**: Consistent spacing using Tailwind gap utilities

### Component Variants (CVA Pattern)

```typescript
const buttonVariants = cva('base-classes', {
  variants: {
    variant: {
      default: '...',
      destructive: '...',
      outline: '...',
      secondary: '...',
      ghost: '...',
      link: '...',
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 px-3',
      lg: 'h-10 px-6',
      icon: 'size-9',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})
```

---

## 📦 Scripts & Commands

### Development

```bash
npm run dev
# Starts Next.js development server on http://localhost:3000
# Hot reload enabled
# TypeScript type checking in watch mode
```

### Production Build

```bash
npm run build
# Creates optimized production build
# Runs type checking
# Generates static pages where possible
# Outputs to .next/ directory

npm run start
# Starts production server
# Requires npm run build first
```

### Linting

```bash
npm run lint
# Runs ESLint on all TypeScript/TSX files
# Checks for code quality issues
# Enforces Next.js best practices
```

### Type Checking

```bash
npx tsc --noEmit
# Runs TypeScript compiler in check mode
# No output files generated
# Reports type errors
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 20.x or higher
- **npm**: 10.x or higher (or yarn/pnpm/bun)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd headhunter-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### First Run

1. Open [http://localhost:3000](http://localhost:3000)
2. You should see the landing page with:
   - Header with navigation
   - Hero section
   - Features section
   - How It Works section
   - Testimonials section
   - CTA section
   - Footer

---

## 🔧 Development Workflow

### Adding New Components

1. **Shared UI Component** (pure, reusable):

   ```bash
   # Create in shared/ui/
   touch shared/ui/new-component.tsx
   # Export from barrel
   echo "export { NewComponent } from './new-component'" >> shared/ui/index.ts
   ```

2. **Page-Specific Component**:

   ```bash
   # Create in app/components/
   touch app/components/new-section.tsx
   # Import directly in page
   ```

3. **Future: Page with Widgets**:
   ```bash
   # Create page directory
   mkdir -p app/(dashboard)/new-page/{widgets,components,ui,utils,hooks,lib}
   touch app/(dashboard)/new-page/page.tsx
   touch app/(dashboard)/new-page/layout.tsx
   ```

### Adding shadcn/ui Components

```bash
# Install a new shadcn/ui component
npx shadcn@latest add <component-name>

# Example: Add Card component
npx shadcn@latest add card

# Component will be added to shared/ui/ automatically
```

### Styling Guidelines

1. **Use Tailwind utilities first**
2. **Extract repeated patterns to components**
3. **Use CVA for component variants**
4. **Use CSS variables for theme colors**
5. **Avoid inline styles**
6. **Use `cn()` utility for conditional classes**

### State Management (Future)

- **Server State**: React Server Components (default)
- **Client State**: React hooks (`useState`, `useReducer`)
- **Global State**: Context API or Zustand (when needed)
- **Server Actions**: Next.js Server Actions for mutations

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables

Create `.env.local` for local development:

```bash
# Future: hh.ru API credentials
NEXT_PUBLIC_HH_API_URL=
HH_CLIENT_ID=
HH_CLIENT_SECRET=

# Future: AI service credentials
OPENAI_API_KEY=
```

---

## 📝 Code Quality

### Type Safety

- **Strict TypeScript**: All code is type-checked
- **No `any` types**: Explicit types required
- **Type imports**: Use `import type` for type-only imports

### Linting

- **ESLint**: Enforces code style and best practices
- **Next.js rules**: Optimized for Next.js patterns
- **Core Web Vitals**: Performance-focused rules

### Accessibility

- **Semantic HTML**: Proper HTML5 elements
- **ARIA labels**: Where needed
- **Keyboard navigation**: All interactive elements accessible
- **Focus management**: Visible focus indicators

---

## 🎯 Recommended Additions for Next.js Projects

Based on this project's architecture, here are recommended additions:

### 1. **Testing Infrastructure**

```bash
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
npm install -D @playwright/test  # E2E testing
```

### 2. **Form Handling**

```bash
npm install react-hook-form zod @hookform/resolvers
```

### 3. **Data Fetching**

```bash
npm install @tanstack/react-query  # For client-side data fetching
```

### 4. **State Management** (when needed)

```bash
npm install zustand  # Lightweight state management
```

### 5. **API Client**

```bash
npm install axios  # Or use native fetch with wrappers
```

### 6. **Date Handling**

```bash
npm install date-fns  # Lightweight date utilities
```

### 7. **Validation**

```bash
npm install zod  # TypeScript-first schema validation
```

### 8. **Animation**

```bash
npm install framer-motion  # Advanced animations
```

### 9. **Internationalization** (if needed)

```bash
npm install next-intl  # i18n for Next.js
```

### 10. **Error Tracking**

```bash
npm install @sentry/nextjs  # Error monitoring
```

### 11. **Environment Variables Validation**

```bash
npm install @t3-oss/env-nextjs zod  # Type-safe env vars
```

### 12. **Database ORM** (when backend is added)

```bash
npm install prisma @prisma/client  # Database ORM
```

### 13. **Authentication** (when needed)

```bash
npm install next-auth  # Authentication for Next.js
```

### 14. **File Structure Additions**

```
app/
├── _components/          # Private components (not routable)
├── _lib/                 # Private utilities
├── api/                  # API routes
│   └── auth/
│       └── [...nextauth]/
│           └── route.ts
├── (auth)/               # Route groups
├── (dashboard)/
└── (marketing)/

shared/
├── types/                # TypeScript type definitions
│   ├── api.ts
│   ├── models.ts
│   └── index.ts
├── constants/            # App-wide constants
│   ├── routes.ts
│   └── config.ts
├── schemas/              # Zod validation schemas
│   └── user.schema.ts
└── services/             # API service layer
    └── api.service.ts

tests/
├── unit/                 # Unit tests
├── integration/          # Integration tests
└── e2e/                  # End-to-end tests
```

---

## 📚 Key Concepts for AI Understanding

### 1. **Server Components First**

- All components are server components by default
- No `"use client"` directive means server-side rendering
- Client components only when interactivity is needed

### 2. **File-Based Routing**

- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/(group)/page.tsx` → `/` (route groups don't affect URL)

### 3. **Layouts & Templates**

- `layout.tsx` - Persistent UI across routes
- `template.tsx` - Re-renders on navigation
- Nested layouts supported

### 4. **Data Fetching**

- Server Components can be `async`
- Fetch data directly in components
- No need for `getServerSideProps` or `getStaticProps`

### 5. **Styling Approach**

- Tailwind CSS 4 with CSS-first configuration
- Design tokens via CSS variables
- OKLCH color space for better color accuracy
- No separate Tailwind config file needed

### 6. **Component Composition**

- Radix UI Slot for polymorphic components
- CVA for variant management
- `cn()` utility for class merging

### 7. **Type Safety**

- Strict TypeScript mode
- Explicit type imports
- No implicit `any`
- Component props fully typed

---

## 🔍 Project-Specific Patterns

### Component Export Pattern

```typescript
// ✅ Named exports for components
export function Header() {}
export function Button() {}

// ✅ Default export only for pages/layouts
export default function Page() {}
```

### Barrel Exports

```typescript
// shared/ui/index.ts
export { Button } from './button'
export { Card } from './card'

// Usage
import { Button, Card } from '@/shared/ui'
```

### CSS Variable Usage

```typescript
// ✅ Use design tokens
className = 'bg-background text-foreground'

// ✅ Custom brand colors
className = 'text-[#D6001C]' // hh.ru red

// ✅ Responsive with tokens
className = 'bg-muted hover:bg-accent'
```

### Component Variants with CVA

```typescript
import { cva, type VariantProps } from 'class-variance-authority'

const variants = cva('base', {
  variants: {
    variant: { default: '...', outline: '...' },
    size: { sm: '...', md: '...', lg: '...' },
  },
  defaultVariants: { variant: 'default', size: 'md' },
})

type Props = VariantProps<typeof variants>
```

---

## 🚧 Current Limitations & TODOs

### Current State

- ✅ Landing page implemented
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Analytics integrated
- ✅ Type-safe codebase

### Pending Implementation

- ⏳ hh.ru API integration
- ⏳ Authentication system
- ⏳ Resume editor
- ⏳ AI optimization engine
- ⏳ User dashboard
- ⏳ Database integration
- ⏳ Testing suite
- ⏳ CI/CD pipeline

---

## 📖 Additional Resources

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Radix UI Documentation](https://www.radix-ui.com)

---

## 🤝 Contributing

When contributing to this project, please follow:

1. **Code Style**: Match existing patterns
2. **Type Safety**: No `any` types
3. **Component Structure**: Follow the folder hierarchy
4. **Naming Conventions**: Use established patterns
5. **Commit Messages**: Clear, descriptive commits

---

## 📄 License

[Add your license here]

---

**Last Updated**: 2025-01-XX  
**Version**: 0.1.0  
**Status**: Active Development
