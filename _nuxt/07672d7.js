(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{261:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("1b7833da",content,!0,{sourceMap:!1})},262:function(t,e,n){"use strict";n.r(e);var o=n(78),l=n.n(o),dialog=n(77),c={name:"DownloadLatest",data:function(){return{info:void 0}},mounted:function(){var t=this;l.a.get("https://api.github.com/repos/hugo4715/GogoApp/releases/latest").then((function(e){t.info=e.data,console.log(t.info)})).catch((function(t){dialog.a.alert({message:"Could not get the latest release from Github<br/> "+t,type:"is-danger"})}))},methods:{downloadLatest:function(){window.open(this.info.assets[0].browser_download_url)}}},r=n(64),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.info?n("div",[n("b-button",{attrs:{type:"is-success","icon-left":"download"},on:{click:t.downloadLatest}},[t._v("\n    "+t._s(this.info.name)+"\n    ")])],1):n("div",[n("p",[t._v("Loading...")])])}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){t.exports=n.p+"img/screenshot1.68a0fd2.png"},264:function(t,e,n){"use strict";n(261)},265:function(t,e,n){var o=n(111),l=n(266),c=n(267),r=o(!1),d=l(c);r.push([t.i,"html{background:#020024;background:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url("+d+") no-repeat;background-size:cover}#__layout,#__nuxt,#page,.is-fullheight,body,html{height:100%}",""]),t.exports=r},266:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},267:function(t,e,n){t.exports=n.p+"img/background.fd91968.jpg"},268:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mx-5 is-hidden-mobile",staticStyle:{width:"300px"}},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:n(263)}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"mx-4 mb-4"},[n("li",[t._v("Create an account on GogoAnime")]),t._v(" "),n("li",[t._v("Download and install the APK")]),t._v(" "),n("li",[t._v("Login using your account and start watching")])])}],l={name:"IndexPage"},c=(n(264),n(64)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[n("div",{staticClass:"container is-fullheight"},[n("div",{staticClass:"is-flex is-justify-content-center is-align-items-center is-fullheight"},[t._m(0),t._v(" "),n("div",{staticClass:"mx-5"},[n("div",{staticClass:"box"},[n("h1",{staticClass:"title"},[t._v("GogoAnime - Unofficial App")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("How to install")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"is-flex is-align-items-center is-justify-content-space-between"},[n("div",{},[n("DownloadLatest")],1),t._v(" "),n("div",{},[n("a",{staticClass:"button is-success",attrs:{href:"https://github.com/hugo4715/GogoApp/releases"}},[t._v("\n                Older versions\n                "),n("b-icon",{staticClass:"mx-1",attrs:{icon:"dots-vertical",size:"is-small"}})],1)])])])])])])])}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{DownloadLatest:n(262).default})}}]);