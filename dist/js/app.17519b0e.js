(function(t){function n(n){for(var o,c,r=n[0],u=n[1],l=n[2],d=0,m=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&m.push(s[c][0]),s[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);i&&i(n);while(m.length)m.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,r=1;r<e.length;r++){var u=e[r];0!==s[u]&&(o=!1)}o&&(a.splice(n--,1),t=c(c.s=e[0]))}return t}var o={},s={app:0},a=[];function c(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=o,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)c.d(e,o,function(n){return t[n]}.bind(null,o));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=n,r=r.slice();for(var l=0;l<r.length;l++)n(r[l]);var i=u;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0942":function(t,n,e){},"0d60":function(t,n,e){},"273b":function(t,n,e){"use strict";e("0942")},"2c92":function(t,n,e){},"36e0":function(t,n,e){"use strict";e("9558")},4605:function(t,n,e){"use strict";e("b1b5")},"4a4b":function(t,n,e){"use strict";e("0d60")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("b0c0");var o=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("CountdownDemo")],1)},a=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("h2",{staticClass:"page-title"},[t._v("VueCountdownPlus Examples")]),e("demo-basic"),e("demo-custom-format"),e("demo-custom-style"),e("demo-masual-control"),e("demo-second-countdown"),e("demo-countdown-event")],1)},r=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-block",{attrs:{title:"Basic Usage"}},[e("countdown-plus",{attrs:{time:108e6}}),e("source-code",{attrs:{lang:"xml",code:t.code}})],1)},l=[],i={name:"DemoBasic",data:function(){return{code:'<countdown-plus :time="30 * 60 * 60 * 1000" />'}}},d=i,m=e("2877"),f=Object(m["a"])(d,u,l,!1,null,null,null),p=f.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-block",{attrs:{title:"Custom Format"}},[e("countdown-plus",{attrs:{time:108e6,format:"DD ~Day, HH:mm:ss"}}),e("source-code",{attrs:{lang:"xml",code:t.code}})],1)},v=[],w={name:"DemoCustomFormat",data:function(){return{code:'<countdown-plus\n  :time="30 * 60 * 60 * 1000"\n  format="DD ~Day, HH:mm:ss"\n/>'}}},b=w,C=Object(m["a"])(b,h,v,!1,null,null,null),g=C.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-block",{attrs:{title:"Custom Style"}},[e("countdown-plus",{attrs:{time:108e6,format:"HH:mm:ss"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.resolved;return[e("span",{staticClass:"countdown-item"},[t._v(t._s(o.HH))]),t._v(" : "),e("span",{staticClass:"countdown-item"},[t._v(t._s(o.mm))]),t._v(" : "),e("span",{staticClass:"countdown-item"},[t._v(t._s(o.ss))])]}}])}),e("source-code",{attrs:{lang:"xml",code:t.code}})],1)},x=[],k={name:"DemoCustomStyle",data:function(){return{code:'<template>\n  <countdown-plus :time="30 * 60 * 60 * 1000" format="HH:mm:ss">\n    <template v-slot="{ resolved }">\n      <span class="countdown-item">{{ resolved.HH }}</span> :\n      <span class="countdown-item">{{ resolved.mm }}</span> :\n      <span class="countdown-item">{{ resolved.ss }}</span>\n    </template>\n  </countdown-plus>\n</template>\n<style>\n.countdown-item {\n  padding: 3px 6px;\n  border-radius: 3px;\n  color: #fff;\n  background-color: #c00;\n}\n</style>'}}},y=k,j=(e("7127"),Object(m["a"])(y,_,x,!1,null,null,null)),$=j.exports,D=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-block",{attrs:{title:"Masual Control"}},[e("countdown-plus",{ref:"countdown",attrs:{time:108e6,"auto-start":!1}}),e("div",{staticClass:"control-buttons"},[e("Button",{on:{click:t.start}},[t._v("Start")]),e("Button",{on:{click:t.pause}},[t._v("Pause")]),e("Button",{on:{click:t.reset}},[t._v("Reset")])],1),e("source-code",{attrs:{lang:"xml",code:t.templateCode}}),e("source-code",{attrs:{lang:"javascript",code:t.scriptCode}})],1)},O=[],S='<countdown-plus\n  ref="countdown"\n  :time="30 * 60 * 60 * 1000"\n  :auto-start="false"\n/>\n<div class="control-buttons">\n  <Button @click="start">Start</Button>\n  <Button @click="pause">Pause</Button>\n  <Button @click="reset">Reset</Button>\n</div>',B="export default {\n  methods: {\n    start() {\n      this.$refs.countdown.start()\n    },\n    pause() {\n      this.$refs.countdown.stop()\n    },\n    reset() {\n      this.$refs.countdown.reset()\n    }\n  }\n}",E={name:"DemoMasualControl",data:function(){return{templateCode:S,scriptCode:B}},methods:{start:function(){console.log("start"),this.$refs.countdown.start()},pause:function(){this.$refs.countdown.stop()},reset:function(){this.$refs.countdown.reset()}}},H=E,P=(e("36e0"),Object(m["a"])(H,D,O,!1,null,null,null)),M=P.exports,F=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-block",{attrs:{title:"Second Countdown"}},[e("Button",{staticClass:"countdown-button",attrs:{disabled:t.inCountdown},on:{click:t.handleClick}},[t.inCountdown?e("countdown-plus",{ref:"countdown",attrs:{time:6e4,"auto-start":!1,format:"ss"},on:{finish:function(n){t.inCountdown=!1}},scopedSlots:t._u([{key:"default",fn:function(n){var e=n.formatted;return[t._v(t._s(e)+"s")]}}])}):[t._v("Start")]],2),e("source-code",{attrs:{lang:"xml",code:t.templateCode}}),e("source-code",{attrs:{lang:"javascript",code:t.scriptCode}})],1)},T=[],L='<Button\n  class="countdown-button"\n  :disabled="inCountdown"\n  @click="handleClick"\n>\n  <template v-if="!inCountdown">Start</template>\n  <countdown-plus\n    v-else\n    ref="countdown"\n    :time="60 * 1000"\n    :auto-start="false"\n    format="ss"\n    @finish="inCountdown = false"\n  >\n    <template v-slot="{ formatted }">{{ formatted }}s</template>\n  </countdown-plus>\n</Button>',J="export default {\n  data () {\n    return {\n      inCountdown: false\n    }\n  },\n  methods: {\n    handleClick() {\n      this.inCountdown = true\n      this.$nextTick(() => {\n        const { countdown } = this.$refs\n        countdown.reset()\n        countdown.start()\n      })\n    }\n  }\n}",R={name:"DemoSecondCountdown",data:function(){return{inCountdown:!1,templateCode:L,scriptCode:J}},methods:{handleClick:function(){var t=this;this.inCountdown=!0,this.$nextTick((function(){var n=t.$refs.countdown;n.reset(),n.start()}))}}},A=R,U=(e("273b"),Object(m["a"])(A,F,T,!1,null,null,null)),V=U.exports,q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-block",{attrs:{title:"Countdown Events"}},[e("countdown-plus",{attrs:{time:5e3,format:"ss"},on:{change:t.handleChange,finish:t.handleFinish}}),e("source-code",{attrs:{lang:"xml",code:t.templateCode}}),e("source-code",{attrs:{lang:"javascript",code:t.scriptCode}})],1)},z=[],G={name:"DemoCountdownEvent",data:function(){return{templateCode:'<countdown-plus\n  :time="5 * 1000"\n  format="ss"\n  @change="handleChange"\n  @finish="handleFinish"\n/>',scriptCode:"export default {\n  methods: {\n    handleChange (e) {\n      console.log(e.formatted)\n    },\n    handleFinish () {\n      console.log('finished')\n    }\n  }\n}"}},methods:{handleChange:function(t){var n=t.currentTime,e=t.resolved,o=t.formatted;console.log(n,e,o)},handleFinish:function(){console.log("finished")}}},I=G,K=Object(m["a"])(I,q,z,!1,null,null,null),N=K.exports,Q={name:"CountdownDemo",components:{DemoBasic:p,DemoCustomFormat:g,DemoCustomStyle:$,DemoMasualControl:M,DemoSecondCountdown:V,DemoCountdownEvent:N}},W=Q,X=(e("4a4b"),Object(m["a"])(W,c,r,!1,null,null,null)),Y=X.exports,Z={name:"App",components:{CountdownDemo:Y}},tt=Z,nt=Object(m["a"])(tt,s,a,!1,null,null,null),et=nt.exports,ot=e("f581"),st=e.n(ot),at=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"button",attrs:{disabled:t.disabled},on:{click:function(n){return t.$emit("click",n)}}},[t._t("default")],2)},ct=[],rt={name:"Button",props:{disabled:Boolean}},ut=rt,lt=(e("8274"),Object(m["a"])(ut,at,ct,!1,null,null,null)),it=lt.exports,dt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo-block"},[t.title?e("h3",{staticClass:"demo-block__title"},[t._v(t._s(t.title))]):t._e(),e("div",{staticClass:"demo-block__content"},[t._t("default")],2)])},mt=[],ft={name:"DemoBlock",props:{title:String}},pt=ft,ht=(e("4605"),Object(m["a"])(pt,dt,mt,!1,null,"872fa03c",null)),vt=ht.exports,wt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"source-code"},[e("code",{ref:"code",class:"language-"+t.lang,domProps:{innerHTML:t._s(t.html)}})])},bt=[],Ct=e("1020"),gt=e.n(Ct),_t=e("4dd1"),xt=e.n(_t),kt=e("8dcb"),yt=e.n(kt);e("a9a8");gt.a.registerLanguage("javascript",xt.a),gt.a.registerLanguage("xml",yt.a);var jt={name:"SourceCode",props:{lang:String,code:String},data:function(){return{html:""}},mounted:function(){this.html=gt.a.highlight(this.code,{language:this.lang}).value}},$t=jt,Dt=(e("f21a"),Object(m["a"])($t,wt,bt,!1,null,"79cbcf48",null)),Ot=Dt.exports;o["a"].component(st.a.name,st.a),o["a"].component(it.name,it),o["a"].component(vt.name,vt),o["a"].component(Ot.name,Ot),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(et)}}).$mount("#app")},7127:function(t,n,e){"use strict";e("2c92")},8274:function(t,n,e){"use strict";e("d277")},9558:function(t,n,e){},b1b5:function(t,n,e){},b3e2:function(t,n,e){},d277:function(t,n,e){},f21a:function(t,n,e){"use strict";e("b3e2")}});
//# sourceMappingURL=app.17519b0e.js.map