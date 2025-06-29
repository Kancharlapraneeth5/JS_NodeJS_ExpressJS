import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("=== Base64 Image Processing Demo ===\n");

// 1. Read the real image file
const imagePath = join(__dirname, "BufferTest.jpeg");
const imageBuffer = readFileSync(imagePath);

console.log("✅ Image loaded successfully");
console.log("📊 Original file size:", imageBuffer.length, "bytes");
console.log(
  "🔢 First 10 bytes (hex):",
  imageBuffer.slice(0, 10).toString("hex")
);

console.log("\n=== Base64 Conversion ===");

// 2. Convert image to Base64
const base64Image = imageBuffer.toString("base64");
console.log("🔄 Converted to Base64");
console.log("📊 Base64 size:", base64Image.length, "characters");
console.log(
  "📈 Size increase:",
  Math.round((base64Image.length / imageBuffer.length) * 100 - 100),
  "%"
);
console.log("🔤 First 50 characters:", base64Image.substring(0, 50) + "...");

// 3. Create Data URL (for HTML)
const mimeType = "image/jpeg";
const dataURL = `data:${mimeType};base64,${base64Image}`;
console.log("\n=== Data URL Created ===");
console.log("🌐 Data URL (first 80 chars):", dataURL.substring(0, 80) + "...");

// 4. Create HTML file with embedded image
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Base64 Image Demo</title>
</head>
<body>
    <h1>Base64 Embedded Image</h1>
    <p>This image is embedded directly in HTML using Base64:</p>
    <img src="${dataURL}" alt="Base64 Image" style="max-width: 300px;">
    
    <h2>Benefits:</h2>
    <ul>
        <li>No separate HTTP request for image</li>
        <li>Image travels with the HTML</li>
        <li>Works in emails and offline</li>
    </ul>
</body>
</html>
`;

writeFileSync("base64_demo.html", htmlContent);
console.log("✅ HTML file created: base64_demo.html");

// 5. Simulate sending via JSON API
const apiPayload = {
  timestamp: new Date().toISOString(),
  imageData: base64Image,
  filename: "BufferTest.jpeg",
  mimeType: mimeType,
  size: imageBuffer.length,
};

console.log("\n=== API Payload Simulation ===");
console.log("📦 JSON payload created (image as Base64 string)");
console.log(
  "📊 Payload size:",
  JSON.stringify(apiPayload).length,
  "characters"
);

// 6. Simulate email attachment
const emailSimulation = {
  from: "sender@example.com",
  to: "recipient@example.com",
  subject: "Image Attachment Demo",
  body: "Please find the attached image.",
  attachments: [
    {
      filename: "BufferTest.jpeg",
      contentType: "image/jpeg",
      contentTransferEncoding: "base64",
      data: base64Image,
    },
  ],
};

console.log("\n=== Email Attachment Simulation ===");
console.log("📧 Email object created with Base64 attachment");
console.log(
  "📎 Attachment size:",
  emailSimulation.attachments[0].data.length,
  "characters"
);

// 7. Decode back to original
console.log("\n=== Decoding Back to Original ===");
const decodedBuffer = Buffer.from(base64Image, "base64");
const isIdentical = imageBuffer.equals(decodedBuffer);

console.log("🔄 Decoded from Base64");
console.log("✅ Data integrity check:", isIdentical ? "PASSED" : "FAILED");
console.log("📊 Decoded size:", decodedBuffer.length, "bytes");

// Save decoded image
writeFileSync("decoded_BufferTest.jpeg", decodedBuffer);
console.log("💾 Decoded image saved as: decoded_BufferTest.jpeg");

// 8. Performance comparison
console.log("\n=== Performance Summary ===");
console.log("📈 Original binary:", imageBuffer.length, "bytes");
console.log("📈 Base64 text:", base64Image.length, "characters");
console.log(
  "📈 Size overhead:",
  base64Image.length - imageBuffer.length,
  "extra characters"
);
console.log(
  "📈 Efficiency:",
  Math.round((imageBuffer.length / base64Image.length) * 100),
  "% of original size"
);

console.log("\n=== Use Cases Demonstrated ===");
console.log("🌐 1. HTML Data URLs (embedded images)");
console.log("📧 2. Email attachments (safe text transmission)");
console.log("🔗 3. JSON APIs (binary data in REST calls)");
console.log("💾 4. Database storage (binary in text columns)");
console.log("🔒 5. Configuration files (images in config)");

console.log(
  "\n✨ Base64 enables binary data to travel safely through text-only systems!"
);
