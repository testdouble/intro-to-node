Putting it Together
===================

Challenge
---------

We need to broadcast the secret codes over a socket connection to the browser. We'll use the file reading, watching, and socket foundations that we've built in previous exercises to stream the contents of any file upon a change over a socket.

Hints
-----

- Change code from exercise 3 to take a filename passed from client to server with a custom emit.
- Get a response on whether the filename exists from the server to the client.
- Get updates sent back as they are emitted from the watcher.
- The code generator is included in lib. Simply execute it and a secret file will be created and updated every 5 seconds.

Bonus
-----

- Ask your instructors for a t-shirt.
- Buy your facilitators a beer after this session.