const greet = require("./greet");

if (require.main === module) {
  greet(process.argv[2]);
}
