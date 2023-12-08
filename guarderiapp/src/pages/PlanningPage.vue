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

      <q-tab-panel name="planQuin" class="q-pa-none">
        <QuincenalPlaning :date="quiDate"/>
      </q-tab-panel>

      <q-tab-panel name="planSem">
        <SemanalPlaning :date="semDate"/>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { defineComponent,onMounted,ref } from 'vue'
import { api } from 'src/boot/axios'
import SemanalPlaning from 'src/components/SemanalPlaning.vue'
import QuincenalPlaning from 'src/components/QuincenalPlaning.vue'

export default defineComponent({
  name: 'PlanningPage',
  components:{
    SemanalPlaning,
    QuincenalPlaning
  },
  setup(){
    const fPlaning = ref([])
    const semDate = ref({})
    const quiDate = ref({})
    const dates = ref([
      {sem:''},
      {qui:''}
    ])
    const getDateSemanal = () => {
      api.get('planning/type/'+'semanal')
        .then(res => {
          semDate.value= res.data[length]
        })
    }
    const getDateQuincenal = () => {
      api.get('planning/type/'+'quincenal')
        .then(res => {
          quiDate.value= res.data[length]
          console.log(quiDate.value)
        })
    }
    onMounted(()=>{
      getDateSemanal()
      getDateQuincenal()
    })
    return {
      semDate,
      quiDate,
      tab: ref('planQuin'),
    }
  }
})
</script>
