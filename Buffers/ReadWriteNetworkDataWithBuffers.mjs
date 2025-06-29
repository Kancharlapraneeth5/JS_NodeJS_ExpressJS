import https from "node:https";
import fs from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 1. Read the real image file
// If the specified file does not exist, it will be created
const imagePath = join(__dirname, "downloadedImage.svg");

// file is like a instance of the writable stream for the respective file
const file = fs.createWriteStream(imagePath);

https.get(
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  (res) => {
    res.pipe(file); // Buffer is used under the hood in piping
    res.on("end", () => console.log("Image downloaded!"));
    file.on("finish", () => {
      file.close(); // Close the file stream
      console.log("File stream closed.");
    });
  }
);
