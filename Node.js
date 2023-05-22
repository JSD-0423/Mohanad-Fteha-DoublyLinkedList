module.exports = class Node {
	constructor(val = 0, prev = null, next = null) {
		this.prev = prev
		this.val = val
		this.next = next
	}
}
