import classnames from '../src/';

describe('classnames return merged arguments', () => {
  describe('Empty arguments', () => {
    test('classnames() return ""', () => {
      expect( classnames() ).toBe('');
    });
  });

  test('classnames("foo") return "foo"', () => {
    expect( classnames('foo') ).toBe('foo');
  });

  test('classnames("foo", "bar") return "foo bar"', () => {
    expect( classnames('foo', 'bar') ).toBe('foo bar');
  });

  test('classnames("foo", "bar", "baz") return "foo bar baz"', () => {
    expect( classnames('foo', 'bar', 'baz') ).toBe('foo bar baz');
  });

  test('classnames("foo", "bar", "foo") return "foo bar"', () => {
    expect( classnames('foo', 'bar', 'foo') ).toBe('foo bar');
  });
});

describe('classnames return Number to String', () => {
  test('classnames(1, 0 -1, 1.2, -2.3) return "1 0 -1 1.2 -2.3"', () => {
    expect( classnames(1, 0, -1, 1.2, -2.3) ).toBe('1 0 -1 1.2 -2.3');
  });
});

describe('classnames ignore null, undefined, NaN, boolean', () => {
  test('classnames(null, undefined, NaN, true, false) return ""', () => {
    expect( classnames(null, undefined, NaN, true, false) ).toBe('');
  });
});

describe('Array arguments', () => {
  describe('Empty Arraty', () => {
    test('classnames([]) return ""', () => {
      expect( classnames([]) ).toBe('');
    });
  });

  describe('classnames map array value to class name strings', () => {
    test('classnames(["foo", "bar", "baz"]) return "foo bar baz"', () => {
      expect( classnames(['foo', 'bar', 'baz']) ).toBe('foo bar baz');
    });

    test('classnames("foo", ["bar", "baz", "foo"]) return "foo bar baz"', () => {
      expect( classnames('foo', ['bar', 'baz', 'foo']) ).toBe('foo bar baz');
    });

    test('classnames(["foo", 0, "bar", null], ["baz", 1, "foo"]) return "foo 0 bar baz 1"', () => {
      expect( classnames(['foo', 0, 'bar', null], ['baz', 1, 'foo']) ).toBe('foo 0 bar baz 1');
    });
  });

  describe('Nested Array', () => {
    test('classnames(["foo", ["bar", "baz"], "bar"]) return "foo bar baz"', () => {
      expect( classnames(['foo', ['bar', 'baz'], 'bar']) ).toBe('foo bar baz');
    });

    test('classnames(["foo", ["bar", "baz"], "bar"], [0, [1, 3], 2, 3]) return "foo bar baz 0 1 3 2"', () => {
      expect( classnames(['foo', ['bar', 'baz'], 'bar'], [0, [1, 3], 2, 3]) ).toBe('foo bar baz 0 1 3 2');
    })
  })
});

describe('Object arguments', () => {
  describe('Empty Object', () => {
    test('classnames({}) return ""', () => {
      expect( classnames({}) ).toBe('');
    });
  });

  describe('Return true values key as a class name', () => {
    test('classnames({foo: true, bar: false, baz: true}) return "foo baz"', () => {
      expect( classnames({
        foo: true,
        bar: false,
        baz: true,
      }) ).toBe('foo baz');
    });

    test('classnames("baz", {foo: true, bar: false, baz: true}) return "baz foo"', () => {
      expect( classnames('baz', {
        foo: true,
        bar: false,
        baz: true
      }) ).toBe('baz foo');
    });

    test('classnames(["foo", "bar"], {foo: true, bar: false, baz: true}) return "foo bar baz', () => {
      expect( classnames(['foo', 'bar'], {
        foo: true,
        bar: false,
        baz: true
      }) ).toBe('foo bar baz');
    });
  });

  describe('Function, RegExp Object', () => {
    test('classnames(function() { return "foo" }) return ""', () => {
      expect( classnames( function() {return "foo"} ) ).toBe("");
    });

    test('classnames((function() { return "foo" })()) return "foo"', () => {
      expect( classnames( (function() { return "foo" })() ) ).toBe("foo");
    });

    describe('ignore RegExp Object', () => {
      test('classnames(/ab+c/i) return ""', () => {
        expect( classnames(/ab+c/i) ).toBe('');
      });

      test('Argument is a new RegExp Object', () => {
        const regex = new RegExp(/ab+c/, 'i');
        expect( classnames(regex) ).toBe('');
      });
    });
  });
});
