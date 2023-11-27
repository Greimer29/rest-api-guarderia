<template>
    <q-table
      title="Planificacion Quincenal"
      :columns="quinceCol"
      :rows="quinceRow"
      row-key="name"
    >
      <template v-slot:body-cell-act="props">
        <div class="flex flex-center">
          <q-btn flat :label="props" icon="add" color="positive"/>
          <q-btn flat  :label="props" icon="delete" color="negative"/>
          <q-btn flat  :label="props" icon="edit" color="primary"/>
        </div>
      </template>
    </q-table>

    <q-table
      title="Panificacion Semanal"
      :columns="semanalCol"
      :rows="semanalRow"
      row-key="name">
      <template v-slot:body-cell-act="props">
        <div class="flex flex-center">
          <q-btn flat :label="props" icon="add" color="positive" @click="fixed = true" />
          <q-btn flat  :label="props" icon="delete" color="negative"/>
          <q-btn flat  :label="props" icon="edit" color="primary"/>
        </div>
      </template>
    </q-table>
    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-bold">Crear nuevo Objetivo</div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" style="max-height: 50vh;min-width: 50vh;" >
            <q-input filled label="Componente" />
            <q-input filled label="Objetivo" />
            <q-input filled label="Aprendizajes Esperados" />
            <q-input filled label="Aspectos a Evaluar" />
          </q-form>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn dense flat label="Guardar" color="positive" @click="console.log('enviado')" v-close-popup/>
          <q-btn flat label="Cancelar" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'PlanningPage',
  setup(){
    const quinceRow = ref([
      {name:'component',component:'aja'},
      {name:'component',component:'aja'},
    ])
    const semanalRow = ref([
      {name:'component',component:'aja'},
      {name:'component',component:'aja'},
    ])

    const quinceCol = [
      {name:'comp',label:'Componente',field:'component'},
      {name:'obj',label:'Objetivo',field:'component'},
      {name:'ap',label:'Aprendizajes Esperados',field:'component'},
      {name:'asp',label:'Aspectos a Evaluar',field:'component'},
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
      semanalCol,
      fixed: ref(false)
    }
  }
})
</script>
