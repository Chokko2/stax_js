## Stax_JS
Made by Max 2021 July 28th <br>
Stax_JS is a JavaScript library or framework for building statistics


# Insturctions
These are the offical instructions for the Stax_JS framework / library <br>
Feel free to make your own version (make it better than this).<br>
<br>
To start a project you will first need your canvas.<br>
We have the createCanvas function for that.<br>
```
createCanvas(600, 400, "columnCanvas", "staxCanvas");
```
Let's go over the arguments, the **first 2 arguments** are the width and the height, in this example 600 and 400.<br>
The **third** argument is the type of canvas we want, there is only one canvas type at the moment of writing this and that is "columnCanvas" <br>
The **fourth** and **last** agument is the id of the canvas, this id only matters when styling the canvas outside of JavaScript.<br>
(The **2 last** agruments are optional)<br>
<br>
<br>
The next thing we will have to do is to add some columns, for this we have 4 different functions
```
canvas.addColDays();
canvas.addColInfo(5);
canvas.addColMonths();
canvas.addCols(...cols);
```
Let's go over all of the functions.<br>
**canvas.addColDays()** adds mon, tue, wed, etc... to the columns,<br>
**canvas.addColInfo(5)** adds the amount of columns specified in the first and only argument, for this example 0, 1, 2, 3, 4 **OBSERVE** it's 0 indexed,<br>
**canvas.addColMonths()** adds jan, feb, mar, apr, etc... to the columns,<br>
**canvas.addCols(...cols)** the most complicated function of all of these, addCols takes as many parameters as you like and adds each one to the columns, for example `canvas.addCols(week 1, week 2, week 3, week 4, week 5)` will add week1, week2, week3, week4, week5 to the columns, **BUT** we could write the function much faster like this `canvas.addCols("$51week ");`. Let's go over what the first argument does the dollar sign ($) will add as many column items as the number after that shows in this example 5, and the number after that shows from where to start the iteration, everything after that is the name of each variable before the number. If you didn't understand this explanation please go mess around with the code example provided.
<br>
<br>