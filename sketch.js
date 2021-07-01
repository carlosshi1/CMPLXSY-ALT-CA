
let w = 10;
// An array of 0s and 1s
let cells;

 // We arbitrarily start with just the middle cell having a state of "1"
let generation = 0;

// An array to store the ruleset, for example {0,1,1,0,1,1,0,1}
let ruleset = [];

function setup() {
  createCanvas(1000, 700);
  ruleset = generateRuleset();
  console.log(ruleset);
  cells = Array(floor(width / w));

  for (let i = 0; i < cells.length; i++) {
    cells[i] = Math.floor(Math.random() * 2);
  }
  console.log(cells)

  // for (let i = 0; i < cells.length; i++) {
  //   cells[i] = 0;
  // }
  // cells[cells.length/2] = 1;
}

function draw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === 0) {
      // fill(200);
      fill('black')
    } else {
      r = random(100); // r is a random number between 0 - 255
      g = random(0); // g is a random number betwen 100 - 200
      b = random(150); // b is a random number between 0 - 100

      fill(r,g,b);
      // fill('yellow')
    }
    hexagon((generation%2) * w + 2 * i * w, generation * (w + 5), w);
  }
  if (generation < height/w) {
    generate();
  }
}

// The process of creating the new generation
function generate() {
  // First we create an empty array for the new values
  let nextgen = Array(cells.length);
  // For every spot, determine new state by examing current state, and neighbor states
  // Ignore edges that only have one neighor
  for (let i = 1; i < cells.length-1; i++) {
    let left   = cells[i-1];   // Left neighbor state
    let me     = cells[i];     // Current state
    let right  = cells[i+1];   // Right neighbor state
    nextgen[i] = rules(left, me, right); // Compute next generation state based on ruleset
  }
  // The current generation is the new generation
  cells = nextgen;
  generation++;
}


// Implementing the Wolfram rules
// Could be improved and made more concise, but here we can explicitly see what is going on for each case
function rules(a, b, c) {
  if (a == 1 && b == 1 && c == 1) return ruleset[0];
  if (a == 1 && b == 1 && c == 0) return ruleset[1];
  if (a == 1 && b == 0 && c == 1) return ruleset[2];
  if (a == 1 && b == 0 && c == 0) return ruleset[3];
  if (a == 0 && b == 1 && c == 1) return ruleset[4];
  if (a == 0 && b == 1 && c == 0) return ruleset[5];
  if (a == 0 && b == 0 && c == 1) return ruleset[6];
  if (a == 0 && b == 0 && c == 0) return ruleset[7];
  return 0;
}

function generateRuleset() {
  ruleset = [];
  for (let i = 0; i < 8; i++) {
    ruleset.push(Math.floor(Math.random() * 2));
  }
  return ruleset;
}