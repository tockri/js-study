import {describe, it, expect, test} from 'vitest';

// 以下の(?)を正しい値に書き換えてください

describe('値の型', () => {

  test('typeofの返り値', () => {
    expect(typeof 1).toBe('(?)');
    expect(typeof '1').toBe('(?)');
    expect(typeof { a: 1 }).toBe('(?)');
    expect(typeof null).toBe('(?)');
    expect(typeof undefined).toBe('(?)');
    expect(typeof true).toBe('(?)');
    expect(typeof Symbol('sym')).toBe('(?)');
  });

  test('Symbol', () => {
    const sym1 = Symbol('sym');
    const sym2 = Symbol('sym');
    expect(sym1 === sym2).toBe('(?)');
  })

});