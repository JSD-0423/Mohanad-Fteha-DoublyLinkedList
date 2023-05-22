const Node = require('./Node.js')

class DLL {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val) {
		let newNode = new Node(val)

		if (!this.tail) {
			this.head = this.tail = newNode
			this.length++
			return true
		}

		newNode.prev = this.tail
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return true
	}

	pop() {
		if (!this.tail) return null

		let temp = this.tail.val
		this.tail = this.tail.prev
		this.tail.next = null
		this.length--

		return temp
	}

	shift() {
		if (!this.head) return null

		let temp = this.head.val
		this.head = this.head.next
		this.head.prev = null
		this.length--

		return temp
	}

	unshift(val) {
		let newNode = new Node(val)

		if (!this.head) {
			this.head = this.tail = newNode
			return true
		}

		newNode.next = this.head
		this.head.prev = newNode
		this.head = newNode
		this.length++

		return true
	}

	get(index) {
		if (index < 0 || index >= this.length) return false

		let p = this.head
		while (p && index--) p = p.next

		return p.val
	}

	setIndex(index, val) {
		if (index < 0 || index >= this.length) return false

		let p = this.head
		while (p && index--) p = p.next

		p.val = val
		return true
	}

	insert(index, val) {
		let newNode = new Node(val)
		if (index < 0 || index >= this.length) return false

		if (index === 0) return this.unshift(val)
		if (index === this.length - 1) return this.push(val)

		let p = this.head
		let prevIndex = index - 1
		while (p && prevIndex--) {
			p = p.next
		}

		let next = p.next
		p.next = newNode
		newNode.prev = p
		newNode.next = next

		this.length++
		return true
	}

	remove(index) {
		if (index < 0 && index >= this.length) return false

		if (index === 0) return this.shift()
		if (index === this.length - 1) return this.pop()

		let p = this.head
		let prevIndex = index - 1
		while (p && prevIndex--) {
			p = p.next
		}

		p.next = p.next.next
		p.next.prev = p
		this.length--
	}

	print() {
		let p = this.head
		let res = '[ '

		while (p) {
			res += `${p.val} ${p.next ? '<->' : ''} `
			p = p.next
		}

		res += ']'
		console.log(res)
	}
}

module.exports = DLL
