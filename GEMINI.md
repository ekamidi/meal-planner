
# Project Overview

This is a Next.js application designed as a meal planner. It utilizes a comprehensive stack including Next.js for the frontend and backend, Prisma as the ORM for database management, and Tailwind CSS for styling. The application supports user authentication and provides functionalities for managing meals, foods, and related data.

## Key Technologies

- **Framework:** Next.js
- **Language:** TypeScript
- **Database:** SQLite (managed with Prisma)
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui
- **State Management:** Zustand
- **Form Handling:** React Hook Form
- **Schema Validation:** Zod

## Project Structure

The project is organized into several key directories:

- `src/app`: Contains the main application logic, including pages, layouts, and API routes.
  - `(auth)`: Handles user authentication (sign-in, sign-up).
  - `(dashboard)`: Contains the main dashboard, with separate layouts for admin and client roles.
- `prisma`: Includes the database schema (`schema.prisma`), migrations, and seeding scripts.
- `components`: Shared UI components used throughout the application.
- `lib`: Core utilities, authentication logic, and database connection.

# Building and Running

## Prerequisites

- Node.js
- npm (or yarn/pnpm/bun)

## Installation

1.  Install dependencies:
    ```bash
    npm install
    ```

## Development

1.  Run the development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3001`.

## Database

- To apply database migrations:
  ```bash
  npm run db:migrate
  ```
- To open Prisma Studio for database browsing:
  ```bash
  npm run db:studio
  ```
- To seed the database with initial data:
  ```bash
  npm run db:seed
  ```

## Production Build

- To create a production build:
  ```bash
  npm run build
  ```
- To start the production server:
  ```bash
  npm run start
  ```

# Development Conventions

## Coding Style

- The project uses ESLint and Prettier for code linting and formatting.
- TypeScript is used for static typing.
- Adheres to standard React and Next.js best practices.

## Authentication

- Authentication is handled by NextAuth.js with a credentials-based provider.
- User roles (`USER`, `ADMIN`) are defined in the database and used to control access to different parts of the application.

## Database

- The database schema is defined in `prisma/schema.prisma`.
- Migrations are managed by Prisma Migrate.
- Seeding is done using a TypeScript script in `prisma/seed.ts`.
