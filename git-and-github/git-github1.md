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

- `git fetch` -> To fetch the changes from the remote repository

- `git pull` -> To pull the changes from the remote repository (basically fetch the changes and then merge them)

- `git push` -> To push the changes to the remote repository

CTRL + SHIFT + T -> Open any recently closed tab.

We can also assign multiple users / contributors to a repository by assigning them as collaborators on GitHub.

---

# [Revert and Reset Commits Like a Pro | Git and GitHub Fundamentals | Ep.06](https://www.youtube.com/watch?v=qF8CHHnWqXE&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH&index=6)

- `git reset commit_id_we_want_to_go_back_to` -> To revert a commit when we have not pushed the code.

- `git reset -- hard commit_id_we_want_to_go_back_to` -> Code is removed and commit is removed from current working directory

- `git reset -- soft commit_id_we_want_to_go_back_to` -> Commit is gone from history but code is still there, changes will go to staged section, to remove the code, unstage and discard the changes.

- `git reset -- mixed commit_id_we_want_to_go_back_to` -> This is the default option, so we can do git reset, without using the --mixed flag. Here commit is removed from the logs and as for the code, instead of going to the staged section, it goes to the working directory. To remove the code, discard the changes in the source control panel. (It was already unstaged unlike --soft).

Now suppose we reset come commits and we want to go back and retrieve it:

1. We would need those commit ids to go back to, for that:

- `git reflog` -> This will allow us to go back to see all the commit ids, even deleted ones, something that git log was not able to show us.

2. Now take that deleted id and do:

- `git reset --hard deleted_commit_id`

### HEAD always points to current working directory, but we can detach HEAD from the current working directory. For this we will use git checkout commit_id, this will move the head to that commit id and we will see code like it was on that commit id.

- `git checkout master / main` -> This will move the head to the master / main branch and it points to it.

- `git checkout head` -> Suppose if head points to master / main, then by doing this, head is still in main branch but now is detached from it, i.e. not pointing to it

- `git checkout head~0` -> Same as git checkout head

- `git checkout head~1` -> Go one commit back from master

- `git checkout head~n` -> Go n commits back from master

- `git reset --hard head~1` -> Reset to one commit back from master

Till now we've been resetting commits when they've not been pushed, now if those were pushed, we'll have to use `revert`.

- `git revert current_commit_id` -> To revert a commit when we have pushed the code.

With this, a new revert commit is created in local.

The old commit is not deleted here. So history is preserved and not erased and re-written.

To go back to the old commit from revert, we do `git reset --hard head~1`.

Now say we have to revert multiple commits, for that we will do the following:

- head
- head - 1
- head - 2
- head - 3

We need to go to head - 3, i.e. revert head, head - 1 and head - 2, for that we do:

- `git revert head~3.. head~0` 
or
- `git revert head~3.. head~` -> This will revert head - 2, head - 1 and head. 

(head - 3 is excluded)

- `git revert --no-commit head~3..` -> This will revert head - 2, head - 1 and head, but not commit the changes. It will send them to the staging area.

- `git revert --abort` -> This will abort the revert process.

- `git revert --continue` -> This will continue the revert process.

So `reset` your local history and `revert` your public history.

---

# [How to Resolve Conflict in Git? | Git and GitHub Fundamentals | Ep.07](https://www.youtube.com/watch?v=8J0aZCwqqwU&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH&index=7)

Conflict comes in when we are merging some other branch's code into out branch.

If we merge code from another branch, and that code has some changes at same file at same line, i.e. code in both cases is not identical. Here, git will show a conflict, and we need to resolve it.

So if you face with a conflict:
1. Resolve the conflict and accept the changes
2. Merge the changes
3. Add, Commit the changes and push it to finish the merge process.

- `git merge --abort` -> This will abort the merge process.

To reduce conflicts, keep pulling the code from main branch from time to time. This will help us in keeping the code and commits in check.

If conflict still arrives, get in touch with the person whose code is causing this conflict, sit with them and try to resolve this conflict.

---

# [What is Stashing in Git? | Git and GitHub Fundamentals | Ep.08](https://www.youtube.com/watch?v=0WUyhzqGjKU&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH&index=8)

- git stash -m "message" -> Stash the changes in the staging area.

- git stash apply -> Apply the changes from the stash.

- git stash clear -> Clear all the stash at once.

- git stash drop -> Drop the stash.

We do stashing when we are working on one feature (branch) and we want to switch to another feature (branch), so that we can work on that feature (branch) without affecting the current feature (branch).

WIP -> Work in Progress

- `git stash list` -> To see all the stashed changes.

WIP -> Work in Progress

- `git stash apply 0` -> Apply the first stashed change.

Then, add, commit, push the code.

- `git stash apply 1` -> Apply the second stashed change.

