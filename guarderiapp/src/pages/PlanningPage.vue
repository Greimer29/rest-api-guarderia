<template>
  <q-table :rows="quinceRow" :columns="quinceCol">
  </q-table>
</template>

<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'PlanningPage',
  setup(){
    const quinceRow = ref([
      {component:'component',objetivo:'aja',ApEs:'aja',AsEv:'aja'}
    ])
    const semanalRow = ref([
      {component:'component',objetivo:'aja'}
    ])

    const quinceCol = [
      {name:'comp',label:'Componente',field:'component'},
      {name:'obj',label:'Objetivo',field:'objetivo'},
      {name:'ap',label:'Aprendizajes Esperados',field:'ApEs'},
      {name:'asp',label:'Aspectos a Evaluar',field:'AsEv'},
      {name:'act',label:'Opciones',field:'actions'},
    ]

    const semanalCol = [
      {name:'comp',label:'Componente',field:'component'},
      {name:'obj',label:'Objetivo',field:'component'},
      {name:'ap',label:'Aprendizajes Esperados',field:'component'},
      {name:'asp',label:'Aspectos a Evaluar',field:'component'},
      {name:'act',label:'Opciones',field:'actions'},
    ]

    return {
      quinceRow,
      semanalRow,
      quinceCol,
      semanalCol
    }
  }
})
</script>
