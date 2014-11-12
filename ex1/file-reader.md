File Reader
===========

Challenge
---------

Implement a file node.js file reader. The program should take in a file name as an argument from the command line and it should display the contents of that file to standard out.

Hints
-----

- You'll want to use the Node.js built in [file system module.] (http://nodejs.org/api/fs.html#fs_file_system)
- Arguments are passed into the Node.js program via the process.argv array

Bonus
-----

- Spit out a usage message if the filename parameter is not defined.
- Run endlessly, and if the file is changed, notify the user and redisplay the contents.
- Use ChildProcess to spawn a native command instead of readFile.