<template>
  <div>
    <div class="q-gutter-xs q-my-sm">
      <q-input v-model="mother.firstLastName" filled label="Primer Apellido" />
      <q-input v-model="mother.secondLastName" filled label="Segundo Apellido" />
      <q-input v-model="mother.firstName" filled label="Primer Nombre" />
      <q-input v-model="mother.secondName" filled label="Segundo Nombre" />
      <q-input v-model="mother.age" filled type="number" label="Edad" />
    </div>
    <div class="flex">
      <div class="q-pa-xs">
        <div class="text-bold">Nacionalidad</div>
        <q-radio v-model="mother.nacionality" val="V" label="Venezolana" />
        <q-radio v-model="mother.nacionality" val="E" label="Extranjera" />
      </div>
    </div>
    <div class="q-gutter-xs">
      <q-input v-model="mother.ci" filled label="Cedula de Identidad" />
      <q-select v-model="mother.civilState" :options="civilOp" filled label="Estado civil" />
      <q-input v-model="mother.dirHab" filled label="Direccion de habitacion" />
      <q-input v-model="mother.phone" filled label="Nro de Telefono" />
    </div>
    <div class="q-my-sm q-gutter-xs">
      <div class="text-bold">Nivel Academinco</div>
      <div class="">
        <q-checkbox left-label v-model="mother.acadLevel" val="primaria" label="Priamria"  />
        <q-checkbox left-label v-model="mother.acadLevel" val="secundaria" label="Secundaria"/>
        <q-checkbox left-label v-model="mother.acadLevel" val="TSU" label="TSU" />
        <q-checkbox left-label v-model="mother.acadLevel" val="Lic" label="Lic" />
        <q-checkbox left-label v-model="mother.acadLevel" val="MA" label="MA" />
        <q-checkbox left-label v-model="mother.acadLevel" val="PhD" label="PhD" />
      </div>
    </div>
    <div class="q-gutter-xs ">
        <q-select v-model="mother.labSituation" :options="situatioOp" filled label="Situacion Laboral" />
        <q-input v-model="mother.profesion" filled label="Profesion" />
        <q-input v-model="mother.actJob" filled label="Ocupacion Actual" />
        <q-input v-model="mother.jobPlace" filled label="Lugar de Trabajo" />
        <q-input v-model="mother.jobPhone" filled label="Telefonos de Trabajo" />
    </div>
    <q-btn label="enviar"  class="q-mt-md" color="positive" @click="enviar(mother)"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name:'FormMother',
  setup(){
    const situatioOp = ref(['Desempleado','Emprendedor','Mama Luchona'])
    const civilOp = ref(['Casada','Divorciada','Viuda','Soltera'])
    const mother = ref({
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

    const enviar = (mother) => {
      console.log(mother)
    }

    return{
      mother,
      enviar,
      situatioOp,
      civilOp
    }
  }
})
</script>
