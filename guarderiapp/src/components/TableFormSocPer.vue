<template>
  <q-table
    :title="`Del: ${!dates.fecha_inicio?'':dates.fecha_inicio} - ${!dates.fecha_final?'':dates.fecha_final}`"
    :dense="$q.screen.lt.md"
    flat bordered
    :rows="quinceRow"
    :columns="quinceCol"
    no-results-label="The filter didn't uncover any results"
    grid
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
        <q-input filled label="Objetivo" v-model="quincenalPlan.objetivo"/>
        <q-input filled label="Aprendizajes Esperados" type="textarea" v-model="quincenalPlan.ApEs"/>
        <q-input filled label="Aspectos a evaluar" type="textarea" v-model="quincenalPlan.AsEv"/>
        <div class="full-width text-center">
          <q-btn label="enviar" side color="positive" @click="enviar(quincenalPlan)"></q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
import {defineComponent,onMounted,ref} from 'vue'
import { api } from 'src/boot/axios'

export default defineComponent({
  name:'TableRelaAmbi',
  props:{
    dates:{
      type:Object
    }
  },
  setup(){
    const fPlaning = ref([])
    const quincenal = ref(false)
    const quinceRow = ref([])
    const quincenalPlan = ref({
      componente:'',
      objetivo:'',
      ApEs:'',
      AsEv:''
    })

    const quinceCol = [
      {name:'comp',label:'Componente',field:'componente'},
      {name:'obj',label:'Objetivo',field:'objetivo'},
      {name:'ap',label:'Aprendizajes Esperados',field:'aprendizajes_esperados'},
      {name:'asp',label:'Aspectos a Evaluar',field:'aspectos_evaluar'},
      {name:'actions',label:'Opciones'},
    ]
    //enviar datos a la bd
    function enviar(plan){
      api.post(`planning/quincenal`,{component:plan.componente,objetive:plan.objetivo,aspEsp:plan.ApEs,aspEva:plan.AsEv,area:'Formacion Personal y Solcial'})
        .then(res=>{
          getQuincenalPlaning()
        })
    }
    //obtener datos de la api
    function getQuincenalPlaning(){
      api.get(`planning/quincenal/area/${3}`)
        .then(res=>{
          quinceRow.value = res.data
          quincenal.value = false
        })
    }
    onMounted(()=>{
      getQuincenalPlaning()
    })
    return{
      fPlaning,
      quinceCol,
      quinceRow,
      quincenal,
      quincenalPlan,
      getQuincenalPlaning,
      enviar
    }
  }
})
</script>
