<template>
    <div> 
        <comppanier></comppanier>           
        <compboitier v-if ="this.$store.state.boitierchoisistore === ''"></compboitier>        
        <compalim v-if ="this.$store.state.alimchoisistore === ''"></compalim>
        <compprocesseur v-if ="this.$store.state.processeurchoisistore === ''"></compprocesseur>
        <compcartemere v-if ="this.$store.state.cartemerechoisistore === ''"></compcartemere>
        <compssd v-if ="this.$store.state.ssdchoisistore === ''"></compssd>
    </div>
</template>

<script>
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


        }},
    computed: {

    },
    methods: {
    },
    created() {
        
    },

    components: {
    compprocesseur,
    compcartemere,
    compboitier,
    compalim,
    compssd,
    comppanier
  }
}
</script>

<style lang="css">
    
</style>