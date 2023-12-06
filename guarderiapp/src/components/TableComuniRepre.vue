<template>
  <q-table
    :dense="$q.screen.lt.md"
    flat bordered
    :rows="quinceRow"
    :columns="quinceCol"
  >
    <template v-slot:top-right>
      <q-btn label="agregar" rounded flat dense size="md"  color="positive"  @click="quincenal = true"/>
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn icon="edit" rounded flat dense size="sm" color="primary"  @click="alert(props)"/>
        <q-btn icon="delete" rounded flat dense size="sm" color="negative"  @click="alert(props)"/>
      </q-td>
    </template>
  </q-table>
  <q-dialog v-model="quincenal">
    <q-card>
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
        </q-avatar>
        <q-toolbar-title><span class="text-weight-bold"> Ingresar Planificacion</span> Quincenal</q-toolbar-title>
        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>
      <q-card-section class="q-gutter-md">
        <q-input filled label="Componete" v-model="quincenalPlan.componente"/>
        <q-input filled label="Objetivo" v-model="quincenalPlan.componente"/>
        <q-input filled label="Aprendizajes Esperados" type="textarea" v-model="quincenalPlan.componente"/>
        <q-input filled label="Aspectos a evaluar" type="textarea" v-model="quincenalPlan.componente"/>
        <div class="full-width text-center">
          <q-btn label="enviar" side color="positive"></q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
import {defineComponent,ref} from 'vue'

export default defineComponent({
  name:'TableComuniRepre',
  components:{},
  setup(){
    const quincenal = ref(false)
    const quinceRow = ref([
      {component:'component',objetivo:'aja',ApEs:'aja',AsEv:'aja'}
    ])
    const quincenalPlan = ref({
      componente:'',
      objetivo:'',
      ApEs:'',
      AsEv:''
    })

    const quinceCol = [
      {name:'comp',label:'Componente',field:'component'},
      {name:'obj',label:'Objetivo',field:'objetivo'},
      {name:'ap',label:'Aprendizajes Esperados',field:'ApEs'},
      {name:'asp',label:'Aspectos a Evaluar',field:'AsEv'},
      {name:'actions',label:'Opciones'},
    ]
    return{
      quinceCol,
      quinceRow,
      quincenal,

      quincenalPlan
    }
  }
})
</script>
