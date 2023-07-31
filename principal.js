import { ButtonCalculorNormal } from "./buttonCalculor.js"
import { enteteCalulator, calculator } from "./calculator.js"

let affichage = document.getElementById('affichage');
let calculatorObjet = document.getElementById('calculor');
let h = document.getElementById("barb");
let parar = document.getElementById("para");
let b1 = document.getElementsByClassName('b1');
let b2 = document.getElementsByClassName('b2');
let button = document.getElementsByClassName('buttonB');
//**initialisation */
// creation button 
let listButtons = []
for (let i = 0; i < button.length; i++) {

    listButtons.push(new ButtonCalculorNormal(button[i]));
}
alert(listButtons[0].getObjetHtml().children[0].innerText);
//creation de la tete du calculatrice
let calculatorEntete = new enteteCalulator(affichage)

// creation du calculator
let calculato = new calculator(calculatorEntete, calculatorObjet, listButtons);

// lancement de l'application   
calculato.ecouterActionButtonNormal();
calculato.ecouterActionButtonOperator();




