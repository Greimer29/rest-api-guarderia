<template>
  <div>
    <div class="q-gutter-xs q-my-sm">
      <q-input v-model="child.firstLastName" filled label="Primer Apellido" />
      <q-input v-model="child.secondLastName" filled label="Segundo Apellido" />
      <q-input v-model="child.firstName" filled label="Primer Nombre" />
      <q-input v-model="child.secondName" filled label="Segundo Nombre" />
      <q-input v-model="child.age" filled type="number" label="Edad" />
    </div>
    <div class="flex">
      <div class="q-pa-xs" style=" width: 50%;">
        <div class="text-bold">sexo</div>
        <q-radio v-model="child.sex" val="M" label="Masculino" />
        <q-radio v-model="child.sex" val="F" label="Femenino" />
      </div>
      <div class="q-pa-xs" style=" width: 50%;">
        <div class="text-bold">Nacionalidad</div>
        <q-radio v-model="child.nacionality" val="V" label="Venezolan@" />
        <q-radio v-model="child.nacionality" val="E" label="Extranjer@" />
      </div>
      <div class="q-pa-xs">
        <div class="text-bold">Procedencia</div>
        <q-radio v-model="child.origin" val="H" label="Hogar" />
        <q-radio v-model="child.origin" val="O" label="Otro" />
      </div>
    </div>
    <div class="q-my-sm q-gutter-xs">
      <div class="text-bold">Lugar de nacimiento</div>
      <q-input v-model="child.country" filled label="Pais" />
      <q-input v-model="child.state" filled label="Estado" />
      <q-input v-model="child.city" filled label="Ciudad" />
    </div>
    <div class="q-gutter-sm q-pa-sm">
      <q-toggle v-model="child.brothers" label="Hermanos" />
      <div class="q-my-sm q-gutter-xs" v-show="child.brothers">
        <q-input v-model="child.numBro" type="number" filled label="Cantidad de hermanos" />
        <q-input v-model="child.placeBro" type="number" filled label="Lugar que ocupa" />
      </div>
    </div>
    <div class="flex flex-center q-gutter-xs ">
      <div class="q-my-sm q-gutter-xs" style="width: 45%;">
        <q-input v-model="child.tShirt" filled label="Talla camisa" />
        <q-input v-model="child.tPants" filled label="Talla Pantalon" />
        <q-input v-model="child.tShoes" filled label="Talla Zapato" />
      </div>
      <div class="q-my-sm q-gutter-xs" style="width: 50%;">
        <q-input v-model="child.weight" filled label="Peso" />
        <q-select v-model="child.modality" :options="modOp" filled label="Modalidad" />
        <q-select v-model="child.turn" :options="turnOp" filled label="Turno" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name:'FormChild',
  setup(){
    const modOp = ref([
      'Tiempo Completo','Medio dia'
    ])
    const turnOp = ref([
      'Manana','Tarde'
    ])
    const child = ref({
     firstLastName : '',
     secondLastName : '',
     firstName : '',
     secondName : '',
     age : '',
     sex : '',
     nacionality : '',
     country : '',
     state : '',
     origin : '',
     city : '',
     brothers : false,
     tShirt : '',
     tShoes : '',
     tPants : '',
     weight : '',
     modality : '',
     turn : '',
     otherDates : '',
     numBro:'',
     placeBro:''
    })

    if(child.value.nacionality == 'V'){
      child.value.country = 'Venezuela'
    }

    const enviar = (child) => {
      console.log(child.nacionality == 'V')
    }

    return{
      child,
      modOp,
      turnOp,
      enviar
    }
  }
})
</script>
