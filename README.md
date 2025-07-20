# AI Movie Recommender

A movie recommendation web app powered by a vector-based similarity engine. Built with React, TypeScript, Vite, Tailwind CSS, and Vitest for testing.

It uses a Kaggle movie dataset on the backend, vector embeddings, and similarity matching to recommend movies based on what the user selects.

Check out the backend code [HERE](https://github.com/Sengiria/movie-recommender-backend/tree/main)

**Live Application**: [https://sengiria.github.io/movie-recommender-frontend/](https://sengiria.github.io/movie-recommender-frontend/)

---

## Features

- Display all movies from dataset
- Lazy-loaded infinite scrolling
- Recommend similar movies based on selected title
- Loading and state handling
- Fully tested with Vitest + Testing Library

---

## 🛠 Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Testing**: Vitest + React Testing Library
- **Backend**: Python + FastAPI (with vector embeddings + similarity search)

---

## Setup & Installation

### Frontend

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
