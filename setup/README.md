# Bootcamp Setup

## System Requirements

### macOS

```console
brew install git
```

### Linux

```console
apt-get install git
```

### Windows

[Download](http://git-scm.com/download/win)

Use the following command at your terminal to check your git version.

```console
git --version
```

If you have a recent version installed, it should do.

## Tools of Titans

To work faster and become a comand line power user we are going to use these tools.

### `oh-my-zsh`

![oh-my-zsh](https://ohmyz.sh/img/themes/mh.jpg)

Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration. It comes bundled with thousands of helpful functions, helpers, plugins, themes, and a few things that make you shout...

On macOS, you can install it with:

```console
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

#### Changing theme

```console
omz theme list
omz theme set THEME_NAME
```

#### [Install plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

ZSH allows you to extend built-in functionality by adding plugins.

```console
omz plugin list
omz plugin enable PLUGIN_NAME
omz plugin disable PLUGIN_NAME
```

To enable a plugin, open your `.zshrc` file and add these:

```console
# Useful oh-my-zsh plugins
plugins=(git gitfast common-aliases zsh-syntax-highlighting history-substring-search zsh-autosuggestions zsh-z)
```

### `gh`

`gh` is GitHub on the command line. It brings pull requests, issues, and other GitHub concepts to the terminal next to where you are already working with git and your code.

```console
brew install gh
```
