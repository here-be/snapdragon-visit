'use strict';

const typeOf = require('kind-of');

/**
 * Visit the given `node` with the specified function, the calls
 * [mapVisit](#mapVisit) if `node.nodes` exists.
 *
 * ```js
 * const ast = new Node({type: 'root'});
 * visit(ast, function(node) {
 *   node.val = '*';
 * });
 * console.log(ast.val);
 * //=> '*'
 * ```
 * @param {Object} `node` (required) Instance of [snapdragon-node][], or if a plain object is passed it will be converted to an instance of [snapdragon-node][].
 * @param {Function} `fn` (required)
 * @param {Object} `parent` (optional) Instance of [snapdragon-node][] to use as the `node.parent`
 * @return {Object} Returns the given node.
 * @api public
 */

function visit(node, fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('expected fn to be a visitor function');
  }
  if (typeOf(node) !== 'object') {
    throw new Error('expected node to be an object');
  }
  fn(node);
  return node.nodes ? mapVisit(node, fn) : node;
}

/**
 * Calls [visit](#visit) on each node in `node.nodes`.
 *
 * ```js
 * var node = new Node({type: 'star', val: ''});
 * var ast = new Node({type: 'root', nodes: []});
 * ast.push(node);
 *
 * visit.map(ast, function(node) {
 *   if (node.type === 'star') {
 *     node.val = '*';
 *   }
 * });
 *
 * console.log(node.val);
 * //=> '*'
 * ```
 * @param {Object} `node`
 * @param {Function} `fn`
 * @return {Object} Returns the given node.
 * @api public
 */

function mapVisit(node, fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('expected fn to be a visitor function');
  }
  if (typeOf(node) !== 'object') {
    throw new Error('expected node to be an object');
  }
  if (!Array.isArray(node.nodes)) {
    throw new TypeError('expected node.nodes to be an array');
  }
  for (const child of node.nodes) {
    visit(child, fn);
  }
  return node;
}

visit.map = visit.mapVisit = mapVisit;
module.exports = visit;
