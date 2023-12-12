<template>
  <div>
    <div class="q-gutter-xs q-my-sm">
      <q-input v-model="tutor.firstLastName" filled label="Primer Apellido" />
      <q-input v-model="tutor.secondLastName" filled label="Segundo Apellido" />
      <q-input v-model="tutor.firstName" filled label="Primer Nombre" />
      <q-input v-model="tutor.secondName" filled label="Segundo Nombre" />
      <q-input v-model="tutor.age" filled type="number" label="Edad" />
    </div>
    <div class="flex">
      <div class="q-pa-xs">
        <div class="text-bold">Nacionalidad</div>
        <q-radio v-model="tutor.nacionality" val="V" label="Venezolano" />
        <q-radio v-model="tutor.nacionality" val="E" label="Extranjero" />
      </div>
    </div>
    <div class="q-gutter-xs">
      <q-input v-model="tutor.ci" filled label="Cedula de Identidad" />
      <q-input v-model="tutor.dirHab" filled label="Direccion de habitacion" />
      <q-input v-model="tutor.phone" filled label="Nro de Telefono" />
    </div>
    <div class="q-my-sm q-gutter-xs">
      <div class="text-bold">Nivel Academinco</div>
      <div class="">
        <q-checkbox left-label v-model="tutor.acadLevel" val="primaria" label="Priamria"  />
        <q-checkbox left-label v-model="tutor.acadLevel" val="secundaria" label="Secundaria"/>
        <q-checkbox left-label v-model="tutor.acadLevel" val="TSu" label="TSU" />
        <q-checkbox left-label v-model="tutor.acadLevel" val="Lic" label="Lic" />
        <q-checkbox left-label v-model="tutor.acadLevel" val="MA" label="MA" />
        <q-checkbox left-label v-model="tutor.acadLevel" val="PhD" label="PhD" />
      </div>
    </div>
    <div class="q-gutter-xs ">
        <q-select v-model="tutor.labSituation" :options="situatioOp" filled label="Situacion Laboral" />
        <q-input v-model="tutor.profesion" filled label="Profesion" />
        <q-input v-model="tutor.actJob" filled label="Ocupacion Actual" />
        <q-input v-model="tutor.jobPlace" filled label="Lugar de Trabajo" />
        <q-input v-model="tutor.jobPhone" filled label="Telefonos de Trabajo" />
    </div>
    <q-btn label="enviar"  class="q-mt-md" color="positive" @click="enviar(mother)"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name:'FormTutor',
  setup(){
    const situatioOp = ref(['Desempleado','Emprendedor','Mama Luchona'])
    const civilOp = ref(['Casado','Divorciado','Viudo','Soltero'])
    const tutor = ref({
      firstLastName : '',
      secondLastName : '',
      firstName : '',
      secondName : '',
      age : '',
      nacionality : '',
      ci : '',
      dirHab : '',
      phone : '',
      acadLevel:[],
      labSituation : '',
      profesion : '',
      actJob : '',
      jobPlace : '',
      jobPhone : ''
    })

    const enviar = (tutor) => {
      console.log(tutor)
    }

    return{
      tutor,
      enviar,
      situatioOp,
      civilOp
    }
  }
})
</script>
