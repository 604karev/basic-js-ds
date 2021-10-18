const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {

    constructor() {
        this.node = null;
        this.findInNode = (node, data) => {
            if (!node) return null;
            if (node.data === data) return node;

            if (data < node.data) {
                return this.findInNode(node.left, data);
            } else {
                return this.findInNode(node.right, data);
            }
        };

        this.addData = (node, data) => {
            if (!node) {
                return new Node(data)
            }
            if (node.data === data) {
                return node
            }
            if (data < node.data) {
                node.left = this.addData(node.left, data)
            } else {
                node.right = this.addData(node.right, data)
            }
            return node
        }
    }


    root() {
        return this.node;
    }

    add(data) {
        this.node = this.addData(this.node, data);
    }

    has(data) {
        return !!this.findInNode(this.node, data);
    }


    find(data) {
        return this.findInNode(this.node, data);
    }


    remove(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        if (!this.node) {
            return false
        } else {
            let node = this.node;
            while (node.left) node = node.left;
            return node.data;
        }
    }

    max() {
        if (!this.node) {
            return false
        } else {
            let node = this.node;
            while (node.right) node = node.right;
            return node.data;
        }
    }

};