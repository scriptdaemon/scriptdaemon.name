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
      { name: 'Page 1', path: '/page1', component: Page1 },
      { name: 'Page 2', path: '/page2', component: Page2 },
      { name: 'Page 3', path: '/page3', component: Page3 },
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
