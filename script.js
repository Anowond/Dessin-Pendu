
let canvas = document.createElement("canvas")
let button = document.getElementById("button")

/* Définition d'un tableau contenant des tableaux répertoriant les différentes coordonnées du dessin du pendu */

let pendu = [

    //base: 
    [25, 250, 150, 250],
    //poutre1: 
    [85, 250, 85, 50],
    //poutre2: 
    [85, 50, 200, 50],
    //etai: 
    [85, 100, 140, 50],
    //corde: 
    [200, 50, 200, 85],
    //corps: 
    [200, 125, 200, 200],
    //tête
    ["tete"],
    //Bdroit: 
    [200, 135, 170, 155],
    //Bgauche: 
    [200, 135, 230, 155],
    //Jdroit: 
    [200, 200, 170, 225],
    //Jgauche: 
    [200, 200, 230, 225]

];

/* Fonction de dessin de la tête du pendu à part */

// Tête du pendu

function dessinerTete() {

    ctx.beginPath();
    ctx.arc(200, 105, 20, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.closePath();

}

/* Création d'un fonction de dessin à l'intérieur du canvas, avec comme paramétres les différents tableaux de coordonnées eux-mêmes stockés dans le tableau pendu */

function dessinerPendu(tableau) {

    if (tableau == "tete") {

        dessinerTete();

    } else {

        ctx.beginPath();
        ctx.moveTo(tableau[0], tableau[1]);
        ctx.lineTo(tableau[2], tableau[3]);
        ctx.stroke();
        ctx.closePath();

    }

}

/* Création du canvas */

canvas.setAttribute("id", "canvas")
canvas.setAttribute("height", "300px")
canvas.setAttribute("width", "300px")
canvas.classList.add("canvas")
let ctx = canvas.getContext("2d")
body.appendChild(canvas)

button.addEventListener("click", () => {

    /* Décomposition du tableau des coorconnées et appel de la fonction de dessin (pour dessiner tout le pendu d'un coup) */

    pendu.forEach(element => {

        dessinerPendu(element)

    });

})





