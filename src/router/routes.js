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
    path: '/Admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue'),
    props: true,
  },
  {
    path: '/VisaFormPage',
    name: 'VisaFormPage',
    component: () => import('@/views/VisaFormPage.vue'),
    props: true,
  },
]