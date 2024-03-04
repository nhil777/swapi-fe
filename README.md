# SWAPI-FE: StarWars API Frontend

This repository contains the frontend implementation of SWAPI-BE, a backend integration for the StarWars API. The backend is written in PHP with Laravel. You can find the backend repository [here](https://github.com/nhil777/swapi-be).

The frontend is developed using Next.js and TypeScript and utilizes Playwright for E2E testing.

## Initial Setup

1. Copy `.env.example` to a new file `.env`

2. Create a Docker network:
    ```bash
    docker network create kool_global
    ```

3. Launch the application:
    ```bash
    docker-compose up
    ```
   *Note: Initial launch may take a few minutes due to npm install.*

You should now be able to access the application at `http://localhost:3000`

## Running Playwright E2E Tests

1. Execute the tests:
    ```bash
    npm run test
    ```

## Suggested Improvements

- [ ] Create a singleton axios instance for improved performance.
- [ ] Add unit tests for backend requests.
