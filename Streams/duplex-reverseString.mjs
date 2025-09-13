import { Duplex } from "stream";

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    this.lastchunk = chunk.toString(); // Store the chunk
    console.log(`Received chunk: ${this.lastchunk}`);
    callback();
  },
  read(size) {
    if (this.lastchunk) {
      const reversed = this.lastchunk.split("").reverse().join("");
      this.push(reversed);
      this.lastchunk = null; // Clear after pushing
    }
  },
});

duplexStream.on("data", (chunk) => {
  console.log(`Reversed data: ${chunk.toString()}`);
});

duplexStream.write("Hello, World!");
duplexStream.read(); // Trigger reading and reversing
