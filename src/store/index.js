import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos: [
      {codigo:'0001', nombre:'Sekiro', stock:100, precio:30000, color:'red', destacado:'true'},
      {codigo:'0002', nombre:'Fifa 21', stock:100, precio:25000, color:'blue', destacado:'false'},
      {codigo:'0003', nombre:'Gears of War 4', stock:100, precio:15000, color:'green', destacado:'true'},
      {codigo:'0004', nombre:'Mario Tennis Aces', stock:100, precio:35000, color:'yellow', destacado:'false'},
      {codigo:'0005', nombre:'Bloodborne', stock:100, precio:10000, color:'blue', destacado:'false'},
      {codigo:'0006', nombre:'Forza Horizon 5', stock:100, precio:20000, color:'red', destacado:'true'}
    ], 
    juegosVendidos: []
  },
  getters: {
    productosConStock: (state) => {
      return state.juegos.filter((producto) => {
        return producto.stock > 0
      })
    },
    filtroProducto: (state, getters) => (busqueda) => {
      return getters.productosConStock.filter((p) => p.codigo == busqueda || p.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    }

  },
  mutations: {
    venderJuego: (state, codigo) => {
      state.juegos.find((juego) => juego.codigo == codigo).stock--
    },
    registrarVenta: (state, juego) => {
      state.juegosVendidos.push({codigo:juego.codigo, nombre:juego.nombre,precio:juego.precio})
    }
  },
  actions: {
  },
  modules: {
  }
})
