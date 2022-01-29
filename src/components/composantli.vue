<template>
        <div class="choixMenuTest">
        <li class="menuEnListe"  v-for="menu in menus" :key="menu" id= "menu.id" onClick="choisir(this.id,event)">
        <p v-text="menu.text"></p>
        <div class="imageEtPrix">
        <p class="prix" v-show = "menu.prix != null" >{{ menu.prix }} + '€'</p>
        <img class="image" v-show ="menu.img != null" :src ="menu.img">
        <div class="caract">
        <p class="format" v-show ="menu.format != null" v-text ='menu.format'></p>
        </div>
        </div> 
        </li> 
        </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import menus from './Montage.vue'
export default {
    name : 'composantli_',
    props: ['menus']
}
</script>


