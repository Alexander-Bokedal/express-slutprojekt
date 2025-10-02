# Anime API

REST API for managing anime and character data using MongoDB and Express.

## Setup

1. Clone the repo
2. Install dependencies: `npm install`
3. Set up MongoDB connection (update connection string in src/config/environment.ts)
4. Run development server: `npm run dev`

The API will be available at http://localhost:3000/api

## Available endpoints

- `/api/anime` - anime data
- `/api/characters` - character data

## Other commands

- `npm run build` - compile typescript
- `npm start` - run production build
- `tsx src/utils/insertData.ts` - populate database with sample data