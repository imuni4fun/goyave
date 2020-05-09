(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{279:function(t,e,a){},280:function(t,e,a){},281:function(t,e,a){},283:function(t,e,a){"use strict";var n=a(279);a.n(n).a},284:function(t,e,a){"use strict";var n=a(280);a.n(n).a},285:function(t,e,a){"use strict";var n=a(281);a.n(n).a},293:function(t,e,a){},294:function(t,e,a){},297:function(t,e,a){},328:function(t,e,a){"use strict";var n=a(293);a.n(n).a},329:function(t,e,a){"use strict";var n=a(294);a.n(n).a},333:function(t,e,a){"use strict";var n=a(297);a.n(n).a},339:function(t,e,a){"use strict";a(317);var n=a(319),i=a(341),s=a(347),r=a(310),o={name:"DarkThemeIcon"},l=a(18),c={name:"UserSettings",mixins:[{data:function(){return{darkTheme:!1}},mounted:function(){this.darkTheme="true"===localStorage.getItem("dark-theme"),this.updateTheme()},methods:{toggleDarkTheme:function(){this.darkTheme=!this.darkTheme,this.updateTheme()},updateTheme:function(){if(this.darkTheme)return document.body.classList.add("yuu-theme-dark"),localStorage.setItem("dark-theme",!0);document.body.classList.remove("yuu-theme-dark"),localStorage.setItem("dark-theme",!1)}}}],components:{DarkThemeIcon:Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"svg-inline--fa fa-cog fa-w-16",attrs:{"aria-hidden":"true","data-prefix":"fas","data-icon":"cog",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[e("path",{attrs:{fill:"currentColor",d:"M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 15c-3.9 0-7-3.1-7-7 0-2.4 1.2-4.6 3.2-5.9-0.1 0.6-0.2 1.3-0.2 1.9 0 4.9 4 8.9 8.9 9-1.3 1.3-3 2-4.9 2z"}})])}),[],!1,null,null,null).exports}},u=(a(328),Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-settings"},[a("a",{staticClass:"settings-button",attrs:{title:"Dark theme",href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleDarkTheme(e)}}},[a("DarkThemeIcon",{staticClass:"settings-icon"})],1)])}),[],!1,null,null,null).exports);function h(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var m={components:{SidebarButton:s.a,NavLinks:r.a,SearchBox:i.a,AlgoliaSearchBox:n.a,UserSettings:u},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(h(this.$el,"paddingLeft"))+parseInt(h(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},d=(a(329),Object(l.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[a("UserSettings"),t._v(" "),t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.a=d.exports},342:function(t,e,a){"use strict";var n={components:{ParentHome:a(344).a}},i=a(18),s=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)(this.$page.frontmatter.homeComponent||"ParentHome",{tag:"component"})}),[],!1,null,null,null);e.a=s.exports},343:function(t,e,a){"use strict";var n=a(345),i=a(346),s={components:{PageEdit:n.a,PageNav:i.a},props:["sidebarItems"]},r=(a(333),a(18)),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[t._t("top"),t._v(" "),a("Content",{staticClass:"theme-default-content"}),t._v(" "),a("PageEdit"),t._v(" "),a("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports},349:function(t,e,a){"use strict";a.r(e);var n={components:{ParentLayout:a(340).a}},i=(a(283),a(284),a(285),a(18)),s=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("ParentLayout")}),[],!1,null,null,null);e.default=s.exports}}]);