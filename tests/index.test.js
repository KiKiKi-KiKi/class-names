import classnames from '../src/';

test('foo return foo', () => {
  expect( classnames('foo') ).toBe('foo');
});
