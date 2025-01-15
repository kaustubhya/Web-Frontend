# [An Introduction to Terminal and CLI | Git and GitHub Fundamentals | Ep.01](https://www.youtube.com/watch?v=3WQu7iWHAhI&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH)

## GUI and CLI

GUI - Interacting with the images and icons (open them by clicking them)

CLI - Interacting with the terminal

If the entire Windows OS is a terminal then there are 2 shells inside it, 
1. Command Prompt
2. Windows PowerShell

there are other shells too!

Windows Powershell is based on DOS.

But we will use Git Bash which is based on Linux which is the most popular shell here.

- `ls` (`list`) lists all files and folders

a folder is called a `directory`

- to go from one folder to another, use `cd` (change directory)

(press tab for autocomplete)

- go back one folder, use `cd ../`

- to create a new folder, use `mkdir folder_name` (make directory)

- To clean the terminal, use `clear` or `ctrl + L`

- Jump directly from folder 1 to folder 2 => `cd folder1/folder2`

- To remove a file => `rm file_name`

- To remove a folder => `rm -r folder_name`

- To go back 2 folders => `cd ../../`

if any file name has a space in it then, we have to use `""` to wrap the file name.

- `code .` => to open the VS code editor of that folder

- `pwd` => to print the current working directory

eg. "/c/Users/kaust/Desktop" is the path of Desktop folder

---

# [Git and Version Control | Git and GitHub Fundamentals | Hindi | Ep.02](https://www.youtube.com/watch?v=LdeNFQMI42o&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH&index=4)

Git is a Version Control System i.e. we can via git, go back to any previous versions of our code. 

- `git --version` - Tells us the version of git in our system.
git version 2.34.1.windows.1

- `mv git_001 git001` -> Rename the folder git_001 to git001

- `touch index.html styles.css script.js` -> Create 3 files in the current directory i.e. index.html styles.css script.js

A repository is kind of a database where different versions of our code is stored.

- `git init` - Initialize a git repository in the current directory.

main branch / master branch is the default branch

- `U` -> Untracked files

- `git add (fileName)` -> Add a file to the staging area

- `git add .` -> Add all files to the staging area

- `git add index.html styles.css script.js` -> Add 3 files to the staging area

- `git status` -> To check the status of the files in the staging area

- `git commit -m "message"` -> Commit the changes in the staging area

- `git commit -a -m "message"` -> Commit all the changes in the staging area

- `git log` -> To see the commit history of the project

- `git status -s` -> Short cut of git status

Commit means to take a snapshot of that file in your memory and save it in the database. We give a commit message with it too!
