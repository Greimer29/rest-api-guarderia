<template>
  <q-card
    bordered dark class="my-card text-black text-center text-italic"
    v-for="(valor,index) in valores" :key="index"
    style="width: 50%;background-color: #f0f0f0;"
  >
    <q-card-section>
      <div class="text-h6">{{valor.nombre}}</div>
    </q-card-section>
    <q-separator inset color="dark"/>
    <q-card-section>
      {{ valor.descripcion }}
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props:{
    valores:{
      type: Array,
      required:true
    }
  },
  setup () {
    return {
    }
  }
})
</script>
