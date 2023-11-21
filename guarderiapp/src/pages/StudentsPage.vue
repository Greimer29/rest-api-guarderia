<template>
  <q-page class="">
    <studentsComponent :students="students"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import StudentsComponent from 'src/components/StudentsComponent.vue'

export default defineComponent({
  name: 'IndexPage',
  components:{
    StudentsComponent
  },
  setup(){
    const students = [
      {nombre:'Greimer',apellido:'Perez',turno:'Manana',modalidad:'Completa'},
      {nombre:'Leo',apellido:'Alvarez',turno:'Tarde',modalidad:'media'},
      {nombre:'Samuel',apellido:'Gutierrez',turno:'Manana',modalidad:'completa'}
    ]

    return{
      students
    }
  }
})
</script>
