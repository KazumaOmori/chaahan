import Vue from 'vue'
import Router from 'vue-router'
import Chaahan from '@/components/Chaahan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chaahan',
      component: Chaahan
    }
  ]
})
