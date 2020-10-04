<template>
<div id="app">
  
        <b-navbar class="d-flex justify-content-center color px-5" type="dark">
          <h1 class="text-white">Tienda de juegos 32bits</h1>
        <b-navbar-nav>
            <router-link class="text-white px-2" :to="{name:'Inicio'}">Inicio</router-link>
            <router-link class="text-white px-2" :to="{name:'Ventas'}">Ventas</router-link>
            <router-link class="text-white px-2" :to="{name:'Busqueda'}">Busqueda</router-link>
            <router-link class="text-white px-2" :to="{name:'Total'}">Total</router-link>
        </b-navbar-nav>
      </b-navbar>
<router-view></router-view>
</div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="css">
.color {
  background-color: coral;
}
</style>
