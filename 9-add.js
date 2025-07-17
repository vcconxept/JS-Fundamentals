#!/usr/bin/node

function add(a, b) {
  console.log(a + b);
}

const args = process.argv;
const a = parseInt(args[2], 10);
const b = parseInt(args[3], 10);

add(a, b);
