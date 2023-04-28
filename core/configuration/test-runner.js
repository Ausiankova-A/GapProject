const Mocha = require("mocha");
const fs = require("fs");
const path = require("path");
const argv = require("yargs").argv;

const testDir = "./core/test";

const mocha = new Mocha({
  timeout: 10000,
});

switch (argv.suite) {
  case "smoke":
    mocha.grep(/smoke/);
    break;
  case "bla":
    mocha.grep(/bla/);
    break;
}

fs.readdir(testDir, (err, files) => {
  if (err) console.log(err);
  else {
    files
      .filter((file) => file.endsWith(".test.js"))
      .map((file) => path.join(testDir, file))
      .forEach((file) => {
        mocha.addFile(file);
      });
  }
  mocha.run((failures) => (process.exitCode = failures ? 1 : 0));
});
