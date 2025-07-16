import Vue from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueGtag, {
    config: {
      id: process.env.VUE_APP_GA_ID || 'G-87DVCF9NG0'
    }
  })
}

new Vue({
  render: h => h(App),
}).$mount('#app')
