<template>
  <q-table
    style="height: 100%"
    flat bordered
    :title="`Actividades programadas del: ${fIni} - ${fFini}`"
    grid
    virtual-scroll
    :rows-per-page-options="[0]"
    :rows="semanalRow"
    :columns="semanalCol"
    hide-bottom
  >
  <!-- <template v-slot:top-right>
  <q-btn></q-btn>
  <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
  </template><template>
  </template>-->
    <template v-slot:top-right>
      <div class="q-gutter-md">
        <q-btn label="Cambiar Fecha" dense color="positive"  @click="fecha = true"/>
        <q-btn label="agregar Actividad" dense color="positive"  @click="semanal = true"/>
      </div>
    </template>
    <template v-slot:item="props">
      <SemanalPlaningItem :datos="props.row" @reload="getPlanSem()"/>
    </template>
  </q-table>

  <q-dialog v-model="fecha">
    <q-card>
      <q-toolbar>
        <q-toolbar-title><span class="text-weight-bold"> Ingresar: </span>Fecha Semanal</q-toolbar-title>
        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>
      <q-card-section class="q-gutter-xm">
          <q-input label="Fecha de inicio" filled dense v-model="planDates.init" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="planDates.init">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input label="Fecha de Finalizacion" filled dense v-model="planDates.final" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="planDates.final">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <div class="text-center ">
            <q-btn label="Guarder Fechas" color="positive" @click="addFecha(planDates.init,planDates.final)"/>
          </div>
      </q-card-section>
    </q-card>
  </q-dialog>

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
        <q-select filled v-model="dayActivity.day" :options="dayOp" label="Seleccionar Dia" />
        <q-input filled label="Actividad" type="textarea" v-model="dayActivity.activity"/>
        <div class="full-width text-center">
          <q-btn label="enviar" side color="positive" @click="addActivity(dayActivity)" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
  </template>
<script>
import {defineComponent,ref,onMounted} from 'vue'
import { api } from 'src/boot/axios'
import SemanalPlaningItem from 'src/components/SemanalPlaningItem.vue'

export default defineComponent({
  name:'SemanalPlaning',
  components:{
    SemanalPlaningItem
  },
  emits:['reload'],
  setup(){
    const fPlaning = ref([])
    const fecha = ref(false)
    const semanal = ref(false)
    const fIni = ref('')
    const fFini = ref('')
    const semanalRow = ref([])
    const dayOp = ref(['Lunes','Martes','Miercoles','Jueves'])

    const planDates = ref({
      init:'',
      final:''
    })
    const dayActivity = ref({
      day:'',
      activity:''
    })

    const semanalCol = [
      {name:'lun',label:'Lunes',field:'actividad'},
      {name:'mar',label:'Martes',field:'component'},
      {name:'mie',label:'Miercoles',field:'component'},
      {name:'jue',label:'Jueves',field:'component'},
      {name:'vie',label:'Viernes',field:'component'},
      {name:'actions',label:'Opciones'},
    ]
    //obtener datos de la planificacion semanal (fechas y actividades diarias)
    const getPlanSem = () => {
      api.get('planning/semanal')
        .then(res => {
          semanalRow.value = res.data
        })
    }
    const getDateSemanal = () => {
      api.get('planning')
        .then(res => {
          fPlaning.value = res.data
            const element = fPlaning.value[fPlaning.value.length - 1 ];
            fIni.value = element.fecha_inicio
            fFini.value = element.fecha_final
        })
    }
    //Guardar fechas y actividades en la planificacion semanal
    const addFecha = (fIni,fFin) => {
      api.post('planning',{tipo:'semanal',fInicio:fIni,fFinal:fFin})
        .then(res=>{
          getDateSemanal()
        })
      fecha.value = false
    }
    const addActivity = (plan) => {
      api.post('planning/semanal',{day:plan.day,activity:plan.activity})
        .then(res=>{
          console.log(res)
          getPlanSem()
        })
      semanal.value = false
    }

    onMounted(()=>{
      getPlanSem()
      getDateSemanal()
    })

    return{
      fecha,
      semanal,
      dayOp,
      dayActivity,
      planDates,
      fIni,fFini,
      semanalCol,
      semanalRow,
      getDateSemanal,
      getPlanSem,
      addFecha,
      addActivity
    }
  }

})
</script>
