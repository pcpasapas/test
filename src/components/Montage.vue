<script>
import composantmenu_ from "./composantmenu.vue"
import composantli_ from "./composantli.vue"


export default {
    name: 'Montage_',
    data() {
        return {
    boitierChoisi: 'boitierChoisi.prix',
    boitierChoisiText:'boitierChoisiText',
    alimentationChoisi: 'alimentationChoisi.prix',
    processeurChoisi:'processeurChoisi.prix',
    carteMereChoisi:'carteMereChoisi.prix',
    prixTotal:'prixTotal',
    carteMereChoisiText:'carteMereChoisiText',
    menus:'menus',
    premierMenu_: 'premierMenu',
    alimentationChoisiText:'alimentationChoisiText',
    processeurChoisiText:'processeurChoisiText'
        }},

    components: {
    composantmenu_,
    composantli_
  }
}
console.log("java charge")
console.log("premierMenu_")


// function menuDepannage() {
//     document.querySelector('#montage').style.display ="none"
//     document.querySelector('#achat').style.display = "none"
//     document.querySelector('#depannage').style.display = "block"
// }

// function menuMontage() {
//     document.querySelector('#depannage').style.display ="none"
//     document.querySelector('#achat').style.display = "none"
//     document.querySelector('#montage').style.display = "grid"
// }

// function menuAchat() {
//     document.querySelector('#depannage').style.display ="none"
//     document.querySelector('#montage').style.display = "none"
//     document.querySelector('#achat').style.display = "block"
// }






var composants_boitier_modif = composants_boitier


var carteMereModif = carteMere








        var label = ''
        var menus= []
        var prixTotal= 0
        var prix_composant= 0
        var textMenu= ""
        var boitierChoisi= {prix:0, label:"Boitier", alim:true} 
        var boitierFormat=""
        var boitierChoisiText= ""
        var alimentationChoisi= {prix:0, label:"Alimentation"}
        var alimentationChoisiText=""
        var processeurChoisi= {prix:0, label:"Processeur"}
        var processeurChoisiText=""
        var carteMereChoisi= {prix:0, label:"Carte mère"}
        var carteMereChoisiText=""
        var carteMereFormat= ""
        var id_supp = 0
        var text_label = ""
        var texte =""
        var text_prog = []
    
// FONCTION POUR AFFICHER LE MENU PRINCIPAL

// FONCTION POUR CHOISIR LES ELEMENTS DES MENUS CACHES 

function choisir(id,e) {
    e.preventDefault()
    // RECUPERE LE MENU PRECEDENT POUR LE METTRE EN VERT
    console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement)
    var sib = e.currentTarget.parentElement.parentElement.parentElement.parentElement.previousSibling.previousSibling
    sib.style.backgroundColor = "green"
    //RECUPERE LE TEXTE DU BOITIER CHOISI ET L'ECRIT
    if (id > 400) {
        document.querySelector('#alimentations').style.backgroundColor = "green"
        alimentationChoisiText = e.currentTarget.children[0].innerHTML 
        console.log((parseInt(e.currentTarget.children[0].nextElementSibling.children[0].innerHTML)))
        alimentationChoisi.prix = (parseInt(e.currentTarget.children[0].nextElementSibling.children[0].innerHTML))
        prixTotal = prixTotal + alimentationChoisi.prix
    } else if (id > 40 && id < 50) {
        for (var i = 0; i < composants_boitier.length; i++) {
            if (composants_boitier[i].id == id) {
                document.querySelector('#composants_boitier_modif').style.backgroundColor = "green"
                boitierChoisi.prix = composants_boitier[i].prix
                prixTotal = prixTotal + boitierChoisi.prix
                boitierChoisiText = composants_boitier[i].text
                boitierFormat = composants_boitier[i].format
                boitierChoisi.alim = composants_boitier[i].alim
                console.log(boitierChoisi.alim)  
            }
        }
        if (!boitierChoisi.alim) {
        document.querySelector('#alimentations').style.backgroundColor ='rgb(62, 176, 180) '
        document.querySelector('#alimentations').style.pointerEvents = 'painted' }
        boitierModif()   
    } else if (id > 50 && id < 60) {
        document.querySelector('#processeur').style.backgroundColor = "green"
        processeurChoisiText= e.currentTarget.children[0].innerHTML    
        processeurChoisi.prix = (parseInt(e.currentTarget.children[0].nextElementSibling.children[0].innerHTML))
        prixTotal = prixTotal + processeurChoisi.prix   
    } else if (id > 60 && id < 70) {
        document.querySelector('#carteMereModif').style.backgroundColor = "green"
        carteMereChoisiText= e.currentTarget.children[0].innerHTML
        carteMereFormat= e.currentTarget.children[1].children[2].children[0].innerHTML
        carteMereChoisi.prix = (parseInt(e.currentTarget.children[0].nextElementSibling.children[0].innerHTML))
        prixTotal = prixTotal + carteMereChoisi.prix  
        carteMereModifs() 
    }

    e.currentTarget.parentElement.parentElement.parentElement.style.display = "none";

}

