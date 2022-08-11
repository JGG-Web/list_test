import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


Vue.directive('focus', {
 
  bind: function (el) { 
    
  },
  
  inserted: function (el) { 
    el.focus()
  },
})

Vue.directive('color', {
  bind(el, binding) {
    el.style.color = binding.value || 'red'
  },
  inserted(el) { }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
