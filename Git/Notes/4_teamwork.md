# Teamwork

A team can work on a project at the same time by using _remotes_ - shared Git repository on a remote location.

## `git clone`

Syntax:

```bash
git clone remote_location clone_name
```

This command creates a local copy of a remote repository.

`remote_location` tells git where to find a remote repository. It may be a web address or a filepath.

`clone_name` is the name you give to the directory in which Git will clone your repository.

When you clone remote repository that remote gets a name _origin_.

## `git remote -v`

Show this project's remotes.

## `git fetch`

`git fetch` get changes from the remote into a local _remote branch_ starting with `origin/`. It **will not merge** those changes into local branches.

## `git merge`

After we fetched changes, we need to merge them into a local branch by executing:

```bash
git merge origin/master
```

## Git Workflow

The workflow for Git collaborations typically follows this order:

1. Fetch and merge changes from the remote
2. Create a branch to work on a new project feature
3. Develop the feature on your branch and commit your work
4. Fetch and merge from the remote again (in case new commits were made while you were  working)
5. _Push_ your branch up to the remote for review

Steps 1 and 4 are safeguards against _merge conflicts_.

## `git push`

Sends your local branch into a remote repository. Syntax:

```bash
git push origin local_branch_name
```
