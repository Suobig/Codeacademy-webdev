# Branching

## `git branch`

Git allows us to create _branches_ to experiment with different versions of the project.

`git branch` command show current branch.

New _branch_ is a different version of the project. It contains commits from _Master_ but also contains commits that _Master_ doesn't have.

To create a new branch use

```bash
git branch new_branch
```

A branch should have a meaningful name.

## `git checkout`

To switch to another branch use

```bash
git checkout branch_name
```

## `git merge`

To include commits from another branch, we can use:

```bash
git merge branch_name
```

If we execute this command while being on `master` branch, then `master` is a receiver branch and `branch_name` is a giver branch.

## merge conflict

When both giver and recevier branch containt changes in the same pieces of information, the _merge conflict_ will occur on merging.

When merge conflict occurs, special information about conflict is getting added to files where conflict occured:

```text
<<<<<<< HEAD
Master branch version of line
=======
Branch_name version of line
>>>>>>> branch_name
```

We must make a decision, remove all the special git markings from the file and commit changes.

## delete branch

After the branch has been integrated into `master` it loses its purpose and can  be deleted. To delete branch use:

```bash
git branch -d branch_name
```

If we want to delete a branch that wasn't integrated into `master`, we should use `-D` option instead.
