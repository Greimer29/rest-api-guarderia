<template>
  <q-card class="no-shadow" bordered>
    <q-card-section class="text-center">
      <q-avatar size="100px" class="shadow-10">
        <img :src="avatar">
      </q-avatar>
    </q-card-section>

    <q-card-section class="q-pt-none text-center ">
      <div class="text-h6  text-grey-8">
        {{ name }} {{ lastName }}
      </div>
      <div class="text-left">
        <div class="text-caption text-grey-8 flex">
          <div class="text-bold">Direccion: </div> {{ dir }}
        </div>
        <div class="text-caption text-grey-8 flex">
          <div class="text-bold">Nivel academico: </div> {{ acadLevel }}
        </div>
      </div>
    </q-card-section>

    <q-card-actions class="flex-center">
      <q-btn flat round icon="facebook" class="bg-indigo-7 text-white"/>
      <q-btn flat round icon="fab fa-twitter" class="bg-info text-white"/>
      <q-btn flat round icon="mail" class="bg-indigo-8 text-white"/>
    </q-card-actions>
  </q-card>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "StaffComponent",
  props: ['avatar', 'name','lastName', 'acadLevel', 'dir', 'phone','mail']
})
</script>

<style scoped>

</style>
