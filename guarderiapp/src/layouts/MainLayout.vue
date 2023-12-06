<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          GuarderyApp
        </q-toolbar-title>

      <!-- <q-btn flat color="" :label="DataUser.user.username ">
        <q-menu>
          <q-list style="min-width: 120px">
            <q-item clickable v-close-popup class="flex flex-center">
              <q-icon name="person" size="sm"/>
              <q-item-section> My Count </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup class="flex flex-center">
              <q-icon name="settings" size="sm"/>
              <q-item-section>Config </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn> -->
      </q-toolbar>
    </q-header>

    <q-footer >
      <q-bar class="bg-grey-9 text-white flex flex-center">
        <div class="flex flex-center" style="font-size: 12px;">Copyright © 2023 Todos los derechos reservados</div>
      </q-bar>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useQuasar } from 'quasar'

const linksList = [
  {
    title: 'Home',
    caption: 'Pagina Principal',
    icon: 'home',
    link: '/main'
  },
  {
    title: 'Inscripcion',
    caption: 'Incripcion de alumnos',
    icon: 'school',
    link: '/registration'
  },
  {
    title: 'Planificacion',
    caption: 'Planificacion maestral',
    icon: 'map',
    link: '/planning'
  },
  {
    title: 'Personal',
    caption: 'Personal del departamento',
    icon: 'person',
    link: '/staff'
  },
  {
    title: 'Estudiantes',
    caption: 'Alumnos inscritos',
    icon: 'child_care',
    link: '/students'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const $q = useQuasar()
    const DataUser = $q.localStorage.getItem('dataUser')

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      DataUser
    }
  }
})
</script>
