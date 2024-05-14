CSS性能优化的方式有那些？
内联首屏关键CSS
异步加载CSS
资源压缩
去除无用CSS
合理使用选择器
减少使用昂贵的属性
减少重排与重绘
不要使用@import
1. 内联首屏关键CSS
   在打开一个页面，页面首要内容出现在屏幕的时间影响着用户的体验，而通过内联css关键代码能够使浏览器在下载完html后就能立刻渲染

而如果外部引用css代码，在解析html结构过程中遇到外部css文件，才会开始下载css代码，再渲染

所以，CSS内联使用使渲染时间提前

注意：但是较大的css代码并不合适内联（初始拥塞窗口、没有缓存），而其余代码则采取外部引用方式

2. 异步加载CSS
   在CSS文件请求、下载、解析完成之前，CSS会阻塞渲染，浏览器将不会渲染任何已处理的内容

前面加载内联代码后，后面的外部引用css则没必要阻塞浏览器渲染。这时候就可以采取异步加载的方案，比如下面的方案：

使用javascript将link标签插到head标签最后

// 创建link标签
const myCSS = document.createElement( "link" );
myCSS.rel = "stylesheet";
myCSS.href = "mystyles.css";
// 插入到header的最后位置
document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
3. 资源压缩
   利用webpack、gulp/grunt、rollup等模块化工具，将css代码进行压缩，使文件变小，大大降低了浏览器的加载时间

4. 去除无用CSS
   虽然文件压缩能够降低文件大小。但CSS文件压缩通常只会去除无用的空格，这样就限制了CSS文件的压缩比例。那是否还有其他手段来精简CSS呢？答案显然是肯定的，如果压缩后的文件仍然超出了预期的大小，我们可以试着找到并删除代码中无用的CSS。

一般情况下，会存在这两种无用的CSS代码：一种是不同元素或者其他情况下的重复代码，一种是整个页面内没有生效的CSS代码。

手动删除这些无用CSS是很低效的。我们可以借助Uncss7库来进行。Uncss可以用来移除样式表中的无用CSS，并且支持多文件和JavaScript注入的CSS。

5. 合理使用选择器
   CSS选择器的匹配是从右向左进行的，这一策略导致了不同种类的选择器之间的性能也存在差异。相比于#markdown-content-h3，显然使用#markdown .content h3时，浏览器生成渲染树（render-tree）所要花费的时间更多。

所以我们在编写选择器的时候，可以遵循以下规则：

不要嵌套使用过多复杂选择器，最好不要三层以上
使用id选择器就没必要再进行嵌套
通配符和属性选择器效率最低，避免使用
6. 减少使用昂贵的属性
   在页面发生重绘的时候，昂贵属性如box-shadow/border-radius/filter/透明度/:nth-child等，会降低浏览器的渲染性能

7. 减少重排与重绘
   减少重排
   重排会导致浏览器重新计算整个文档，重新构建渲染树，这一过程会降低浏览器的渲染速度。如下所示，有很多操作会触发重排，我们应该避免频繁触发这些操作。

改变font-size和font-family
改变元素的内外边距
通过JS改变CSS类
通过JS获取DOM元素的位置相关属性（如width/height/left等）
CSS伪类激活
滚动滚动条或者改变窗口大小
避免不必要的重绘
当元素的外观（如color，background，visibility等属性）发生改变时，会触发重绘。

在网站的使用过程中，重绘是无法避免的。不过，浏览器对此做了优化，它会将多次的重排、重绘操作合并为一次执行。

8. 不要使用@import
   css样式文件有两种引入方式，一种是link元素，另一种是@import

@import会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时

而且多个@import可能会导致下载顺序紊乱

比如一个css文件index.css包含了以下内容：@import url("reset.css")

那么浏览器就必须先把index.css下载、解析和执行后，才下载、解析和执行第二个文件reset.css
