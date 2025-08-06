import * as fs from "node:fs";
import * as readline from "readline";
import { Transform } from "node:stream";

const [, , command, filePath, ...args] = process.argv;

const input = JSON.parse(args[0]);
console.log(`Input: ${input}`);

switch (command) {
  case "read":
    fs.createReadStream(filePath, { encoding: "utf8" }).pipe(process.stdout);
    break;
  case "write":
    fs.writeFile(filePath, args.join(" "), (err) => {
      if (err) throw err;
      console.log(`Data written to ${filePath}`);
    });
    break;
  case "append":
    fs.appendFile(filePath, args.join(" "), (err) => {
      if (err) throw err;
      console.log(`Data appended to ${filePath}`);
    });
    break;
  case "count-lines":
    let count = 0;
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath, { encoding: "utf8" }),
      crlfDelay: Infinity,
    });
    rl.on("line", (line) => {
      count++;
    });
    rl.on("close", () => {
      console.log(`Total lines: ${count}`);
    });
    break;
  case "uppercase":
    const out = fs.createWriteStream("uppercase_" + filePath);
    const upperCaseTransform = new Transform({
      transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
      },
    });
    fs.createReadStream(filePath).pipe(upperCaseTransform).pipe(out);
    break;

  default:
    console.log("Unknown command");
    break;
}
