function clonage(objet) {
    let nouveau = document.createElement("strong");
    nouveau.innerHTML = objet.innerText;
    nouveau.style["border-top"] = objet.style['border-top'];

    return nouveau;
}
function inverseur(prop, expre) {

    expre.forEach(function (value, key) {
        if (key.length > 1) {
            let temp = [].concat(prop.get(key[1]))
            expre.set(key, temp.reverse())

        } else {
            expre.set(key, prop.get(key))
        }
    })

    return expre
}




function tableDeVerite(propositions, expression) {

    let taille = 2 ** propositions.length;
    let n;
    let mapProp = new Map();
    let expre = new Map()

    for (let index = 0; index < propositions.length; index++) {
        n = (taille / 2 ** (index + 1));
        let c = 1;
        let m = [];
        for (let j = 0; j < 2 ** (index + 1); j++) {
            c = (c == 1) ? 0 : 1;
            for (let k = 0; k < n; k++) {
                m.push(c);


            }

        }

        mapProp.set(propositions[index], m)


    }

    for (prop in expression) {
        alert(expression[prop])
        expre.set(expression[prop], [])
    }


    let clona = inverseur(mapProp, expre)
    clona.forEach(function (value, key) {
        //alert(key + ':' + value)
    })


    return clona

}



function calculBinaire(tab, i) {
    alert(i);
    let k = i + 1;

    if (tab.length >= k) {
        if (tab[k] == "+") {
            return parseInt(tab[i]) | resulatat(tab, k + 1);
        } else if (tab[k] == "*") {
            return parseInt(tab[i]) & resulatat(tab, k + 1);

        }


    } {
        return parseInt(tab[i]);
    }





}

// utilisation pour la suppression personnalisée
function supprimer(tabAsupprimer, debut, fin) {

    remplacement = []

    for (let i = debut; i <= fin; i++) {
        tabAsupprimer[i] = "";


    }
    tabAsupprimer[debut] = "R";



    for (let j = 0; j < tabAsupprimer.length; j++) {
        if (tabAsupprimer[j] != "") {
            remplacement.push(tabAsupprimer[j])
        }
    }
    tabAsupprimer = remplacement;
    return tabAsupprimer;

}


// traitement des parenthèses
function traitementPriorite(expression, dico) {

    if (expression.includes("(") != false) {

        let ind = 0;
        tab = []
        prop = []
        index = expression.indexOf(")")
        for (let i = 0; i < index; i++) {
            if (expression[i] == "(") {
                inde = i;
            }
        }
        for (let j = inde; j <= index; j++) {
            tab.push(expression[j])
        }
        alert(inde + "--" + index)
        alert(expression)



        expression = supprimer(expression, inde, index);


        dico.push(tab);

        priorite(expression, dico);


    } else {

        return dico;
    }
}
// ajout de la bare dans une proposition pour signifier l'inverse de celle ci

function bar(listEnfants, parent) {
    let nouveau = document.createElement("a");

    if (parent.children.length >= 3) {
        let ta = [];
        for (var i = listEnfants.length - 1; i >= 0; i--) {

            ta.push(listEnfants[i]);
        }

        for (var i = ta.length - 1; i >= 0; i--) {
            nouveau.appendChild(ta[i]);
        }
        parent.appendChild(nouveau);

    }
}


export { clonage, calculBinaire, inverseur, tableDeVerite, traitementPriorite, supprimer,bar }