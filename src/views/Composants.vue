<template>
    <div> 
        <comppanier></comppanier>           
        <compboitier
        :alim=alimChoisi 
        v-if ="this.$store.state.boitierchoisistore === ''">
        </compboitier>        
        <compalim 
        v-if ="this.$store.state.alimchoisistore === ''"
        @delete="deleteAlim">
        </compalim>
        <compprocesseur 
        :cartemere=cartemereChoisi
        v-if ="this.$store.state.processeurchoisistore === ''"
        @delete="deleteprocesseur">
        </compprocesseur>
        <compcartemere 
        :processeur=processeurChoisi
        v-if ="this.$store.state.cartemerechoisistore === ''"
        @delete="deletecartemere">
        </compcartemere>
        <compssd v-if ="this.$store.state.ssdchoisistore === ''"></compssd>
        <compcg v-if ="this.$store.state.cgchoisistore ===''"></compcg>
    </div>
</template>

<script>
import compcg from '../components/compcg.vue'
import comppanier from '../components/comppanier.vue'
import compprocesseur from "../components/compprocesseur.vue"
import compcartemere from "../components/compcartemere.vue"
import compboitier from "../components/compboitier.vue"
import compalim from "../components/compalim.vue"
import compssd from '../components/compssd.vue'




export default {
    name: 'MontageView',
    props: ['id', 'index'],
    data() {
        return {
            name: "composants",
            boitierChoisi:"",
            processeurChoisi:"",
            alimChoisi:"",
            ssdChoisi:"",
            cartemereChoisi:"",
            prixTotal:0,
            item:"tester",
        }},
    computed: {
    },
    methods: {
        deleteAlim(item) {
            this.alimChoisi = item
            },
        deletecartemere(item) {
            this.cartemereChoisi = item
        },
        deleteprocesseur(item) {
            this.processeurChoisi = item
        }
        
        },    
    created() {
        
    },

    components: {
    compprocesseur,
    compcartemere,
    compboitier,
    compalim,
    compssd,
    comppanier,
    compcg
  }
}
</script>

<style lang="css">
    
</style>