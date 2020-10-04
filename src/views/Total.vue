<template>
    <div id="ventas" class="text-center">
        <h4 class="py-4" v-show="valorTotal !== 0">REGISTRO DE VENTAS</h4>
        <h2 class="pt-5" v-if="!hayVentas">No hay ventas registradas.</h2>
        <ul v-if="hayVentas">
            <li v-for="(juego, index) in juegosVendidos" :key="index">{{juego.codigo}}   |   {{juego.nombre}}   |   {{juego.precio}}</li>
        </ul>
        <h6 v-show="valorTotal !== 0">Valor total= ${{valorTotal}}</h6>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(["juegosVendidos"]),
        hayVentas(){
            return this.juegosVendidos.length > 0 
        },
        valorTotal(){
            return this.juegosVendidos.reduce((total, juego) => total += juego.precio, 0)

        }

    },
    
}
</script>
<style lang="css">
#ventas{
    height: 100vh;
    display: flex ;
    flex-direction: column;
    align-items: center;
}
ul{
    padding: 0;
}
li {
    list-style: none;
    padding-left: 0;
}
</style>
