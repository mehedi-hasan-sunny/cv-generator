import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'
import Modal from './components/Modal'
import Template1 from './components/templates/Template1'
import Template2 from './components/templates/Template2'

Vue.use(VeeValidate);

Vue.component('Modal', Modal);
Vue.component('Template1', Template1);
Vue.component('Template2', Template2);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
