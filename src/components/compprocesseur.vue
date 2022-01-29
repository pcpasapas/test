<template>  
            <div>
            <h4> "Choississez votre processeur, il sera sans doute le composant le plus cher mais aussi le plus important de votre config" </h4>
            <ul class=menuUl1>
            <li class="menuli1" v-for="(item) in menusproc_" @click="processeurok(item)">{{ item.text }}
            <p class="prix" v-if="item.prix != null"> {{ item.prix }} €</p>
            <img v-if="item.img != ''" class="image" :src= item.img>
            </li>
            </ul>
            </div>
</template>

<script>

const menusproc = [
    { 
        id: 51,
        id_supp:4,
        text_prog: "", 
        text:"Intel Core i3 minimum 3,7 GHz",
        prix:110,
        img: require("../assets/images/inteli3.jpg")
    },
    { 
        id: 52 ,
        id_supp:4,
        text_prog: "",
        text:"Intel Core i5 minimum 2,9 GHz",
        prix:180, 
        img: require("../assets/images/inteli5.jpg")
    },
    { 
        id: 53, 
        id_supp:4,
        text_prog: "",
        text:"Intel Core i5 minimum 3,5 GHz",
        prix:250,
        socket:"lga1151",
        img: require("../assets/images/inteli5.jpg")
    },
    { 
        id: 54 , 
        id_supp:4,
        text_prog: "",
        text:"AMD Ryzen 5 minimum 3,9 GHz",
        prix:265,
        img: require("../assets/images/amdryzen5.jpg")
    },
]
export default {
    name: 'compprocesseur', 
    props: {
        id:Number,
        menusproc: {
            default: menusproc
    }},
    data () {
      return {
          menusproc_:menusproc,
      }
    },
    methods: {
        processeurok(item) {
            console.log(item)
            this.$store.commit('UPDATE_PROCESSEUR',item)
            this.$store.commit('UPDATE_PRIX', item.prix)
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

