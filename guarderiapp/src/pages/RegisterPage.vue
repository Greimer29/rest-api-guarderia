<template>
  <div class="flex flex-center q-mt-xl">
    <form  class="q-gutter-md q-mb-md text-center" style="width: 80%;" >
      <q-input filled  v-model="user.name" label="Nombre y apellido" />
      <q-input filled  v-model="user.username" label="Nombre de Usuario" />
      <q-input filled v-model="user.password" label="contraseña" />
      <q-input filled v-model="repitPass" label="repetir contraseña" />
      <q-input filled v-model="user.email" label="correo electronico" />
      <q-btn  label="REGISTRAR" color="positive" @click="registrar(user)"/>
    </form>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import {api} from 'boot/axios'
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

export default defineComponent({
  name:'RegisterPage',
  setup(){
  const router = useRouter()
  const $q = useQuasar()
  const repitPass = ref('')
  const typeMen = ref('')

    const user = ref({
      name:'',
      username:'',
      password:'',
      email:'',
    })

    const registrar = (user) => {
      if (
        user.name.trim() &&
        user.username.trim() &&
        user.password.trim() &&
        user.email.trim() &&
        repitPass.value.trim()
        ){
          if (user.password == 'Admin1Admin') {
            typeMen.value = 1
          } else if (user.password == '1Admin') {
            typeMen.value = 2
          } else {
            typeMen.value = 3
          }

          if (user.password != repitPass.value) {
            $q.notify({
              message: `campo ${repitPass.value} no coincide con la contrasena`,
              color:'negative'
            })
          }else{
            api.post('users/register',{
              name:user.name,
              username:user.username,
              password:user.password,
              email:user.email,
              type:typeMen.value
            })
              .then((res) => {
                $q.notify({
                  position:'top',
                  message: 'Usuario creado exitosamente',
                  color:'positive'
                })
                router.replace('/')
              })
              .catch((err)=>{
                console.log(err)
                if(err.code == "ERR_NETWORK"){
                  $q.notify({
                    message: 'No se pudo establecer conexion con el servidor comprueba tu conexion',
                    color:'negative'
                  })
                }
              })
          }
       }else{
        $q.notify({
          message: 'Hay campos vacios que son requeridos',
          color:'warning'
        })
       }
    }

    return{
      user,
      registrar,
      repitPass
    }
  }
})
</script>
