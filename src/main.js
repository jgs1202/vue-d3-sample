import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  template: '<app/>',
  components: {
    app
  },
  render: h => h(App)
})
