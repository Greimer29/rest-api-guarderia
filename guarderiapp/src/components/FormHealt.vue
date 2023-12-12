<template>
  <div>
    <div class="q-gutter-xs q-my-sm">
      <q-input v-model="healt.blodGF" filled label="Grupo y Factor Sanguineo" />
      <br>
      <div class="text-bold">Enfermedades padecidas:</div>
      <div class="">
        <q-checkbox left-label v-model="healt.diseases" val="Sarampion" label="Sarampion"  />
        <q-checkbox left-label v-model="healt.diseases" val="Parotiditis" label="Parotiditis"/>
        <q-checkbox left-label v-model="healt.diseases" val="Asma" label="Asma" />
        <q-checkbox left-label v-model="healt.diseases" val="Rubeola" label="Rubeola" />
        <q-checkbox left-label v-model="healt.diseases" val="VaricelaMA" label="Varicela" />
        <q-checkbox left-label v-model="healt.diseases" val="Mononucleosis" label="Mononucleosis" />
        <br>
        <q-toggle v-model="healtOp.otherDiseasesVal" label="Otras"/>
        <div v-show="healtOp.otherDiseasesVal" class="q-gutter-xs">
          <q-input v-model="healt.otherDiseases" filled label="Otras enfermedades" />
        </div>
      </div>
      <br>

      <div class="text-bold">Vacunas recibidas:</div>
      <div class="">
        <q-checkbox left-label v-model="healt.vaccines" val="Sarampion" label="Sarampion"  />
        <q-checkbox left-label v-model="healt.vaccines" val="BCG" label="BCG"/>
        <q-checkbox left-label v-model="healt.vaccines" val="Antitetanico" label="Antitetanico"/>
        <q-checkbox left-label v-model="healt.vaccines" val="Triple Polio" label="Triple Polio"/>
        <q-checkbox left-label v-model="healt.vaccines" val="Rubeola" label="Rubeola" />
        <q-checkbox left-label v-model="healt.vaccines" val="Trivalente Viral" label="Trivalente Viral" />
        <q-checkbox left-label v-model="healt.vaccines" val="Parotiditis" label="Parotiditis"/>
        <q-checkbox left-label v-model="healt.vaccines" val="Hepatitis" label="Hepatitis" />
        <br>
        <q-toggle v-model="healtOp.otherVaccinesVal" label="Otras"/>
        <div v-show="healtOp.otherVaccinesVal" class="q-gutter-xs">
          <q-input v-model="healt.otherVaccines" filled label="Otras vacunas" />
        </div>
      </div>
      <br>
      <div>
        <div class="text-bold">Ha estado el nino hospitalizado?</div>
          <q-toggle v-model="healtOp.hospiOp" :label="healtOp.hospiOp ? 'Si':'No'"/>
          <div v-show="healtOp.hospiOp" class="q-gutter-xs">
            <q-input v-model="healt.hospitalized" filled label="Por que?" />
          </div>
      </div>
      <br>
      <div>
        <div class="text-bold">Ha presentado alguna lesion, traumatismo o cirugia</div>
          <q-toggle v-model="healtOp.lessionsOp" :label="healtOp.lessionsOp ? 'Si':'No'"/>
          <div v-show="healtOp.lessionsOp" class="q-gutter-xs">
            <q-input v-model="healt.lessions" filled label="Lesiones Presentadas" />
          </div>
      </div>
      <br>
      <div>
        <div class="text-bold">Es alergico a algun medicamento, polen, polvo, compuesto alimenticio</div>
          <q-toggle v-model="healtOp.alergicOp" :label="healtOp.alergicOp ? 'Si':'No'"/>
          <div v-show="healtOp.alergicOp" class="q-gutter-xs">
            <q-input v-model="healt.alergic" filled label="Especifique" />
          </div>
      </div>
      <br>
      <div>
        <div class="text-bold">Padece alguna limitacion motora, de crecimiento, auditiva o visual?</div>
          <q-toggle v-model="healtOp.limitOp" :label="healtOp.limitOp ? 'Si':'No'"/>
          <div v-show="healtOp.limitOp" class="q-gutter-xs">
            <q-input v-model="healt.limits" filled label="Especifique cual" />
            <div class="text-bold">Es atendidad por un especialista?</div>
            <q-toggle v-model="healtOp.especialistOp" :label="healtOp.especialistOp ? 'Si':'No'"/>
          </div>
      </div>
      <br>
      <div>
        <div class="text-bold">En caso de fiebre alta, Que medicamento administran?</div>
          <q-input v-model="healt.feverMed" filled label="Medicamentos para la fiebre" />
      </div>
      <br>
      <div>
        <div class="text-bold">Tiene facilidad o propension a enfermarse?</div>
          <q-toggle v-model="healtOp.easySickOp" :label="healtOp.easySickOp ? 'Si':'No'"/>
          <div v-show="healtOp.easySickOp" class="q-gutter-xs">
            <q-input v-model="healt.easySick" filled label="Especifique" />
          </div>
      </div>
      <br>
      <div class="text-bold">Tiene pediatra o doctor que atienda al nino?</div>
        <q-toggle v-model="healtOp.pediatre" :label="healtOp.pediatre ? 'Si':'No'"/>
        <div v-show="healtOp.pediatre" class="q-gutter-xs">
          <q-input v-model="pediatre.name" filled label="Nombre" />
          <q-input v-model="pediatre.lastName" filled label="Apellido" />
          <q-input v-model="pediatre.phone" filled label="Telefono" />
          <q-input v-model="pediatre.jobPlace" filled label="Direccion de Trabajo" />
        </div>
    </div>
    <q-btn label="enviar"  class="q-mt-md" color="positive" @click="enviar(mother)"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { api } from 'src/boot/axios';

export default defineComponent({
  name:'FormHealt',
  setup(){
    const healtOp = ref({
      otherDiseasesVal:false,
      otherVaccinesVal:false,
      hospiOp:false,
      lessionsOp:false,
      alergicOp:false,
      limitOp:false,
      especialistOp:false,
      easySickOp:false,
      pediatre : false
    })
    const healt = ref({
      blodGF : '',
      diseases : [],
      otherDiseases : '',
      vaccines : [],
      otherVaccines : '',
      hospitalized : '',
      lessions : '',
      alergic : '',
      limits : '',
      especialist : '',
      easySick : '',
      feverMed : '',
    })

    const pediatre = ref({
      name : '',
      lastName : '',
      phone : '',
      jobPlace : ''
    })

    const enviar = (healt,pediatre) => {
      console.log(healt)
      console.log(pediatre)
      api.post('healt',{
        blodGF:healt.blodGF,
        diseases:healt.diseases+', '+healt.otherDiseases,
        vaccines:healt.vaccines+', '+healt.otherVaccines,
        hospitalized:healt.hospitalized,
        lessions:healt.lessions,
        alergic:healt.alergic,
        especialist:healt.especialist,
        easySick:healt.easySick,
        feverMed:healt.feverMed
      })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
      api.post('pediatre',{
        name:pediatre.blodGF,
        lastName:pediatre.lastName,
        phone:pediatre.phone,
        jobPlace:pediatre.jobPlace,
      })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }

    return{
      healt,
      healtOp,
      pediatre,
      enviar
    }
  }
})
</script>
