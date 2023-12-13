<template>
  <q-table
    style="height: 100%"
    flat bordered
    :title="`Del: ${!date.fecha_inicio?' ':date.fecha_inicio} - ${!date.fecha_final?' ':date.fecha_final}`"
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
        <q-btn flat label="Cambiar Fecha" dense color="positive"  @click="fecha = true"/>
        <q-btn flat label="agregar Actividad" dense color="positive"  @click="semanal = true"/>
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
import {defineComponent,ref,onMounted,emit} from 'vue'
import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'
import SemanalPlaningItem from 'src/components/SemanalPlaningItem.vue'

export default defineComponent({
  name:'SemanalPlaning',
  components:{
    SemanalPlaningItem
  },
  props:{
    date:{
      type:String
    }
  },
  emits:['reload','ReloadDates'],
  setup(){
    const $q = useQuasar()
    const fecha = ref(false)
    const semanal = ref(false)
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
    //Guardar fechas y actividades en la planificacion semanal
    function addFecha(fIni,fFin){
      api.post('planning/dates',{tipo:'semanal',fInicio:fIni,fFinal:fFin})
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
    const addActivity = (plan) => {
      console.log(plan)
      api.post('planning/semanal',{day:plan.day,activity:plan.activity})
        .then(res=>{
          console.log(res)
          getPlanSem()
        })
      semanal.value = false
    }

    onMounted(()=>{
      getPlanSem()
    })

    return{
      fecha,
      semanal,
      dayOp,
      dayActivity,
      planDates,
      semanalCol,
      semanalRow,
      getPlanSem,
      addFecha,
      addActivity
    }
  }

})
</script>
