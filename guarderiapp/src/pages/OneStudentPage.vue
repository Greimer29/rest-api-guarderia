<template>
  <q-card>
    <q-card-section class="flex" >
        <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions">
        </q-avatar>
        <div class="q-pa-md">
          <div style="font-size:large;">{{ nombre }}</div>
          <div>Edad</div>
          <div>Sexo</div>
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
                <div>Prodecedencia</div>
                <div>Nacionalidad</div>
                <div>Fecha de nacimiento</div>
                <div>Lugar de nacimiento</div>
                <div>Estado</div>
                <div>Numero de hermanos</div>
                <div>Lugar entre sus hemanos</div>
                <div>peso</div>
                <div>Talla</div>
                <div>Talla de camisa</div>
                <div>Talla de pantalon</div>
                <div>Talla de zapato</div>
                <div>Modalidad de tiempo</div>
                <div>Turno en que asistira</div>
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
import { defineComponent,ref } from 'vue';

export default defineComponent({
  name:'OneStudentPage',
  setup(){
    const nombre = ref('greimer')

    return{
      nombre
    }
  }
})
</script>
