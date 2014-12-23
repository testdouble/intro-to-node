Socket File Tail
================

Challenge
---------

Implement a socket server that sends new lines to the client whenever the tail watcher emits them. [Express](http://expressjs.com) and [socket.io](http://socket.io) will be used.

Hints
-----

- If you haven't already got a working tail emitter you can use [always-tail](https://github.com/jandre/always-tail).
- Change code from part 1 to take a filename passed from client to server with a custom emit.
- Get a response on whether the filename exists from the server to the client.
- Get lines sent back as they are emitted from the watcher.
- A log generator is included in lib/logWriter.js. Simply execute it and a log file named mybigfile.log will be created and updated every 5 seconds.

Bonus
-----

- Ask your instructors for a t-shirt.
- Buy your facilitators a beer after this session.