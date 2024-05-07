/// <reference types="vite/client" />
/// <reference types="vite-plugin-vue-layouts/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<
    NonNullable<unknown>,
    NonNullable<unknown>,
    never
  >
  export default component
}
