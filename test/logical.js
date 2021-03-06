var error = require('../lib/error');
var logical = require('../lib/logical');
var should = require('should');

suite('Logical', function() {
  test('AND', function() {
    logical.AND(true, true).should.equal(true);
    logical.AND(true, false).should.equal(false);
    logical.AND(1, 1).should.equal(true);
    logical.AND(1, 0).should.equal(false);
    logical.AND(false, error.na).should.equal(error.na);
  });

  test('FALSE', function() {
    logical.FALSE().should.equal(false);
  });

  test('IF', function() {
    logical.IF(true).should.equal(true);
    logical.IF(false).should.equal(false);
    logical.IF(true, 1, 2).should.equal(1);
    logical.IF(false, 1, 2).should.equal(2);
    logical.IF(error.na, 1, 2).should.equal(error.na);
  });

  test('IFERROR', function() {
    logical.IFERROR(1, 2).should.equal(1);
    logical.IFERROR(error.value, 2).should.equal(2);
  });

  test('IFNA', function() {
    logical.IFNA(1, 2).should.equal(1);
    logical.IFNA(error.na, 2).should.equal(2);
  });

  test('NOT', function() {
    logical.NOT(true).should.equal(false);
    logical.NOT(false).should.equal(true);
    logical.NOT(error.na).should.equal(error.na);
  });

  test('OR', function() {
    logical.OR(true).should.equal(true);
    logical.OR(false).should.equal(false);
    logical.OR(true, false).should.equal(true);
    logical.OR(0, 0).should.equal(false);
    logical.OR(0, 1).should.equal(true);
    logical.OR(true, error.na).should.equal(error.na);
  });

  test('TRUE', function() {
    logical.TRUE().should.equal(true);
  });

  test('XOR', function() {
    logical.XOR(false, false).should.equal(false);
    logical.XOR(false, true).should.equal(true);
    logical.XOR(true, false).should.equal(true);
    logical.XOR(true, true).should.equal(false);
    logical.XOR(true, error.na).should.equal(error.na);
  });
});
