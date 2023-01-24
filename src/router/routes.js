export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/Visas',
    name: 'Visas',
    component: () => import('@/views/Visas.vue'),
    props: true,
  },
  {
    path: '/Sejour',
    name: 'Sejour',
    component: () => import('@/views/Sejour.vue'),
    props: true,
  },
  {
    path: '/SpecialCameroun',
    name: 'SpecialCameroun',
    component: () => import('@/views/SpecialCameroun.vue')
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: () => import('@/views/AboutUs.vue'),
    props: true,
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: () => import('@/views/ContactUs.vue'),
    props: true,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register.vue'),
    props: true,
  },
  {
    path: '/Hotels',
    name: 'Hotels',
    component: () => import('@/views/Hotels.vue'),
    props: true,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('@/views/calendar.vue')
  },
  {
    path: '/hotel/:id?',
    name: 'Hotel',
    component: () => import('@/views/Hotel.vue')
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('@/views/Reservation.vue'),
    props: true,
  },
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: () => import('@/views/AdminDashboard.vue'),
    props: true,
  },
  {
    path: '/VisaFormPage',
    name: 'VisaFormPage',
    component: () => import('@/views/VisaFormPage.vue'),
    props: true,
  },
  {
    path: '/DevisFormePage',
    name: 'DevisFormePage',
    component: () => import('@/views/DevisFormePage.vue'),
    props: true,
  },
  {
    path: '/AdminAllVisas',
    name: 'AdminAllVisas',
    component: () => import('@/views/AdminAllVisas.vue')
  },

  {
    path: '/AdminAllDevis',
    name: 'AdminAllDevis',
    component: () => import('@/views/AdminAllDevis.vue')
  },
  {
    path: '/AdminParticularUserVisa',
    name: 'AdminParticularUserVisa',
    component: () => import('@/views/AdminParticularUserVisa.vue')
  },
  
  {
    path: '/AdminParticularUserDevis',
    name: 'AdminParticularUserDevis',
    component: () => import('@/views/AdminParticularUserDevis.vue')
  },


  {
    path: '/UserDashboard',
    name: 'UserDashboard',
    component: () => import('@/views/UserDashboard.vue'),
    props: true,
  },
  {
    path: '/UserAllVisas',
    name: 'UserAllVisas',
    component: () => import('@/views/UserAllVisas.vue')
  },

  {
    path: '/UserAllDevis',
    name: 'UserAllDevis',
    component: () => import('@/views/UserAllDevis.vue')
  },
  {
    path: '/MyVisas',
    name: 'MyVisas',
    component: () => import('@/views/MyVisas.vue')
  },
  {
    path: '/MyDevis',
    name: 'MyDevis',
    component: () => import('@/views/MyDevis.vue')
  },
  {
    path: '/EditVisa',
    name: 'EditVisa',
    component: () => import('@/views/EditVisa.vue')
  },
  {
    path: '/EditDevis',
    name: 'EditDevis',
    component: () => import('@/views/EditDevis.vue')
  },

  {
    path: '/Suggestions',
    name: 'Suggestions',
    component: () => import('@/views/Suggestions.vue')
  },

  {
    path: '/RequiredDocs',
    name: 'RequiredDocs',
    component: () => import('@/views/RequiredDocs.vue')
  },
  {
    path: '/ResetPassword',
    name: 'ResetPassword',
    component: () => import('@/views/ResetPassword.vue')
  },
]