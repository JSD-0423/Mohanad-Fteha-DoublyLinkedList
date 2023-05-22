const DLL = require('./DLL.js')

const l = new DLL()

console.log('=== PUSH method ===')

l.push(1)
l.push(2)
l.push(3)
l.push(4)
l.push(5)
l.push(6)
l.print() // 1 2 3 4 5 6

console.log('=== POP method ===')

console.log(l.pop()) // 6
l.print() // 1 2 3 4 5

console.log('=== SHIFT method ===')
console.log(l.shift()) // 1

console.log('=== UNSHIFT method ===')
l.unshift(0)
l.print() // 0 2 3 4 5

console.log('=== GET method ===')
console.log(l.get(0)) // 0
console.log(l.get(l.length - 1)) // 5
console.log(l.get(3)) // 4

console.log('=== SET method ===')
l.setIndex(0, 1)
l.setIndex(3, 5)
l.print() // 1 2 3 5 5

console.log('=== INSERT method ===')
l.insert(3, 1)
l.print() // 1 2 3 1 5 5

console.log('=== REMOVE method ===')
l.remove(1)
l.remove(2)
l.print() // 1 3 5 5
