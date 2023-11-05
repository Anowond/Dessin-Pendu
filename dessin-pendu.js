// Base de la potence
ctx.beginPath();
ctx.moveTo(25, 250);
ctx.lineTo(150, 250);
ctx.stroke();
ctx.closePath();

// Poutre 1 de la potence
ctx.beginPath();
ctx.moveTo(85, 250);
ctx.lineTo(85, 50);
ctx.stroke();
ctx.closePath();

// Poutre 2 de la potence
ctx.beginPath();
ctx.moveTo(85, 50);
ctx.lineTo(200, 50);
ctx.stroke();
ctx.closePath();

// Etai de la potence
ctx.beginPath();
ctx.moveTo(85, 100);
ctx.lineTo(140, 50);
ctx.stroke();
ctx.closePath();

// Corde de la potence
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(200, 85);
ctx.stroke();
ctx.closePath();

// Tête du pendu
ctx.beginPath();
ctx.arc(200, 105, 20, 0, 2 * Math.PI)
ctx.stroke();
ctx.closePath();

// Corps du pendu
ctx.beginPath();
ctx.moveTo(200, 125);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.closePath();

// Bras droit du pendu
ctx.beginPath();
ctx.moveTo(200, 135);
ctx.lineTo(170, 155);
ctx.stroke();
ctx.closePath();

// Bras gauche du pendu
ctx.beginPath();
ctx.moveTo(200, 135);
ctx.lineTo(230, 155);
ctx.stroke();
ctx.closePath();

// Jambe droite du pendu
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(170, 225);
ctx.stroke();
ctx.closePath();

// Jambe gauche du pendu
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(230, 225);
ctx.stroke();
ctx.closePath();