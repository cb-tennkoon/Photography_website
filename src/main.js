import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';
import NotFound from './views/notFound';

Vue.use(VueRouter)

import './scss/main.scss';

Vue.config.productionTip = false



// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '*', component: NotFound },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
