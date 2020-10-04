<template>
    <div class="container">
        <h3 class="py-3">Tenemos {{stockDisponible.length}} juegos con stock disponible</h3>
        <Listado :vender="true"/>


       
        
    </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import Listado from './Listado';
export default {
    components: {
        Listado
    },
    computed:{
        ...mapState(['juegos']),
        ...mapGetters(['productosConStock']),
        stockDisponible(){
            return this.productosConStock

            
        }

    }
    
    
}
</script>
<style lang="css">
.container{
    height: 100vh;
    display: flex ;
    flex-direction: column;
    align-items: center;
}
    
</style>