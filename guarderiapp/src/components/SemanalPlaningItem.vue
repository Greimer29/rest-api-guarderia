<template>
  <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
    <q-card flat bordered>
      <q-card-section class="text-center q-pt-xl q-gutter-sm">
        <strong>{{ datos.actividad }}</strong>
        <q-separator />
        <div>{{ datos.dia }}</div>
      </q-card-section>
      <q-card-section class="full-width q-pa-xs text-right q-gutter-xs">
        <q-btn icon="edit" color="primary" dense @click="open"/>
        <q-btn icon="delete" color="negative" dense @click="borrar(datos.id)"/>
      </q-card-section>
    </q-card>
  </div>

  <q-dialog v-model="actActividad">
    <q-card>
      <q-toolbar>
        <q-toolbar-title><span class="text-weight-bold"> Ingresar Planificacion</span> Semanal</q-toolbar-title>
        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>
      <q-card-section class="q-gutter-md">
        <q-select filled v-model="dia" :options="dayOp" label="Dia" />
        <q-input filled label="Actividad" type="textarea" v-model="actividad"/>
        <div class="full-width text-center">
          <q-btn label="Actualizar" side color="positive" @click="actualizar(datos.id,dia,actividad)" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { api } from 'src/boot/axios';
import { defineComponent,ref } from 'vue';
export default defineComponent({
  emits:['reload'],
  name:'SemanalPlaningItem',
  props:['datos'],
  setup(props){
    const dayOp = ref(['Lunes','Martes','Miercoles','Jueves'])
    const dia = ref(props.datos.dia)
    const actividad = ref(props.datos.actividad)
    const actActividad = ref(false)
    //prueba
    function open () {
      actActividad.value = true
    }
    //Eliminar actividad
    function borrar(id) {
      api.delete(`planning/semanal/${id}`)
        .then(res => {
          console.log(res.data)
        })
    }
    //Actualizar actividad
    function actualizar(id,dia,actividad) {
      api.patch(`planning/semanal/${id}`,{day:dia,activity:actividad})
        .then(res => {
          console.log(res.data)
          actActividad.value = false
          this.$emit('reload')
        })
    }
    return{
      dayOp,
      dia,
      actividad,
      actActividad,
      borrar,
      actualizar,
      open
    }
  }
})
</script>

