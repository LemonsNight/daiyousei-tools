---
title: 使用ast实现uniapp埋点
tags: [uniapp, 前端]
cover: /vitepress-theme-sakura/60651947_p0.jpg
---

## 前言

最近接到埋点需求，需要对Uni项目的App端和小程序进行埋点。经过研究社区提供的方案后，发现并没有一个完全符合公司业务需求的方案。因此，决定自己动手实现一个定制化的埋点方案。

## 方案以及实现原理

前提条件是使用Vite脚手架搭建的Uni项目。

解决方案是编写一个Vite插件，在构建过程中预先修改模板字符串。借助Vue自带的vue/compiler-sfc插件，我们可以将Vue代码解析为AST（抽象语法树），通过AST精确修改模板代码，无需使用复杂的正则表达式进行字符串匹配和修改。这种方案适用于大多数Vue项目。需要注意的是，由于这种操作会修改项目代码，建议在完成后编写测试进行验证，推荐使用Vitest进行测试。

##

```vue
由于小程序端以及app端并没有window，所以需要使用混入的方式 // utils.ts export
const 你的埋点函数 = { methods: { sendMd: (code: string) => { // ...
处理你的业务 uni.$emit("sendMd", code); } } }; APP.VUE export const createApp =
() => { // *** app.mixin('你的埋点函数'); return { app, Pinia }; };
```

pages.vue

```vue
<template>
  <view>
    <view @click="test" data-md="code1"> // .... </view>
  </view>
</template>
```

inject-click-handler.ts vite插件

```ts
import { parse } from 'vue/compiler-sfc'
import { Plugin } from 'vite'

export default (): Plugin => {
  return {
    name: 'inject-click-handler',
    transform(code, id) {
      try {
        if (!/.vue$/.test(id)) return null
        const parseCode = parse(code)
        if (!parseCode) return null
        if (!parseCode.descriptor?.template?.content) return null
        const dataMdRegex = /<[^>]*\bdata-md="([^"]*)"[^>]*>/g // 匹配data-md，这里需要根据业务进行调整。
        // 匹配当前文件是否有埋点标识，在继续往下遍历ast
        const { content, ast } = parseCode.descriptor.template
        // 返回null的时候表示不修改任何代码
        if (!content.match(dataMdRegex)) {
          return null
        }
        // 获取template模板
        let $code = parseCode.descriptor.template.content
        // 需要修改的节点数组
        const nodeArray = []
        // 递归ast节点
        const handleEachAst = (node) => {
          if (node?.props.length) {
            // 查找我们在页面写的data-md
            const isMd = node?.props?.find(
              (item) =>
                item?.name === 'data-md' ||
                (item.name === 'bind' && item?.arg?.content === 'data-md'),
            )
            // 查找当前元素是否有点击函数并追加混入的埋点函数
            if (!!isMd) {
              const findVueClickEvent = node?.props?.find(
                (item) => item.name === 'on' && item.type === 7,
              )
              let pushFn = ''
              const mdContent =
                isMd.name === 'data-md'
                  ? `'${isMd.value.content}'`
                  : isMd.exp.content
              if (findVueClickEvent) {
                // 检查是否一个函数   sendMd是混入的埋点函数
                const isFunctionCall =
                  /^\s*[a-zA-Z_$][0-9a-zA-Z_$]*\s*([^)]*)\s*$/
                if (!isFunctionCall.test(findVueClickEvent.exp.content)) {
                  findVueClickEvent.exp.content += '()'
                }
                pushFn = `@${findVueClickEvent.arg.content}="sendMd('sendMd',${mdContent});${findVueClickEvent.exp.content}"`
              } else {
                pushFn = `@click="sendMd('sendMd',${mdContent})"`
              }
              const nodeStr = node.loc.source.replace(
                findVueClickEvent.loc.source,
                pushFn,
              )
              nodeArray.push({
                source: node.loc.source,
                replaceSource: nodeStr,
              })
            }
          }
          if (Array.isArray(node?.children)) {
            node.children.forEach((item) => {
              item.props && handleEachAst(item)
            })
          }

          if (nodeArray.length) {
            nodeArray.forEach((item) => {
              $code = $code.replace(item.source, item.replaceSource)
            })
          }
        }

        handleEachAst(ast)
        return {
          code: code.replace(parseCode.descriptor.template.content, $code),
        }
      } catch (e) {
        return null
      }
    },
  }
}
```

vite.config.js

```ts
plugins: [
  InjectClickHandler(), // 必须写在uniPlugin前面
  uniPlugin,
  // ...
]
```
