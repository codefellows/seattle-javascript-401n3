let buff = new Buffer(10) // 5 is the size of the buffer
console.log(buff)
buff.write('hello how are you doing class')
console.log(buff.toString())
let buff2 = Buffer.alloc(10)
let buff3 = Buffer.from([4, 10, 3, 2])
console.log(buff3.length)
console.log(buff3.readUInt8(1))
