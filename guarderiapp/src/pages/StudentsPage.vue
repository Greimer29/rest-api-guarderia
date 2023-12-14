<template>
    <q-bar class="bg-white">
      <q-toolbar-title class="text-center">
          Estudiantes inscritos
      </q-toolbar-title>
    </q-bar>
    <StudentsComponent
      v-for="(student,index) in students"
      :key="index"
      :name="student.primer_nombre"
      :lastName="student.primer_apellido"
      :turn="student.turno"
      :mode="student.modalidad"
      :id="student.id"
    ></StudentsComponent>
</template>

<script>
import { defineComponent,ref } from 'vue'
import StudentsComponent from 'src/components/StudentsComponent.vue';
import {api} from 'boot/axios'
import {useQuasar} from 'quasar'

export default defineComponent({
  name: 'StudentsPage',
  components:{
    StudentsComponent
  },
  setup(){
    const $q = useQuasar()
    const DataUser = $q.localStorage.getItem('dataUser')
    const students = ref([
      {nombre:'Greimer',apellido:'Perez',turno:'Manana',modalidad:'Completa'},
      {nombre:'Leo',apellido:'Alvarez',turno:'Tarde',modalidad:'media'},
      {nombre:'Samuel',apellido:'Gutierrez',turno:'Manana',modalidad:'completa',opciones:['entrada','salida']}
    ])

    api.get('/child',{
      headers:{
        'Authorization':`bearer ${DataUser.token}`
      }
    })
      .then(res=>{
        console.log(res.data)
        students.value = res.data
      })

    return{
      students
    }
  }
})
</script>
