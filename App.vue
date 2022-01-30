<script>
import Logo_ from './src/components/logo.vue'
import TitreMenu from './src/components/titre.vue'
import comppanier from './src/components/comppanier.vue'
import router from '../site2022/site-master/src/router'
import compannonce from './src/components/compannonce.vue'

export default {
  name: 'App',
  components: {
    Logo_,
    TitreMenu,
    router,
    comppanier,
    compannonce
  },
  data: (function () {
    return {
      menus: []
    }
  }),
  }

</script>
<template>

  <div>
  <h3>Contenu modifié le 30/01 a 9h56</h3>
  <Logo_></Logo_>
  <TitreMenu></TitreMenu>
    <compannonce></compannonce>
  <h1></h1>

  <!-- <router-link to='/'><button>Retour à l'acceuil</button></router-link>
  <button a @click="$router.go(-1)">Etape précédente</button> -->
  <!-- <comppanier></comppanier> -->
  <router-view></router-view>

    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
