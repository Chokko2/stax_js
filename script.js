createCanvas(400, 600, true, "staxCanvas");

canvas.addDays();

canvas.rowSpacing = 25;

canvas.columns["mon"].value = 200;
canvas.columns["tue"].value = 120;
canvas.columns["wed"].value = 350;
canvas.columns["thu"].value = 470;
canvas.columns["fri"].value = 250;
canvas.columns["sat"].value = 550;
canvas.columns["sun"].value = 300;

canvas.drawCols();