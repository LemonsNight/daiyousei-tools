import{R as i}from"./chunks/theme.CrHG2-Gu.js";import{y as o,z as u,R as c,A as l,B as f,C as d,D as m,E as h,G as A,H as g,I as y,d as C,u as v,h as w,J as P,K as R,L as b,M as D,N as E}from"./chunks/framework.DjX62oqG.js";function p(e){if(e.extends){const t=p(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=p(i),L=C({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=v();return w(()=>{P(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&R(),b(),D(),s.setup&&s.setup(),()=>E(s.Layout)}});async function S(){const e=j(),t=T();t.provide(c,e);const a=l(e.route);return t.provide(f,a),t.component("Content",d),t.component("ClientOnly",m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:h}),{app:t,router:e,data:a}}function T(){return A(L)}function j(){let e=o,t;return g(a=>{let n=y(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&S().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{S as createApp};
