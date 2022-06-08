import { createStore } from 'vuex'
import _ from 'lodash';


export default createStore({
  state: {
    descripciones:[],
    descripcion: {
      nombre: '',
      descripcion:'',
      idioma: [],
    }
  },
  mutations: {
    cargar(state, payload){        
        state.descripciones = payload
    },
    set(state, payload){ 
      console.log("state",state);
      console.log("payload",payload);
     const estado= JSON.stringify(state.descripciones)
      
      if((estado.includes( payload.descripcion)) && (estado.includes( payload.idioma)) ){
        alert('ya existe una descripcion e idioma similar');
      }else{
         console.log('se inserto el dato')
         state.descripciones.push(payload)      
         localStorage.setItem('descripciones', JSON.stringify(state.descripciones))  
      }
    }
  },
  actions: {     
    cargarLocalStorage({commit}){
        if(localStorage.getItem('descripciones')){
          const descripciones = JSON.parse(localStorage.getItem('descripciones'))
          //console.log(descripciones)
          commit('cargar', descripciones)
          return
        }else{
          localStorage.setItem('descripciones', JSON.stringify([]))
        }        
    },
    setDescripciones({commit}, descripcion){
      commit('set', descripcion)
    }
  },
  modules: {
  }
})
