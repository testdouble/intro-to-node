File Monitoring
===============

Challenge
---------

Implement monitoring of the file so that as it changes, you spit out the new contents. By spit out I mean, emit an event!

Hints
-----

- Run codeGenerator.js in the background to get new codes
- The file system API has some useful utilities like [watcher.] (http://nodejs.org/api/fs.html#fs_file_system)
- Check out [EventEmitter] (http://nodejs.org/api/events.html) for ideas on how to emit events.
- [Video walkthrough] (http://youtu.be/V2r5QdMMMts) of a solution.

Bonus
-----

- Implement the file monitor as a module that extends from EventEmitter.
