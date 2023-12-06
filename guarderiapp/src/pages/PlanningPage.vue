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
        <QuincenalPlaning/>
      </q-tab-panel>

      <q-tab-panel name="planSem">
        <SemanalPlaning/>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { defineComponent,ref } from 'vue'
import SemanalPlaning from 'src/components/SemanalPlaning.vue'
import QuincenalPlaning from 'src/components/QuincenalPlaning.vue'

export default defineComponent({
  name: 'PlanningPage',
  components:{
    SemanalPlaning,
    QuincenalPlaning
  },
  setup(){
    return {
      tab: ref('planQuin'),
    }
  }
})
</script>
