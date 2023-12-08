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
        <q-radio v-model="child.sex" val="Masculino" label="Masculino" />
        <q-radio v-model="child.sex" val="Femenino" label="Femenino" />
      </div>
      <div class="q-pa-xs" style=" width: 50%;">
        <div class="text-bold">Nacionalidad</div>
        <q-radio v-model="child.nacionality" val="V" label="Venezolan@" />
        <q-radio v-model="child.nacionality" val="E" label="Extranjer@" />
      </div>
      <div class="q-pa-xs">
        <div class="text-bold">Procedencia</div>
        <q-radio v-model="child.origin" val="Hogar" label="Hogar" />
        <q-radio v-model="child.origin" val="Otro plantel" label="Otro" />
      </div>
    </div>
    <div class="q-my-sm q-gutter-xs">
      <div class="text-bold">Lugar de nacimiento</div>
      <q-select v-model="child.country" :options="countriesNamae" filled label="Pais" />
      <q-input v-model="child.state" filled label="Estado" />
      <q-input v-model="child.city" filled label="Ciudad" />
    </div>
    <div class="q-gutter-sm q-pa-sm">
      <q-toggle v-model="childOp.brothers" label="Hermanos" />
      <div class="q-my-sm q-gutter-xs" v-show="childOp.brothers">
        <q-input v-model="child.numBro" type="number" filled label="Cantidad de hermanos" />
        <q-input v-model="child.placeBro" type="number" filled label="Lugar que ocupa" />
      </div>
    </div>
    <div class="flex flex-center q-gutter-xs ">
      <div class="q-my-sm q-gutter-xs" style="width: 45%;">
        <q-select  v-model="child.tShirt" :options="tallaOp.camisa"  filled label="Talla camisa" />
        <q-select  v-model="child.tPants" :options="tallaOp.pantalon"  filled label="Talla Pantalon" />
        <q-select  v-model="child.tShoes" :options="tallaOp.zapato"  filled label="Talla Zapato" />
      </div>
      <div class="q-my-sm q-gutter-xs" style="width: 50%;">
        <q-input v-model="child.weight" filled label="Peso" />
        <q-select v-model="child.modality" :options="modOp" filled label="Modalidad" />
        <q-select v-model="child.turn" :options="turnOp" filled label="Turno" />
      </div>
    </div>
    <q-btn label="enviar" color="positive" @click="enviar(child)" />
  </div>
</template>

<script>
import {api2} from 'src/boot/axios';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name:'FormChild',
  setup(){
    const countries = ref([])
    const countriesNamae = ref([])

    onMounted(()=>{
      api2.get('https://consultaneo.com/api/countries')
        .then(res => {
          countries.value = res.data
          countries.value.forEach(element => {
            countriesNamae.value.push(element.name)
          });
        })
    })
    const tallaOp = ref({
      camisa:['recien nacido','2: 2años','4: 2-4años','6: 4-6años','8: 4-8años'],
      pantalon:['0 nacido','2: 2años','4: 2-4años','6: 4-6años','8: 6-8años'],
      zapato:['16: 0-3 meses','17: 6 meses','18: 6-9 meses','19: 9-12 meses','20: 1 año','21: 2 años','23: 3 años','24: 4 años','25: 5 años','26: 6 años','27: 7 años','28: 8 años'],
    })
    const modOp = ref([
      'Tiempo Completo','Medio dia'
    ])
    const turnOp = ref([
      'Manana','Tarde'
    ])
    const childOp = ref({
     brothers : false,
    })
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
     tShirt : '',
     tShoes : '',
     tPants : '',
     weight : '',
     modality : '',
     turn : '',
     numBro:'',
     placeBro:''
    })

    const enviar = (child) => {
      console.log(child)
    }

    return{
      childOp,
      tallaOp,
      child,
      modOp,
      turnOp,
      countriesNamae,
      enviar
    }
  }
})
</script>
