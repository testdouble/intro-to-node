File Reader
===========

Challenge
---------

Implement a file Node.js file reader. The program should take in a file name as an argument from the command line and it should display the contents of that file to standard out.

Hints
-----

- You'll want to use the Node.js built in [file system module.] (http://nodejs.org/api/fs.html#fs_file_system)
- Arguments are passed into the Node.js program via the process.argv array

Bonus
-----

- Spit out a usage message if the filename parameter is not provided.
- Prompt the user and read the filename in from stdin.