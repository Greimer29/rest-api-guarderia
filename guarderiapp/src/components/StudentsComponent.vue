<template>
  <q-badge
    class="q-pa-md full-width"
    v-for="(student,index) in students" :key="index"
  >
    <q-avatar>
      <q-img  />
    </q-avatar>
    <div>
      {{ student.nombre }}
      {{ student.apellido }}
      {{ student.turno }}
      {{ student.modalidad }}
    </div>
    <div>
      <div class="q-pa-md">
        <q-toggle
          :label="`Model is ${blueModel} (default behaviour)`"
          v-model="value"
        />
      </div>
    </div>
  </q-badge>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: 'HistoryComponent',
  props:{
    students:{
      type: Array,
      required: true
    }
  },
  setup(){
    return{
      value: ref(true)
    }
  }
})
</script>

<style>
</style>
