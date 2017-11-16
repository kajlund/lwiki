/**
 * Created by LuKa on 2017-11-16
 * Sanity Tests
 */

require('should');

describe('Sanity tests', () => {
    it('expect true to be truthy', done => {
        const truthy = true;
        truthy.should.be.true();
        done();
    });

    it('expect 1 + 1 to equal 2', done => {
        const two = 1 + 1;
        two.should.equal(2);
        done();
    });

    it('expect -1 when value is not present in Array ', done => {
        const arr = [1, 2, 3];
        const idx = arr.indexOf(4);

        idx.should.equal(-1);
        done();
    });
});
