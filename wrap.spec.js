const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns line breaks at the correct index', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet,", 10)).to.equal("Lorem ipsu\nm dolor si\nt eu amet,");
  });
  it('Returns line breaks when the max length is 1', () => {
    expect(wrap("Lorem ipsum", 1)).to.equal("L\no\nr\ne\nm\n \ni\np\ns\nu\nm")
  })
});
