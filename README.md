## Stax_JS
Made by Max 2021 July 28th <br>
Stax_JS is a JavaScript library or framework for building statistics

*July 30th*
First stable release on github.
Added Stax_JS 1.0

# Getting started with Stax_JS

**Step 1**<br>
**Creating the base canvas**

The function createCanvas accepts 4 parameters **all optional**<br>

[canvas width, canvas height, bottom line on the canvas, canvas id]<br>
defaults to<br>
[400, 400, true, "staxCanvas"]<br>
<br>
```
createCanvas(400, 400, false, "staxCanvas");
```
<br>
this will create a 400x400 black canvas with the id staxCanvas<br><br>

**Step 2**<br>
**Adding all of the columns**

The next step is to add all of the columns.<br>
There are 3 available functions to do this.<br>
<br>
```
canvas.addColInfo(amuont);
canvas.addColMonths();
canvas.addColDays();
```
<br>
We're gonna go over the methods one by one.<br>
<br>
The first function `canvas.addColInfo(amount)` creates the amount of columns to the column object
```
canvas.addColInfo(24);
console.log(canvas.columns);
/*
canvas.columns = {
  0: {value: 0},
  1: {value: 0},
  2: {value: 0},
  3: {value: 0},
  ect...
  23: {value: 0},
};
*/
```
<br>
**Note: canvas.columns is 0 indexed**
