<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    components: {
    },
    methods:{
      ...mapActions(['cargarLocalStorage'])
    },
    created(){
      this.cargarLocalStorage()
    }
  }
</script>

