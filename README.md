# bro

[![Greenkeeper badge](https://badges.greenkeeper.io/CodementorIO/bro.svg)](https://greenkeeper.io/)

A bro will lint and prettify your code

## What's inside
- [Standard](https://github.com/standard/standard)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [Prettier](https://github.com/prettier/prettier)

## Installation

```
$ yarn add @codementor/bro --dev
```

To let your editor lint plugin works, you'll need to copy the `eslintrc.json` from this package to your project root and rename to `.eslintrc.json`.
```
$ cp node_modules/@codementor/bro/eslintrc.json ./.eslintrc
```

## Config

In your `package.json`

```
"scripts": {
  "lint": "bro \"src/**/*.js\" --fix"
},
"bro": { // all optional
  "ignore": [],
  "plugins": [],
  "envs": [],
  "globals": []
}
```

## Todo
- [ ] how to integrate with editor plugins?
- [ ] how to integrate with `snazzy`?
