# @tegor/safe-eval

[![NPM version](https://img.shields.io/npm/v/@tegor/safe-eval?color=a1b858&label=)](https://www.npmjs.com/package/@tegor/safe-eval)

Forked from [`safe-eval`](https://github.com/hacksparrow/safe-eval)

Changes in this fork
- Support es module
- Support typescript definition
- Delete IIFE in source code


## Install

```bash
pnpm install @tegor/safe-eval
```

## Usage

commomjs
```javascript
const safeEval = require('@tegor/safe-eval');

const code = '"app" + "le"'
const evaluated = safeEval(code)
```

es module
```javascript
import safeEval fromm '@tegor/safe-eval';

const code = '"app" + "le"'
const evaluated = safeEval(code)
```


## License

[MIT](./LICENSE) License © 2022 [fightwithtiger](https://github.com/fightwithtiger)
