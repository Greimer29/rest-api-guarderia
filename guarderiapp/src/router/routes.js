
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue')
  },
  {
    path: '/register',
    component: () => import('pages/RegisterPage.vue')
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/registration', component: () => import('pages/RegistrationPage.vue') },
      { path: '/planning', component: () => import('pages/PlanningPage.vue') },
      { path: '/staff', component: () => import('pages/StaffPage.vue') },
      { path: '/students', component: () => import('pages/StudentsPage.vue') },
      { path: '/:id', component: () => import('pages/OneStudentPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
