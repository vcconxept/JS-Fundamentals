const args = process.argv;

if (args[2] === undefined || args[3] === undefined) {
  console.log("Two arguments are required");
} else {
  console.log(`${args[2]} is ${args[3]}`);
}
