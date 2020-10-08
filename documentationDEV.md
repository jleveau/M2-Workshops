The architecture needs to be completly modified. Here is the arch that we will use:
- src/
  - front/
    - templates/ stores .ejs template files
    - style/ stores all style-related files
  - back/ stores all the backend-related stuff

We will also split index.js into two different files:
- api.js: it's the website's API
- run.js: used to start the website

Finally we will rename db to db because it acts as a database.