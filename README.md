# classnames

## useage

`classnames()` return merged arguments.

```js
import classnames from 'class-names';

classnames('foo');
// => "foo"

classnames('foo', 'bar');
// => "foo bar"

classnames('foo', 'bar', 'baz');
// => "foo bar baz"

classnames('foo', 'bar', 'foo');
// => "foo bar"
```

`classnames()` return Number to String
```js
classnames(1, 0, -1, 1.2, -2.3);
// => "1 0 -1 1.2 -2.3"
```

`classnames()` ignore `null`, `undefined`, `NaN`, `Boolean`
```js
classnames(null, undefined, NaN, true, false);
// => ""
```

### Array arguments

classnames map array value to class name strings
```js
classnames([]);
// => ""

classnames(['foo', 'bar', 'baz']);
// => "foo bar baz"

classnames('foo', ['bar', 'baz', 'foo']);
// => "foo bar baz"

classnames(['foo', 0, 'bar', null], ['baz', 1, 'foo']);
// => "foo 0 bar baz 1"
```

Nested Array arguments
```js
classnames(['foo', ['bar', 'baz'], 'bar']);
// => "foo bar baz"

classnames(['foo', ['bar', 'baz'], 'bar'], [0, [1, 3], 2, 3]);
// => "foo bar baz 0 1 3 2"
```

### Object arguments

`classnames` return true values key as a class name.
```js
classnames({
  foo: true,
  bar: false,
  baz: true,
});
// => "foo baz"

classnames('baz', {
  foo: true,
  bar: false,
  baz: true
});
// => "baz foo"

classnames(['foo', 'bar', {
  foo: true,
  bar: false,
  baz: true
});
// => "foo bar baz"
```

When argument is Function (Object).
```js
classnames( function() {return "foo"} );
// => ""

classnames( (function() { return "foo" })() );
// => "foo"
```

When argument is RegExp Object.
```js
classnames(/ab+c/i);
// => ""

const regex = new RegExp(/ab+c/, 'i');
classnames(regex);
// => ""
```
