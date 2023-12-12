<template>
  <div>
    <div class="q-gutter-xs q-my-sm">
      <q-input v-model="respFinan.firstLastName" filled label="Primer Apellido" />
      <q-input v-model="respFinan.secondLastName" filled label="Segundo Apellido" />
      <q-input v-model="respFinan.firstName" filled label="Primer Nombre" />
      <q-input v-model="respFinan.secondName" filled label="Segundo Nombre" />
      <q-input v-model="respFinan.age" filled type="number" label="Edad" />
    </div>
    <div class="flex">
      <div class="q-pa-xs">
        <div class="text-bold">Nacionalidad</div>
        <q-radio v-model="respFinan.nacionality" val="V" label="Venezolano" />
        <q-radio v-model="respFinan.nacionality" val="E" label="Extranjero" />
      </div>
    </div>
    <div class="q-gutter-xs">
      <q-input v-model="respFinan.ci" filled label="Cedula de Identidad" />
      <q-input v-model="respFinan.dirHab" filled label="Direccion de habitacion" />
      <q-input v-model="respFinan.phone" filled label="Nro de Telefono" />
    </div>
    <div class="q-my-sm q-gutter-xs">
      <div class="text-bold">Nivel Academinco</div>
      <div class="">
        <q-checkbox left-label v-model="respFinan.acadLevel" val="primaria" label="Priamria"  />
        <q-checkbox left-label v-model="respFinan.acadLevel" val="secundaria" label="Secundaria"/>
        <q-checkbox left-label v-model="respFinan.acadLevel" val="TSu" label="TSU" />
        <q-checkbox left-label v-model="respFinan.acadLevel" val="Lic" label="Lic" />
        <q-checkbox left-label v-model="respFinan.acadLevel" val="MA" label="MA" />
        <q-checkbox left-label v-model="respFinan.acadLevel" val="PhD" label="PhD" />
      </div>
    </div>
    <div class="q-gutter-xs ">
        <q-select v-model="respFinan.labSituation" :options="situatioOp" filled label="Situacion Laboral" />
        <q-input v-model="respFinan.profesion" filled label="Profesion" />
        <q-input v-model="respFinan.actJob" filled label="Ocupacion Actual" />
        <q-input v-model="respFinan.jobPlace" filled label="Lugar de Trabajo" />
        <q-input v-model="respFinan.jobPhone" filled label="Telefonos de Trabajo" />
    </div>
    <q-btn label="enviar"  class="q-mt-md" color="positive" @click="enviar(mother)"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name:'FormRespFinan',
  setup(){
    const situatioOp = ref(['Desempleado','Emprendedor','Mama Luchona'])
    const civilOp = ref(['Casado','Divorciado','Viudo','Soltero'])
    const respFinan = ref({
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

    const enviar = (respFinan) => {
      console.log(respFinan)
    }

    return{
      respFinan,
      enviar,
      situatioOp,
      civilOp
    }
  }
})
</script>
