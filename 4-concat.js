#!/usr/bin/node

const args = process.argv;

if (args[2] === undefined) {
  // No arguments, print nothing
} else if (args[3] === undefined) {
  // One argument
  console.log(args[2]);
} else {
  // Two arguments
  console.log(`${args[2]} is ${args[3]}`);
}
