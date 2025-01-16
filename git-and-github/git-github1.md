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

## Press `q` to exit git log.

- To go to any previous commit, we do `git checkout commit_id`

- To come back from that previous commit to our present code, we do `git checkout master`.

- `git branch` -> To see all the branches in the repository

Checkout timeline in the bottom left part of VS code to see a specific file's local history, this can be used to retrieve older code from this file.

---

# [How to Create & Merge Branches? | Git and GitHub Fundamentals | Ep.04](https://www.youtube.com/watch?v=UlckC6wLudI&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH&index=4)

In git, we use branches to create different versions of our code.

- `git branch` -> To see all the branches in the repository

- `git branch branch_name` -> To create a new branch

- `git branch -d branch_name` -> To delete a branch

- `git checkout branch_name` -> To switch to a branch

- `git checkout -b branch_name` -> To create a new branch and switch to it

- `git merge branch_name` -> To merge a branch into the current branch

- `git log --all --oneline` -> To see all the git logs in short in one line

- `git branch --delete branch_name` -> To delete a branch
(We need to be in branch B to delete branch A)

- `git branch -m branch_name` -> To rename a branch

- `git branch -D about` -> When a branch is not merged and we want to delete that branch.

## People normally do not make code changes in master branch, they just merge branches into the master branch.

Whenever we merge a branch a commit is created with a commit id.

---

# [Complete GitHub Tutorial in One Video | Git and GitHub Fundamentals | Ep.05](https://www.youtube.com/watch?v=5aslveqHw-4&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH&index=5)

The only drawback of git is that it stores all of our code in a git folder locally in our system. So in case our system is malfunctioned, we will lose all of our work. To solve this issue, came github, where we can store our code in the cloud (github remote server). This will prevent our code from getting lost, even if our system is malfunctioned.

- GitLab and BitBucket are alternatives of GitHub.

- `git remote show origin` -> To see the details of the remote repository to which we are connected.

- `git push -u origin branch_name` -> To push a branch to the remote repository