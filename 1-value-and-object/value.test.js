import {describe, it, expect, test} from 'vitest';

// 以下の(?)を正しい値に書き換えてください

describe('値と型', () => {

  test('typeofの返り値', () => {
    expect(typeof 1).toBe('(?)');
    expect(typeof '1').toBe('(?)');
    expect(typeof 1.5).toBe('(?)');
    expect(typeof 1n).toBe('(?)');
    expect(typeof { a: 1 }).toBe('(?)');
    expect(typeof null).toBe('(?)');
    expect(typeof undefined).toBe('(?)');
    expect(typeof true).toBe('(?)');
    expect(typeof Symbol('sym')).toBe('(?)');
    expect(typeof testFunction).toBe('(?)');
  });

  function testFunction() {
    return 'test';
  }

  test('Symbolとは', () => {
    const sym1 = Symbol('sym');
    const sym2 = Symbol('sym');
    expect(sym1 === sym2).toBe('(?)');
  })

  test('BigIntとは', () => {
    const big1 = BigInt(50000000000000000000000);
    const big2 = 50000000000000000000000n;
    const big3 = BigInt('50000000000000000000000');
    expect(big1 === big2).toBe('(?)');
    expect(big2 === big3).toBe('(?)');
    expect(big2 + big3).toBe('(?)');
  })

});