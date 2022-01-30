<template>  
            <div>
            <h4> "Choississez votre carte graphique" </h4>
            <ul class=menuUl1>
            <li class="menuli1" v-for="(item) in menuscg_" @click="cgok(item)">{{ item.text }}
            <p class="prix" v-if="item.prix != null"> {{ item.prix }} €</p>
            <img v-if="item.img != ''" class="image" :src= item.img>
            </li>
            </ul>
            </div>
</template>

<script>

import store from '../store/index'

const menuscg = [
    { 
        id: 81,
        id_supp:2,
        format:"pci-e 2.0",
        memoirevideo:"2 go",
        nbgpu:1,
        text:"MSI GeForce GT 730 N730K-2GD3H/LPV1",
        prix:100,
        img:require("../assets/images/msi730.jpg")
    },
    { 
        id: 82,
        id_supp:2,
        format:"pci-e 3.0",
        frequencebase:"1530mhz",
        memoirevideo:"6 go",
        nbgpu:0,
        text:"MSI - Geforce GTX 1660 - GAMING X - 6 Go",
        prix:350,
        img:require("../assets/images/msigtx1660.png")
        
    },

    { 
        id: 83, 
        id_supp:2,
        format:"atx",
        alim:"non",
        text:"Boitier gamer sans alimentation (prévoir de rajouter une alimentation prix minimum 40€)",
        prix:70,
        img:require('../assets/images/boitierGamer1.jpg')
    },
]
export default {
    name: 'compcg', 
    props: {
        id:Number,
        menuscg: {
            default: menuscg
    }},
    data () {
      return {
          menuscg_:menuscg
      }
    },
    methods: {
        cgok(item) {
            console.log(item)
            this.$store.commit('UPDATE_CG',item)
            this.$store.commit('UPDATE_PRIX', item.prix)
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

