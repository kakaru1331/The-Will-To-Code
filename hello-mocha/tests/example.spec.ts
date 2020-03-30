import { assert } from 'chai'

describe('Assert ', function() {
  describe('#assert', function() {
    it('assert', function() {     
      assert(Array.isArray([]), 'empty arrays are arrays');
    });
  });

  describe('fail', () => {
    it('#fail', () => {
      // assert.fail();
      // assert.fail('custom error message');
      // assert.fail(1, 2, undefined, ">");
    })
  });

  describe('isOk', () => {
    it('#isOk', () => {
      assert.isOk('everything', 'everything is ok');
    });

    it('#isOk2', () => {
      assert.isOk(false, 'this will fail')
    });
  })
});