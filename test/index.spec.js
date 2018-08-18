const index = require('../index.js');
const should = require('chai').should();

describe('Index function', () => {
    it('should throw an error without pass teams',() => {
        (() => {index()}).should.throw('Teams is undefined');
    })
    it('should throw an error without pass actions',() => {
        (() => {index('Ilkley vs Yorkshire')}).should.throw('Actions is undefined');
    })
    it('should return correct results',() => {
        index('Ilkley vs Yorkshire', 'Ilkley: Quaffle goal, Yorkshire: Haverstacking foul, Yorkshire: Caught Snitch').should.equal('Ilkley: 10, Yorkshire: 120');
    })
    it('should return error if params arent format correctly',() => {
        (() => {index('Ilkley vs Yorkshire','121')}).should.throw('Err');
    })
})