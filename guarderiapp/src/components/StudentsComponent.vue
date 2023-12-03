<template>
  <q-banner
    class="q-ma-xs" dense rounded dark
    v-for="(student,index) in students" :key="index"
    to="/aja"
  >
    <template v-slot:avatar>
      <div>
        <img
          src="https://cdn.quasar.dev/img/mountains.jpg"
          style="width: 100px; height: 64px; display: block;"
        >
      </div>
    </template>
    <div class="flex" style="justify-content: space-between;">
      <router-link :to="`/${index}`" style="text-align: start; text-decoration: none; color: white;">
        <div>
          <div style="font-size:large;" class="q-mb-sm">{{ student.nombre }} {{ student.apellido }}</div>
          <div>Turno: {{ student.turno }}</div>
          <div>Modalidad: {{ student.modalidad }}</div>
        </div>
      </router-link>
      <div style="justify-content: end; text-align: center;">
        <q-btn label="Entrada" flat style="display:block;" color="positive" @click="marcar"/>
        <q-btn label="Salida" flat style="display:block;" color="positive" @click="marcar"/>
      </div>
    </div>
  </q-banner>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'HistoryComponent',
  props:{
    students:{
      type: Array,
      required: true
    }
  },
  setup(){
    const entrada = ref(false)
    const salida = ref(true)

    const marcar = (i,btn) => {
      console.log(i)
      console.log(btn)
      if(btn = 'entrada'){
        entrada.value = !entrada.value
        salida.value = !salida.value
      }else if(btn){
        salida.value = !salida.value
        entrada.value = !entrada.value
      }
    }
    return{
      marcar,
      entrada,
      salida,
      value: ref(true),
    }
  }
})
</script>

<style>
</style>
