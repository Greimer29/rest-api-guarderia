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
        <QuincenalPlaning :date="quiDate" @ReloadDates="getDateQuincenal()"/>
      </q-tab-panel>

      <q-tab-panel class="q-pa-none" name="planSem">
        <SemanalPlaning :date="semDate" @ReloadDates="getDateSemanal()"/>
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
    const semDate = ref('')
    const quiDate = ref('')
    const getDateSemanal = () => {
      api.get('planning/dates/'+'semanal')
        .then(res => {
          semDate.value= res.data
        })
    }
    const getDateQuincenal = () => {
      api.get('planning/dates/'+'quincenal')
        .then(res => {
          quiDate.value= res.data
          console.log(quiDate.value)
        })
    }
    onMounted(()=>{
      getDateSemanal()
      getDateQuincenal()
    })
    return {
      getDateSemanal,
      semDate,
      quiDate,
      tab: ref('planQuin'),
    }
  }
})
</script>
