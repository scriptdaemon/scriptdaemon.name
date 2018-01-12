import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

// Main app component
import App from './app'

// Pages (route components)
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'

Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({
  routes: [
    { path: '/page1', component: Page1, meta: Page1.meta },
    { path: '/page2', component: Page2, meta: Page2.meta },
    { path: '/page3', component: Page3, meta: Page3.meta },
    { path: '*', redirect: '/page1' }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta && to.meta.title
    ? `@scriptdaemon / ${to.meta.title}`
    : '@scriptdaemon'
})

const vm = new Vue({
  render: h => h(App),
  router
})

// This is only to keep the linter happy. If I use the `el` property, then I'd
// get either one of two linting errors: `no-new` if I don't assign the root Vue
// instance to a variable, or `no-unused-vars` if I set it to a variable but
// don't use it.
vm.$mount('#app')
