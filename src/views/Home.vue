<template>
  <h1 class="my-5">actividades turísticas</h1>
  <form @submit.prevent="procesarFormulario">
    <Input :descripcion="descripcion" />
    <Lista />
  </form>
</template>

<script>
import { mapActions } from "vuex";
import Input from "../components/Input.vue";
import Lista from "../components/DescripcionesList.vue";
const shortid = require("shortid");

export default {
  name: "Home",
  components: {
    Input,
    Lista,
  },
  data() {
    return {
      descripcion: {
        nombre: "",
        descripcion: "",
        idioma: [],
      },
    };
  },
  methods: {
    ...mapActions(["setDescripciones"]),
    procesarFormulario() {
      console.log(this.descripcion);
      if (this.descripcion.nombre.trim() === "") {
        alert("No deje campos vacios");
        return;
      }

      console.log("no está vacio");

      /*uso de generador de id (si da tiempo...)
      this.descripcion.id = shortid.generate()
      console.log(this.descripcion.id)*/

      // enviar datos al objeto descripciones utilizando la accion
      //que ejecuta el commit para despues utilizar el metodo de js push y llenar el objeto "descripciones"
      this.setDescripciones(this.descripcion);

      this.descripcion = {
        nombre: "",
        descripcion: "",
        idioma: [],
      };
    },
  },
};
</script>
