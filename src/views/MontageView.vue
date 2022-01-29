<script>
import composantmenu_ from "../components/composantmenu.vue"
import router from '../router'
import compboitier from "../components/compboitier.vue"
import compalim from "../components/compalim.vue"


export default {
    name: 'MontageView',
    props: ['id', 'index'],
    data() {
        return {
            processeurChoisi: "",
            boitierChoisi: "",
            alimChoisi: "",
            ssdChoisi: "",
            cartemereChoisi: "",
            prixTotal:0
        }},
    methods: {
        // updateprocesseur(payload) {
        //     this.processeurChoisi = payload.message
        //     this.prixTotal += this.processeurChoisi.prix
        // },
        // updateboitier(payload) {
        //     this.boitierChoisi = payload.message  
        //     this.prixTotal += this.boitierChoisi.prix
        // },
        // updatealim(payload) {
        //     this.alimChoisi = payload.message
        //     this.prixTotal += this.alimChoisi.prix           
        // },
        // updatessd(payload) {
        //     this.ssdChoisi = payload.message
        //     this.prixTotal += this.ssdChoisi.prix   
        // },
        // updatecartemere(payload) {
        //     this.cartemereChoisi = payload.message
        //     this.prixTotal += this.cartemereChoisi.prix   
        //     console.log(this.cartemereChoisi)             
        // }
    },
    created() {
        console.log("montage view crée")

    },

    components: {
    router,
    composantmenu_,
    compalim,
    compboitier
}
}
</script>

<template>
    <div>
        <!-- <ul class=menuUl1>
            <li class="menuli1" v-if ="processeurChoisi != ''">{{ processeurChoisi.text }}
            <p class="prix" v-if="processeurChoisi.prix != null"> {{ processeurChoisi.prix }} €</p>
            <img v-if="processeurChoisi.img != ''" class="image" :src= processeurChoisi.img>
            </li>
            <li class="menuli1" v-if ="boitierChoisi != ''">{{ boitierChoisi.text }}
            <p class="prix" v-if="boitierChoisi.prix != null"> {{ boitierChoisi.prix }} €</p>
            <img v-if="boitierChoisi.img != ''" class="image" :src= boitierChoisi.img>
            </li>
            <li class="menuli1" v-if ="alimChoisi != ''">{{ alimChoisi.text }}
            <p class="prix" v-if="alimChoisi.prix != null"> {{ alimChoisi.prix }} €</p>
            <img v-if="alimChoisi.img != ''" class="image" :src= alimChoisi.img>
            </li>
            <li class="menuli1" v-if ="ssdChoisi != ''">{{ ssdChoisi.text }}
            <p class="prix" v-if="ssdChoisi.prix != null"> {{ ssdChoisi.prix }} €</p>
            <img v-if="ssdChoisi.img != ''" class="image" :src= ssdChoisi.img>
            </li>
            <li class="menuli1" v-if ="cartemereChoisi != ''">{{ cartemereChoisi.text }}
            <p class="prix" v-if="cartemereChoisi.prix != null"> {{ cartemereChoisi.prix }} €</p>
            <img v-if="cartemereChoisi.img != ''" class="image" :src= cartemereChoisi.img>
            </li>
            </ul> -->
            <!-- <h3>Prix Total = {{ prixTotal }} </h3> -->
        <composantmenu_></composantmenu_>
        <!-- <compboitier v-show="false" @boitierchoisi="updateboitier" /> -->
        <!-- <composantmenu_ v-if= "index == 3"></composantmenu_> -->
        <!-- <composantli_></composantli_> -->
    </div>
</template>
