# Introduction

The CA used for creating artworks is the most basic one, Wolfram CA or elmentary CA. The file `sketch.js` which is used by p5.js generates the artwork confined to the rules of the Wolfram CA. The code in `sketch.js` is a modified version found [in the p5.js website](https://p5js.org/examples/simulate-wolfram-ca.html).

# Modifications to the Code
I made changes to the code in an attempt to 'spice up' the automata a little bit. I drawn inspiration for some of these changes from the exercises found in [Nature of Code Website](https://natureofcode.com/book/chapter-7-cellular-automata/).

### Randomization of the Ruleset
Originally, the initial ruleset indicated in the original file is `{0,1,1,0,1,1,0,1}`. I have added a function below that will randomize the ruleset whenever the html reloads.
```js
function generateRuleset() {
  ruleset = [];
  for (let i = 0; i < 8; i++) {
    ruleset.push(Math.floor(Math.random() * 2));
  }
  return ruleset;
}
```
### Randomization of the First Generation
The initial array contained zeroes and a one in the middle of the array. I changed the algorithm to randomize the first row so we could explore more patterns. This is a snippet in the setup function.
```js
for (let i = 0; i < cells.length; i++) {
    cells[i] = Math.floor(Math.random() * 2);
}
```
### Changing the Shape
The Nature of Code chapter insinuates that we should not be bound by the shape of the cell. So I tried implementing hexagons instead. This is a snippet in the draw function.
```js
hexagon((generation%2) * w + 2 * i * w, generation * (w + 5), w, 1);
```
# Generated Artworks
### Proposed Name: Bee Colony
![Bee Colony](/artworks/beecolony.jpg)
Using the yellow and black color, I managed to create an artwork that looks like a swarm of bees. I also somehow look like the bees are in the shape of spaceships.

The ruleset used here is [1,0,0,0,0,0,0,1] or Rule 129.