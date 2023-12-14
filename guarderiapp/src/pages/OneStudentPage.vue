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
        label="Datos del estudiante"
        caption=""
      >
        <q-card>
          <q-card-section>
            <div v-show="!child">no se encontraron datos</div>
            <div v-if="child">
                <div class="flex">Prodecedencia: <div class="text-bold q-mx-xs">{{ child.procedencia }}</div></div>
                <div class="flex">Nacionalidad:  <div class="text-bold q-mx-xs">{{ child.nacionalidad }}</div></div>
                <div class="flex">Pais de nacimiento:  <div class="text-bold q-mx-xs">{{ child.pais }}</div></div>
                <div class="flex">Estado:  <div class="text-bold q-mx-xs">{{ child.estado }}</div></div>
                <div class="flex">ciudad:  <div class="text-bold q-mx-xs">{{ child.ciudad }}</div></div>
                <div class="flex">Numero de hermanos:  <div class="text-bold q-mx-xs">{{ child.cantidad_hermanos }}</div></div>
                <div class="flex">Lugar entre sus hemanos:  <div class="text-bold q-mx-xs">{{ child.lugar_hermanos }}</div></div>
                <div class="flex">peso:  <div class="text-bold q-mx-xs">{{ child.peso }}</div></div>
                <div class="flex">Talla de camisa:  <div class="text-bold q-mx-xs">{{ child.talla_camisa }}</div></div>
                <div class="flex">Talla de pantalon:  <div class="text-bold q-mx-xs">{{ child.talla_pantalon }}</div></div>
                <div class="flex">Talla de zapato:  <div class="text-bold q-mx-xs">{{ child.talla_zapato }}</div></div>
                <div class="flex">Modalidad de tiempo:  <div class="text-bold q-mx-xs">{{ child.modalidad }}</div></div>
                <div class="flex">Turno en que asistira:  <div class="text-bold q-mx-xs">{{ child.turno }}</div></div>
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
            <div v-show="!mom">no se encontraron datos</div>
            <div v-if="mom">
              <div class="flex">Nombres:  <div class="text-bold q-mx-xs">{{ mom.nombre }} {{ mom.segundo_nombre }}</div></div>
              <div class="flex">Apellidos:  <div class="text-bold q-mx-xs">{{ mom.apellido }} {{ mom.segundo_apellido }}</div></div>
              <div class="flex">Edad: <div class="text-bold q-mx-xs">{{ mom.edad }}</div></div>
              <div class="flex">Cedula de Identidad: <div class="text-bold q-mx-xs">{{ mom.cedula }}</div></div>
              <div class="flex">Estado civil: <div class="text-bold q-mx-xs">{{ mom.estado_civil }}</div></div>
              <div class="flex">Direccion de habitacion: <div class="text-bold q-mx-xs">{{ mom.dir_habitacion }}</div></div>
              <div class="flex">Telefonos: <div class="text-bold q-mx-xs">{{ mom.telefono }}</div></div>
              <div class="flex">Nivel academico: <div class="text-bold q-mx-xs">{{ mom.nivel_academico }}</div></div>
              <div class="flex">Situacion laboral: <div class="text-bold q-mx-xs">{{ mom.situacion_laboral }}</div></div>
              <div class="flex">Profesion: <div class="text-bold q-mx-xs">{{ mom.profesion }}</div></div>
              <div class="flex">Ocupacion actual: <div class="text-bold q-mx-xs">{{ mom.ocupacion_actual }}</div></div>
              <div class="flex">Lugar de trabajo: <div class="text-bold q-mx-xs">{{ mom.lugar_trabajo }}</div></div>
              <div class="flex">Telefonos de trabajo: <div class="text-bold q-mx-xs">{{ mom.telefono_trabajo }}</div></div>
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
            <div v-show="!dad">no se encontraron datos</div>
            <div v-if="dad">
              <div class="flex">Nombres:  <div class="text-bold q-mx-xs">{{ dad.nombre }} {{ dad.segundo_nombre }}</div></div>
              <div class="flex">Apellidos:  <div class="text-bold q-mx-xs">{{ dad.apellido }} {{ dad.segundo_apellido }}</div></div>
              <div class="flex">Edad: <div class="text-bold q-mx-xs">{{ dad.edad }}</div></div>
              <div class="flex">Cedula de Identidad: <div class="text-bold q-mx-xs">{{ dad.cedula }}</div></div>
              <div class="flex">Estado civil: <div class="text-bold q-mx-xs">{{ dad.estado_civil }}</div></div>
              <div class="flex">Direccion de habitacion: <div class="text-bold q-mx-xs">{{ dad.dir_habitacion }}</div></div>
              <div class="flex">Telefonos: <div class="text-bold q-mx-xs">{{ dad.telefono }}</div></div>
              <div class="flex">Nivel academico: <div class="text-bold q-mx-xs">{{ dad.nivel_academico }}</div></div>
              <div class="flex">Situacion laboral: <div class="text-bold q-mx-xs">{{ dad.situacion_laboral }}</div></div>
              <div class="flex">Profesion: <div class="text-bold q-mx-xs">{{ dad.profesion }}</div></div>
              <div class="flex">Ocupacion actual: <div class="text-bold q-mx-xs">{{ dad.ocupacion_actual }}</div></div>
              <div class="flex">Lugar de trabajo: <div class="text-bold q-mx-xs">{{ dad.lugar_trabajo }}</div></div>
              <div class="flex">Telefonos de trabajo: <div class="text-bold q-mx-xs">{{ dad.telefono_trabajo }}</div></div>
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
            <div v-show="!tutor">no se encontraron datos</div>
            <div v-if="tutor">
              <div class="flex">Nombres:  <div class="text-bold q-mx-xs">{{ tutor.nombre }} {{ tutor.segundo_nombre }}</div></div>
              <div class="flex">Apellidos:  <div class="text-bold q-mx-xs">{{ tutor.apellido }} {{ tutor.segundo_apellido }}</div></div>
              <div class="flex">Edad: <div class="text-bold q-mx-xs">{{ tutor.edad }}</div></div>
              <div class="flex">Cedula de Identidad: <div class="text-bold q-mx-xs">{{ tutor.cedula }}</div></div>
              <div class="flex">Direccion de habitacion: <div class="text-bold q-mx-xs">{{ tutor.dir_habitacion }}</div></div>
              <div class="flex">Telefonos: <div class="text-bold q-mx-xs">{{ tutor.telefono }}</div></div>
              <div class="flex">Nivel academico: <div class="text-bold q-mx-xs">{{ tutor.nivel_academico }}</div></div>
              <div class="flex">Situacion laboral: <div class="text-bold q-mx-xs">{{ tutor.situacion_laboral }}</div></div>
              <div class="flex">Profesion: <div class="text-bold q-mx-xs">{{ tutor.profesion }}</div></div>
              <div class="flex">Ocupacion actual: <div class="text-bold q-mx-xs">{{ tutor.ocupacion_actual }}</div></div>
              <div class="flex">Lugar de trabajo: <div class="text-bold q-mx-xs">{{ tutor.lugar_trabajo }}</div></div>
              <div class="flex">Telefonos de trabajo: <div class="text-bold q-mx-xs">{{ tutor.telefono_trabajo }}</div></div>
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
            <div v-show="!respFinan">no se encontraron datos</div>
            <div v-if="respFinan">
              <div class="flex">Nombres:  <div class="text-bold q-mx-xs">{{ respFinan.nombre }} {{ tutor.segundo_nombre }}</div></div>
              <div class="flex">Apellidos:  <div class="text-bold q-mx-xs">{{ respFinan.apellido }} {{ tutor.segundo_apellido }}</div></div>
              <div class="flex">Edad: <div class="text-bold q-mx-xs">{{ respFinan.edad }}</div></div>
              <div class="flex">Cedula de Identidad: <div class="text-bold q-mx-xs">{{ respFinan.cedula }}</div></div>
              <div class="flex">Direccion de habitacion: <div class="text-bold q-mx-xs">{{ respFinan.dir_habitacion }}</div></div>
              <div class="flex">Telefonos: <div class="text-bold q-mx-xs">{{ respFinan.telefono }}</div></div>
              <div class="flex">Nivel academico: <div class="text-bold q-mx-xs">{{ respFinan.nivel_academico }}</div></div>
              <div class="flex">Situacion laboral: <div class="text-bold q-mx-xs">{{ respFinan.situacion_laboral }}</div></div>
              <div class="flex">Profesion: <div class="text-bold q-mx-xs">{{ respFinan.profesion }}</div></div>
              <div class="flex">Ocupacion actual: <div class="text-bold q-mx-xs">{{ respFinan.ocupacion_actual }}</div></div>
              <div class="flex">Lugar de trabajo: <div class="text-bold q-mx-xs">{{ respFinan.lugar_trabajo }}</div></div>
              <div class="flex">Telefonos de trabajo: <div class="text-bold q-mx-xs">{{ respFinan.telefono_trabajo }}</div></div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <q-expansion-item
        expand-separator
        icon="local_hospital"
        label="Datos de salud"
        caption=""
      >
        <q-card>
          <q-card-section>
            <div v-show="!healt">no se encontraron datos</div>
            <div v-if="healt">
              <div class="flex">Tipo de sangre:  <div class="text-bold q-mx-xs">{{ healt.tipo_sangre }}</div></div>
              <div class="flex">Enfermedades padecidas:  <div class="text-bold q-mx-xs">{{ healt.enfermedades_padecidas }}</div></div>
              <div class="flex">Vacunas recibidas: <div class="text-bold q-mx-xs">{{ healt.vacunas_recibidas }}</div></div>
              <div>
                ha sido hospitalizado?
                <div v-show="healt.hospitalizado">
                  <div>Si</div>
                  <div class="flex">Por que: {{ healt.hospitalizado_causa }} </div>
                </div>
                <div v-show="!healt.hospitalizado"  class="text-bold q-mx-xs">No</div>
              </div>
              <div>
                Ha presentado lesiones?
                <div v-show="healt.lesiones_presentadas">
                  <div  class="text-bold q-mx-xs">Si</div>
                  <div class="flex">Cuales: {{ healt.lesiones_presentadas }} </div>
                </div>
                <div v-show="!healt.lesiones_presentadas"  class="text-bold q-mx-xs">No</div>
              </div>
              <div>
                Tiene Alergias?
                <div v-show="healt.alergias">
                  <div  class="text-bold q-mx-xs">Si</div>
              <div class="flex">Alergias: <div class="text-bold q-mx-xs">{{ healt.alergias }}</div></div>
                </div>
                <div v-show="!healt.alergias"  class="text-bold q-mx-xs">No</div>
              </div>
              <div>
                Tiene algunas limitaciones?
                <div v-show="healt.limitaciones">
                  <div  class="text-bold q-mx-xs">Si</div>
                  <div class="flex">Cuales: <div class="text-bold q-mx-xs">{{ healt.limitaciones }} </div></div>
                  Es atendido por algun especialista?
                  <div v-show="healt.atendido_especialista">
                    <div  class="text-bold q-mx-xs">Si</div>
                  </div>
                  <div v-show="!healt.atendido_especialista"  class="text-bold q-mx-xs">No</div>
                </div>
              </div>
              </div>
              <div>
              <div class="flex">Medicamentos Para la fiebre: <div class="text-bold q-mx-xs">{{ healt.medicamentos_fiebre }}</div></div>
              <div>
                Tiende a enfermarse con facilidad?
                <div v-show="healt.enfermo_facilidad"  class="text-bold q-mx-xs">Si</div>
                <div v-show="!healt.enfermo_facilidad"  class="text-bold q-mx-xs">No</div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <q-expansion-item
        expand-separator
        icon="extension"
        label="Datos de los habitos"
        caption=""
      >
        <q-card>
          <q-card-section>
            <div v-show="!habits">no se encontraron datos</div>
            <div v-if="habits">
              <div>
                Se chupa del dedo?
                <div v-show="habits.chupa_dedo">Si</div>
                <div v-show="!habits.chupa_dedo"  class="text-bold q-mx-xs">No</div>
              </div>
              <div>
                Come solo?
                <div v-show="habits.chupa_dedo">Si</div>
                <div v-show="!habits.chupa_dedo"  class="text-bold q-mx-xs">No</div>
              </div>
              <div class="flex">Hora en que desayuna: {{ habits.hora_desayuna }} </div>
              <div class="flex">Hora en que almuerza: {{ habits.hora_almuerza }} </div>
              <div class="flex">Hora en que cena: {{ habits.hora_cena }} </div>
              <div class="flex">Hora en que duerme por las noches: {{ habits.hora_duerme_noche }} </div>
              <div class="flex">Hora en que duerme durante el dia: {{ habits.hora_duerme_dia }} </div>
              <div class="flex">Tipo de sue;no: {{ habits.tipo_sueno }} </div>
              <div>
                Duerme Compon;ado?
                <div v-show="habits.duerme_scompanado">
                  <div  class="text-bold q-mx-xs">Si</div>
                  <div class="flex">Con quien: {{ habits.duerme_scompanado }} </div>
                </div>
                <div v-show="!habits.hospitalizado"  class="text-bold q-mx-xs">No</div>
              </div>
              <div>
                Usa algun objeto para dormir?
                <div v-show="habits.objeto_dormir">
                  <div  class="text-bold q-mx-xs">Si</div>
                  <div class="flex">Que objeto usa: {{ habits.objeto_dormir }} </div>
                </div>
                <div v-show="!habits.hospitalizado"  class="text-bold q-mx-xs">No</div>
              </div>
              <div class="flex">Tipo de apetito: {{ habits.tipo_apetito }} </div>
              <div class="flex">Comida favorita: {{ habits.comida_favorita }} </div>
              <div class="flex">Comida menos favorita: {{ habits.comida_no_favorita }} </div>
              <div class="flex">Juego favorito: {{ habits.juego_favorito }} </div>
              <div class="flex">Objeto favorito: {{ habits.objeto_preferido }} </div>
              <div>
                Tiene algun lugar en casa para jugar?
                <div v-show="habits.lugar_juego_casa">
                  <div  class="">Si</div>
                  <div class="flex">Lugar: {{ habits.lugar_juego_casa }} </div>
                </div>
                <div v-show="!habits.lugar_juego_casa"  class="">No</div>
              </div>
              <div>
                Se orina en la ropa durante el dia?
                <div v-show="habits.orina_ropa_dia">Si</div>
                <div v-show="!habits.orina_ropa_dia"  class="">No</div>
              </div>
              <div>
                Se orina en la ropa durante la noche?
                <div v-show="habits.orina_ropa_noche">Si</div>
                <div v-show="!habits.orina_ropa_noche"  class="">No</div>
              </div>
              <div>
                Defeca en la ropa durante el dia?
                <div v-show="habits.defeca_ropa_dia">Si</div>
                <div v-show="!habits.defeca_ropa_dia"  class="">No</div>
              </div>
              <div>
                Defeca en la ropa durante la noche?
                <div v-show="habits.defeca_ropa_noche">Si</div>
                <div v-show="!habits.defeca_ropa_noche"  class="">No</div>
              </div>
            </div>

          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <q-expansion-item
        expand-separator
        icon="warning"
        label="Informacion Importante"
        caption=""
      >
        <q-card>
          <q-card-section>
        <div class="text-bold text-center">Informacion imortante acerca del nino</div>
        <q-separator/>
        <div class="text-bold">Antecedentes prenatales:</div>
        <div class="flex">
          <div>
            <div class="text-bold">Al momento del parto</div>
            <div>Edad de la madre:{{ infoImport.edad_madre_parto }}</div>
            <div>Edad del padre:{{ infoImport.edad_padre_parto }}</div>
            <div>Fue embarazo planificado?</div>
            <div v-show="infoImport.embarazo_planificado"> Si </div>
            <div v-show="!infoImport.embarazo_planificado"> No </div>
            <div>Enfermedades padecidas por la madre durante el embarazo: {{ infoImport.enfermedades_madre_embarazo }}</div>
            <div>Presento alguna complicacion durante el embarazo?</div>
            <div v-show="infoImport.complicaciones_parto">
             <div>Si</div>
             <div>Explique: {{ infoImport.complicaciones_parto }}</div>
            </div>
            <div>Segun el doctor nacio bien?</div>
            <div v-show="!infoImport.nacio_bien">Si</div>
            <div v-show="infoImport.nacio_bien">No</div>
            <div>Ayuda o colabora con algunas actividades en casa?</div>
            <div v-show="infoImport.ayuda_hacer_cosas">
              <div>Si</div>
             <div>Cuales: {{ infoImport.ayuda_hacer_cosas }}</div>
            </div>
            <div v-show="!infoImport.ayuda_hacer_cosas">No</div>
            <div>Favorecen ustedes el desarrollo de la autonomia?</div>
            <div v-show="infoImport.desarrollo_autonomia">
              <div>Si</div>
             <div>De que manera: {{ infoImport.desarrollo_autonomia }}</div>
            </div>
            <div v-show="!infoImport.desarrollo_autonomia">No</div>
            <div>Quien evoca mayor influencia sobre el nino(@)?: {{ infoImport.influencia }}</div>
            <div>El nino(@) presenta algun comportamiento que le resulte dificil de manejar?</div>
            <div v-show="infoImport.comportamiento_dificil">
              <div>Si</div>
             <div>Cual: {{ infoImport.comportamiento_dificil }}</div>
             <div>Que hace cuando lo presenta: {{ infoImport.manejo_difici_comportamiento }}</div>
            </div>
            <div v-show="!infoImport.comportamiento_agradable">No</div>
            <div>El nino(@) presenta algun comportamiento que le resulte agradable?</div>
            <div v-show="infoImport.comportamiento_agradable">
              <div>Si</div>
             <div>Cual: {{ infoImport.comportamiento_agradable }}</div>
             <div>Que hace cuando lo presenta: {{ infoImport.manejo_agradable_comportamiento }}</div>
            </div>
            <div v-show="!infoImport.comportamiento_agradable">No</div>
          </div>
        </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
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
    const user = ref('')
    const mom = ref('')
    const dad = ref('')
    const habits = ref('')
    const healt = ref('')
    const tutor = ref('')
    const respFinan = ref('')
    const infoImport = ref('')

    const getAll = (id) =>{
      api.get(`child/${id}`)
        .then(res => {
          child.value = res.data
          api.get(`users/${child.value.user_id}`)
            .then(res => {
              user.value = res.data
              tutor.value = user.value.tutors
              respFinan.value =  user.value.respFinans
              habits.value =  user.value.habits
              healt.value =  user.value.healts
              infoImport.value =  user.value.importInfos
              for (let i = 0; i < user.value.fathers.length; i++) {
                if( user.value.fathers[i].sexo =='Masculino'){
                  dad.value = user.value.fathers[i]
                }
                if( user.value.fathers[i].sexo =='Femenino'){
                  mom.value = user.value.fathers[i]
                }
              }
              console.log(user)
            })
        })
    }

      onMounted(()=>{
        getAll($route.params.id)
      })
    return{
      child,
      user,
      dad,
      mom,
      habits,
      healt,
      tutor,
      infoImport,
      respFinan
    }
  }
})
</script>
