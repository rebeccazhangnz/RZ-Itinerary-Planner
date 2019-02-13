# RZ-Itinerary-Planner

Build an itinerary planner App that allows user to create, modify, save and recall their itinerary.


## Learning Objectives

- To Create own boilerplate and understand each package that is being used
- To be able to plan, structure and start coding from scratch without referencing to katas or other projects.
- To be able to perfome server side rendering, routing and interating with database using express, knex and handlebars.
- To be able to create intereactive/stateful components and client side routes using react
- To be able to use external api and access external database

## Project-Preparation

- Setup basic file structures (routes,public,tests...)
- Create Boiler Plate
- Create HTML template (draft up ideas)
- Setup database and Code Structure (MVC design pattern)


## Boilerplate

 - Express
 - Express Handlebars
 - Knex
 - SQLite3
 - react
 - react-router-dom
 - body-parser
 - Jquery
 - Nodemon
 - Jest
 - Supertest
 - Cheerio
 - Concurrently
 

## Install

1. Install dependencies:
```
- yarn init
- yarn add express express-handlebars body-parser knex sqlite3 jquery react react-router-dom 
- yarn add nodemon jest supertest cheerio concurrently --dev
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

## MVP
- User should be able to add event to the itinerary
- User should be able to remove event from the itinerary
- User should be able to view all the events in the itinerary page

## Stretchs:

1. User should be able to enter date for each event and the events should be sorted by time.

2. Users should be able to create new itinerary and save their itineraries on their profile page. 

3. Users should be able to delete saved itineraries.

4. User should be able to create new user profiles

5. Input validation on sign up/ sign in form. (simple javascript function / php)

6. Pre-seed database: user should be able to open a pre-loaded checklist when they clicks the 'Travel Packing Checklist' buttons.

    bagage checklist (partial hbs + 5 pre-seed table)
      - short trip database
      - long trip  database	
      - summer/beach  database	
      - winter        database
      - adventure     database

7. API: 
   - Map api
   - Weather api


8. jquery drag and drop 
    - Homepage : animation text - "Where your journey begins..."
    - User should be able to drag and drop to change the position of the events in the itinerary page.

9. Create API and move things from server side rendering to client side randering