// FONCTION POUR OUVRIR LES ELEMENTS CACHES

function choixMenu(name) {
    // EFFACER LES SOUS MENUS 
    var z = document.querySelectorAll(".menuacache")
    for (var i = 0; i < z.length; i++) {
        z[i].style.display = "none"
    }
    // SELECTION DU BON ENDOIT OU METTRE LE MENU
    var y = name + "_menu"
    var x = document.querySelector('#' + y)

    x.style.display = "block"

    // METTRE LES VALEURS DANS APP MENU
    menus = eval(name)
}

// FONCTION QUI SUPPRIME LES COMPOSANTS

function supprimerComposant (compSupp,e) {
    var z = document.querySelectorAll(".menuacache")
    for (var i = 0; i < z.length; i++) {
        z[i].style.display = "none"
    }
    e.target.parentElement.parentElement.style.backgroundColor ="var(--bleu)"
    
    if(compSupp == "boitierChoisiText") {
        boitierChoisiText = ""
        prixTotal = prixTotal - boitierChoisi.prix
        boitierChoisi.prix = 0
        document.querySelector('#alimentations').style. pointerEvents = "none"
        document.querySelector('#alimentations').style.backgroundColor = "grey"
        // REMETTRE TOUTES LES CARTES MERES 
        carteMereModif = carteMere
    }else if (compSupp == "processeurChoisiText") {
        processeurChoisiText = ""
        prixTotal = prixTotal - processeurChoisi.prix
        processeurChoisi.prix = 0
    } else if (compSupp == "alimentationChoisiText") {
        alimentationChoisiText = ""
        prixTotal = prixTotal - alimentationChoisi.prix
        alimentationChoisi.prix = 0
    } else if (compSupp == "carteMereChoisiText") {
        carteMereChoisiText = ""
        prixTotal = prixTotal - carteMereChoisi.prix
        carteMereChoisi.prix = 0
        // REMETTRE TOUS LES BOITIERS
        composants_boitier_modif = composants_boitier
    }
    e.stopPropagation()
}

// FONCTION DE MODIF EN FONCTION DU BOITIER CHOISI
function boitierModif () {
    // MODIFIER LES CARTES MERES
    carteMereModif = []
    carteMere.forEach(function(item){
        if (item.format == boitierFormat){
            carteMereModif.push(item)
        }
    })  
}

// FONCTION DE MODIF EN FONCTION DE LA CARTE MERE CHOISIE
function carteMereModifs() {
    // MODIFIER LES BOITIERS 
    composants_boitier_modif = []
    console.log("fonction marche")
    composants_boitier.forEach(function(item){
        if (item.format == carteMereFormat){
            composants_boitier_modif.push(item)
        }
    console.log(composants_boitier_modif)
    })  
}

menus = premierMenu
 
const listePremierMenu = document.querySelector(".choixMenu");

const result = document.querySelector(".result")
const appHtml = document.querySelector("#app")
let tableauGeneral = premierMenu.concat(utilisation)
tableauGeneral = tableauGeneral.concat(budget)
tableauGeneral = tableauGeneral.concat(composants_boitier)
tableauGeneral = tableauGeneral.concat(alimentations)
tableauGeneral = tableauGeneral.concat(processeur)
tableauGeneral = tableauGeneral.concat(config_jeu)


const afficherResult = (id) => {
    let texte = ""
    let resultatHtml = document.querySelector(".resultat")
    if (resultatHtml.textContent != "") {
        resultatHtml = document.querySelector(".resultat_deux")
        if (resultatHtml.textContent != "") {
            resultatHtml = document.querySelector(".resultat_trois")
            if (resultatHtml.textContent != "") {
                resultatHtml = document.querySelector(".resultat_quatre")
    } } }
    for (var i=0 ; i < tableauGeneral.length ; i++) {
        if (id == tableauGeneral[i].id) {

            texte = tableauGeneral[i].text
            text_label = tableauGeneral[i].label
            text_prog = tableauGeneral[i].text_prog
            label = text_label;
            menus = text_prog;
            if (tableauGeneral[i].prix !=null) {
            prix_composant = tableauGeneral[i].prix
            prixTotal = prixTotal + tableauGeneral[i].prix
            }
            resultatHtml.id = id;
            id_supp = tableauGeneral[i].id_supp
            ecrireTextDansConfig(resultatHtml, texte, id_supp)

        }
    } }
    const choixBoitier = document.querySelector('.choixMenu')


    const afficherBoitier = (id) => {
        const choixMenus = document.querySelectorAll(".choixMenu");
        for (i=0; i < choixMenus.length; i++){
            choixMenus[i].hidden ="true"
            choixMenus[i].style.visibility ="hidden"
        }
        
        choixBoitier.style.visibility = "visible"
        
        for (var i=0 ; i < tableauGeneral.length ; i++) {
            if (id == tableauGeneral[i].id) {
                texte = tableauGeneral[i].text
                text_label = tableauGeneral[i].label
                // text_prog = tableauGeneral[i].text_prog
                label = text_label;
                menus = composants_boitier;
                if (tableauGeneral[i].prix !=null) {
                // app.prix_composant = tableauGeneral[i].prix
                // app.prixTotal = app.prixTotal + tableauGeneral[i].prix
                }
                // resultatHtml.id = id;
                id_supp = tableauGeneral[i].id_supp

    
            }
    } }


