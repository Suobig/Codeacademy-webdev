# Bash Scripting

Bash scripting is useful to automate repetitive tasks.

To let your computer be able to find and execute Bash scripts, the beginning of the script file should be

```bash
#!/bin/bash
```

This tells computer which type of interpreter to use for the script.

It's a good practice to place script files into `~/bin/` directory.

The script also need to have the "execute" permission to allow them to be run. For example, to add those permissions to file `script.sh` in the working directory we need to use command:

```bash
chmod +x script.sh
```

There're different files that are being run each time the shell opens. For Linux systems it's `~/.bashrc` and for OSX it's `~/.bash_profile`. To make sure that scripts in `~/bin/` directory are available to run, add

```bash
PATH=~/bin:$PATH
```

## Variables

Within bash script you can declare variables by setting its name equal to a value. For example, to declare `greeting` variable equal "Hello" we use the following syntax:

```bash
greeting="Hello"
```

To access the variable use its name with preceding `$` sign. For exmaple, to access `greeting` variable use:

```bash
echo $greeting
```

## Conditionals

Syntax for `if` condition:

```bash
if [ $index -lt 5 ]
then
    echo $index
else
    echo 5
fi
```

Bash script uses specific operators for comparison. Here's the list:

* equal: `-eq`
* not equal: `-ne`
* less than or equal: `-le`
* less than: `-lt`
* greater than or equal: `-ge`
* greater than: `-gt`
* is null: `-z`

When comparing strings it a good practice to put variable into quotes. This prevents errors if the variable is null or contains spaces. Common operators for comparing strings:

* equal: `==`
* not equal: `!=`

## Loops

There are 3 different ways to loop in a bash script: `for`, `while` and `until`.

A for loop is used to iterate through a list and execute an action at each step.

Synatax:

```bash
for word in $paragraph
do
    echo $word
done
```

Until and while loops are very similar. While loop keeps looping while the provided condition is true, `until` loops unitl the conidition is true. Condition are established in the same way as in `if` blocks.

`while` syntax:

```bash
while [ $index -lt 5 ]
do
    echo $index
    index=$((index + 1))
done
```

`$(())` is used for arithmetic operations in bash scripts. Variables within brackets are not prepnded with `$`.

`until` syntax:

```bash
until [ $index -eq 5 ]
do
    echo $index
    index=$((index + 1))
done
```

## Inputs

We can read user's input using `read` command:

```bash
echo "Guess a number"
read number
echo "You guessed $number"
```

Another way is to have the user add input arguments when they run the script. Example:

```bash
saycolors reg green blue
```

Within script those arguments are accessible via `$1`, `$2` etc. variables. To iterate through variables use `"$@"`:

```bash
for color in "$@"
do
    echo $color
done
```

Also we can access external files:

```bash
files=/some/directory/*

for file in $files
do
    echo $file
done
```

## Aliases

We can set up alises for custom bash scripts in .bashrc (or .bash_profile for OSX):

```bash
alias saycolors="~/bin/saycolors.sh"
```

## Splitting string into array

Syntax:

```bash
read -a bar <<< $foo
```

Where `$foo` is an original string and `bar` is an output array.

## Accessing array item by index

Syntax:

```bash
foo=${bar[0]}
```

## Putting command result into a variables

Syntax:

```bash
foo=$(echo "Hello")
```

`$foo` contains "Hello".
