const args = process.argv;

// Check if the third element exists (index 2), since 0=node, 1=script
if (args[2] === undefined) {
  console.log("No argument");
} else {
  console.log(args[2]);
}
