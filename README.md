# RZ-Itinerary-Planner

Build an itinerary planner App that allows user to create, modify, save and recall their itinerary.

## Boilerplate

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
- yarn add express express-handlebars body-parser knex sqlite3 jquery
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

## Project-Preparation
- Setup basic file structures (routes,public,tests...)
- Create HTML template (draft up ideas)

## MVP
- User should be able to add event to the itinerary
- User should be able to remove event from the itinerary
- User should be able to view all the events in the itinerary page

## Stretchs:

1. User should be able to choose date and time for each event and the events should be sorted by time.

2. Users should be able to create a user profile and save their itineraries on their profile page. 

3. Pre-seed database: user should be able to open a pre-loaded checklist when they clicks the 'Travel Packing Checklist' buttons.
	  bagage checklist (partial hbs + 5 pre-seed table)
      - short trip database
      - long trip  database	
      - summer/beach  database	
      - winter        database
      - adventure     database

4. jquery drag and drop 
    - Homepage : animation text - "Where your journey begins..."
    - User should be able to drag and drop to change the position of the events in the itinerary page.

5. API: 
   - google map api
   - weather api

