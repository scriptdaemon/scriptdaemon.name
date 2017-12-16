import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'

import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'

Vue.use(VueRouter)

const app = new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: [
      { path: '/page1', component: Page1, meta: { index: 0 } },
      { path: '/page2', component: Page2, meta: { index: 1 } },
      { path: '/page3', component: Page3, meta: { index: 2 } },
      { path: '*', redirect: '/page1' }
    ]
  })
})

// This is only to keep the linter happy. If I use the `el` property, then I'd
// get either one of two linting errors: `no-new` if I don't assign the root Vue
// instance to a variable, or `no-unused-vars` if I set it to a variable but
// don't use it.
app.$mount('#app')
