import { createReadStream, createWriteStream } from "node:fs";
import Zlib from "node:zlib";

// The below line is used to compress the file
const gzip = Zlib.createGzip();
// The below line is used to decompress the gzipped file
const gunzip = Zlib.createGunzip();

// Compress
const compressStream = createReadStream("input_1.txt")
  .pipe(gzip)
  .pipe(createWriteStream("input_1.txt.gz"));

// Decompress
// Without waiting for the compression to finish, we can't start decompressing
compressStream.on("finish", () => {
  console.log("Compression completed.");
  createReadStream("input_1.txt.gz")
    .pipe(gunzip)
    .pipe(createWriteStream("decompressed_1.txt"));
  console.log("Decompression completed.");
});
