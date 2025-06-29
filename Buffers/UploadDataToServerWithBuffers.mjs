import fs from "node:fs";
import http from "node:http";

// Add the fileURLToPath and dirname imports for ES module support
const imgBuffer = fs.readFileSync("logo.png");

const options = {
  // Replace with your server details (At present I don't have a server to test 😥)
  hostname: "your-server.com",
  port: 80,
  path: "/upload",
  method: "POST",
  headers: {
    "Content-Type": "image/png",
    "Content-Length": imgBuffer.length,
  },
};

// The below http.request immediately returns a writable stream -- Step 1
const req = http.request(options, (res) => {
  // The server response is handled here
  console.log(`Server responded with status: ${res.statusCode}`);
});

// Write (uploads) the image buffer to the request body -- Step 2
req.write(imgBuffer);
// Indicating that we have finished writing data -- Step 3
req.end();
