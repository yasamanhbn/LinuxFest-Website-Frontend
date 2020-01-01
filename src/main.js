import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueWait from 'vue-wait'
import Notifications from 'vue-notification'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueWait) // add VueWait as Vue plugin
Vue.use(Notifications)
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App),

  wait: new VueWait({
    // Defaults values are following:
    useVuex: false,              // Uses Vuex to manage wait state
    vuexModuleName: 'wait',      // Vuex module name

    registerComponent: true,     // Registers `v-wait` component
    componentName: 'v-wait',     // <v-wait> component name, you can set `my-loader` etc.

    registerDirective: true,     // Registers `v-wait` directive
    directiveName: 'wait',       // <span v-wait /> directive name, you can set `my-loader` etc.

  }),
}).$mount('#app')
