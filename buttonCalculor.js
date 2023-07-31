import { clonage } from "./utiliteur";

class ButtonCalculorNormal {
    constructor(objetHtml) {
        this.objetHtml = objetHtml;
    }

    getObjetHtml() {
        return this.objetHtml;
    }
    setObjetHtml(objet) {
        this.objetHtml = objet;
    }
    setColor(color) {
        this.color = color;
    }
    ecouterButton(entete) {
        let t = this.objetHtml;
        t.children[0].addEventListener('click', function () {
            if (entete.getObject().innerText == "") {
                if (t.children[0].children[0].innerText !== "+" && t.children[0].children[0].innerText !== "*") {
                    entete.getObject().appendChild(clonage(t.children[0].children[0]))
                }
            } else {
                if (t.children[0].children[0].innerText == "+" || t.children[0].children[0].innerText == "*" || t.children[0].children[0].innerText == ")" || t.children[0].children[0].innerText == "(") {
                    if (entete.getObject().children[entete.getObject().children.length - 1].innerText != "+" || entete.getObject().children[entete.getObject().children.length - 1].innerText != "*" || entete.getObject().children[entete.getObject().children.length - 1].innerText != ")" || entete.getObject().children[entete.getObject().children.length - 1].innerText != "(") {
                        entete.getObject().appendChild(clonage(t.children[0].children[0]))

                    } else {

                    }
                } else if (t.children[0].children[0].innerText != "+" || t.children[0].children[0].innerText != "*") {
                    if (entete.getObject().children[entete.getObject().children.length - 1].innerText == "+" || entete.getObject().children[entete.getObject().children.length - 1].innerText == "*" || entete.getObject().children[entete.getObject().children.length - 1].innerText == "(" || entete.getObject().children[entete.getObject().children.length - 1].innerText == ")") {

                        entete.getObject().appendChild(clonage(t.children[0].children[0]))
                    } else {


                    }
                }
            }
        });
        t.children[1].addEventListener('click', function () {
            if (entete.getObject().innerText == "") {
                if (t.children[1].children[0].innerText !== "+" && t.children[1].children[0].innerText !== "*") {
                    entete.getObject().appendChild(clonage(t.children[0].children[0]))
                }
            } else {
                if (t.children[1].children[0].innerText == "+" || t.children[1].children[0].innerText == "*" || t.children[1].children[0].innerText == ")" || t.children[1].children[0].innerText == "(") {
                    if (entete.getObject().children[entete.getObject().children.length - 1].innerText != "+" || entete.getObject().children[entete.getObject().children.length - 1].innerText != "*" || entete.getObject().children[entete.getObject().children.length - 1].innerText != ")" || entete.getObject().children[entete.getObject().children.length - 1].innerText != "(") {
                        entete.getObject().appendChild(clonage(t.children[1].children[0]))

                    } else {

                    }
                } else if (t.children[1].children[0].innerText != "+" || t.children[1].children[0].innerText != "*") {
                    if (entete.getObject().children[entete.getObject().children.length - 1].innerText == "+" || entete.getObject().children[entete.getObject().children.length - 1].innerText == "*" || entete.getObject().children[entete.getObject().children.length - 1].innerText == "(" || entete.getObject().children[entete.getObject().children.length - 1].innerText == ")") {

                        entete.getObject().appendChild(clonage(t.children[1].children[0]))
                    } else {


                    }
                }
            }

        });
    }

}





export { ButtonCalculorNormal }