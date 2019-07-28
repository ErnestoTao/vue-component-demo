import Vue from 'vue'
import App from './App.vue'
console.log('main');
import MyComponent from './index.js'
console.log(MyComponent);
Vue.use(MyComponent);

new Vue({
  el: '#app',
  render: h => h(App)
})
