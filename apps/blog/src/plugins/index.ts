import vuetify from './vuetify'
import router from './router'
import type { App } from 'vue'

export function registerPlugins(app: App) {
  app.use(vuetify)
  app.use(router)
}
