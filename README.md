# Stax_JS
Made by Max 2021 July 28th <br>
Stax_JS is a JavaScript library or framework for building statistics


## Insturctions / Tutorial
These are the offical instructions for the Stax_JS framework / library <br>
Feel free to make your own version (make it better than this).<br>
<br>
To start a project you will first need your canvas.<br>
We have the createCanvas function for that.<br>
```JavaScript
const canvas = createCanvas(600, 400, "columnCanvas", "staxCanvas");
```

Let's go over the arguments, the **first 2 arguments** are the width and the height, in this example 600 and 400.<br>
The **third** argument is the type of canvas we want, there is only one canvas type at the moment of writing this and that is "columnCanvas" <br>
The **fourth** and **last** agument is the id of the canvas, this id only matters when styling the canvas outside of JavaScript.<br>
(The **2 last** agruments are optional)<br>
<br>
<br>
The next thing we will have to do is to add some columns, for this we have 4 different functions<br>
```JavaScript
canvas.addColDays();
canvas.addColInfo(5);
canvas.addColMonths();
canvas.addCols(...cols);
```
Let's go over all of the functions.<br>
**canvas.addColDays()** adds mon, tue, wed, etc... to the columns,<br>

**canvas.addColInfo(5)** adds the amount of columns specified in the first and only argument, for this example 0, 1, 2, 3, 4 **OBSERVE** it's 0 indexed,<br>
**canvas.addColMonths()** adds jan, feb, mar, apr, etc... to the columns,<br>
**canvas.addCols(...cols)** the most complicated function of all of these, addCols takes as many parameters as you like and adds each one to the columns, for example `canvas.addCols(week 1, week 2, week 3, week 4, week 5)`{:.JavaScript} will add week1, week2, week3, week4, week5 to the columns, **BUT** we could write the function much faster like this `canvas.addCols("$51week ");`. Let's go over what the first argument does the dollar sign ($) will add as many column items as the number after that shows in this example 5, and the number after that shows from where to start the iteration, everything after that is the name of each variable before the number. If you didn't understand this explanation please go mess around with the code example provided.
<br>
<br>

Now we need to set values for every single column, for this we have 3 different functions
```JavaScript
canvas.set(type, ...values);
canvas.setAll(value, type);
canvas.setIndividual(name, value, type)
```
As always we will go over the functions one by one.<br>
**canvas.set(type, ...values)** will set all of the columns values or colors to the values specified, for example `canvas.set("value", 100, 200, 300, 100, 150)` this will make week 1's value 100, week 2's value 200 and etc...<br>
**canvas.setAll(type, value)** will set all of the columns values or colors to the set value, for example `canvas.setAll(100, "value")` will make week 1's value 100, week 2's value, week 3's value<br>
**canvas.setIndividual(name, type, value)** this function takes 3 parameters, the name of the column variable, the value and the type, for example `canvas.setIndividual("week 1", "value", 100)`<br>
**OBSERVE**: You can switch the type which you problaby have set to value to color instead, then instead of the value argument (100 or any number you had) you can put a color.
<br>
<br>

Now we need to graphically display all of these columns, we have a bunch of display options available and the names of them are:
```JavaScript
canvas.bottomLine = true;
canvas.drawColLines();
canvas.drawCols();
canvas.rowSpacing = 20;
```
You already know the drill we're going to go over these functions and variables one by one.<br>
**canvas.bottomLine = true** this will activate the bottom line at the bottom of the canvas **OSBSERVE**: happens in the canvas.drawCols function so it will not be available by default.<br>
**canvas.drawColLines()** this function will draw all of the lines between the columns.<br>
**canvas.drawCols()** this function will draw all of the columns and the bottom line.<br>
**canvas.rowSpacing = 20** this variable will put a black line for every (in this example) 20 pixels height (1 pixel = 1 value).<br>
**OBSERVE**: You may put canvas.drawCols() after canvas.bottomLine and canvas.rowSpacing.
**Please go mix with these functions for yourself**

<br>
<br>
Other functions and variables that may be good to know.<br>

```JavaScript
canvas.add(name, value);
canvas.backgroundColor(color)
canvas.element;
canvas.fgcolor = "white";
canvas.get(name);
```

I don't even bother.<br>

**canvas.add(name, value)** will add the value specified to the variable name, `canvas.add("week 1", 50)` before: week 1's value = 100, after: week 1's value = 150 (also works with negative numbers).<br>
**canvas.backgroundColor(color)"**  this variable will set the background color of the canvas.<br>
**canvas.element** this variable is something you should not change because it may cause bugs in the project, but it's useful for styling for example `canvas.element.style.border = 3px solid orange;` will set the border of the canvas to be a 3px orange color.<br>
**canvas.fgcolor = "white** this variable will set the foreground color of the canvas.<br>
**canvas.get(name)** will return and object of the variable specified's values.<br>
<br><br>

## Thank You!
This is all there really is to Stax_JS, please report any bugs, typos and suggestions.
Thank you for using Stax_JS!
