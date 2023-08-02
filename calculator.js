import { clonage } from "./utiliteur";
// convention de nomage camelCase
// l'entete du calculator
class enteteCalulator {
    constructor(objetHtml) {
        this._objetHtml = objetHtml;
    }
    AddValue(valeur) {
    }
    getValue() {
        let affiche = this._objetHtml;
        let proposition = [];
        let expression = [];
        let resultat = []
        for (let index = 0; index < affiche.children.length; index++) {

            if (affiche.children[index].innerText != "+" && affiche.children[index].innerText != "*" && affiche.children[index].innerText != ")" && affiche.children[index].innerText != "(") {

                if (affiche.children[index].style['border-top-color'] == "black") {

                    proposition.push("-" + affiche.children[index].innerText);

                } else {
                    proposition.push(affiche.children[index].innerText);
                }

            }


        }
        alert(proposition)


        // separation des elements
        return [proposition, expression];

    }
    getObject() {
        return this._objetHtml;
    }
}



/// calculator

class calculator {
    constructor(entete, objetHtml, buttons) {
        this.listButton = buttons;
        this._entete = entete;
        this._objetHtml = objetHtml;
    }

    productionTableDeVerite() {
        return this._entete.getValue()[0];


    }
    affichageTableDeVerite(tableAffichage) {

    }

    ecouterActionButtonNormal() {

        let tampo = this._entete;
        for (let i = 0; i < this.listButton.length - 1; i++) {
            this.listButton[i].ecouterButton(tampo);
        }

    }

    ecouterActionButtonOperator() {
        let tam = this._entete;
        this.listButton[this.listButton.length - 1].getObjetHtml().addEventListener('click', function () {
            alert(tam.getValue()[0])
        })

    }






}
export { enteteCalulator, calculator }