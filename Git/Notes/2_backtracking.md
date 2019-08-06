# Backtracking

## head commit

In most cased `HEAD` commit is the most recently added commit.

To use the `HEAD` commit use:

```bash
git show HEAD
```

## `git cheсkout`

If we want to revert unstaged changes, we can use

```bash
git checkout HEAD filename
```

a common shortcut:

```bash
git checkout -- filename
```

This will discard all the changes made to the file `filename` after the last commit.

## `git reset`

If we want to reset _staged_ changes, we cas use

```bash
git reset HEAD filename
```

This command resets the file in the staging area to be the same as the HEAD commit. It doesn't discard file changes from the working directory, just unstages the file.

You can also reset `HEAD` to some previous commit by using

```bash
git reset commit_SHA
```

where `commit_SHA` is first 7 digits of a commit SHA code.
