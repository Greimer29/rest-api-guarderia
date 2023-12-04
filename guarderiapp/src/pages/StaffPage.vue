<template>
  <q-card class="no-shadow" bordered>
    <q-card-section>
      <div class="text-h6 text-grey-8 text-center">
        Personal del departamento
      </div>
    </q-card-section>
    <q-separator/>
    <q-card-section class="q-pa-none">
      <q-table grid :rows="data" :columns="columns" hide-bottom>
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
            >
            </StaffComponent >
          </div>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import {defineComponent,ref, onMounted} from 'vue'
import StaffComponent from 'src/components/StaffComponent.vue';
import { api } from 'src/boot/axios';

const getTeachers = () => {
  api.get('teachers/')
    .then(res => {
      data.value = res.data
      console.log(data.value)
    })
}

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

    onMounted(()=>{
      getTeachers()
    })

    return {
      columns,
      data
    }
  }
})
</script>

<style scoped>

</style>
