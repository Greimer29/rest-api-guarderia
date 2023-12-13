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
        <q-checkbox left-label v-model="academicLevel" val="primaria" label="Priamria"  />
        <q-checkbox left-label v-model="academicLevel" val="secundaria" label="Secundaria"/>
        <q-checkbox left-label v-model="academicLevel" val="TSu" label="TSU" />
        <q-checkbox left-label v-model="academicLevel" val="Lic" label="Lic" />
        <q-checkbox left-label v-model="academicLevel" val="MA" label="MA" />
        <q-checkbox left-label v-model="academicLevel" val="PhD" label="PhD" />
      </div>
    </div>
    <div class="q-gutter-xs ">
        <q-select v-model="father.labSituation" :options="situatioOp" filled label="Situacion Laboral" />
        <q-input v-model="father.profesion" filled label="Profesion" />
        <q-input v-model="father.actJob" filled label="Ocupacion Actual" />
        <q-input v-model="father.jobPlace" filled label="Lugar de Trabajo" />
        <q-input v-model="father.jobPhone" filled label="Telefonos de Trabajo" />
    </div>
    <q-btn class="q-mt-md" color="positive" label="enviar" @click="enviar(father)"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import {api} from 'boot/axios'
import { useQuasar } from 'quasar';

export default defineComponent({
  name:'FormFather',
  setup(){
    const $q = useQuasar()
    const DataUser = $q.localStorage.getItem('dataUser')
    const situatioOp = ref(['Desempleado','Emprendedor','Empleado'])
    const civilOp = ref(['Casado','Divorciado','Viudo','Soltero'])
    const academicLevel = ref([])
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
      acadLevel:'',
      labSituation : '',
      profesion : '',
      actJob : '',
      jobPlace : '',
      jobPhone : ''
    })

    const enviar = (father) => {
      academicLevel.value.forEach(element => {
        father.acadLevel += element+', '
      })

      api.post('fathers',{
        name:father.firstName,
        secondName:father.secondName,
        lastName:father.firstLastName,
        secondLastName:father.secondLastName,
        sex:'Masculino',
        age:father.age,
        ci:father.ci,
        nacionality:father.nacionality,
        civilState:father.civilState,
        dirHabit:father.dirHab,
        phone:father.phone,
        acadLevel:father.acadLevel,
        labSituation:father.labSituation,
        profesion:father.profesion,
        jobPlace:father.jobPlace,
        jobPhone:father.jobPhone
      },{
        headers:{
          'Authorization':`bearer ${DataUser.token}`
        }
      })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }

    return{
      academicLevel,
      father,
      enviar,
      situatioOp,
      civilOp
    }
  }
})
</script>
