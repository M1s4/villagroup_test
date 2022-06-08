<template>
  <div>
    <input
      type="text"
      class="form-control my-2"
      placeholder="Nombre Actividad"
      v-model.trim="descripcion.nombre"
    />
    <textarea
      v-model="descripcion.descripcion"
      name=""
      id=""
      cols="60"
      rows="5"
      placeholder="Agrege una breve descripcion"
    ></textarea>

    <div class="mt-2">
      <h5>Seleccione idioma</h5>
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-1"
          class="form-check-input"
          value="espanol"
          v-model="descripcion.idioma"
        />
        <label for="radio-1" class="form-check-label">español</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-2"
          class="form-check-input"
          value="ingles"
          v-model="descripcion.idioma"
        />
        <label for="radio-2" class="form-check-label">ingles</label>
      </div>
    </div>

    <button
      class="btn btn-dark mt-2 btn-block"
      type="submit"
      :disabled="bloquear"
    >
      Enviar datos
    </button>
  </div>
</template>

<script>
export default {
  props: {
    descripcion: Object,
  },
  computed: {
    bloquear() {
      this.descripcion.nombre.trim() === "" ? true : false;
      return 
    },
  },
};
</script>

<style>
</style>