# Tracing Backend Application

This starter code for the "Connecting it all: Tracing Errors" checkpoint in the Thinkful curriculum.

## Existing files

As you work through the "Connecting it all: Tracing Errors" checkpoint, you will be writing code traces requests through your server. 

The table below describes the files and folders in the starter code:

| Folder/file path | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- | |
| `knexfile.js` | Knex configuration file.	|
| `src/app.js` | Directs requests to the appropriate routers.  	||
| `src/articles/articles.controller.js` | The controller for the articles resource	|
| `src/articles/articles.router.js` | The router for the articles resource	|
| `src/articles/articles.service.js` | The service for the articles resource	|
| `src/db/connection.js` | Database connection module.	|
| `src/db/migrations` | A folder that contains the knex migrations	|
| `src/db/seeds` | A folder that contains the knex see data	|
| `src/errors` |	 folder where you will find several functions for handle various errors. |
| `src/server.js`  | Starts the server on `localhost:5000` by default.                                |
| `.env.sample`    | A sample environment configuration file

This starter code closely follows the best practices and patterns established in the Robust Server Structure module.

## Installation

1. Fork and clone this repository.
1. Copy `.env.sample` to  `.env`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.

## Database setup

1. Set up a new ElephantSQL database instance by following the instructions in the "PostgreSQL: Creating & Deleting Databases" checkpoint.
1. In your `.env` file, set the `DATABASE_URL` to the database connection url for your new database
1. Run `npx knex migrate:latest` to migrate the database schema
1. Run `npx knex seed:run` to seed some article data into the database

If you have trouble getting the server to run, reach out for assistance.
