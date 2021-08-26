import Home from '../views/pages/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tailwind',
    name: 'Tailwind',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Tailwind.vue')
  }
]