import { 
  get,
  pipe,
} from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };

  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('홍길동');
  expect(g(state)).toBeUndefined();
});

test('pipe', () => {
  const triplePlus = pipe(
    (a) => a + 1,
    (a) => a + 2,
    (a) => a + 3,
  );

  expect(triplePlus(2)).toBe(8);
  expect(triplePlus(3)).toBe(9);
});
