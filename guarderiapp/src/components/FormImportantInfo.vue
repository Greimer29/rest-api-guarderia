<template>
  <div>
    <div class="q-gutter-xs q-my-sm">
      <div class="text-bold">Antecedentes Prenatales</div>
      <div class="">Al momento del parto:</div>
      <div class="flex q-gutter-xs">
          <q-input style="width: 45%;" v-model="impInfo.ageMom" type="number" filled label="Edad de la madre" />
          <q-input style="width: 45%;" v-model="impInfo.ageDad" type="number" filled label="Edad de el Padre" />
      </div>
      <div>
        <div class="">Fue un embarazo planificado ?</div>
        <q-radio label="Si" v-model="impInfo.pregnedPlaned" val="si" />
        <q-radio label="No" v-model="impInfo.pregnedPlaned" val="no"/>
      </div>
      <div>
        <div class="">Padeció la madre durante el embarazo:</div>
        <div>
          <q-checkbox v-model="impInfo.sickMomPregned" val="Toxoplasmosis" label="Toxoplasmosis"  />
          <q-checkbox v-model="impInfo.sickMomPregned" val="Anemia" label="Anemia"  />
          <q-checkbox v-model="impInfo.sickMomPregned" val="Rubeola" label="Rubeola"  />
          <q-checkbox v-model="impInfo.sickMomPregned" val="Hipertension" label="Hipertension"  />
        </div>
        <q-toggle v-model="impInfoShow.showOtherSicks" label="Otras"/>
        <div v-show="impInfoShow.showOtherSicks" class="q-gutter-xs">
          <q-input v-model="impInfo.otherSicks" filled label="Indique otras enfermedades" />
        </div>
      </div>
      <q-toggle v-model="impInfoShow.showComplications" label="Presentó alguna complicación ?"/>
      <div v-show="impInfoShow.showComplications" class="q-gutter-xs">
        <q-input v-model="impInfo.complicationsExpl" filled label="Que tipo de complicaciones" />
      </div>
      <q-select v-model="impInfo.partType" :options="partTypeOp" filled label="Como fue el parto"/>
      <br>
      <div class="text-bold">Antecedentes Postnatales:</div>
      <div>
        <div class="">Segun el doctor nacio bien?</div>
        <q-radio label="Si" v-model="impInfo.bornGood" val="si" />
        <q-radio label="No" v-model="impInfo.bornGood" val="no"/>
          <div v-show="impInfo.bornGood == 'no'" class="q-gutter-xs">
            <q-input v-model="impInfo.bornGoodExp" filled label="Explique" />
          </div>
      </div>
      <div>
        <div class="">El bebe era:</div>
        <q-checkbox v-model="impInfo.babyType" val="Tranquil@" label="Tranquil@" />
        <q-checkbox v-model="impInfo.babyType" val="Alegre" label="Alegre" />
        <q-checkbox v-model="impInfo.babyType" val="Nervios@"  label="Nervios@" />
        <q-checkbox v-model="impInfo.babyType" val="Lloraba mucho" label="Lloraba mucho" />
        <q-checkbox v-model="impInfo.babyType" val="Dormia bien" label="Dormia bien" />
        <q-checkbox v-model="impInfo.babyType" val="Dormia mucho" label="Dormia mucho" />
        <q-checkbox v-model="impInfo.babyType" val="Comia bien" label="Comia bien" />
        <q-checkbox v-model="impInfo.sickMomPregned" val="Enfermiz@" label="Enfermiz@" />
      </div>
      <br>
      <div>
        <div class="">Pide ayuda en exceso en que puede hacer solo?</div>
        <q-toggle label="Pide ayuda en exceso en que puede hacer solo?" v-model="impInfoShow.doAlone" val="no" />
          <div v-show="impInfoShow.doAlone" class="q-gutter-xs">
            <q-input v-model="impInfo.doAloneExp" filled label="Indique que cosas" />
          </div>
      </div>
      <br>
      <div>
        <q-toggle  label="Favorecen ustedes el desarrollo de la autonomia?" v-model="impInfoShow.favAutonomy" val="no" />
          <div v-show="impInfoShow.favAutonomy" class="q-gutter-xs">
            <q-input v-model="impInfo.favAutonomyExp" filled label="Explique de que manera" />
          </div>
      </div>
      <br>
      <div>
        <div class="text-bold">Aspectos educativos familiares:</div>
        <div class="">Quien evoca mayor influencia sobre el nino/nina</div>
        <q-select v-model="impInfo.inflMayor" :options="inflMayorOp" filled label="Indique"/>
      </div>
      <div >
        <div class="">Su hijo tiene algun comportamiento que a usted le resulte:</div>
        <q-toggle v-model="impInfoShow.hardComportShow" label="Dificil de tratar"/>
        <div v-show="impInfoShow.hardComportShow" class="q-gutter-xs">
          <q-input v-model="impInfo.hardComport" filled label="Explique" />
          <q-input v-model="impInfo.hardComportExp" filled label="Que hacen cuando lo presenta" />
        </div>
      </div>
      <div>
        <q-toggle v-model="impInfoShow.grateComportShow" label="Agradable"/>
        <div v-show="impInfoShow.grateComportShow" class="q-gutter-xs">
          <q-input v-model="impInfo.grateComport" filled label="Explique" />
          <q-input v-model="impInfo.grateComportExp" filled label="Que hacen cuando lo presenta" />
        </div>
      </div>
    </div>
    <q-btn label="enviar"  class="q-mt-md" color="positive" @click="enviar(impInfo)"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import {useQuasar} from 'quasar'
