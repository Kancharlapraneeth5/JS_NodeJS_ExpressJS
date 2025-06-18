import dotenv from "dotenv";
dotenv.config();

const [, , nameArg, ageArg] = process.argv;

if (!nameArg || !ageArg) {
  console.error(
    "Please provide both name and age arguments in the format: name=YourName age=YourAge"
  );
  process.exit(1);
}
console.log(`${process.env.APP_NAME} v${process.env.VERSION}`);
console.log(
  `Hello, ${nameArg.split("=")[1]}! You are ${ageArg.split("=")[1]} years old.`
);
console.log("Memory:", process.memoryUsage().heapUsed / 1024 / 1024, "MB");
