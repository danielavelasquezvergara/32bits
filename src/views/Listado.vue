<template>
  <div>
    <ol>
      <li v-for="(juego, index) in productosConStock" :key="index">
        <span
          :style="{ background: colorJuego === true ? juego.color : 'white' }">
            {{ juego.codigo }}  |  {{ juego.nombre }}  |  {{ juego.stock }}  |  {{
            juego.precio
          }}</span
        >
        <button class="boton-vender" @click="() => hacerVenta(juego)" v-if="vender"><small>Vender</small></button>
      </li>
    </ol>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Listado",
  props: ["vender", "colorJuego"],

  computed: {
    ...mapGetters(["productosConStock"]),
  },
  methods: {
    ...mapMutations(["venderJuego", "registrarVenta"]),
    hacerVenta(juego) {
      setTimeout(() => {
        this.venderJuego(juego.codigo);
        this.registrandoVenta(juego);
      }, 2000);
    },
    registrandoVenta(juego) {
      setTimeout(() => {
        this.registrarVenta(juego); alert("Venta procesada exitosamente.");
      }, 1000);
    },
  },
};
</script>
<style lang="css">
  .boton-vender{
    background-color: rgba(76,76,76,1);
    color: white;
    font-size: 10px;
    border-radius: 4px;
    border: 1px solid #828282;
    margin-left: 5px
  };
</style>