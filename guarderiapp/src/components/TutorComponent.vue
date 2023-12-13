<template>
  <q-card class="no-shadow q-ma-xs" bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar size="70px">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-avatar>
      </q-item-section>

      <q-item-section >
          <q-item-label  style="font-size:large;">{{ name }} {{ lastName }}</q-item-label>
          <q-item-label caption>
            <div>Cedula: {{ ci }}</div>
            <div>edad: {{ age }}</div>
          </q-item-label>
      </q-item-section>
      <q-item-section  side class="">
        <q-btn label="Elegir" size="sm" class="bg-indigo-8 text-capitalize text-white full-width" @click="elegir(id)"/>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "StudentsComponent",
  props: ['avatar', 'name','lastName','ci','age','id'],
  emits:['SelectTutor'],
  setup(){

    function elegir (id) {
      //his.$emit('SelectTutor',{id:id,tipo:1})
    }

    return {
      elegir
    }
  }
})
</script>

<style scoped>

</style>
