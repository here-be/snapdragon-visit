'use strict';

require('mocha');
var assert = require('assert');
var Node = require('snapdragon-node');
var visit = require('..');

describe('snapdragon-visit', function() {
  it('should export a function', function() {
    assert.equal(typeof visit, 'function');
  });

  it('should expose a .map function', function() {
    assert.equal(typeof visit.map, 'function');
  });

  it('should throw an error when invalid args are passed', function() {
    assert.throws(function() {
      visit('foo');
    });

    assert.throws(function() {
      visit();
    });

    assert.throws(function() {
      visit(null);
    });

    assert.throws(function() {
      visit.map('foo');
    });

    assert.throws(function() {
      visit.map();
    });

    assert.throws(function() {
      visit.map(null);
    });
  });

  it('should call a function on a node', function() {
    var ast = new Node({type: 'root'});

    visit(ast, function(node) {
      node.val = 'bar';
    });

    assert.equal(ast.val, 'bar');
  });

  it('should call .mapVisit on node.nodes', function() {
    var child = new Node({type: 'child', val: ''});
    var ast = new Node({type: 'root', nodes: [child]});
    visit(ast, function(node) {
      node.val = 'bar';
    });

    assert.equal(ast.val, 'bar');
    assert.equal(child.val, 'bar');
  });
});
