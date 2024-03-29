# Bootcamp Setup

## System Requirements

<details><summary>macOS</summary>
<p>

```console
brew install git
```

</p>
</details>

<details><summary>Linux</summary>
<p>

```console
apt-get install git
```

</p>
</details>

<details><summary>windows</summary>
<p>

[Download](http://git-scm.com/download/win)

</p>
</details>

Use the following command at your terminal to check your git version.

```console
git --version
```

If you have a recent version installed, it should do.

## Tools of Titans

To work faster and become a comand line power user we are going to use 3 tools: the software `iterm2`, the configuration terminal framework `oh-my-zsh` and the command line interface tool `gh`.

![david leuliette terminal setup](./davids-terminal-setup.png)

_Note: this is my setup with `refined` theme and `Snazzy` colors_

### iterm2 - [iterm2.com](https://iterm2.com/)

> iTerm2 brings the terminal into the modern age with features you never knew you always wanted.

`iTerm2` is a replacement for `Terminal`. It works on Macs only.

- [ ] install iterm2

```console
brew install --cask iterm2
```

- [ ] change the color scheme, open the settings and go to `Profiles` > `Colors` > `Color Presets`

![iterm2 custom colors](./iterm-change-colors.png)

You can select a color scheme from the list or [import a custom one](https://iterm2colorschemes.com/).

### `oh-my-zsh`

> Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration.

It comes bundled with thousands of helpful functions, helpers, plugins, themes, and a few things that make you shout...

![oh-my-zsh](https://ohmyz.sh/img/themes/mh.jpg)

<details><summary>macOS</summary>
<p>

Install it with:

```console
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

</p>
</details>

<details><summary>Linux and windows</summary>
<p>

[Installing ZSH wiki](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)

</p>
</details>

#### [Changing theme](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

```console
omz theme list
omz theme set THEME_NAME
```

#### [Install plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

ZSH allows you to extend built-in functionality by adding plugins.

To enable a plugin, you need to list it in your `.zshrc` file and then enable it.

```console
omz plugin list
omz plugin enable PLUGIN_NAME
omz plugin disable PLUGIN_NAME
```

Here is an example of a `.zshrc` file with some useful plugins I use:

```console
# Useful oh-my-zsh plugins
plugins=(git gitfast common-aliases zsh-syntax-highlighting history-substring-search zsh-autosuggestions zsh-z)
```

### `gh` - [cli.github.com](https://cli.github.com/)

`gh` is GitHub on the command line. It brings pull requests, issues, and other GitHub concepts to the terminal next to where you are already working with git and your code.

```console
brew install gh
```

_Note: for gitlab users, there is a [similar tool called `glab`](https://gitlab.com/gitlab-org/cli)_.
