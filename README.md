# bro
A bro will lint and prettify your code

## What's inside
- [Standard](https://github.com/standard/standard)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [Prettier](https://github.com/prettier/prettier)

## Installation

```
$ yarn install @codementor/bro --dev
```

## Config

In your `package.json`

```
"scripts": {
  "lint": "bro \"src/**/*.js\" --fix"
},
"bro": { // below are all optional
  "ignore": [],
  "plugins": [], // additional eslint plugin
  "envs": [],
  "globals": [],
  "parser": ""
}
```
