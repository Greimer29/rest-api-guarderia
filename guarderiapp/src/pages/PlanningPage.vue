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
      <q-tab name="plaSem" label="Planificacion Semanal" />
    </q-tabs>

    <q-separator/>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="planQuin">
        <q-table :rows="quinceRow" :columns="quinceCol">
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn icon="add" rounded flat dense size="md"  color="positive"  @click="quincenal = true"/>
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
              <q-input filled label="Componete" v-model="PQ.componente"/>
              <q-input filled label="Objetivo" v-model="PQ.componente"/>
              <q-input filled label="Aprendizajes Esperados" type="textarea" v-model="PQ.componente"/>
              <q-input filled label="Aspectos a evaluar" type="textarea" v-model="PQ.componente"/>
              <div class="full-width text-center">
                <q-btn label="enviar" side color="positive"></q-btn>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-tab-panel>

      <q-tab-panel name="planSem">
        <q-table :rows="semanalRow" :columns="semanalCol">
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn icon="add" rounded flat dense size="md"  color="positive"  @click="semanal = true"/>
              <q-btn icon="edit" rounded flat dense size="sm" color="primary"  @click="alert(props)"/>
              <q-btn icon="delete" rounded flat dense size="sm" color="negative"  @click="alert(props)"/>
            </q-td>
          </template>
        </q-table>
        <q-dialog v-model="semanal">
          <q-card>
            <q-toolbar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
              </q-avatar>
              <q-toolbar-title><span class="text-weight-bold"> Ingresar Planificacion</span> Semanal</q-toolbar-title>
              <q-btn flat round dense icon="close" v-close-popup />
            </q-toolbar>
            <q-card-section class="q-gutter-md">
              <q-select filled v-model="PS.day" :options="dayOp" label="Seleccionar Dia" />
              <q-input filled label="Actividad" type="textarea" v-model="PS.actividad"/>
              <div class="full-width text-center">
                <q-btn label="enviar" side color="positive" />
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'PlanningPage',
  setup(){
    const dayOp = ['lunes','martes','miercoles','jueves','viernes']
    const PQ = ref({
      componente:'',
      objetivo:'',
      ApEs:'',
      AsEv:''
    })
    const PS = ref({
      day:'',
      actividad:''
    })

    const quinceRow = ref([
      {component:'component',objetivo:'aja',ApEs:'aja',AsEv:'aja'}
    ])
    const semanalRow = ref([
      {component:' despues',objetivo:'aja'}
    ])

    const quinceCol = [
      {name:'comp',label:'Componente',field:'component'},
      {name:'obj',label:'Objetivo',field:'objetivo'},
      {name:'ap',label:'Aprendizajes Esperados',field:'ApEs'},
      {name:'asp',label:'Aspectos a Evaluar',field:'AsEv'},
      {name:'actions',label:'Opciones'},
    ]

    const semanalCol = [
      {name:'lun',label:'Lunes',field:'component'},
      {name:'mar',label:'Martes',field:'component'},
      {name:'mie',label:'Miercoles',field:'component'},
      {name:'jue',label:'Jueves',field:'component'},
      {name:'vie',label:'Viernes',field:'component'},
      {name:'actions',label:'Opciones'},
    ]

    return {
      quinceRow,
      semanalRow,
      quinceCol,
      semanalCol,
      tab: ref('planSem'),
      quincenal: ref(false),
      semanal: ref(true),
      PQ,PS,dayOp
    }
  }
})
</script>
