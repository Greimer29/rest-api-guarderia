<template>
  <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
    <q-card flat bordered>
      <q-card-section class="text-center q-pb-none q-gutter-sm">
        <strong>{{ datos.actividad }}</strong>
        <q-separator />
        <div>{{ datos.dia }}</div>
      </q-card-section>
      <q-card-section class="full-width q-pa-xs text-right q-gutter-xs">
        <q-btn icon="edit" color="primary" dense @click="actActividad = true"/>
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
        <q-select readonly filled v-model="dayOld" label="Dia" />
        <q-input filled label="Actividad" type="textarea" v-model="activityOld"/>
        <div class="full-width text-center">
          <q-btn label="enviar" side color="positive" @click="actualizar(datos.id)" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { api } from 'src/boot/axios';
import { defineComponent,ref } from 'vue';
export default defineComponent({
  name:'SemanalPlaningItem',
  props:['datos'],
  setup(){
    const actActividad = ref(false)
    const dayOld = ref('')
    const activityOld = ref('')

    //Eliminar actividad
    function borrar(id) {
      api.delete(`planning/semanal/${id}`)
        .then(res => {
          console.log(res.data)
          this.$emit('reload')
        })
    }
    //Actualizar actividad
    function actualizar(id) {
      api.patch(`planning/semanal/${id}`)
        .then(res => {
          console.log(res.data)
          this.$emit('reload')
        })
    }
    return{
      actActividad,
      activityOld,
      dayOld,
      borrar,
      actualizar
    }
  }
})
</script>

