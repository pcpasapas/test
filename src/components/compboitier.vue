<template>  
            <div>
            <h4> "Choississez votre boitier, il constituera l'enveloppe de votre configuration" </h4>
            <ul class=menuUl1>
            <li class="menuli1" v-for="(item) in menusboitier_" @click="boitierok(item)">{{ item.text }}
            <p class="prix" v-if="item.prix != null"> {{ item.prix }} €</p>
            <img v-if="item.img != ''" class="image" :src= item.img>
            </li>
            </ul>
            </div>
</template>

<script>

import store from '../store/index'

const menusboitier = [
    { 
        id: 42,
        id_supp:2,
        format:"mAtx",
        alim:"oui",
        text:"Boitier simple (taille petite) avec alimentation",
        prix:45,
        img:require("../assets/images/boitierAvecAlim1.jpg")
    },
    { 
        id:41 , 
        id_supp:2, 
        format:"atx", 
        alim:"non",
        text:"Boitier simple (taille standard) sans alimentation (prévoir de rajouter une alimentation prix minimum 40€)",
        prix:70,
        img: require("../assets/images/boitierSimple1.jpg")
    },

    { 
        id: 43, 
        id_supp:2,
        format:"atx",
        alim:"non",
        text:"Boitier gamer sans alimentation (prévoir de rajouter une alimentation prix minimum 40€)",
        prix:70,
        img:require('../assets/images/boitierGamer1.jpg')
    },
]
export default {
    name: 'compboitier', 
    props: {
        id:Number,
        menusboitier: {
            default: menusboitier
    }},
    data () {
      return {
          menusboitier_:menusboitier
      }
    },
    methods: {
        boitierok(item) {
            console.log(item)
            this.$store.commit('UPDATE_BOITIER',item)
            this.$store.commit('UPDATE_PRIX', item.prix)
            if (item.id === 42){
                this.$store.commit('UPDATE_ALIM',0)
            }
            // this.$emit('boitierChoisi', {message: item})

        }
    }
}   
</script>

<style>
:root {
    --bleu: rgb(62, 176, 180);
    --bleufonce: rgb(71, 8, 243);
}
.menuUl1 {
    list-style-type: none;
    justify-content: space-around;
    display: flex;
    background-color: rgb(62, 176, 180);
    border-radius: 20px;
    margin-top: 0px
}
.menuli1 {
    border: 1px solid black;
    text-align: center;
    border-radius: 20px;
    list-style-type: none;
    background-color: white;
    display: grid;
    margin: 10px;
    padding: 10px;
    max-width: 200px;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    transition: transform 0.5s;
    cursor:pointer;
}

.menuli1:hover {
    transform: scale(1.1);
}

.image {
    display: grid;
    width: 100px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    grid-area: "image";
}
.prix, .prix_label{
    font-weight: bold;
    font-size: 1.3rem;
    display: grid;
}
</style>

