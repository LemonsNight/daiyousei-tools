import { createApp } from 'vue'
import type { App } from 'vue'
export default function ({
  components,
  rootContainer,
  fn,
}: {
  rootContainer: string
  components: Record<string, App>
  fn?: any
}) {
  const app = createApp(components)
  fn(app)
  app.mount(rootContainer)
}
