import current from './current';

describe('current category reducer', () => {
  test('should select all by default', () => {
    expect(current(undefined, {})).toEqual('all');
  });

  it('should change the current category', () => {
    expect(
      current(undefined, { type: 'SELECT_CATEGORY', categoryId: 'cat' })
    ).toEqual('cat');
  });
});