import { api } from 'src/boot/axios';

export default defineComponent({
  name:'FormImportantInfo',
  setup(){
    const $q = useQuasar()
    const DataUser = $q.localStorage.getItem('dataUser')
    const inflMayorOp = ref([
      'Papa','Mama','otro'
    ])
    const partTypeOp = ref([
      'Normal','Cesaria','Forceps','Prematuro','De semanas'
    ])

    const impInfoShow = ref({
      showOtherSicks : false,
      showComplications : false,
      bornGood : false,
      doAlone : false,
      favAutonomy : false,
      hardComportShow : false,
      grateComportShow:false,
    })

    const impInfo = ref({
      ageMom : '',
      ageDad : '',
      pregnedPlaned : false,
      sickMomPregned : [],
      otherSicks : '',
      complicationsExpl : '',
      babyType: [],
      partType : '',
      bornGoodExp : '',
      doAloneExp : '',
      favAutonomyExp : '',
      inflMayor : '',
      hardComport : '',
      hardComportExp : '',
      grateComport:'',
      grateComportExp:'',
    })

    const enviar = (impInfo) => {
      impInfo.sickMomPregned = JSON.stringify(impInfo.sickMomPregned)
      impInfo.babyType = JSON.stringify(impInfo.babyType)
      api.post('infoImportant',{
        ageMom:impInfo.ageMom,
        ageDad:impInfo.ageDad,
        pregnedPlaned:impInfo.pregnedPlaned,
        sickMomPregned:impInfo.sickMomPregned+','+impInfo.otherSicks,
        complicationsExpl:impInfo.complicationsExpl,
        babyType:impInfo.babyType,
        partType:impInfo.partType,
        doAloneExp:impInfo.doAloneExp,
        bornGoodExp:impInfo.bornGoodExp,
        favAutonomyExp:impInfo.favAutonomyExp,
        inflMayor:impInfo.inflMayor,
        hardComport:impInfo.hardComport,
        hardComportExp:impInfo.hardComportExp,
        grateComport:impInfo.grateComport,
        grateComportExp:impInfo.grateComportExp
      },{
        headers:{
          'Authorization':`bearer ${DataUser.token}`
        }
      })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }

    return{
      impInfoShow,
      impInfo,
      enviar,
      partTypeOp,
      inflMayorOp
    }
  }
})
</script>
