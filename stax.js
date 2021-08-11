class Canvas {
	constructor() {
		this.bgcolor = "black";
		this.fgcolor = "white";
		this.bottomLine = false;
		this.rowSpacing = null;
		// ! DO NOT CHANGE THESE VARIABLES OUTSIDE OF BLOCKS
		this.width = 0;
		this.height = 0;
		this.element = null;
		this.ctx = null;
		this.cols = null;
		this.spacing = null;
		this.columns = {};
		this.id = null;
	}

	add(name, value) {
		this.columns[name].value += value;
	}

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

	addColInfo(n) {
		this.setCols(n);
		for (let i = 0; i < this.cols; i++) {
			this.columns[i] = { "value": 0, "color": this.fgcolor };
		}
	}

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

	addCols(...names) {
		if (names[0].startsWith("$")) {
			this.setCols(names[0][1]);
			for (let i = names[0][2]; i < Number(names[0][1]) + Number(names[0][2]); i++) {
				this.columns[`${names[0].slice(3)}${i.toString()}`] = { "value": 0, "color": this.fgcolor };
			}
		} else {
			this.setCols(names.length);
			for (let name of names) {
				this.columns[name] = { "value": 0, "color": this.fgcolor };
			}
		}
	}

	center() {
		this.element.style.position = "absolute";
		this.element.style.left = "50%";
		this.element.style.top = "50%";
		this.element.style.marginLeft = `-${this.width / 2}px`;
		this.element.style.marginTop = `-${this.height / 2}px`;
	}

	drawColLines() {
		for (let i = 0; i < this.cols; i++) {
			this.ctx.beginPath();
			this.ctx.rect(i * this.spacing + this.spacing - 1, 0, 2, this.height);
			this.ctx.fillStyle = this.fgcolor;
			this.ctx.fill();
			this.ctx.closePath();
		}
	}

	// ? SHOULD I MAKE SEPARATE DRAW BOTTOM LINE
	drawCols() {
		let i = 0;
		for (const key in this.columns) {
			if (this.bottomLine) {
				this.ctx.beginPath();
				this.ctx.rect(
					i * this.spacing + 5,
					this.height - this.columns[key].value - 24,
					this.spacing - 10,
					this.columns[key].value);
				this.ctx.fillStyle = this.columns[key].color;
				this.ctx.fill();
				this.ctx.closePath();



				this.ctx.beginPath();
				this.ctx.rect(
					0,
					this.height - 20,
					this.width,
					2
				);
				this.ctx.fillStyle = this.fgcolor;
				this.ctx.fill();
				this.ctx.closePath();



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



			} else if (!this.bottomLine) {
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

			if (this.rowSpacing) {
				let j = this.height;

				if (this.bottomLine) j -= 24;

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

	get(name) {
		return this.columns[name];
	}

	set(type, ...values) {
		let i = 0;
		for (let key in this.columns) {
			if (i > values.length) break;

			if (type === "value") this.columns[key].value = values[i];
			else if (type === "color") this.columns[key].color = values[i];

			i++;
		}
	}

	setAll(type = "value", value) {
		for (let key in this.columns) {
			if (type === "value") this.columns[key].value = value;
			else if (type === "color") this.columns[key].color = value;
		}
	}

	// ! OUTDATED AND USED BY OTHER CODE BLOCKS, DO NOT USE IN CODE
	setCols(amount, type = "amount") {
		if (type === "amount") {
			this.cols = amount;
			this.spacing = this.width / amount;
		} else if (type === "spacing") {
			this.cols = Math.round(this.width / amount);
			this.spacing = amount;
		}
	}

	// ! CAN MAKE THE PROJECT WEIRD AND BUGGY IF USED, DO NOT USE IN CODE
	setHeight(height = 400) {
		this.height = height;
		this.element.height = this.height;
		this.endValue = this.height;
	}

	setIndividual(name, type = "value", value) {
		if (type === "value") this.columns[name].value = value;
		else if (type === "color") this.columns[name].color = value;
	}

	// ! CAN MAKE THE PROJECT WEIRD AND BUGGY IF USED, DO NOT USE IN CODE
	setWidth(width = 400) {
		this.width = width;
		this.element.width = this.width;
	}
}

let canvas;

const createCanvas = function(width, height, type = "columnCanvas", id = "staxCanvas") {
	const c = document.createElement("canvas");
	c.setAttribute("id", id);

	document.body.appendChild(c);

	if (type === "columnCanvas") {
		canvas = new Canvas();
	}

	canvas.id = id;
	canvas.element = document.getElementById(canvas.id);
	canvas.ctx = canvas.element.getContext("2d");

	canvas.element.style.backgroundColor = canvas.bgcolor;

	canvas.setWidth(width);
	canvas.setHeight(height);
}
