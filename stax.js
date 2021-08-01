class Canvas {
	// TESTING TESTING @Chokko2
	constructor() {
		// The id of the canvas
		this.id = null;

		// The colors for the canvas
		this.bgcolor = "black";
		this.fgcolor = "white";

		// The width and height properties
		this.width = 0;
		this.height = 0;

		// The element e.g document.getElementById(this.id);
		this.element = null;

		//  The drawing context for the canvas
		this.ctx = null;

		// How many columns we have
		this.cols = null;

		// How much spacing we have for every column
		// this.width / this.cols
		this.spacing = null;

		// All of the columns info
		this.columns = {};

		// If there's a bottom line that shows all of the names
		this.bottomLines = false;

		// If there's rowspacing and if so how much
		this.rowSpacing = null;
	}

	/**
	 * Set the width of the canvas
	 * @param {Number} width The width of the canvas
	 */
	// A function to set the width of the canvas
	setWidth(width = 400) {
		this.width = width;
		this.element.width = this.width;
	}

	/**
	 * Set the height of the canvas
	 * @param {Number} height The height of the canvas
	 */
	// A function to set the height of the canvas
	setHeight(height = 400) {
		this.height = height;
		this.element.height = this.height;
		this.endValue = this.height;
	}

	/**
	 * Set the amount of columns and the column spacing
	 * @param {Number} amount The amount of cols to add / the amount of spacing to add
	 * @param {String} type The type of the cols / spacing to add
	 */
	// Set the amount of columns
	setCols(amount, type = "amount") {
		if (type === "amount") {
			this.cols = amount;
			this.spacing = this.width / amount;
		} else if (type === "spacing") {
			this.cols = Math.round(this.width / amount);
			this.spacing = amount;
		}
	}

	/**
	 * Draw all of the column lines between the columns
	 */
	// Draw of all the column lines
	drawColLines() {
		for (let i = 0; i < this.cols; i++) {
			this.ctx.beginPath();
			this.ctx.rect(i * this.spacing + this.spacing - 1, 0, 2, this.height);
			this.ctx.fillStyle = this.fgcolor;
			this.ctx.fill();
			this.ctx.closePath();
		}
	}


	/**
	 * Add all of the column info
	 */
	// Add a column value for every column
	addColInfo(n) {
		this.setCols(n);
		for (let i = 0; i < this.cols; i++) {
			this.columns[i] = { "value": 0, "color": this.fgcolor };
		}
	}

	/**
	 * Add all of the months to the columns
	 */
	// Add all of the months to the columns
	addColMonths() {
		this.setCols(12);
		this.columns["jan"] = { "value": 0, "color": this.fgcolor };
		this.columns["feb"] = { "value": 0, "color": this.fgcolor };
		this.columns["mar"] = { "value": 0, "color": this.fgcolor };
		this.columns["apr"] = { "value": 0, "color": this.fgcolor };
		this.columns["may"] = { "value": 0, "color": this.fgcolor };
		this.columns["jun"] = { "value": 0, "color": this.fgcolor };
		this.columns["jul"] = { "value": 0, "color": this.fgcolor };
		this.columns["aug"] = { "value": 0, "color": this.fgcolor };
		this.columns["sep"] = { "value": 0, "color": this.fgcolor };
		this.columns["oct"] = { "value": 0, "color": this.fgcolor };
		this.columns["nov"] = { "value": 0, "color": this.fgcolor };
		this.columns["dec"] = { "value": 0, "color": this.fgcolor };
	}

	/**
	 * Add all of the days to the columns
	 */
	// Add all of the days to the columns
	addColDays() {
		this.setCols(7);
		this.columns["mon"] = { "value": 0, "color": this.fgcolor };
		this.columns["tue"] = { "value": 0, "color": this.fgcolor };
		this.columns["wed"] = { "value": 0, "color": this.fgcolor };
		this.columns["thu"] = { "value": 0, "color": this.fgcolor };
		this.columns["fri"] = { "value": 0, "color": this.fgcolor };
		this.columns["sat"] = { "value": 0, "color": this.fgcolor };
		this.columns["sun"] = { "value": 0, "color": this.fgcolor };
	}

	/**
	 * Draw all of the columns, draw the bottom line, draw the row spacing
	 */
	// Draw all of the columns
	drawCols() {
		let i = 0;
		// Loop through all of the names in the columns
		for (const key in this.columns) {
			// if this.bottomLines is defined
			if (this.bottomLines) {
				// Draw the column
				this.ctx.beginPath();
				this.ctx.rect(
					i * this.spacing + 5,
					this.height - this.columns[key].value - 24,
					this.spacing - 10,
					this.columns[key].value);
				this.ctx.fillStyle = this.columns[key].color;
				this.ctx.fill();
				this.ctx.closePath();



				// Draw the bottom line
				this.ctx.beginPath();
				this.ctx.fillRect(
					0,
					this.height - 20,
					this.width,
					2
				);
				this.ctx.fillStyle = this.fgcolor;
				this.ctx.fill();
				this.ctx.closePath();



				// Draw all of the names for the columns
				this.ctx.beginPath();
				this.ctx.fillStyle = this.fgcolor;
				this.ctx.font = "20px Monospace";
				this.ctx.textAlign = "center"
				this.ctx.fillText(
					key,
					i * this.spacing + this.spacing / 2,
					this.height - 3,
					this.spacing / 3 * 2
				);
				this.ctx.closePath();



				// Else if there are no bottomlines
			} else if (!this.bottomLines) {
				// Draw all of the columns
				this.ctx.beginPath();
				this.ctx.rect(
					i * this.spacing + 5,
					this.height - this.columns[key].value,
					this.spacing - 10,
					this.columns[key].value);
				this.ctx.fillStyle = this.columns[key].color;
				this.ctx.fill();
				this.ctx.closePath();
			}

			// If there's rowspacing
			if (this.rowSpacing) {
				// Draw all of the rowspacing lines
				let j = this.height;

				if (this.bottomLines) j -= 24;

				while (j > 0) {
					this.ctx.beginPath();
					this.ctx.rect(
						i * this.spacing + 5,
						j,
						this.spacing - 10,
						1
					);
					this.ctx.fillStyle = this.bgcolor;
					this.ctx.fill();
					this.ctx.closePath();

					j -= this.rowSpacing;
				}
			}

			i++;
		}
	}

	/**
	 * Returns the variable inserted
	 * @param {String} name The name of the variable you want to get
	 * @returns canvas.columns[name]
	 */
	get(name) {
		return canvas.columns[name];
	}

	/**
	 * Sets the variable's value to the value inserted.
	 * @param {String} name The name of the varible
	 * @param {Number} value The value you want to change the variable to
	 * @param {String} type What you want to change, value or color
	 */
	set(name, value, type = "value") {
		if (type === "value") canvas.columns[name].value = value;
		else if (type === "color") canvas.columns[name].color = value;
	}

	/**
	 * Add the value inserted to the variables value
	 * @param {String} name The name of the varible
	 * @param {Number} value The value you want to add to the variable
	 */
	add(name, value) {
		canvas.columns[name].value += value;
	}
}

let canvas;

/**
 * Create the stax canvas
 * @param {Number} width The width of the canvas
 * @param {Number} height The height of the canvas
 * @param {String} type The type of the canvas
 * @param {Boolean} bottomLines Add bottomLines
 * @param {String} id The id of the canvas
 */
// A function to create a new canvas
const createCanvas = function(width, height, type = "columnCanvas", bottomLines = true, id = "staxCanvas") {
	// Create a canvas and give it the id of the id provided
	const c = document.createElement("canvas");
	c.setAttribute("id", id);

	// Append the canvas to the body
	document.body.appendChild(c);

	if (type === "columnCanvas") {
		canvas = new Canvas();
	}

	// Set all of the canvas variables
	canvas.id = id;
	canvas.element = document.getElementById(canvas.id);
	canvas.ctx = canvas.element.getContext("2d");

	canvas.element.style.backgroundColor = canvas.bgcolor;

	canvas.setWidth(width);
	canvas.setHeight(height);

	canvas.bottomLines = bottomLines;
}
