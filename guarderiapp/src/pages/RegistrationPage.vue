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
      active-color="primary"
      inactive-color="secondary"
      keep-alive
    >
      <q-step
        :name="1"
        title="Del niño/niña"
        icon="baby"
        :done="step > 1"
      >
        <FormChild/>
      </q-step>

      <q-step
        :name="2"
        title="Del padre"
        icon="military"
        :done="step > 2"
      >
        <FormFather/>
      </q-step>

      <q-step
        :name="3"
        title="De la Madre"
        icon="Pregnancy"
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
        <q-list v-show="!otherTutor">
          <q-item>
            hola
          </q-item>
          <q-item>
            holax2
          </q-item>
        </q-list>

        <q-toggle v-model="otherTutor" label="Otro"/>

        <FormTutor v-show="otherTutor" />
      </q-step>

      <q-step
        :name="5"
        title="Del Responsable Financiero"
        icon="settings"
        :done="step > 5"
      >
        <q-list v-show="!otherTutor">
          <q-item>
            hola
          </q-item>
          <q-item>
            holax2
          </q-item>
        </q-list>

        <q-toggle v-model="other" label="Otro"/>

        <FormRespFinan v-show="other" />
      </q-step>

      <q-step
        :name="6"
        title="De la salud del niño"
        icon="settings"
        :done="step > 6"
      >
        <FormHealt/>
      </q-step>

      <q-step
        :name="7"
        title="De los Habitos"
        icon="settings"
        :done="step > 7"
      >
        <FormHabits/>
      </q-step>

      <q-step
        :name="8"
        title="Información Importante"
        icon="settings"
        :done="step > 8"
      >
        <FormImportantInfo/>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="deep-orange" :label="step === 8 ? 'Finish' : 'Continue'" />
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
    return {
      step: ref(8),
      otherTutor: ref(false),
      other: ref(false)
    }
  }
}
</script>
