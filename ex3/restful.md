Restful File Display
====================

Challenge
---------

Implement a restful server with a GET route that takes in a filename and returns it's contents. This can be built using the native [http API](http://nodejs.org/api/http.html), [Express](http://expressjs.com), [Restify](http://mcavage.me/node-restify/), [hapi](http://hapijs.com), or [others](http://www.npmjs.org/search?q=rest).

Hints
-----

- Since we'll be building an app with dependencies, you'll want to start off with an *npm init* command.
- Once that's complete you can *npm install --save restify* or whatever other server you want to use.
- Taking in full filenames as part of the URL is painful given the file separators. Maybe go with a query param but make sure your server is configured to parse query params.
- Express is fairly common place for Node.js apps. If you are paralyzed by the choices, maybe start off with it and then compare with others.

Bonus
-----

- Implement some level of authentication for the call.
- Return appropriate error codes for file not found and unauthorized.