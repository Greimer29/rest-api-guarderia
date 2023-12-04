<template>
    <q-bar class="bg-white">
      <div class="text-center full-width text-bold">
        Estudiantes inscritos
      </div>
    </q-bar>
    <StudentsComponent
      v-for="(student,index) in students"
      :key="index"
      :name="student.nombre"
      :lastName="student.apellido"
      :turn="student.turno"
      :mode="student.modalidad"
    ></StudentsComponent>
</template>

<script>
import { defineComponent } from 'vue'
import StudentsComponent from 'src/components/StudentsComponent.vue';

export default defineComponent({
  name: 'StudentsPage',
  components:{
    StudentsComponent
  },
  setup(){
    const students = [
      {nombre:'Greimer',apellido:'Perez',turno:'Manana',modalidad:'Completa'},
      {nombre:'Leo',apellido:'Alvarez',turno:'Tarde',modalidad:'media'},
      {nombre:'Samuel',apellido:'Gutierrez',turno:'Manana',modalidad:'completa',opciones:['entrada','salida']}
    ]

    return{
      students
    }
  }
})
</script>
