// ✅ Required for working with paths in ES modules
import { writeFile } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath, pathToFileURL } from "url";

// ✅ Define __dirname manually in ES modules (As in ES module we don't have __dirname directly like in common.js)
const __dirname = dirname(fileURLToPath(import.meta.url));

// ✅ Convert file path to file URL string for import()
const usersDataPromise = import(
  pathToFileURL(join(__dirname, "../Data/users.json")).href,
  {
    assert: { type: "json" },
  }
);

const users = async (req, res) => {
  const { url, method } = req;

  if (method === "GET" && url === "/users") {
    try {
      const module = await usersDataPromise;
      const data = module.default; // JSON data is under `default`

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  } else if (method === "POST" && url === "/users") {
    try {
      const module = await usersDataPromise;
      const data = module.default;

      // Assuming the request body is JSON
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", async () => {
        const newUser = JSON.parse(body);
        data.push(newUser);
        // with the line we can write the data to the existing JSON file
        await writeFile("./Data/users.json", JSON.stringify(data, null, 2));
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "user added", user: newUser }));
      });
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
};

export default users;
