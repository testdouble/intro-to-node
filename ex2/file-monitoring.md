File Monitoring
===============

Challenge
---------

Implement monitoring of the file so that as lines are added, you spit out the new contents. You can do this in a couple ways. If you want to use a child process, *tail -F* monitors a file on the command line. If you want to keep everything in one process, the file system API has some useful utilities like watcher.

Hints
-----

- If spawning a child process look at the Node.js built in [child process module.] (http://nodejs.org/api/fs.html#fs_file_system)
- Console.log writes a newline at the end of every output. You can write or pipe to the current processes output streams which are available to the program via process.stdout or process.stderr.

Bonus
-----

- Make just the added lines appear upon change, and don't redisplay the whole file.
- Accept another parameter (lines), and spit out only the last X number of lines if provided. If not, spit out the whole shebang.
