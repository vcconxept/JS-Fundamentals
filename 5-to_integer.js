const args = process.argv;
const firstArg = args[2];

// Convert to integer using parseInt
const num = parseInt(firstArg, 10);

// Check if conversion to integer was successful
// isNaN(num) returns true if num is Not-a-Number
if (
  num === num &&
  !isNaN(num) &&
  firstArg !== undefined &&
  firstArg.trim() !== ""
) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
