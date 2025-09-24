# AGENTS.md - Development Guidelines

## Build/Test Commands
- `npm run dev` - Run development server with tsx watch
- `npm run build` - Compile TypeScript to dist/
- `npm start` - Run production build from dist/
- `npm test` - Currently no test framework configured
- Run single utility: `tsx src/utils/insertData.ts`

## Code Style
- **Imports**: ES6 imports (`import mongoose from "mongoose"`)
- **Types**: Use TypeScript with strict mode enabled
- **Module**: ESNext modules with Node resolution
- **Target**: ES2022 compilation target
- **Formatting**: Use double quotes, no semicolons required
- **Naming**: camelCase for variables/functions, PascalCase for models/classes
- **Error Handling**: Use .catch() for async operations, try/catch blocks
- **Database**: Mongoose with MongoDB connection patterns
- **Environment**: Use .env for MongoDB URLs and sensitive data
- **File Structure**: src/ for source, dist/ for compiled output

## TypeScript Config
- Strict mode enabled with forceConsistentCasingInFileNames
- Declaration files generated, comments removed in build
- allowSyntheticDefaultImports and esModuleInterop enabled