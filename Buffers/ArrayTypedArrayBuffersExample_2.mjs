import fs from "node:fs";

// 1. Create a buffer simulating 4 sensor readings (2 bytes each)
const sensorData = Buffer.alloc(8); // 4 readings x 2 bytes = 8 bytes

// 2. Write 4 sensor values to the buffer in Little Endian
sensorData.writeUInt16LE(1000, 0); // bytes 0–1
sensorData.writeUInt16LE(2000, 2); // bytes 2–3
sensorData.writeUInt16LE(3000, 4); // bytes 4–5
sensorData.writeUInt16LE(4000, 6); // bytes 6–7

console.log("Raw Buffer:", sensorData); // hex output

// SHARED MEMORY (creating the TypedArray from the above buffer

// 3. Create a TypedArray (Uint16Array) from the same memory
const sensorArray = new Uint16Array(
  sensorData.buffer,
  sensorData.byteOffset,
  sensorData.length / 2
);

// SHARED MEMORY (viewing the TypedArray) -- (It should result same as the above buffer)
console.log("TypedArray View:", sensorArray); // [1000, 2000, 3000, 4000]

// 4. Modify the third sensor reading (3000 → 3500) using Buffer
sensorData.writeUInt16LE(3500, 4); // overwrite at byte 4

// SHARED MEMORY (Updation in buffer will reflect in TypedArray, as they share the same memory)
console.log("Updated TypedArray:", sensorArray); // [1000, 2000, 3500, 4000]

// 5. Save the updated buffer to a binary file
fs.writeFileSync("sensor_readings.bin", sensorData);

// -------------------------------------------------------------------------------------------------------------------------------

// The below code is same as the above code but with floating point numbers above is integer numbers

// 1. Create a buffer for 3 float values (4 bytes each)
const buf = Buffer.alloc(12); // 3 x 4 = 12 bytes

// 2. Write float values using Big Endian
buf.writeFloatBE(3.14, 0);
buf.writeFloatBE(6.28, 4);
buf.writeFloatBE(9.42, 8);

console.log("Buffer (float BE):", buf);

// 3. Save to file
fs.writeFileSync("floats.bin", buf);

// 4. Read back from file
const fileData = fs.readFileSync("floats.bin");

// 5. Use TypedArray to interpret data (requires Little Endian, so we'll swap manually or just use Buffer methods)
const f1 = fileData.readFloatBE(0);
const f2 = fileData.readFloatBE(4);
const f3 = fileData.readFloatBE(8);

console.log("Read back:", [f1, f2, f3]);
