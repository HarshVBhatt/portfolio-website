# Harsh Bhatt - Data Scientist Portfolio

## Overview

This is a modern, responsive portfolio website showcasing data science expertise, professional experience, and projects. The application features a single-page design with smooth scrolling navigation, dark theme with metallic design elements, and interactive project filtering capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS for utility-first styling with custom dark theme and metallic design elements
- **UI Components**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **TypeScript**: Full-stack TypeScript implementation for consistency
- **Development Server**: Custom Vite integration for development mode with HMR support
- **API Structure**: RESTful API endpoints with `/api` prefix (currently minimal, ready for expansion)

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: PostgreSQL-compatible schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Connection**: Configured for Neon Database (serverless PostgreSQL)

## Key Components

### Frontend Components
1. **Navigation**: Fixed top navigation with smooth scrolling between sections
2. **HomeSection**: Profile display with bio, areas of interest, and tech stack visualization
3. **ExperienceSection**: Professional experience with detailed achievements and tech stacks
4. **ProjectsSection**: GitHub-integrated project showcase with role and industry filtering
5. **ContactSection**: Social media links and contact information

### UI System
- **Design System**: shadcn/ui components with custom dark theme
- **Icons**: React Icons (Font Awesome) for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Animations**: Smooth transitions and hover effects for enhanced UX

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)
- **User Management**: Basic user schema and CRUD operations defined
- **Development Tools**: Request logging, error handling middleware

## Data Flow

### Client-Side Data Flow
1. **Static Content**: Portfolio data (experience, projects, skills) embedded in components
2. **Navigation**: Smooth scroll navigation using native browser APIs
3. **Filtering**: Local state management for project filtering by role and industry
4. **Responsive Behavior**: CSS-based responsive design with JavaScript enhancements

### Server-Side Data Flow
1. **Request Processing**: Express middleware chain for logging and error handling
2. **API Routes**: Centralized route registration system (currently minimal)
3. **Storage Layer**: Interface-based storage abstraction for future database integration
4. **Static File Serving**: Vite-based static file serving in development, build output in production

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router
- **class-variance-authority**: Utility for creating component variants

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **react-icons**: Popular icon libraries for React
- **lucide-react**: Modern icon library

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Development Server**: `npm run dev` - Vite dev server with Express backend
- **Hot Module Replacement**: Enabled for fast development iterations
- **Port Configuration**: Local port 5000, external port 80

### Production Deployment
- **Build Process**: 
  1. Frontend: Vite build to `dist/public`
  2. Backend: esbuild compilation to `dist/index.js`
- **Deployment Targets**: 
  - **Replit**: Autoscale deployment with build and run commands
  - **Vercel**: Alternative deployment with custom build configuration
- **Environment Variables**: `DATABASE_URL` required for production database connection

### Database Management
- **Schema Migrations**: `npm run db:push` for schema deployment
- **Connection**: Environment-based database URL configuration
- **Development**: In-memory storage for local development
- **Production**: Neon Database (serverless PostgreSQL)

## Recent Changes

### January 23, 2025
- ✓ Optimized layout to better utilize screen width (max-w-7xl containers)
- ✓ Enhanced responsive tech stack grid (3-7 columns based on screen size)
- ✓ Improved project grid layout (3 columns on XL screens)
- ✓ Fixed profile image loading with new PNG asset
- ✓ Added clickable article links in experience section
- ✓ Updated project tech stacks and role tags per specifications
- ✓ Reduced contact section font size for better line fitting
- ✓ Removed GitHub Actions from tech stack per user request
- ✓ Updated Vercel configuration with proper SPA routing support
- ✓ Verified Vercel deployment configuration
- ✓ Created comprehensive deployment README with step-by-step instructions

### June 23, 2025
- Initial portfolio setup with dark theme and metallic design elements

## User Preferences

```
Preferred communication style: Simple, everyday language.
```