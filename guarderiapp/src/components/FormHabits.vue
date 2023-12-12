<template>
  <div>
    <div class="q-gutter-xs q-my-sm">
      <div class="text-bold">Habitos:</div>
        <div class="flex q-gutter-sm">
              <q-checkbox v-model="habits.eatalone" val="come solo" label="Come solo" />
              <q-checkbox v-model="habits.sucFinger" val="chupa dedo" label="Chupa dedo" />
        </div>
        <div class="text-bold">A que hora suele:</div>
      <div class="flex q-gutter-xs">
        <div class="q-gutter-xs" style="width: 48%;">
          <q-input v-model="habits.breackfastTime" type="time" filled label="Desayunar" />
          <q-input v-model="habits.lunchTime" type="time" filled label="Almorzar" />
          <q-input v-model="habits.dinnerTime" type="time" filled label="Cenar" />
        </div>
        <div class="q-gutter-xs" style="width: 48%;">
          <q-input v-model="habits.sleepTimeDay" type="time" filled label="Dormir de noches " />
          <q-input v-model="habits.sleepTimenigth" type="time" filled label="Dormir de dia " />
          <q-select v-model="habits.sleepType" :options="sleepType" filled label="Tipo de Sueño" />
        </div>
      </div>
        <q-toggle v-model="habitsShow.sleepAcomp" label="Duerme acompañado"/>
        <div v-show="habitsShow.sleepAcomp" class="q-gutter-xs">
          <q-input v-model="habits.sleepWhit" filled label="Con quien duerme" />
        </div>
        <q-toggle v-model="habitsShow.sleepObject" label="Duerme con un objeto"/>
        <div v-show="habitsShow.sleepObject" class="q-gutter-xs">
          <q-input v-model="habits.sleepObjectWhit" filled label="Que objeto usa para dormir" />
        </div>
      <div class="text-bold">De Apetito:</div>
      <q-select v-model="habits.apetitType" :options="apetiteOp" filled label="Como es su tipo de apetito" />
      <q-input v-model="habits.favFood" filled label="Cual es su comida preferida" />
      <q-input v-model="habits.notFavFood" filled label="Cual es su comida menos preferida " />

      <div class="text-bold">De Juego:</div>
      <q-input v-model="habits.favGame" filled label="Juego Favorito" />
      <q-input v-model="habits.favToy" filled label="Juguete Favorito" />
      <q-input v-model="habits.favObject" filled label="Objeto Preferido" />
      <q-toggle v-model="habitsShow.gameHavePlace" label="Tiene un lugar donde jugar en casa"/>
      <div v-show="habitsShow.gameHavePlace" class="q-gutter-xs">
        <q-input v-model="habits.gamePlace" filled label="Lugar de juego en casa" />
      </div>
      <div class="q-gutter-xs">
        <div class="text-bold">Control de esfinteres:</div>
        <q-checkbox v-model="habits.urineRopeDay" val="orina ropa dia" label="orina su ropa durante el dia"  />
        <q-checkbox v-model="habits.urineRopeNight" val="orina ropa noche" label="orina en su ropa durante la noche"/>
        <q-checkbox v-model="habits.popoRopeDay" val="defeca ropa dia" label="defeca en su ropa durante el dia" />
        <q-checkbox v-model="habits.popoRopeNight" val="defeca ropa noche" label="Defeca en su ropa durante la noche" />
      </div>
    </div>
    <q-btn label="enviar"  class="q-mt-md" color="positive" @click="enviar(mother)"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name:'FormHealt',
  setup(){
    const habitsShow = ref({
      sleepAcomp : false,
      sleepObject : false,
      gameHavePlace: false,
    })
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
      sleepWhit : '',
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
      habitsShow,
      habits,
      apetiteOp,
      sleepType,
      enviar
    }
  }
})
</script>
