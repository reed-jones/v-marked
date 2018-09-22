import Vue from 'vue'
import App from './App.vue'
import VMarked from './components'

Vue.use(VMarked, {
  syntaxHighlight: true,
  // prismTheme: 'prism-tomorrow',
  prismThemeUrl: `https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-funky.css`
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
