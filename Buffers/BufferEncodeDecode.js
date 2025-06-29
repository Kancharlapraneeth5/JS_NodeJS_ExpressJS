const buf = Buffer.from("hello", "utf8");

console.log(buf); // <Buffer 68 65 6c 6c 6f>
//  Use .toString() only when you need to convert buffer data to a specific format (string, hex, base64, etc.). For debugging or direct buffer operations, it's not required.
console.log(buf.toString("hex")); // 68656c6c6f
console.log(buf.toString("utf8")); // 'hello'

// Buffer to Base64 (used in images/emails)
const base64Buf = Buffer.from("hello");
console.log(base64Buf.toString("base64"));
