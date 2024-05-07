import router from './router'
import type { App } from 'vue'
import vuetify from './vuetify'

export function registerPlugins(app: App) {
  app.use(router)
  app.use(vuetify)
}
