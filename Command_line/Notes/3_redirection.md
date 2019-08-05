# Redirection

Through _redirection_ we can direct input and output of a comman to and from ther files and programs, and chain commands together in a pipeline.

## `stdin` `stdout` and `stderr`

When you type

```bash
$ echo "Hello"
Hello
```

The `echo` command accepts the string "Hello" as _standard input_ and echoes the string "Hello back to the terminal as _standard output_

1. _standard input_ (`stdin`) is the information inputted into the terminal through the keybard or another input device.
2. _standard output_ (`stdout`) is the information outputted after a process is run.
3. _standard error_ (`stderr`) is an error message outputted by a failed process.

## How does redirect work

```bash
echo "Hello" > file.txt
```

the `>` command redirects the standard output of echo command to a file.

We can use this command to copy file content:

```bash
cat file1.txt > file2.txt
```

This command will insert content of file1.txt into file2.txt replacing all of the original file2.txt content.

## `>>`

`>>` takes the standard output of the command on the left and appends (adds) it to the file on the right:

```bash
cat file1.txt >> file2.txt
```

This script line will append content of file1.txt to the end of file2.txt without deleting its original content.

## `<`

`<` takes the standard outpup from the file on the right and inputs it into the program on the left:

```bash
cat < file1.txt
```

## `|`

```bash
cat file1.txt | wc
```

This script takes the content of file1.txt and pipes it into a `wc` function

`|` is a pipeline. It takes standard output of the command in the left and _pipes_ it into standard input to the standard input of the command at the right.

## sort

```bash
sort file1.txt
```

`sort` takes the standard input and orders it alphabetically for the standard output.

## `uniq`

```bash
uniq file1.txt
```

`uniq` stands for "unique" and filters out adjacent, duplicate lines in a file. If the lines aren't adjacent, they will remain even if they're duplicates.

## `grep`

`grep` stands for "**g**lobal **r**egualar **e**xpression **p**rint". it searches stdin for lines that match a patter and returns the results as an stdout:

```bash
grep searchline file1.txt
```

This code searches for a string "searchline" in a file "file.txt".

Options:

* `-i` - case insensitive
* `-R` - recursive
* `-l` - print only file names that contain matches

```bash
grep -Rl searchline directory/
```

This commands searches in files that are the `directory/` and all its subdirectories for a line `searchline` and outputs file paths of files that contain a match.

## `sed`

`sed` stands for "stream editor". It accepts stdin and modifies it based on an expression:

```bash
sed 's/replaceFrom/replaceTo/g' file1.txt
```

This line will replace all `replaceFrom` strings to `replaceTo` strings in a file `file1.txt`

`s/` means "substitute" and `/g` means "global" (as in regexp).
