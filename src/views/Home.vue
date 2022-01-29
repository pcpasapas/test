
<template>
    <div class="home">
        <img class="logo" src="../assets/images/PcP.png"/>
        <section class="sect1">
            <h3>Votre Pc sur mesure monté au meilleur prix avec des pièces neuves ou d'occasion</h3>
            <img class="image" src="../assets/images/pcgamertitre.jpg">
        </section>
        <section class="sect">
        <h3>Des solutions de dépannage adaptées à votre budget</h3>
            <img class="image" src="../assets/images/depannage.jpg">
        </section>
        <section class="sect">   
            <h3>Achat de pièces détachées neuves ou d'occasion</h3>
            <img class="image" src="../assets/images/piecesdetachees.png">
        </section>
    </div>
    <img class="imagelivraison" src="../assets/images/livraisonfrance.png">
</template>

<script>
export default {
    name:'Home'
}
</script>

<style scoped>
.home{
    display: grid;
    height: auto;
    grid-template-columns: 20% 80%;
    grid-template-rows: 1fr 1fr 1fr;
}
.sect{
    height: auto;
    grid-column-start: 2;
    display: block;
}
.sect1{
    grid-row: 1;
}
.p{
    display: block;
        border: 1px black solid;

}
.image{
    height: 100px;
}
.logo{
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 5;
        border: 1px black solid;
    width:100%;
    height: 100%;
    margin-left: 20px;



}
</style>