import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import EditEmployee from '@/components/EditEmployee.vue'
import NewEmployee from '@/components/NewEmployee.vue'
import ViewEmployee from '@/components/ViewEmployee.vue'

Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/traversymedia-vuejs-firestore-app',
//       name: 'dashboard',
//       component: Dashboard
//     },
//     {
//       path: '/traversymedia-vuejs-firestore-app/new',
//       name: 'new-employee',
//       component: NewEmployee
//     },
//     {
//       path: '/traversymedia-vuejs-firestore-app/edit/:employee_id',
//       name: 'edit-employee',
//       component: EditEmployee
//     },
//     {
//       path: '/traversymedia-vuejs-firestore-app/:employee_id',
//       name: 'view-employee',
//       component: ViewEmployee
//     }
//   ]
// })

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    }
  ]
})