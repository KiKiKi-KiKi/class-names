[![NPM version](https://badgen.net/npm/v/@kikiki_kiki/class-names)](https://www.npmjs.com/package/https://badgen.net/npm/v/@kikiki_kiki/class-names)
[![Build Status](https://travis-ci.org/KiKiKi-KiKi/class-names.svg?branch=master)](https://travis-ci.org/KiKiKi-KiKi/class-names)
[![Coverage Status](https://coveralls.io/repos/github/KiKiKi-KiKi/class-names/badge.svg?branch=master)](https://coveralls.io/github/KiKiKi-KiKi/class-names?branch=master)
[![MIT License](http://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/KiKiKi-KiKi/class-names/blob/master/package.json)

# classNames

`classNames` is a simple modulem, which returns  classnames string with merged arguments.

## install

```sh
$ npm install @kikiki_kiki/class-names
```

```js
import classNames from '@kikiki_kiki/class-names';
```

## useage

`classNames()` return merged arguments.

```js
classNames('foo');
// => "foo"

classNames('foo', 'bar');
// => "foo bar"

classNames('foo', 'bar', 'baz');
// => "foo bar baz"

classNames('foo', 'bar', 'foo');
// => "foo bar"
```

`classNames()` return Number to String
```js
classNames(1, 0, -1, 1.2, -2.3);
// => "1 0 -1 1.2 -2.3"
```

`classNames()` ignore `null`, `undefined`, `NaN`, `Boolean`
```js
classNames(null, undefined, NaN, true, false);
// => ""
```

### Array arguments

classNames map array value to class name strings
```js
classNames([]);
// => ""

classNames(['foo', 'bar', 'baz']);
// => "foo bar baz"

classNames('foo', ['bar', 'baz', 'foo']);
// => "foo bar baz"

classNames(['foo', 0, 'bar', null], ['baz', 1, 'foo']);
// => "foo 0 bar baz 1"
```

Nested Array arguments
```js
classNames(['foo', ['bar', 'baz'], 'bar']);
// => "foo bar baz"

classNames(['foo', ['bar', 'baz'], 'bar'], [0, [1, 3], 2, 3]);
// => "foo bar baz 0 1 3 2"
```

### Object arguments

`classNames` return true values key as a class name.
```js
classNames({
  foo: true,
  bar: false,
  baz: true,
});
// => "foo baz"

classNames('baz', {
  foo: true,
  bar: false,
  baz: true
});
// => "baz foo"

classNames(['foo', 'bar', {
  foo: true,
  bar: false,
  baz: true
});
// => "foo bar baz"
```

When argument is Function (Object).
```js
classNames( function() {return "foo"} );
// => ""

classNames( (function() { return "foo" })() );
// => "foo"
```

When argument is RegExp Object.
```js
classNames(/ab+c/i);
// => ""

const regex = new RegExp(/ab+c/, 'i');
classNames(regex);
// => ""
```
