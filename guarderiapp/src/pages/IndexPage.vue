<template>
  <q-page>
      <carrousel-component/>
      <normativa-component :normativa="normas"/>
      <div class="flex">
        <valores-components :valores="valores"/>
      </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CarrouselComponent from 'src/components/CarrouselComponent.vue';
import ValoresComponents from 'src/components/ValoresComponents.vue';
import NormativaComponent from 'src/components/NormativaComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components:{
    CarrouselComponent,
    ValoresComponents,
    NormativaComponent
  },
  setup(){
    const valores = [
      {
        nombre:'Mision',
        descripcion:'“Ser reconocida como una institución de alto nivel educativo, integrando las creencias bíblicas con el desarrollo armonioso de todas las facultades del educando, comprometida con la redención del ser humano, como el ideal más noble.”'
      },
      {
        nombre:'Vision',
        descripcion:'“Formar profesionales comprometidos al servicio de Dios y la sociedad en integridad, amor y excelencia, haciendo uso óptimo de los recursos disponibles.”'
      }
    ]
    const normas = [
      'Debe entrar en el turno que le corresponde',
      'Debe tener la ropa limpia antes de ingresar',
      'Debe tener los utiles completos',
      'No debe ingresar con bebidas alcoholicas'
    ]
    return{
      valores,normas
    }
  }
})
</script>
