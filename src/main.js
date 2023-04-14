import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import login from '@/pages/login'
import Signup from '@/pages/Signup'
import DashboardHome from '@/pages/Home'
import DashboardConnectService from '@/pages/ConnectService'
import DashboardLoginServices from '@/pages/LoginServices'
import DashboardFlowDirection from '@/pages/FlowDirection'
import DashboardRules from '@/pages/Rules'
import DashboardMaping from '@/pages/Maping'
import DashboardManualMaping from '@/pages/ManualMaping'
import DashboardLaunch from '@/pages/Launch'
import DashboardFlow from '@/pages/Flow'
import DashboardWizard from '@/pages/Wizard'
import Dashboardnews from '@/pages/news'

import store from './store'

import '@/assets/css/tailwind.css'


Vue.config.productionTip = false

Vue.use(Router)

const routes = [
  { path: '/', component: login },
  { path: '/Signup', component: Signup },
  {
    path: '/dashboard', component: Dashboard, children: [
      { path: '/', redirect: { name: 'DashboardHome' } },
      { path: 'home', name: 'DashboardHome', component: DashboardHome },
      { path: 'connect-service', name: 'DashboardConnectService', component: DashboardConnectService },
      { path: 'login-service', name: 'DashboardLoginServices', component: DashboardLoginServices },
      { path: 'flow-direction', name: 'DashboardFlowDirection', component: DashboardFlowDirection },
      { path: 'rules', name: 'DashboardRules', component: DashboardRules },
      { path: 'maping', name: 'DashboardMaping', component: DashboardMaping },
      { path: 'manual-maping', name: 'DashboardManualMaping', component: DashboardManualMaping },
      { path: 'launch', name: 'DashboardLaunch', component: DashboardLaunch },
      { path: 'flow', name: 'DashboardFlow', component: DashboardFlow },
      { path: 'wizard', name: 'DashboardWizard', component: DashboardWizard },
      { path: 'news', name: 'Dashboardnews', component: Dashboardnews },
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

