# Environment

Each time we launch the terminal application, it creates a new session. The session immediately loads settings and preferences that make up the command line _environment_.

We can configure the environemnt to support the commands and prgrams we crate. This enables us to costomize greetings and comman aliases, and create variables to share across commands and programs.

## `nano`

Syntax:

```bash
nano file1.txt
```

Opens a command line text editor `nano` to edit file `file1.txt`.

Useful nano key strokes:

* `Ctrl` + `O` - save  a file. "O" stands for "Output"
* `Ctrl` + `X` - exist nano. "X" stands for "Exit"
* `Ctrl` + `G` - open a help menu.

Other useful commands:

* `source file1.txt` - executes all the commands in `file1.txt` file
* `clear` - clears terminal window

## Bash profile

`~/.bash_profile` is a file that is used to store environment settings.

The `~` means the user's home directory, the `.` indicates the hidden file.

The name `~/.bash_profile` is important because that's the command line recognises the bash profile.

## Aliases

Syntax:

```bash
alias pd="pwd"
```

The `alias` command allows you to crate keyboard shortcuts, or _aliases_, for commonly used commands.

## Environment Variables

_environemt variables_ are varables are variables that can be used across commands and programs and hold information about the environment.

Syntax:

```bash
export VAR_NAME="Variable"
```

Variable name should be uppercase with underscores for word separation.

## PS1

`PS1` is a variable that defines the makeup and style of the command prompt.

Syntax:

```bash
export PS1=">> "
```

This command will turn standard "$ " command prompt into ">> ".

## `HOME`

The `HOME` variable is an enviroment variable that displays the path of the home directory.

## `PATH`

`PATH` is an environment variable that shore a list of directories separated by a colon. Eacho directory contains scripts for command line to execute. The `PATH` variable simply lists which directories contain scripts.

## `env`

`env` command stands for "environemnt" and returns a list of the environment variables for the current user.

## `less`

Less is similar to `cat` command but is better suted for viewing larger files.
