(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,6,9],{291:function(e,t,r){var content=r(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("da840bcc",content,!0,{sourceMap:!1})},292:function(e,t,r){var content=r(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("ae7a665c",content,!0,{sourceMap:!1})},294:function(e,t,r){"use strict";r(291)},295:function(e,t,r){var n=r(37)((function(i){return i[1]}));n.push([e.i,"/*purgecss start ignore*/\n.gallery-card[data-v-cc76106e]:hover{\n  transform:scale(1.05);\n  outline-width:2px;\n  outline-color:#000;\n  outline-style:solid\n}\n@media screen and (max-width:375px){\n.gallery-card[data-v-cc76106e]:nth-child(n+5){\n    display:none\n}\n}\n@media screen and (min-width:375px){\n.gallery-card[data-v-cc76106e]{\n    display:block\n}\n}\n\n/*purgecss end ignore*/",""]),n.locals={},e.exports=n},296:function(e,t,r){"use strict";r.r(t);r(30),r(20),r(29),r(43),r(28),r(44);var n=r(13),l=r(0),o=r(42);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d=l.a.extend({props:{imgSrc:{type:String,required:!0}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["showModalWindow"]))}),f=d,_=(r(294),r(11)),component=Object(_.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"gallery-card w-5/12 sm:w-72 rounded-md cursor-pointer shadow-md",attrs:{tabindex:"0"}},[r("img",{staticClass:"rounded-md w-full h-full object-cover",attrs:{src:"images/gallery/"+e.imgSrc,loading:"lazy",alt:"Images of work"},on:{click:function(t){return e.showModalWindow(e.imgSrc)}}})])}),[],!1,null,"cc76106e",null);t.default=component.exports},297:function(e,t,r){"use strict";r(292)},298:function(e,t,r){var n=r(37)((function(i){return i[1]}));n.push([e.i,'/*purgecss start ignore*/\n.input-label[data-v-7b37232a]:before{\n  content:"*";\n  color:red;\n  padding-right:4px;\n  font-size:.6rem\n}\n\n/*purgecss end ignore*/',""]),n.locals={},e.exports=n},317:function(e,t,r){var content=r(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("52e3d842",content,!0,{sourceMap:!1})},318:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({props:{isHeaderShow:{type:Boolean,default:!0}},data:function(){return{}}}),l=(r(297),r(11)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"callback-form px-4 py-14",attrs:{id:"callback"}},[r("div",{staticClass:"mx-auto sm:max-w-lg"},[e.isHeaderShow?r("h2",{staticClass:"text-center text-2xl pb-3 font-bold text-gray-700",attrs:{tabindex:"0"}},[e._v("\n      "+e._s(e.$t("callback_from_header_text"))+"!\n    ")]):e._e(),e._v(" "),r("form",{staticClass:"p-4 px-6 flex flex-col gap-2 border rounded-md bg-white"},[r("label",{staticClass:"input-label mt-10 text-gray-700",attrs:{for:"name"}},[e._v(e._s(e.$t("callback_from_name"))+":")]),e._v(" "),r("input",{staticClass:"w-full p-2 rounded-md tracking-wide border-b-2 rounded-b-none",attrs:{type:"text",inputmode:"text",id:"name",placeholder:e.$t("callback_from_name_placeholder"),required:""}}),e._v(" "),r("label",{staticClass:"input-label mt-10 text-gray-700",attrs:{for:"phone-number"}},[e._v(e._s(e.$t("callback_from_phone_number"))+":")]),e._v(" "),r("input",{staticClass:"w-full p-2 rounded-md tracking-wide border-b-2 rounded-b-none",attrs:{type:"tel",inputmode:"tel",pattern:"\\d{10,}",id:"phone-number",placeholder:e.$t("callback_from_phone_number_placeholder"),required:""}}),e._v(" "),r("button",{staticClass:"bg-blue-500 text-white uppercase p-2 mt-10 tracking-wide border rounded-md hover:underline",attrs:{type:"submit"}},[e._v("\n        "+e._s(e.$t("callback_from_button"))+"\n      ")])])])])}),[],!1,null,"7b37232a",null);t.default=component.exports},325:function(e,t,r){"use strict";r(317)},326:function(e,t,r){var n=r(37)((function(i){return i[1]}));n.push([e.i,"/*purgecss start ignore*/\n.nuxt-logo{\n  height:180px\n}\n\n/*purgecss end ignore*/",""]),n.locals={},e.exports=n},331:function(e,t,r){"use strict";r.r(t);r(325);var n=r(11),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"nuxt-logo",attrs:{viewBox:"0 0 45 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z",fill:"#00DC82"}})])}),[],!1,null,null,null);t.default=component.exports},335:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({}),l=r(11),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("h2",{staticClass:"text-center text-2xl py-6 font-bold text-gray-700",attrs:{id:"section-jobss"}},[e._v("\n    "+e._s(e.$t("gallery_header_text"))+"\n  ")]),e._v(" "),r("section",{staticClass:"h-auto flex flex-wrap justify-evenly gap-4"},[r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard"),e._v(" "),r("GalleryCard")],1),e._v(" "),r("CallbackForm")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GalleryCard:r(296).default,CallbackForm:r(318).default,Main:r(331).default})}}]);