import classNames from '../src/';

describe('classNames return merged arguments', () => {
  describe('Empty arguments', () => {
    test('classNames() return ""', () => {
      expect( classNames() ).toBe('');
    });
  });

  test('classNames("foo") return "foo"', () => {
    expect( classNames('foo') ).toBe('foo');
  });

  test('classNames("foo", "bar") return "foo bar"', () => {
    expect( classNames('foo', 'bar') ).toBe('foo bar');
  });

  test('classNames("foo", "bar", "baz") return "foo bar baz"', () => {
    expect( classNames('foo', 'bar', 'baz') ).toBe('foo bar baz');
  });

  test('classNames("foo", "bar", "foo") return "foo bar"', () => {
    expect( classNames('foo', 'bar', 'foo') ).toBe('foo bar');
  });
});

describe('classNames return Number to String', () => {
  test('classNames(1, 0 -1, 1.2, -2.3) return "1 0 -1 1.2 -2.3"', () => {
    expect( classNames(1, 0, -1, 1.2, -2.3) ).toBe('1 0 -1 1.2 -2.3');
  });
});

describe('classNames ignore null, undefined, NaN, boolean', () => {
  test('classNames(null, undefined, NaN, true, false) return ""', () => {
    expect( classNames(null, undefined, NaN, true, false) ).toBe('');
  });
});

describe('Array arguments', () => {
  describe('Empty Arraty', () => {
    test('classNames([]) return ""', () => {
      expect( classNames([]) ).toBe('');
    });
  });

  describe('classNames map array value to class name strings', () => {
    test('classNames(["foo", "bar", "baz"]) return "foo bar baz"', () => {
      expect( classNames(['foo', 'bar', 'baz']) ).toBe('foo bar baz');
    });

    test('classNames("foo", ["bar", "baz", "foo"]) return "foo bar baz"', () => {
      expect( classNames('foo', ['bar', 'baz', 'foo']) ).toBe('foo bar baz');
    });

    test('classNames(["foo", 0, "bar", null], ["baz", 1, "foo"]) return "foo 0 bar baz 1"', () => {
      expect( classNames(['foo', 0, 'bar', null], ['baz', 1, 'foo']) ).toBe('foo 0 bar baz 1');
    });
  });

  describe('Nested Array', () => {
    test('classNames(["foo", ["bar", "baz"], "bar"]) return "foo bar baz"', () => {
      expect( classNames(['foo', ['bar', 'baz'], 'bar']) ).toBe('foo bar baz');
    });

    test('classNames(["foo", ["bar", "baz"], "bar"], [0, [1, 3], 2, 3]) return "foo bar baz 0 1 3 2"', () => {
      expect( classNames(['foo', ['bar', 'baz'], 'bar'], [0, [1, 3], 2, 3]) ).toBe('foo bar baz 0 1 3 2');
    })
  })
});

describe('Object arguments', () => {
  describe('Empty Object', () => {
    test('classNames({}) return ""', () => {
      expect( classNames({}) ).toBe('');
    });
  });

  describe('Return true values key as a class name', () => {
    test('classNames({foo: true, bar: false, baz: true}) return "foo baz"', () => {
      expect( classNames({
        foo: true,
        bar: false,
        baz: true,
      }) ).toBe('foo baz');
    });

    test('classNames("baz", {foo: true, bar: false, baz: true}) return "baz foo"', () => {
      expect( classNames('baz', {
        foo: true,
        bar: false,
        baz: true
      }) ).toBe('baz foo');
    });

    test('classNames(["foo", "bar"], {foo: true, bar: false, baz: true}) return "foo bar baz', () => {
      expect( classNames(['foo', 'bar'], {
        foo: true,
        bar: false,
        baz: true
      }) ).toBe('foo bar baz');
    });
  });

  describe('Function, RegExp Object', () => {
    test('classNames(function() { return "foo" }) return ""', () => {
      expect( classNames( function() {return "foo"} ) ).toBe("");
    });

    test('classNames((function() { return "foo" })()) return "foo"', () => {
      expect( classNames( (function() { return "foo" })() ) ).toBe("foo");
    });

    describe('ignore RegExp Object', () => {
      test('classNames(/ab+c/i) return ""', () => {
        expect( classNames(/ab+c/i) ).toBe('');
      });

      test('Argument is a new RegExp Object', () => {
        const regex = new RegExp(/ab+c/, 'i');
        expect( classNames(regex) ).toBe('');
      });
    });
  });
});