Then, add, commit, push the code.

- `git stash drop 1` -> Drop the second stashed change.

---

# [How to Cherry Pick a Commit in Git? | Git and GitHub Fundamentals | Ep.09](https://www.youtube.com/watch?v=XmrpeP_s7p8&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH&index=9)

Cherry Picking means ->  When we are merging a branch into our main branch but we do not want to merge all the commits from that branch into the main branch.

- `git commit -m commit_message && git push` -> To commit and push the code one after the other. Works just like logical &&.

- `git cherry-pick 0caac8a` -> Now this commit id is of a commit we made in contact branch, we switched back to main branch and want to bring only this commit from contact branch to main branch and not all contact branch commits.

A new commit is created in main branch now, with a new commit id after we did cherry pick.

---

# [What is .gitignore file? | Git and GitHub Fundamentals | Ep.10](https://www.youtube.com/watch?v=npI6t1uZt_o&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH&index=10)

### .gitignore file is a file that contains the list of files and directories that should be ignored by git.

Here we put a `.env` file inside .gitignore file, so that it is not tracked by git even when we make changes in the .env file. This can be used to store sensitive information in the .env file.

We can also store folders like `node_modules` inside .gitignore

To add those files in git ignore which were already being tracked by git (say style.css), we have to do:

- Remove it first `git rm --cached style.css` -> This will remove the file from the staging area.

- Then add it in .gitignore
- Add, commit, push to apply these changes

- For removing folders like node_modules, use `git rm --cached -r node_modules` -> This will remove the folder from the staging area.

(`-r` -> recursive, i.e. remove all files within that folder).

---

## [git 001 repo link](https://github.com/kaustubhya/git001)

---

# [Pull Requests in Git | Git and GitHub Fundamentals | Ep.11](https://www.youtube.com/watch?v=1akLzbfK0XU&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH&index=11)

Pull requests are used to merge the changes from one branch to another.

- `git pull origin branch_name` -> To pull the changes from the remote repository

- `git push origin branch_name` -> To push the changes to the remote repository

- `git fetch origin branch_name` -> To fetch the changes from the remote repository

If many people are working on a project, we should never commit directly on the main branch.

So we create branches, make code changes there, and then send a PR (pull request) to the main branch.

The author of the repository (team lead) will approve the PR and then merge it into the main branch if all is fine, else he will reject the PR.

So in this way, we use PR when many people are working together in a project.

---

# [What is Open Source? How to Contribute to Open Source? | Git and GitHub Fundamentals | Ep.12](https://www.youtube.com/watch?v=D2Exr7rm2tI&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH&index=12)

Open source is a community where people can contribute to the codebase and help improve it.

Code in open source is free and publicly open to access, use, modify, and distribute.

Public Repository - A repository which is made public and can be accessed by anyone.

Private Repository - A repository which is made private and can only be accessed by the owner.

Base Repository -> A repository from which we fork (copy) the code.

Forked Repository -> A repository which is a copy of the base repository.

- `git remote` -> To see the remote repositories

- `git remote -v` -> To see the remote repositories with their urls in detail.

`-v` -> verbose, i.e. to see the remote repositories with their urls in detail.

- `git remote add repo_name repo_url` -> To add a remote repository

- `git remote remove repo_name` -> To remove a remote repository

- `git remote rename old_name new_name` -> To rename a remote repository

- `git remote set-url repo_name repo_url` -> To set the url of a remote repository

- `git remote show repo_name` -> To show the details of a remote repository

- `git fetch repo_name` -> To fetch the changes from a remote repository

- `git pull repo_name` -> To pull the changes from a remote repository

- `git push repo_name` -> To push the changes to a remote repository

- `git clone repo_url` -> To clone a remote repository

---

# [Some Useful Tips for Git | Git and GitHub Fundamentals | Ep.13](https://www.youtube.com/watch?v=puOzngZUc8I&list=PLfEr2kn3s-brBO7d9irTRvClcjiNhzczH&index=13)

- `git restore --staged .` -> To restore the changes in the staging area. By doing this we bring all the changes in the staging area out of the staging area.

- `git commit -am "commit message"` -> To add and commit the changes in the staging area.

- `git checkout commit_id deleted_file_name` -> This will restore the deleted file.

Here say we made 10 commits and file is deleted at commit 5, then we have to put commit_id as 4, as at commit 4, file is still there and not deleted.

- `git config --global -e` -> To edit the global config file.

- `git switch branch_name` -> To switch to a branch. 

Here branch_name is the name of the branch we want to switch to.

- `git switch -C branch_name` -> To create a new branch and switch to it.

- `git revert commit_id -m 1` -> To revert a commit when we have pushed the code. We use this when we have merged a branch to the main branch and pushed the code, but we want to go back one step and go back to the previous commit of the main branch.