import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'

import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'

Vue.use(VueRouter)

const app = new Vue({
  el: '#app',
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

window.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 37: // Left
    case 38: // Up
      app.toPrevPage()
      break
    case 39: // Right
    case 40: // Down
      app.toNextPage()
      break
    default:
      // Do nothing
  }
})
