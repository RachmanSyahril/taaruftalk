(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{252:function(t,r,e){var content=e(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("6cd9a3d1",content,!0,{sourceMap:!1})},277:function(t,r,e){"use strict";var n=e(423),o=e(429),c=e(424),l=e(278),d=e(430),_=e(427),f=e(193),v=e(191),h=e(128),m=e(192),w=e(78),x=e(426),k=e(428),y=e(425),D=e(275),N=(e(113),{name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}}),V=e(92),component=Object(V.a)(N,(function(){var t=this,r=t._self._c;return r(n.a,{attrs:{dark:""}},[r(k.a,{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[r(v.a,t._l(t.items,(function(e,i){return r(h.a,{key:i,attrs:{to:e.to,router:"",exact:""}},[r(m.a,[r(f.a,[t._v(t._s(e.icon))])],1),t._v(" "),r(w.a,[r(w.b,[t._v(t._s(e.title))])],1)],1)})),1)],1),t._v(" "),r(o.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r(c.a,{on:{click:function(r){r.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.miniVariant=!t.miniVariant}}},[r(f.a,[t._v("mdi-"+t._s("chevron-".concat(t.miniVariant?"right":"left")))])],1),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.clipped=!t.clipped}}},[r(f.a,[t._v("mdi-application")])],1),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.fixed=!t.fixed}}},[r(f.a,[t._v("mdi-minus")])],1),t._v(" "),r(D.a,[t._v(t._s(t.title))]),t._v(" "),r(y.a),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r(f.a,[t._v("mdi-menu")])],1)],1),t._v(" "),r(x.a,[r(d.a,[r("Nuxt")],1)],1),t._v(" "),r(k.a,{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(r){t.rightDrawer=r},expression:"rightDrawer"}},[r(v.a,[r(h.a,{nativeOn:{click:function(r){t.right=!t.right}}},[r(m.a,[r(f.a,{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),r(w.b,[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r(_.a,{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);r.a=component.exports},285:function(t,r,e){e(286),t.exports=e(287)},336:function(t,r,e){"use strict";e(252)},337:function(t,r,e){var n=e(21)((function(i){return i[1]}));n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),n.locals={},t.exports=n},80:function(t,r,e){"use strict";var n=e(423),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(e(336),e(92)),component=Object(c.a)(o,(function(){var t=this,r=t._self._c;return r(n.a,{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);r.a=component.exports}},[[285,8,2,9]]]);