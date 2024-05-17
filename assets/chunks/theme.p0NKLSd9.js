import{d as f,u as C,o as a,c as n,a as e,F as p,r as k,b as d,n as S,e as $,t as i,f as g,g as B,h as E,i as P,j as v,k as I,w as U,l as W,m as z,p as L,q as V,s as O,v as Y}from"./framework.C6kx7u2W.js";const Z=e("span",{class:"brand"},null,-1),G={class:"container"},J={class:"menu"},K=["href"],Q=e("span",{class:"other"},[e("a",{class:"search"},[e("i",{class:"fa fa-search"})])],-1),X=f({__name:"Header",setup(_){const t=C().site.value.base,s=[{icon:"fa-home",name:"首页",url:""},{icon:"fa-tag",name:"标签",url:"tags/"},{icon:"fa-leaf",name:"关于",url:"readme.html"}];return(c,l)=>(a(),n("header",null,[Z,e("span",G,[e("span",J,[e("ul",null,[(a(),n(p,null,k(s,o=>e("li",null,[e("a",{href:d(t)+o.url},[e("span",null,[e("i",{class:S(["fa",o.icon])},null,2),$(" "+i(o.name),1)])],8,K)])),64))])])]),Q]))}}),ee=["data-text"],te=f({__name:"GlitchText",props:{text:{}},setup(_){return(t,s)=>(a(),n("div",{class:"glitch","data-text":t.text},i(t.text),9,ee))}}),se=e("div",{class:"wave1"},null,-1),ae=e("div",{class:"wave2"},null,-1),ne={class:"info"},oe={class:"box"},le={class:"text"},ce=e("i",{class:"fa fa-quote-left"},null,-1),re=e("i",{class:"fa fa-quote-right"},null,-1),ie={class:"contact"},ue=["href"],_e=f({__name:"Banner",setup(_){const t=C().theme.value,s=t.hello||"Hello, sakura",c=t.motto||"You got to put the past behind you before you can move on.",l=t.social||[],o=t.cover;return(b,x)=>(a(),n("div",{class:"banner",style:B(`background-image: url(${d(o)})`)},[se,ae,e("div",ne,[g(te,{text:d(s)},null,8,["text"]),e("span",oe,[e("p",le,[ce,$(" "+i(d(c))+" ",1),re]),e("div",ie,[(a(!0),n(p,null,k(d(l),y=>(a(),n("a",{href:y.url,"aria-label":"icon",target:"_blank"},[e("i",{class:S(["fab",y.icon])},null,2)],8,ue))),256))])])])],4))}}),m=JSON.parse(`[{"title":"测试文档","href":"posts/doc2.html","create":1715928319348,"update":1715928319348,"tags":["测试","算法","测试1","测试2","测试3","测试4","测试5","测试6","测试7"],"cover":"/vitepress-theme-sakura/60651947_p0.jpg","excerpt":"","data":{"title":"测试文档","tags":["测试","算法","测试1","测试2","测试3","测试4","测试5","测试6","测试7"],"cover":"/vitepress-theme-sakura/60651947_p0.jpg"}},{"title":"使用ast实现uniapp埋点","href":"posts/ast埋点.html","create":1715928319326,"update":1715928319326,"tags":["uniapp","前端"],"cover":"/vitepress-theme-sakura/60651947_p0.jpg","excerpt":"","data":{"title":"使用ast实现uniapp埋点","tags":["uniapp","前端"],"cover":"/vitepress-theme-sakura/60651947_p0.jpg"}},{"title":"本页面的 github 仓库链接","href":"posts/comming-soon.html","create":1644537600000,"update":1715928319326,"excerpt":"<p><a href=\\"https://github.com/flaribbit/vitepress-theme-sakura\\" target=\\"_blank\\" rel=\\"noreferrer\\">点击这里</a></p>\\n<p>还在摸鱼中，当前预览不代表最终效果</p>\\n","data":{"title":"本页面的 github 仓库链接","date":"2022-02-11T00:00:00.000Z"}},{"title":"What is VitePress?","href":"posts/doc1.html","create":1640995200000,"update":1715928319338,"tags":["vue","vue3","vitepress"],"excerpt":"<p>VitePress is <a href=\\"https://vuepress.vuejs.org/\\" target=\\"_blank\\" rel=\\"noreferrer\\">VuePress</a>' little brother, built on top of <a href=\\"https://github.com/vitejs/vite\\" target=\\"_blank\\" rel=\\"noreferrer\\">Vite</a>.</p>\\n","data":{"title":"What is VitePress?","date":"2022-01-01T00:00:00.000Z","tags":["vue","vue3","vitepress"]}}]`);function he(_,t){let s,c=!1;return()=>{s&&clearTimeout(s),c?s=setTimeout(_,t):(_(),c=!0,setTimeout(()=>{c=!1},t))}}const de={id:"waline"},pe=f({__name:"Waline",setup(_,{expose:t}){let s=null;E(()=>{const o=C().site.value.themeConfig.waline;if(!o){console.error("未配置waline服务端地址");return}c(o)});const c=o=>{s=Waline({el:"#waline",serverURL:o})};return t({update:()=>{s==null||s.update()}}),(o,b)=>(a(),n("div",de))}}),fe={class:"toc"},ve=["href"],me=f({__name:"TOC",props:{data:{},active:{}},setup(_){return(t,s)=>(a(),n("div",fe,[e("ol",null,[(a(!0),n(p,null,k(t.data,(c,l)=>(a(),n("li",{class:S(["h"+c.level,{active:t.active===l}])},[e("a",{href:"#"+c.slug},i(c.title),9,ve)],2))),256))])]))}}),ge={class:"titlebox"},$e={class:"title"},we={class:"info"},ke={class:"article"},be={class:"content nav"},xe=["href"],ye=e("i",{class:"fa fa-angle-left"},null,-1),Te=["href"],Ce=e("i",{class:"fa fa-angle-right"},null,-1),Le=f({__name:"Article",setup(_){const t=C(),s=t.site.value.base,c=P(),l=v(""),o=t.theme.value.name,b=v(""),x=v(0),y=v(""),D=v(0),j=v(),u=I([{href:"",text:"",show:!0},{href:"",text:"",show:!0}]),T=v(0),q=()=>{var h;if(T.value=m.findIndex(w=>w.href==c.path.replace(s,"")),T.value==-1)return;l.value=t.page.value.title,y.value=`background-image: url(${t.page.value.frontmatter.cover||t.theme.value.cover})`,b.value=new Date(t.page.value.lastUpdated||m[T.value].create).toLocaleDateString("sv-SE"),(h=j.value)==null||h.update();let r=T.value;r-1>=0?(u[0].href=s+m[r-1].href,u[0].text=m[r-1].title,u[0].show=!0):u[0].show=!1,r+1<m.length?(u[1].href=s+m[r+1].href,u[1].text=m[r+1].title,u[1].show=!0):u[1].show=!1,typeof window<"u"&&O().then(()=>{F()})};q(),U(c,q);const M=()=>{const r=t.page.value.headers;if(r.length!=0){for(let h=0;h<r.length;h++){const w=document.getElementById(r[h].slug);if((w==null?void 0:w.getBoundingClientRect()).top>200){let R=" ";h>0&&(D.value=h-1,R="#"+r[h-1].slug),history.replaceState(null,document.title,R);return}}D.value=r.length-1,history.replaceState(null,document.title,"#"+r[r.length-1].slug)}},N=he(M,300),F=()=>{if(typeof renderMathInElement>"u")return;const r=document.querySelector(".article .content");r&&renderMathInElement(r,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}]})};return E(()=>{M(),window.addEventListener("scroll",N)}),W(()=>{window.removeEventListener("scroll",N)}),(r,h)=>{const w=z("Content");return a(),n(p,null,[T.value>=0?(a(),n("div",{key:0,class:"abanner",style:B(y.value)},[e("div",ge,[e("h1",$e,i(l.value),1),e("div",we,i(d(o))+" · 更新于 "+i(b.value)+" · "+i(x.value)+" 次阅读",1)])],4)):L("",!0),e("div",ke,[g(w,{class:"content"}),e("div",be,[e("span",null,[u[0].show?(a(),n("a",{key:0,href:u[0].href},[ye,$(" "+i(u[0].text),1)],8,xe)):L("",!0)]),e("span",null,[u[1].show?(a(),n("a",{key:0,href:u[1].href},[$(i(u[1].text)+" ",1),Ce],8,Te)):L("",!0)])]),T.value!=-1?(a(),V(pe,{key:0,ref_key:"waline",ref:j},null,512)):L("",!0),g(me,{data:d(t).page.value.headers,active:D.value},null,8,["data","active"])])],64)}}}),Se={class:"bloglist"},Ee=e("div",{class:"section"},[e("i",{class:"fa-solid fa-book"}),$(" 文章列表 "),e("hr")],-1),De={class:"card"},Ve=e("div",{class:"image"},null,-1),Be={class:"info"},je={class:"date"},qe=e("i",{class:"fa fa-clock"},null,-1),Me=["href"],Ne={class:"title"},Re=["innerHTML"],He={key:0,class:"tags"},Pe=["onClick"],We=e("i",{class:"fa fa-tag"},null,-1),Ae={key:1,class:"tags"},Fe=["href"],Ie=e("i",{class:"fa fa-tag"},null,-1),A=f({__name:"BlogList",props:{posts:{},click:{type:Function}},setup(_){const t=C().site.value.base;return(s,c)=>(a(),n("div",Se,[Ee,(a(!0),n(p,null,k(s.posts,l=>(a(),n("div",De,[Ve,e("div",Be,[e("div",je,[qe,$(" 发布于 "+i(new Date(l.create).toLocaleDateString("sv-SE")),1)]),e("a",{href:d(t)+l.href},[e("div",Ne,i(l.title),1)],8,Me),e("div",{class:"content",innerHTML:l.excerpt},null,8,Re),s.click?(a(),n("div",He,[(a(!0),n(p,null,k(l.tags,o=>(a(),n("a",{href:"#",onClick:b=>s.click(o)},[We,$(" "+i(o),1)],8,Pe))),256))])):(a(),n("div",Ae,[(a(!0),n(p,null,k(l.tags,o=>(a(),n("a",{href:`${d(t)}tags/?q=${o}`},[Ie,$(" "+i(o),1)],8,Fe))),256))]))])]))),256))]))}}),Ue={class:"tag"},ze={class:"article"},Oe=["onClick"],Ye=f({__name:"Tag",setup(_){const t=v(null),s={},c=l=>{t.value=l,history.replaceState(null,document.title,"?q="+l)};for(const l of m)if(l.tags)for(const o of l.tags)s[o]||(s[o]=[]),s[o].push(l);return E(()=>{t.value=new URLSearchParams(location.search).get("q")}),(l,o)=>(a(),n("div",Ue,[e("div",ze,[(a(),n(p,null,k(s,(b,x)=>e("a",{class:S(["item",{active:t.value===x}]),href:"#",onClick:y=>c(x)},[e("span",null,i(x),1)],10,Oe)),64))]),g(A,{posts:t.value?s[t.value]:[],click:c},null,8,["posts"])]))}}),H="top: -900px",Ze=f({__name:"ToTop",setup(_){const t=v(H),s=()=>{window.scrollY>200?window.innerWidth>720?t.value=`top: ${Math.min(window.innerHeight-968,0)}px`:t.value="top: -640px":t.value=H},c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return E(()=>{window.addEventListener("scroll",s),s()}),W(()=>{window.removeEventListener("scroll",s)}),(l,o)=>(a(),n("a",{href:"#",class:"totop",onClick:c,style:B(t.value),"aria-label":"to-top"},null,4))}}),Ge=e("aside",null,null,-1),Je=f({__name:"Layout",setup(_){const t=C().site.value.base,s=P(),c=Y(()=>s.path.replace(t,"").replace("index.html",""));return(l,o)=>(a(),n(p,null,[g(X),Ge,e("main",null,[g(Ze),c.value===""?(a(),n(p,{key:0},[g(_e),g(A,{posts:d(m)},null,8,["posts"])],64)):c.value==="tags/"?(a(),V(Ye,{key:1})):(a(),V(Le,{key:2}))])],64))}}),Xe={Layout:Je,NotFound:()=>"custom 404",enhanceApp({app:_,router:t,siteData:s}){}};export{Xe as R};
