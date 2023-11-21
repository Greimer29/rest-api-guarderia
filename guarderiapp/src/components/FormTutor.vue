<template>
  <div>
    <div class="q-gutter-xs q-my-sm">
      <q-input v-model="father.firstLastName" filled label="Primer Apellido" />
      <q-input v-model="father.secondLastName" filled label="Segundo Apellido" />
      <q-input v-model="father.firstName" filled label="Primer Nombre" />
      <q-input v-model="father.secondName" filled label="Segundo Nombre" />
      <q-input v-model="father.age" filled type="number" label="Edad" />
    </div>
    <div class="flex">
      <div class="q-pa-xs">
        <div class="text-bold">Nacionalidad</div>
        <q-radio v-model="father.nacionality" val="V" label="Venezolano" />
        <q-radio v-model="father.nacionality" val="E" label="Extranjero" />
      </div>
    </div>
    <div class="q-gutter-xs">
      <q-input v-model="father.ci" filled label="Cedula de Identidad" />
      <q-select v-model="father.civilState" :options="civilOp" filled label="Estado civil" />
      <q-input v-model="father.dirHab" filled label="Direccion de habitacion" />
      <q-input v-model="father.phone" filled label="Nro de Telefono" />
    </div>
    <div class="q-my-sm q-gutter-xs">
      <div class="text-bold">Nivel Academinco</div>
      <div class="">
        <q-checkbox left-label v-model="father.acadLevel" val="primaria" label="Priamria"  />
        <q-checkbox left-label v-model="father.acadLevel" val="secundaria" label="Secundaria"/>
        <q-checkbox left-label v-model="father.acadLevel" val="TSu" label="TSU" />
        <q-checkbox left-label v-model="father.acadLevel" val="Lic" label="Lic" />
        <q-checkbox left-label v-model="father.acadLevel" val="MA" label="MA" />
        <q-checkbox left-label v-model="father.acadLevel" val="PhD" label="PhD" />
      </div>
    </div>
    <div class="q-gutter-xs ">
        <q-select v-model="father.labSituation" :options="situatioOp" filled label="Situacion Laboral" />
        <q-input v-model="father.profesion" filled label="Profesion" />
        <q-input v-model="father.actJob" filled label="Ocupacion Actual" />
        <q-input v-model="father.jobPlace" filled label="Lugar de Trabajo" />
        <q-input v-model="father.jobPhone" filled label="Telefonos de Trabajo" />
    </div>
    <q-btn label="enviar" @click="enviar(father)"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name:'FormTutor',
  setup(){
    const situatioOp = ref(['Desempleado','Emprendedor','Mama Luchona'])
    const civilOp = ref(['Casado','Divorciado','Viudo','Soltero'])
    const father = ref({
      firstLastName : '',
      secondLastName : '',
      firstName : '',
      secondName : '',
      age : '',
      nacionality : '',
      ci : '',
      civilState : '',
      dirHab : '',
      phone : '',
      acadLevel:[],
      labSituation : '',
      profesion : '',
      actJob : '',
      jobPlace : '',
      jobPhone : ''
    })

    const enviar = (father) => {
      console.log(father)
    }

    return{
      father,
      enviar,
      situatioOp,
      civilOp
    }
  }
})
</script>
