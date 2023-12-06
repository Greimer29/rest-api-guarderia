<template>
  <q-card>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="planQuin" label="Planificacion Quincenal" />
      <q-tab name="planSem" label="Planificacion Semanal" />
    </q-tabs>

    <q-separator/>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="planQuin">
      </q-tab-panel>

      <q-tab-panel name="planSem">
        <SemanalPlaning/>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { defineComponent,onMounted,ref } from 'vue'
import SemanalPlaning from 'src/components/SemanalPlaning.vue'

export default defineComponent({
  name: 'PlanningPage',
  components:{
    SemanalPlaning
  },
  setup(){
    const quinceRow = ref([
          {component:'component',objetivo:'aja',ApEs:'aja',AsEv:'aja'}
    ])
    const PQ = ref({
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

    return {
      quinceRow,
      quinceCol,
      tab: ref('planSem'),
      PQ
    }
  }
})
</script>
