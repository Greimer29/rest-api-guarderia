<template>
  <div>
    <div class="q-gutter-xs q-my-sm">
      <div class="text-bold">Habitos</div>
      <q-checkbox v-model="habits.eatalone" val="come solo" label="Come solo" />
      <q-checkbox v-model="habits.sucFinger" val="chupa dedo" label="Chupa dedo" />
      <q-input v-model="habits.breackfastTime" type="time" filled label="A que hora desayuna" />
      <q-input v-model="habits.lunchTime" type="time" filled label="A que hora Almuerza" />
      <q-input v-model="habits.dinnerTime" type="time" filled label="A que hora Cena" />
      <q-select v-model="habits.apetitType" :options="apetiteOp" filled label="Como es su apetito" />
      <q-input v-model="habits.favFood" filled label="Cual es su comida preferida" />
      <q-input v-model="habits.notFavFood" filled label="Cual es su comida menos preferida " />
      <q-input v-model="habits.sleepTimeDay" type="time" filled label="A que hora duerme por las noches " />
      <q-input v-model="habits.sleepTimenigth" type="time" filled label="A que hora duerme durante el dia " />
      <q-select v-model="habits.sleepType" :options="sleepType" filled label="Como es su tipo de sueño" />
      <q-toggle v-model="habits.sleepAcomp" label="Duerme acompañado"/>
      <div v-show="habits.sleepAcomp" class="q-gutter-xs">
        <q-input v-model="habits.sleepWhit" filled label="Con quien duerme" />
      </div>
      <q-toggle v-model="habits.sleepObject" label="Duerme con un objeto"/>
      <div v-show="habits.sleepObject" class="q-gutter-xs">
        <q-input v-model="habits.sleepObjectWhit" filled label="Que objeto usa para dormir" />
      </div>
      <q-input v-model="habits.favGame" filled label="Juego Favorito" />
      <q-input v-model="habits.favToy" filled label="Juguete Favorito" />
      <q-input v-model="habits.favObject" filled label="Objeto Preferido" />
      <q-input v-model="habits.gamePlace" filled label="Lugar de juego en casa" />
      <div class="q-gutter-xs">
        <div class="text-bold">Control de esfinteres</div>
        <q-checkbox v-model="habits.urineRopeDay" val="orina ropa dia" label="orina su ropa durante el dia"  />
        <q-checkbox v-model="habits.urineRopeNight" val="orina ropa noche" label="orina en su ropa durante la noche"/>
        <q-checkbox v-model="habits.popoRopeDay" val="defeca ropa dia" label="defeca en su ropa durante el dia" />
        <q-checkbox v-model="habits.popoRopeNight" val="defeca ropa noche" label="Defeca en su ropa durante la noche" />

      </div>
    </div>
    <q-btn label="enviar" @click="enviar(habits)" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name:'FormHealt',
  setup(){
    const habits = ref({
      eatalone : false,
      sucFinger : false,
      breackfastTime : '',
      lunchTime : '',
      dinnerTime : '',
      apetitType : '',
      favFood : '',
      notFavFood : '',
      sleepTimeDay : '',
      sleepTimenigth : '',
      sleepType : '',
      sleepAcomp : false,
      sleepWhit : '',
      sleepObject : false,
      sleepObjectWhit : '',
      favObject : '',
      favGame : '',
      favToy : '',
      gamePlace : '',
      urineRopeDay:false,
      urineRopeNight:false,
      popoRopeDay:false,
      popoRopeNight:false
    })

    const apetiteOp = ref([
      'Carbohidratos','Proteinas','Grasas','Calcio','Sodio'
    ])

    const sleepType = ref([
      'Pesado','Ligero'
    ])

    const enviar = (healt) => {
      console.log(healt)
    }

    return{
      habits,
      apetiteOp,
      sleepType,
      enviar
    }
  }
})
</script>
