import { Duplex } from "stream";

const echo = new Duplex({
  read(size) {},
  write(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

process.stdin.pipe(echo).pipe(process.stdout);

// CODE EXPLANATION:

// 🔁 Step-by-Step Breakdown
// 1. process.stdin
// This is the standard input stream.

// It reads whatever the user types in the terminal.

// 2. .pipe(echo)
// This takes the input from stdin and pipes it into the echo stream (which is your custom Duplex stream).

// The echo stream modifies the input (converts it to uppercase in your case).

// 3. .pipe(process.stdout)
// Then the output of the echo stream is piped into process.stdout.

// stdout is the standard output — it prints the result back to the terminal.
