<template>  
            <div>
            <h4> "Choississez votre alimentation, elle transmettra l'énergie nécessaire a votre ordinateur" </h4>
            <ul class=menuUl1>
            <li class="menuli1" v-for="(item) in menusalim_" @click="alimok(item)">{{ item.text }}
            <p class="prix" v-if="item.prix != null"> {{ item.prix }} €</p>
            <img v-if="item.img != ''" class="image" :src= item.img>
            </li>
            </ul>
            </div>
</template>

<script>

const menusalim = [
    { id: 401 , id_supp:3, puissance:400, text:"Alimentation standard 400w", prix:40, img: require("../assets/images/alimbasique.jpg") },
    { id: 402 , id_supp:3, puissance:600, text:"Alimentation gamer 600w", prix:60, img: require("../assets/images/alimgamer.jpg") },
]

export default {
    name: 'compalim', 
    props: {
        id:Number,
        menusalim: {
            default: menusalim
    }},
    data () {
      return {
          menusalim_:menusalim
      }
    },
    methods: {
    alimok(item) {
            console.log(item)
            this.$store.commit('UPDATE_ALIM',item)
            this.$store.commit('UPDATE_PRIX', item.prix)
        }
    },
    created() {
        if (this.$store.state.boitierchoisistore.alim === true ) {
            menusalim = []
        }
    },
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