const ecrireTextDansConfig = (resultatHtml,texte, id_supp) => {
    result.style.display ="block"
    resultatHtml.innerHTML = 
        ` - ${texte} 
        <button class="button" id=${id_supp} onClick="supprimer(this.id, event)">X</button>
        <span class ="prix_composant" v-show="${prix_composant} != 0">${prix_composant} €</span>
        `
        
    prix_composant = 0;
}


const supprimer = (id, e) => {
    prixTotal = prixTotal - (parseInt(e.target.nextElementSibling.innerHTML))
    console.log(parseInt(e.target.nextElementSibling.innerHTML))
    if (id == 1){
        result.style.display = "none";
        document.querySelector(".resultat").innerHTML = ""
        label = label0;
        menus = premierMenu;
    } else if (id == 2 ) {
        document.querySelector(".resultat_deux").innerHTML =""
        const value = document.querySelector(".resultat").id
        menus = premierMenu[(value-1)].text_prog
    } else if (id == 3 ) {
        document.querySelector(".resultat_trois").innerHTML =""
        const value = document.querySelector(".resultat").id
        menus = premierMenu[(value-1)].text_prog    
    } else if (id == 4 ) {
        document.querySelector(".resultat_quatre").innerHTML =""
        const value = document.querySelector(".resultat").id
        menus = premierMenu[(value-1)].text_prog    
    }
}
console.log(label, menus, textMenu, boitierChoisiText,alimentationChoisiText, processeurChoisiText)
console.log(carteMereChoisiText,carteMereFormat,texte, listePremierMenu, appHtml,afficherResult)
console.log(choisir, choixMenu, supprimerComposant,afficherBoitier,supprimer)

</script>

<template>
    <div class="page" id="montage">
    <div class="hautGauche">
        <section style = "text-align: center; font-size: 1.5rem; margin-top: 10px;">Montage de votre ordinateur Pas à Pas<br>
            <p style = "text-align: center; font-size:1rem;">Certaines catégories sont grisées et ne sont pas disponibles, elles le seront suivant vos choix</p>
        </section>
    </div>
        <ul class="menuPrincipale">
            <composantmenu_></composantmenu_>
        </ul>
        <ul class="composants" style="display: none;">
            <li class="composant" id="composants_boitier_modif" onclick="choixMenu(this.id,event)">BOITIER
                <!-- <p class="composant_choisi" v-show="boitierChoisiText !=''"> {{ boitierChoisiText }} -->
                <p><button id="boitierChoisiText" v-show="boitierChoisiText !=''" onclick="supprimerComposant(this.id,event)">X</button></p>
            </li>
            
            <li class="composant" id="alimentations" onclick="choixMenu(this.id,event)">ALIMENTATION
                <!-- <p class="composant_choisi" v-show="alimentationChoisiText !=''"> {{ alimentationChoisiText }} -->
                <p><button id="alimentationChoisiText" v-show="alimentationChoisiText !=''" onclick=supprimerComposant(this.id,event)>X</button></p>
            </li>
            
            <li class="composant" id="processeur" onclick="choixMenu(this.id,event)">PROCESSEUR
                <!-- <p class="composant_choisi" v-show="processeurChoisiText !=''"> {{ processeurChoisiText }} -->
                <p><button id="processeurChoisiText" v-show="processeurChoisiText !=''" onclick=supprimerComposant(this.id,event)>X</button></p>
            </li>
            
            <li class="composant" id="carteMereModif" onclick="choixMenu(this.id,event)">CARTE MERE
                <!-- <p class="composant_choisi" v-show="carteMereChoisiText !=''"> {{ carteMereChoisiText }} -->
                <p><button id="carteMereChoisiText" v-show="carteMereChoisiText !=''" onclick=supprimerComposant(this.id,event)>X</button></p>
            </li>
            <li class="composant">STOCKAGE</li>
            
            <li class="composant">ACCESSOIRES</li>
            
        </ul>
        <nav class="menuacache" id="composants_boitier_modif_menu">
            <ul class="choixMenu">
                <composantli_ key="composants_boitier" :menus="menus"></composantli_>
            </ul>

        </nav>
            <nav class="menuacache" id="alimentations_menu">
                <ul class="choixMenu">
                    <composantli_ key="alimentations" :menus="menus"></composantli_>
                </ul>   
        </nav>
        
        <nav class="menuacache" id="processeur_menu">
            <ul class="choixMenu">
                <composantli_ key="processeur" :menus="menus"></composantli_>
            </ul>   
        </nav>

        <nav class="menuacache" id="carteMereModif_menu">
            <ul class="choixMenu">
                <composantli_ key="carteMere" :menus="menus"></composantli_>
            </ul>   
        </nav>
        

</div>
</template>