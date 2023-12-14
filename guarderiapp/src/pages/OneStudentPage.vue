<template>
  <q-card>
    <q-card-section class="flex" >
        <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions">
        </q-avatar>
        <div class="q-pa-md">
          <div class="gray-7" style="font-size:large;">{{ child.primer_nombre }} {{ child.primer_apellido }}</div>
          <div>Edad: {{ child.edad }} años</div>
          <div>Sexo: {{ child.sexo }}</div>
        </div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Datos de la nina"
        caption=""
      >
        <q-card>
          <q-card-section>
            <div>
                <div>Prodecedencia: {{ child.procedencia }}</div>
                <div>Nacionalidad: {{ child.nacionalidad }}</div>
                <div>Fecha de nacimiento: {{  }}</div>
                <div>Pais de nacimiento: {{ child.pais }}</div>
                <div>Estado: {{ child.estado }}</div>
                <div>ciudad: {{ child.ciudad }}</div>
                <div>Numero de hermanos: {{ child.cantidad_hermanos }}</div>
                <div>Lugar entre sus hemanos: {{ child.lugar_hermanos }}</div>
                <div>peso: {{ child.peso }}</div>
                <div>Talla de camisa: {{ child.talla_camisa }}</div>
                <div>Talla de pantalon: {{ child.talla_pantalon }}</div>
                <div>Talla de zapato: {{ child.talla_zapato }}</div>
                <div>Modalidad de tiempo: {{ child.modalidad }}</div>
                <div>Turno en que asistira: {{ child.turno }}</div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card-section>

    <q-separator/>
    <q-card-section>
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Datos de la madre"
        caption=""
      >
        <q-card>
          <q-card-section>
            <div>
              <div>Nombres</div>
              <div>Apellidos</div>
              <div>Edad</div>
              <div>Cedula de Identidad</div>
              <div>Fecha de nacimiento</div>
              <div>Estado civil</div>
              <div>Direccion de habitacion</div>
              <div>Telefonos</div>
              <div>Nivel academico</div>
              <div>Situacion laboral</div>
              <div>Profesion</div>
              <div>Ocupacion actual</div>
              <div>Lugar de trabajo</div>
              <div>Telefonos de trabajo</div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card-section>

    <q-separator/>
    <q-card-section>
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Datos del padre"
        caption=""
      >
        <q-card>
          <q-card-section>
            <div>
              <div>Nombres</div>
              <div>Apellidos</div>
              <div>Edad</div>
              <div>Cedula de Identidad</div>
              <div>Fecha de nacimiento</div>
              <div>Estado civil</div>
              <div>Direccion de habitacion</div>
              <div>Telefonos</div>
              <div>Nivel academico</div>
              <div>Situacion laboral</div>
              <div>Profesion</div>
              <div>Ocupacion actual</div>
              <div>Lugar de trabajo</div>
              <div>Telefonos de trabajo</div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <q-expansion-item
        expand-separator
        icon="shield"
        label="Datos del Representante legal"
        caption=""
      >
        <q-card>
          <q-card-section>
            <div>
              <div>Nombres</div>
              <div>Apellidos</div>
              <div>Edad</div>
              <div>Cedula de Identidad</div>
              <div>Fecha de nacimiento</div>
              <div>Estado civil</div>
              <div>Direccion de habitacion</div>
              <div>Telefonos</div>
              <div>Nivel academico</div>
              <div>Situacion laboral</div>
              <div>Profesion</div>
              <div>Ocupacion actual</div>
              <div>Lugar de trabajo</div>
              <div>Telefonos de trabajo</div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <q-expansion-item
        expand-separator
        icon="paid"
        label="Datos del Responsable Financiero"
        caption=""
      >
        <q-card>
          <q-card-section>
            <div>
              <div>Nombres</div>
              <div>Apellidos</div>
              <div>Edad</div>
              <div>Cedula de Identidad</div>
              <div>Fecha de nacimiento</div>
              <div>Estado civil</div>
              <div>Direccion de habitacion</div>
              <div>Telefonos</div>
              <div>Nivel academico</div>
              <div>Situacion laboral</div>
              <div>Profesion</div>
              <div>Ocupacion actual</div>
              <div>Lugar de trabajo</div>
              <div>Telefonos de trabajo</div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card-section>
    <q-separator/>
    <q-card-section>
        <div class="text-bold text-center">Informacion imortante acerca del nino</div>
        <q-separator/>
        <div class="text-bold">Antecedentes prenatales:</div>
        <div class="flex">
          <div>
            <div class="text-bold">Al momento del parto:</div>
            <div>Edad de la madre</div>
            <div>Edad del padre</div>
            <div>Fue embarazo planificado?</div>
            <div>Enfermedades padecidas por la madre durante el embarazo:</div>
            <div>Vacunas recibidas</div>
            <div>Ha estado hospitalizado el nino alguna vez?</div>
            <div>Por que?</div>
            <div>Traumatismos o lesiones:</div>
            <div>Alergias:</div>
            <div>Padece alguna ?</div>
            <div>Limitaciones:</div>
          </div>
        </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent,ref,onMounted } from 'vue';
import { useQuasar} from 'quasar'
import {useRoute} from 'vue-router'
import {api} from 'boot/axios'

export default defineComponent({
  name:'OneStudentPage',
  setup(){
    const $q = useQuasar()
    const $route = useRoute()
    const child = ref('')
    const healt = ref('')
    const mom = ref('')
    const dad = ref('')
    const habits = ref('')
    const infoImport = ref('')

    const getAll = (id) =>{
      api.get(`users/${id}`)
        .then(res => {
          child.value = res.data
          console.log(res.data)
        })
    }

      onMounted(()=>{
        getChild($route.params.id)
      })
    return{
      child,
    }
  }
})
</script>
