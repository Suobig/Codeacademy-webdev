# Manipulations

## `ls -a`

The `-a` modifies the behaviour of the ls command to also list the filed and directories starting with the dot (`.`). Normally those files are hidden.

The `-a` is called an _option_. Options modify the behavior of commands. Some `ls` options:

* `-a` - list all content, including hidden items and directories
* `-l` - list all content in long format
* `-t` - order files and directoreis by the time they were last modified

## `ls l`

The `l-` option lists files and directories as a table. There're 7 columns, separated by space:

1. Access right. Actions that are permitted on a file or directory
2. Number of hard links. This number counts the number of child directories and files. This number includes the parent directory link (`..`) and current directory link (`.`).
3. The username of the file's owner.
4. The name of the group that owns the file.
5. The size of the file in bytes.
6. The date & time that the file or directory was last modified
7. The name of the file or directory

## `ls -alt`

It is a combination of `-a` `-l` and `-t` modifiers.

## `cp`

The `cp` comman copies files and directories. The destination folder is always the last argument with files and directories to copy preceiding it.

One way to use `cp` is to provide new name as the last argment and the file will be copied within the same folder with the new name.

## Wildcards

In addition to using file and folder names, we can use special characters like `*` to select groups of files. They are called _wildcards_.

## `mv`

`mv` is used to move files to the new place:

```bash
mv file.txt foldername/
```

We can move multiple files:

```bash
mv file1.txt file2.txt foldername/
```

We can use `mv` to rename files:

```bash
mv old_filename.txt new_filename.txt
```

## `rm`

`rm` command deletes files and directories:

```bash
rm file.txt
```

To remove a directory with all of its content, we can use `-r` option:

```bash
rm -r directory_name/
```

`-r` stands for _recursive_.

**NOTE:** be careful with `rm`. It removes files permanently, there's no _undelete_ command.
