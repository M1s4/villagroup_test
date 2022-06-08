<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Idioma</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in descripciones" :key="i">
        <th scope="row">{{ item.nombre }}</th>
        <th scope="row">{{ item.descripcion }}</th>
        <th scope="row">{{ item.idioma }}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["descripciones"]),
  },
};
</script>

<style>
</style>