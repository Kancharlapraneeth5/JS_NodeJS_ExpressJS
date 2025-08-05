import { Duplex } from "stream";

const echoStream = new Duplex({
  write(chunk, encoding, callback) {
    this.lastChunk = chunk.toString(); // Store the chunk
    console.log(`Received chunk: ${this.lastChunk}`);
    callback();
  },
  // The size parameter is a hint or suggested number of bytes (or characters in object mode)
  // that the stream consumer wants to read.
  // Example usage:
  // read(size) {
  //   const data = getData(size);  // hypothetical logic
  //   this.push(data);
  // }
  // stream.read(4);
  // Only use: When you're reading from a buffer or file and want to respect chunk sizes.
  read(size) {
    if (this.lastChunk) {
      this.push("Echo: " + this.lastChunk);
      this.lastChunk = null; // Clear after pushing
    } else {
      this.push(null); // No more data
    }
  },
});

echoStream.on("data", (chunk) => {
  console.log(`Echoed data: ${chunk.toString()}`);
});

// First write, then manually trigger reading
echoStream.write("Hello, World!");
echoStream.read(); // Trigger echo

echoStream.write("This is a duplex stream example.");
echoStream.read(); // Trigger echo
