<template>
  <div class="q-pa-md">
    <q-toolbar>
      <q-toolbar-title class="text-center">
          Llene los formularios con los datos..
      </q-toolbar-title>
    </q-toolbar>
    <q-stepper
      v-model="step"
      ref="stepper"
      animated
      vertical
      done-color="positive"
      done-icon="done"
      active-color="primary"
      active-icon="edit"
      inactive-color="secondary"
      keep-alive
    >
      <q-step
        :name="1"
        title="Del niño/niña"
        icon="child_care"
        :done="step > 1"
      >
        <FormChild/>
      </q-step>

      <q-step
        :name="2"
        title="Del padre"
        icon="man"
        :done="step > 2"
      >
        <FormFather/>
      </q-step>

      <q-step
        :name="3"
        title="De la Madre"
        icon="woman"
        :done="step > 3"
      >
        <FormMother/>
      </q-step>

      <q-step
        :name="4"
        title="Del Tutor Legal"
        icon="policy"
        :done="step > 4"
      >
        <FormTutor />
      </q-step>

      <q-step
        :name="5"
        title="Del Responsable Financiero"
        icon="attach_money"
        :done="step > 5"
      >
        <FormRespFinan />
      </q-step>

      <q-step
        :name="6"
        title="De la salud del niño"
        icon="local_hospital"
        :done="step > 6"
      >
        <FormHealt/>
      </q-step>

      <q-step
        :name="7"
        title="De los Habitos"
        icon="extension"
        :done="step > 7"
      >
        <FormHabits/>
      </q-step>

      <q-step
        :name="8"
        title="Información Importante"
        icon="priority_high"
        :done="step > 8"
      >
        <FormImportantInfo/>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn v-show="step === 8" @click="mevoy" color="deep-orange" label="Finish" />
          <q-btn v-show="step != 8" @click="$refs.stepper.next()" color="deep-orange" :label="step === 8 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="deep-orange" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from 'vue'
import FormChild from 'src/components/FormChild.vue';
import FormFather from 'src/components/FormFather.vue';
import FormMother from 'src/components/FormMother.vue'
import FormTutor from 'src/components/FormTutor.vue';
import FormRespFinan from 'src/components/FormRespFinan.vue';
import FormHealt from 'src/components/FormHealt.vue';
import FormHabits from 'src/components/FormHabits.vue'
import FormImportantInfo from 'src/components/FormImportantInfo.vue';
import { api } from 'src/boot/axios';
import { useRouter } from 'vue-router';
import {useQuasar} from 'quasar'

export default {
  name:'RegistrationPage',
  components:{
    FormChild,
    FormFather,
    FormMother,
    FormTutor,
    FormRespFinan,
    FormHealt,
    FormHabits,
    FormImportantInfo
  },
  setup () {
    const $q = useQuasar()
    const DataUser = $q.localStorage.getItem('dataUser')
    const router = useRouter()
    const tutors = ref([])

    const mevoy = () => {
      router.replace('/main')
    }

    setInterval(()=>{
      api.get('fathers',{
        headers:{
          'Authorization':`bearer ${DataUser.token}`
        }
      })
        .then(res => {
          tutors.value = res.data
        })
    },2000)
    return {
      step: ref(1),
      otherTutor: ref(false),
      other: ref(false),
      tutors,
      mevoy
    }
  }
}
</script>
