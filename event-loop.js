const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", "utf8", () => {
  console.log(Date.now() - start, "I/O FINISHED");
  console.log("********************");
  setTimeout(() => console.log(Date.now() - start, "Timer 2 finished"), 0);
  setTimeout(() => console.log(Date.now() - start, "Timer 3 finished"), 3000);
  setImmediate(() => console.log(Date.now() - start, "Immediate 2 finished"));

  process.nextTick(() => console.log(Date.now() - start, "Process.nextTick"));

  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
});

console.log(Date.now() - start, "Hello From the top level code");
