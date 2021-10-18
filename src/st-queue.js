const {NotImplementedError} = require('../extensions/index.js');
const {ListNode} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
    constructor() {
        this.enqueue = (value) => {
            if (!this.node) return this.node = new ListNode(value);
            this.createList = (node) => {
              return  node.next ? this.createList(node.next) : node.next = new ListNode(value);
            };
            this.createList(this.node);
        };

        this.dequeue = () => {
            const topItem = this.node.value;
            this.node = this.node.next;
            return topItem
        };

        this.getUnderlyingList = () => {
            return this.node
        }
    }
};
