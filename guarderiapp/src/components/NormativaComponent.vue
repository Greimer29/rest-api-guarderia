<template>
  <q-card flat class="my-card q-ma-md text-italic" style="background-color: #f0f0f0" >
    <q-card-section style="text-align: center;">
      <div class="text-h6">Normativa</div>
    </q-card-section>
    <q-separator inset color="dark"/>
    <q-card-section>
        <ul>
          <li v-for="(regla,index) in normativa" :key="index">{{ regla }}</li>
        </ul>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props:{
    normativa:{
      type:Array
    }
  }
})
</script>
