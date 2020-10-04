<template>
  <div id="busqueda" class="container">
    <div class="busqueda1 text-left">
      <h4 class="mt-2 py-3">Busca tu producto</h4>
      <b-form-input v-model="producto"></b-form-input>
      <ul class="pt-3">
        <li v-for="(producto, index) in busqueda" :key="index">
          {{ producto.nombre }}
        </li>
      </ul>
            
    </div>
    <div>
     <hr>
      <h3 class="text-center">Tenemos {{ juegos.length }} juegos disponibles para ti.</h3>
      <hr>
    </div>
    <div class="busqueda2">
      <h4 class="pb-3">Stock General</h4>
      <Listado :colorJuego="true" />
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Listado from "./Listado";
export default {
  data() {
    return {
      producto: "",
    };
  },
  components: {
   Listado,
  },
  computed: {
    ...mapState(["juegos"]),
    ...mapGetters(["filtroProducto", "productosConStock"]),
    busqueda() {
      console.log("inicio busqueda");
      return this.producto.length > 0 ? this.filtroProducto(this.producto) : [];
    },
  },
};
</script>
<style lang="css">
#busqueda{
  display: flex;
 flex-direction: column;
}
.busqueda1, .busqueda2{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>