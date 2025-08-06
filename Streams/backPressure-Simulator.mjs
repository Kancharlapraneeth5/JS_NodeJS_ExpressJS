// What is backpressure?
// Even though the readable can produce data fast, Node.js automatically slows it down to match the writable stream's speed.
// This is backpressure management.

// 📦 How to stream data in chunks, simulate I/O speed differences, and understand backpressure — a core part of Node.js’s performance and scalability in real-world apps like file processing, APIs, logs, and more.
import { Readable, Writable } from "stream";

const source = Readable.from(Array(1000).fill("data\n"));

const slowWriter = new Writable({
  write(chunk, encoding, callback) {
    setTimeout(() => {
      console.log("Writing chunk..." + chunk.toString());
      callback();
    }, 100); // simulate slow disk
  },
});

source.pipe(slowWriter);
