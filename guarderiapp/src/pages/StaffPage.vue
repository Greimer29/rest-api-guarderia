<template>
  <q-page class="flex flex-center text-center">
  <q-bar class="bg-white">
    Personal del departamento
  </q-bar>
    <div class="q-gutter-md" style="max-width: 500px">
      <StaffComponent :personal="staff"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue'
import StaffComponent from 'src/components/StaffComponent'

export default defineComponent({
  name: 'StaffPage',
  components:{
    StaffComponent
  },
  setup(){
    const staff = ref([])
    staff.value = [
      'a','b','c','d'
    ]

    return {
      staff
    }
  }
})
</script>
