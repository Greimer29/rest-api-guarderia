<template>
  <q-card>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="secondary"
      indicator-color="secondary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="mails" label="Relacion con el ambiente" />
      <q-tab name="alarms" label="Comunicacion y presentacion" />
      <q-tab name="movies" label="Formacion personal y social" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails" class="q-pa-none">
        <TableRelaAmbi :dates="date"/>
      </q-tab-panel>

      <q-tab-panel name="alarms" class="q-pa-none">
        <TableComuniRepre :dates="date"/>
      </q-tab-panel>

      <q-tab-panel name="movies" class="q-pa-none">
        <TableFormSocPer :dates="date"/>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import {defineComponent,ref} from 'vue'
import TableRelaAmbi from './TableRelaAmbi.vue';
import TableComuniRepre from './TableComuniRepre.vue';
import TableFormSocPer from './TableFormSocPer.vue';

export default defineComponent({
  name:'QuincenalPlaning',
  components:{
    TableRelaAmbi,
    TableComuniRepre,
    TableFormSocPer
  },
  props:{
    date:{
      type:Object
    }
  },
  setup () {
    return {
      tab: ref('alarms'),
      splitterModel: ref(20)
    }
  }
})
</script>
