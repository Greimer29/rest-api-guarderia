<template>
  <q-card class="no-shadow q-ma-xs" bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar size="70px">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-avatar>
      </q-item-section>

      <q-item-section >
        <router-link class="text-left" :to="`students/${name}`" style="text-decoration: none; color: black;">
          <q-item-label  style="font-size:large;">{{ name }} {{ lastName }}</q-item-label>
          <q-item-label caption>
            <div>Turno: {{ turn }}</div>
            <div>Modalidad: {{ mode }}</div>
          </q-item-label>
        </router-link>
      </q-item-section>

      <q-item-section side class="q-gutter-xs">
        <q-btn label="Entrada" size="sm" class="bg-indigo-8 text-capitalize text-white full-width"></q-btn>
        <q-btn label="Salida" size="sm" class="bg-indigo-8 text-capitalize text-white full-width"></q-btn>
      </q-item-section>
    </q-item>

  </q-card>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "StudentsComponent",

  props: ['avatar', 'name','lastName','turn','mode']
})
</script>

<style scoped>

</style>
