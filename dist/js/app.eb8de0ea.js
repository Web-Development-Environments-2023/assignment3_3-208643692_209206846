(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-11e813ac":"e210e710","chunk-46d34146":"f69eee9d","chunk-746908e5":"b653389e","chunk-7ae1ce32":"4a17245d"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-11e813ac":1,"chunk-46d34146":1,"chunk-7ae1ce32":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-11e813ac":"b25b9f0d","chunk-46d34146":"2236b005","chunk-746908e5":"31d6cfe0","chunk-7ae1ce32":"9aebfefb"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"305c":function(e,t,n){},"3d08":function(e,t,n){"use strict";var r=n("4fff"),o=n.n(r);o.a},"4fff":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:{name:"main"}}},[e._v("Vue Recipes")]),e._v("| "),n("router-link",{attrs:{to:{name:"search"}}},[e._v("Search")]),e._v("| "+e._s(!e.$root.store.username)+" "),e.$root.store.username?n("span",[e._v(" "+e._s(e.$root.store.username)+": "),n("button",{on:{click:e.Logout}},[e._v("Logout")]),e._v("| ")]):n("span",[e._v(" Guest: "),n("router-link",{attrs:{to:{name:"register"}}},[e._v("Register")]),e._v("| "),n("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")]),e._v("| ")],1)],1),n("router-view")],1)},a=[],i={name:"App",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},c=i,s=(n("5c0b"),n("2877")),u=Object(s["a"])(c,o,a,!1,null,null,null),l=u.exports,p=n("a7fe"),d=n.n(p),f=n("bc3a"),h=n.n(f),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v("Main Page")]),n("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{title:"Randome Recipes"}}),e.$root.store.username?e._e():n("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to vue this")]),e._v(" "+e._s(!e.$root.store.username)+" "),n("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)},v=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),n("b-row",e._l(e.recipes,(function(e){return n("b-col",{key:e.id},[n("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},b=[],_=n("2909"),y=(n("96cf"),n("1da1")),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[n("div",{staticClass:"recipe-body"},[e.image_load?n("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}}):e._e()]),n("div",{staticClass:"recipe-footer"},[n("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),n("ul",{staticClass:"recipe-overview"},[n("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),n("li",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])])])])},w=[],j={mounted:function(){var e=this;this.axios.get(this.recipe.image).then((function(t){e.image_load=!0}))},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0}}},O=j,P=(n("839f"),Object(s["a"])(O,k,w,!1,null,"19957e7f",null)),R=P.exports,x={name:"RecipePreviewList",components:{RecipePreview:R},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/random");case 3:r=t.sent,o=r.data.recipes,e.recipes=[],(n=e.recipes).push.apply(n,Object(_["a"])(o)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},C=x,$=(n("3d08"),Object(s["a"])(C,g,b,!1,null,"be3ac010",null)),L=$.exports,E={components:{RecipePreviewList:L}},S=E,T=(n("8574"),Object(s["a"])(S,m,v,!1,null,"cd02df54",null)),A=T.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Four Oh Four you didn't")]),n("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},M=[],q={},N=Object(s["a"])(q,I,M,!1,null,null,null),F=N.exports,B=[{path:"/",name:"main",component:A},{path:"/register",name:"register",component:function(){return n.e("chunk-7ae1ce32").then(n.bind(null,"eaff"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-46d34146").then(n.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return n.e("chunk-746908e5").then(n.bind(null,"37906"))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return n.e("chunk-11e813ac").then(n.bind(null,"6619"))}},{path:"*",name:"notFound",component:F}],D=B,H=n("8c4f"),U=n("1dce"),G=n.n(U),J=(n("f9e3"),n("2dd8"),n("1073")),V=n("cbd0"),K=n("b1fc"),Y=n("7049"),z=n("a7e2"),Q=n("f9bc"),W=n("44d4"),X=n("cca8"),Z=n("51c2"),ee=n("498a");r["default"].use(H["a"]);var te=new H["a"]({routes:D});[J["a"],V["a"],K["a"],Y["a"],z["a"],Q["a"],W["a"],X["a"],Z["a"],ee["a"]].forEach((function(e){return r["default"].use(e)})),r["default"].use(G.a),h.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),h.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(d.a,h.a),r["default"].config.productionTip=!1;var ne={username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(ne),new r["default"]({router:te,data:function(){return{store:ne}},methods:{toast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:n,solid:!0,appendToast:r,autoHideDelay:3e3})}},render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5dd8":function(e,t,n){},"839f":function(e,t,n){"use strict";var r=n("5dd8"),o=n.n(r);o.a},8574:function(e,t,n){"use strict";var r=n("305c"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.eb8de0ea.js.map