# RZ-Itinerary-Planner

Build an intinerary planner App that allows user to create, modify, save and recall their intenerary.

# Boilerplate

 - Express
 - Express Handlebars
 - Knex
 - SQLite3
 - body-parser
 - Jquery
 - Nodemon
 - Jest
 - Supertest
 - Cheerio
 

## Install

1. Install dependencies:
```
- yarn init
- yarn add express express-handlebars knex sqlite3 jquery
- yarn add nodemon jest supertest cheerio --dev
```

2. Setup scripts in package.json file

3. Setup knexfile.js

```
- yarn knex init
```
4. open Knexfile.js add  useNullAsDefault: true

```
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true
  }
  ```
