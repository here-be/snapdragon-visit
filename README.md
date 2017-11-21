# snapdragon-visit [![NPM version](https://img.shields.io/npm/v/snapdragon-visit.svg?style=flat)](https://www.npmjs.com/package/snapdragon-visit) [![NPM monthly downloads](https://img.shields.io/npm/dm/snapdragon-visit.svg?style=flat)](https://npmjs.org/package/snapdragon-visit) [![NPM total downloads](https://img.shields.io/npm/dt/snapdragon-visit.svg?style=flat)](https://npmjs.org/package/snapdragon-visit) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/snapdragon-visit.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/snapdragon-visit)

> visit and mapVisit methods for snapdragon nodes.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save snapdragon-visit
```

## Usage

Use `snapdragon-visit` in your node.js library with the following line of code:

```js
const visit = require('snapdragon-visit');
```

## API

### [visit](index.js#L24)

Visit the given `node` with the specified function, the calls [mapVisit](#mapVisit) if `node.nodes` exists.

**Params**

* `node` **{Object}**: (required) Instance of [snapdragon-node](https://github.com/jonschlinkert/snapdragon-node), or if a plain object is passed it will be converted to an instance of [snapdragon-node](https://github.com/jonschlinkert/snapdragon-node).
* `fn` **{Function}**: (required)
* `parent` **{Object}**: (optional) Instance of [snapdragon-node](https://github.com/jonschlinkert/snapdragon-node) to use as the `node.parent`
* `returns` **{Object}**: Returns the given node.

**Example**

```js
const ast = new Node({type: 'root'});
visit(ast, function(node) {
  node.val = '*';
});
console.log(ast.val);
//=> '*'
```

### [mapVisit](index.js#L58)

Calls [visit](#visit) on each node in `node.nodes`.

**Params**

* `node` **{Object}**
* `fn` **{Function}**
* `returns` **{Object}**: Returns the given node.

**Example**

```js
var node = new Node({type: 'star', val: ''});
var ast = new Node({type: 'root', nodes: []});
ast.push(node);

visit.map(ast, function(node) {
  if (node.type === 'star') {
    node.val = '*';
  }
});

console.log(node.val);
//=> '*'
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [snapdragon-node](https://www.npmjs.com/package/snapdragon-node): Snapdragon utility for creating a new AST node in custom code, such as plugins. | [homepage](https://github.com/jonschlinkert/snapdragon-node "Snapdragon utility for creating a new AST node in custom code, such as plugins.")
* [snapdragon-token](https://www.npmjs.com/package/snapdragon-token): Create a snapdragon token. Used by the snapdragon lexer, but can also be used by… [more](https://github.com/jonschlinkert/snapdragon-token) | [homepage](https://github.com/jonschlinkert/snapdragon-token "Create a snapdragon token. Used by the snapdragon lexer, but can also be used by plugins.")
* [snapdragon](https://www.npmjs.com/package/snapdragon): Easy-to-use plugin system for creating powerful, fast and versatile parsers and compilers, with built-in source-map… [more](https://github.com/jonschlinkert/snapdragon) | [homepage](https://github.com/jonschlinkert/snapdragon "Easy-to-use plugin system for creating powerful, fast and versatile parsers and compilers, with built-in source-map support.")

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on November 21, 2017._