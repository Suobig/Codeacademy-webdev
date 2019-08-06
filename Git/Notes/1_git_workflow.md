# Basic Git Workflow

## git init

The word `init` means _initialize_. This command sets up Git.

## Git Workflow

A git project can be thought of having 3 parts:

* _A working directory_: where all the work is being done: creating, editing, deleting etc.
* _A staging area_: where changes to the working directory are being staged
* _A repository_: where Git permanently stores changes as different _versions_  of the project.

Working directory -> Staging area: `git add`
Staging area -> Repository: `git commit`

## `git status`

`git status` is used to check the status of the working directory - are there any files that were modified but were not added to a staging area.

## `git add filename`

Adds a file `filename` to the staging area.

## `git diff filename`

Checks whether there're differences between staged file version and current verison in the Working directory.

## `git commit`

Commits staged files, adding them to the repository.

Option `-m` is used to add commit message.

Commit message:

* must be in quotation marks
* written in present tense
* should be brief (<50 characters) when using -m

## `git log`

Displays commits chronologically.
