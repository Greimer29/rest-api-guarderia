<template>
  <q-card class="no-shadow" bordered>
    <q-card-section>
      <div class="text-h6 text-grey-8 text-center">
        Personal del departamento
      </div>
    </q-card-section>
    <q-separator/>
    <q-card-section class="q-pa-none">
      <div class="text-center">
        <q-btn class="full-width" label="agregar" color="primary" @click="pForm = true"/>
      </div>
    </q-card-section>
    <q-separator/>
    <q-card-section class="q-pa-none">
      <q-table
        grid
        :rows="data"
        :columns="columns"
        hide-bottom
        :rows-per-page-options="[0]"
      >
        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <StaffComponent
              :avatar="props.row.avatar"
              :name="props.row.nombre"
              :lastName="props.row.apellido"
              :phone="props.row.telefono"
              :acadLevel="props.row.nivel_academico"
              :dir="props.row.dir"
              :mail="props.row.email"
              :ci="props.row.cedula"
              :age="props.row.edad"
            >
            </StaffComponent >
          </div>
        </template>
      </q-table>
    </q-card-section>
  </q-card>

  <q-dialog v-model="pForm">
    <q-card>
      <q-toolbar>
        <q-toolbar-title><span class="text-weight-bold"> Ingresar: </span>Datos del empleado</q-toolbar-title>
        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>
      <q-card-section class="q-gutter-xs">
          <q-input label="Nombre" filled  v-model="personal.name" />
          <q-input label="Apellido" filled  v-model="personal.lastName" />
          <q-input label="Edad" filled  v-model="personal.age" />
          <q-input label="Cedula de identidad" filled  v-model="personal.ci" />
          <q-input label="Numero de telefono" filled  v-model="personal.phone" />
          <q-input label="Correo electronico" filled  v-model="personal.email" />
          <div>
            <div >Nivel academico</div>
            <q-checkbox left-label v-model="academicLevel" val="primaria" label="Priamria"  />
            <q-checkbox left-label v-model="academicLevel" val="secundaria" label="Secundaria"/>
            <q-checkbox left-label v-model="academicLevel" val="TSu" label="TSU" />
            <q-checkbox left-label v-model="academicLevel" val="Lic" label="Lic" />
            <q-checkbox left-label v-model="academicLevel" val="MA" label="MA" />
            <q-checkbox left-label v-model="academicLevel" val="PhD" label="PhD" />
          </div>
          <q-input label="Direccion" filled  v-model="personal.dir" />
          <div class="text-center ">
            <q-btn label="Guarder Fechas" color="positive" @click="addPersonal(personal)"/>
          </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import {defineComponent,ref, onMounted} from 'vue'
import StaffComponent from 'src/components/StaffComponent.vue';
import { api } from 'src/boot/axios';


const columns = [
  {name: 'Name', label: 'Name', field: 'nombre', sortable: true, align: 'left'},
  {name: 'Crated Date', label: 'Crated Date', field: 'created_at', sortable: true, align: 'left'},
  {name: 'Project', label: 'Project', field: 'email', sortable: true, align: 'left'},
  {name: 'Academic', label: 'Nivel Academico', field: 'nivel_academico', sortable: false, align: 'center'},
  {name: 'Phone', label: 'Telefono', field: 'telefono', sortable: false, align: 'center'},
  {name: 'Dir', label: 'Direccion', field: 'dir', sortable: false, align: 'center'}
];

const data = ref([
  {
    name: 'Jeff Galbraith',
    Crated_Date: '10/2/2019',
    Project: 'Quasar QMarkdown',
    avatar: 'https://avatars1.githubusercontent.com/u/10262924?s=400&u=9f601b344d597ed76581e3a6a10f3c149cb5f6dc&v=4',
    progress: 60,
    des: 'Solutions Developer'
  }
]);

export default defineComponent({
  name: "StaffPage",
  components: {StaffComponent},
  setup() {
    const pForm = ref(false)
    const academicLevel = ref([])
    const personal = ref({
      name:'',
      lastName:'',
      age:'',
      ci:'',
      phone:'',
      email:'',
      acadLevel:'',
      dir:'',
    })

    const getPersonal = () => {
      api.get('personal/')
        .then(res => {
          data.value = res.data
        })
    }

    const addPersonal = (personal) => {
      academicLevel.value.forEach(element => {
        personal.acadLevel += element+', '
      });
      api.post('personal/',{
      name:personal.name,
      lastName:personal.lastName,
      age:personal.age,
      ci:personal.ci,
      phone:personal.phone,
      email:personal.email,
      academicLevel:personal.acadLevel,
      dir:personal.dir
      })
      .then(res => {
        console.log(res.data)
        pForm.value=false
        getPersonal()
      })
      .catch(err => {
        console.log(err)
        getPersonal()
      })
    }

    onMounted(()=>{
      getPersonal()
    })

    return {
      columns,
      academicLevel,
      data,
      pForm,
      personal,
      addPersonal
    }
  }
})
</script>

<style scoped>

</style>
