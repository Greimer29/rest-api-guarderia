<template>
  <q-card>
    <div>
      <q-btn unelevated class="full-width" label="Cambiar fecha" color="blue-6" @click="pliOpen()"/>
    </div>
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

  <q-dialog v-model="fecha">
    <q-card>
      <q-toolbar>
        <q-toolbar-title><span class="text-weight-bold"> Ingresar: </span>Fecha Semanal</q-toolbar-title>
        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>
      <q-card-section class="q-gutter-xm">
          <q-input label="Fecha de inicio" filled dense v-model="dates.init" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="dates.init">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input label="Fecha de Finalizacion" filled dense v-model="dates.fini" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="dates.fini">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <div class="text-center ">
            <q-btn label="Guarder Fechas" color="positive" @click="addFecha(dates.init,dates.fini)"/>
          </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import {defineComponent,ref} from 'vue'
import { api } from 'src/boot/axios';
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
  emits:['ReloadDates'],
  setup () {
    const dates = ref({
      init:'',
      fini:''
    })
    const fecha = ref(false)

    const pliOpen = () => {
      fecha.value = true
    }
    function addFecha(fIni,fFin){
      api.post('planning/dates',{tipo:'quincenal',fInicio:fIni,fFinal:fFin})
        .then(res=>{
          fecha.value = false
          this.$emit('ReloadDates')
          $q.notify({
              position:'top',
              color:'positive',
              message: 'Fecha modificada exitosamente'
            })
        })
        .catch(err => {

        })
    }

    return {
      pliOpen,
      addFecha,
      fecha,
      dates,
      tab: ref('alarms'),
      splitterModel: ref(20)
    }
  }
})
//<q-btn flat label="Cambiar Fecha" dense color="positive"  @click="fecha = true"/>
</script>
