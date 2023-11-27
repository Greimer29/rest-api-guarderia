<template>
  <div>
    <div class="q-gutter-xs q-my-sm">
      <div class="text-bold">Antecedentes Prenatales</div>
      <div class="">Al momento del parto:</div>
      <div class="flex q-gutter-xs">
          <q-input style="width: 45%;" v-model="habits.breackfastTime" type="time" filled label="Edad de la madre" />
          <q-input style="width: 45%;" v-model="habits.breackfastTime" type="time" filled label="Edad de la Padre" />
      </div>
      <div>
        <div class="">Fue un embarazo planificado ?</div>
        <q-radio label="Si" val="si" />
        <q-radio label="No" val="no"/>
      </div>
      <div>
        <div class="">Padeció la madre durante el embarazo:</div>
        <q-checkbox v-model="habits.urineRopeDay" val="orina ropa dia" label="Rubeola"  />
        <q-checkbox v-model="habits.urineRopeNight" val="orina ropa noche" label="Toxoplasmosis"/>
        <q-checkbox v-model="habits.popoRopeDay" val="defeca ropa dia" label="Hipertensión" />
        <q-checkbox v-model="habits.popoRopeNight" val="defeca ropa noche" label="Anemia" />
        <q-toggle v-model="habits.sleepObject" label="Otras"/>
        <div v-show="habits.sleepObject" class="q-gutter-xs">
          <q-input v-model="habits.sleepObjectWhit" filled label="Indique otras enfermedades" />
        </div>
      </div>
      <q-toggle v-model="habits.sleepObject" label="Presentó alguna complicación ?"/>
      <div v-show="habits.sleepObject" class="q-gutter-xs">
        <q-input v-model="habits.sleepObjectWhit" filled label="Que tipo de complicaciones" />
      </div>
      <div class="q-gutter-xs">
        <q-select v-model="habits.sleepType" :options="sleepType" filled label="Como fue el parto"/>
      </div>


      <q-input v-model="habits.favFood" filled label="Cual es su comida preferida" />
      <q-input v-model="habits.notFavFood" filled label="Cual es su comida menos preferida " />
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

        <div class="q-gutter-xs" style="width: 25%;">
          <q-input v-model="habits.breackfastTime" type="time" filled label="Edad del padre durante el parto" />
          <q-input v-model="habits.lunchTime" type="time" filled label="A que hora Almuerza" />
          <q-input v-model="habits.dinnerTime" type="time" filled label="A que hora Cena" />
        </div>
      </div>
    </div>
    <q-btn label="enviar" @click="enviar(habits)" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name:'FormImportantInfo',
  setup(){
    const partTypeOp = ref(['Forceps', 'cesarea', 'natural'])
    const habits = ref({
      ageMom : false,
      ageDad : false,
      pregnedPlaned : false,
      sickMomPregned : [],
      otherSicks : false,
      complications : '',
      complicationsExpl : '',
      partType : '',
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
