import { registerPlugins } from './plugins'
import importVue from '@dog/vue-config'
import App from './App.vue'
importVue({
  components: App,
  rootContainer: '#app',
  fn: registerPlugins,
})
