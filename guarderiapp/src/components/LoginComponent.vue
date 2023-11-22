<template>
  <form
    class="q-gutter-md"
    style="
      padding:15px;
      text-align:center;
      color:white ;
      width:340px;
      height:80%;
      background-image: linear-gradient(#4fafff,#0089e4);
      border-radius: 60px;
    ">
      <div>
          <img
              src="https://www.cgmontessori.com/wp-content/uploads/2019/08/CG_StrategicPlanIconFA.png"
              style="max-width: 170px; max-height: 170px"
          >
      </div>
      <div class="q-gutter-md" style=" margin:30px; padding:0px; max-width:300px; text-align:center">
          <q-input v-model="username" filled label="Email"/>
          <q-input v-model="pass" filled label="Contraseña" type="password"/>
      </div>

      <div class="flex flex-center q-pa-md" style="justify-content: space-around; margin:5px">
          <q-checkbox  label="Recuerdame" v-model="remem" />
          <p><router-link to="user/forget" color="white">Has olvidado tu <br/> contrasena</router-link></p>
      </div>
      <q-btn style="width: 50%;" label="Ingresar" color="orange-9" @click="verificar()"/>
      <div class="flex flex-center q-gutter-md">
        <p>¿No tienes cuenta?</p>
        <p><router-link to="register" color="white">Registrate</router-link></p>
      </div>
  </form>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar} from 'quasar'
import {useRouter} from 'vue-router'
import {api} from 'boot/axios'

export default defineComponent({
name: 'LoginComponent',
components:{
},
setup(){
  const $q = useQuasar()
  const router = useRouter()
  const username = ref('')
  const pass = ref('')

  const verificar = () => {
    if((username.value.trim())&&(pass.value.trim())){
      api.post('users/login',{email:username.value,password:pass.value})
        .then((res)=>{
          $q.notify({
              position:'top',
              color:'positive',
              message: 'Bienvenido'
            })

            $q.localStorage.set('dataUser',res.data)
            router.replace('/main')
        })
        .catch((err)=>{
            $q.notify({
              position:'bottom',
              type: 'negative',
              message: 'usuario no encontrado'
            })
        })
    }else{
      $q.notify({
        position:'top',
        type: 'warning',
        message: 'Mi viejo esos campos estan como vacios'
      })
    }
  }

  return{
    remem : ref(false),
    username,
    pass,
    verificar
  }
}
})
</script>
<style>
p,a{
  text-align:center;
  color:white
}
a:hover{
  color: rgb(193, 194, 224);
}
</style>
