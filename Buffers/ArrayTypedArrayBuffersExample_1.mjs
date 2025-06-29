const raw = new ArrayBuffer(4); // 4 bytes
const view = new Uint16Array(raw); // View as 2 x 16-bit numbers
// we can't use read/write methods on ArrayBuffer/TypedArray directly, we need to do it only as the below, if we want to use read/write methods then we need to create a Buffer view of the ArrayBuffer (what we did below)
view[0] = 1000; // Write 42 at byte offset 0

// The below statement creates a Buffer view of the ArrayBuffer (Not recommended)
// const buf = Buffer.from(view.buffer); // Create a Buffer view
const buf = Buffer.from(view.buffer, view.byteOffset, view.byteLength); // Create a Buffer view with byteOffset and byteLength
console.log(buf.readUInt16LE(0)); // See raw memory as bytes
buf.writeUInt16LE(2000, 2); // Write 2000 at byte offset 2
console.log(buf.readUInt16LE(2)); // Read the second value

// With the below we will get error because the buffer is not large enough to hold 3000 at byte offset 4 (Out of range error) as we allocated only 4 bytes for the buffer
// buf.writeUInt16LE(3000, 4); // Write 3000 at byte offset 4
// console.log(buf.readUInt16LE(4)); // Read the third value
