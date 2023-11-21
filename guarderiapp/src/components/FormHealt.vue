<template>
  <div>
    <div class="q-gutter-xs q-my-sm">
      <q-input v-model="healt.blodGF" filled label="Grupo y Factor Sanguineo" />
      <q-input v-model="healt.diseases" filled label="Enfermedades Padecidas" />
      <q-input v-model="healt.vaccines" filled label="Vacunas Recibidas" />
      <q-input v-model="healt.lessions" filled label="Lesiones Presentadas" />
      <q-input v-model="healt.limits" filled label="Limitaciones" />
      <q-input v-model="healt.feverMed" filled label="Medicamentos para la fiebre" />

        <q-toggle v-model="healt.pediatre" label="Pediatra"/>
        <div v-show="healt.pediatre" class="q-gutter-xs">
          <q-input v-model="pediatre.name" filled label="Nombre" />
          <q-input v-model="pediatre.lastName" filled label="Apellido" />
          <q-input v-model="pediatre.phone" filled label="Telefono" />
          <q-input v-model="pediatre.jobPlace" filled label="Direccion de Trabajo" />
        </div>
    </div>
    <q-btn label="enviar" @click="enviar(healt,pediatre)" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name:'FormHealt',
  setup(){
    const healt = ref({
      blodGF : '',
      diseases : '',
      vaccines : '',
      lessions : '',
      limits : '',
      feverMed : '',
      pediatre : false
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
    }

    return{
      healt,
      pediatre,
      enviar
    }
  }
})
</script>
