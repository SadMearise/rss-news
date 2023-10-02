(()=>{"use strict";var n={669:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,".news__item {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem auto;\n  margin-bottom: 1.6%;\n  background: #fff;\n  color: #333;\n  line-height: 1.4;\n  font-family: Arial, sans-serif;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n  transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n  position: relative;\n  height: 200px;\n}\n\n.news__item .news__meta-photo {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  transition: transform 0.2s;\n}\n\n.news__item .news__description {\n  padding: 1rem;\n  background: #fff;\n  position: relative;\n  z-index: 1;\n}\n\n.news__item .news__description h2 {\n  line-height: 1;\n  margin: 0;\n  font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n  font-size: 1rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  color: #a2a2a2;\n  margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n  text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n  color: #5ad67d;\n  display: inline-block;\n  position: relative;\n  text-decoration: none;\n  font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n  content: '→';\n  margin-left: -10px;\n  opacity: 0;\n  vertical-align: middle;\n  transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n  margin-left: 5px;\n  opacity: 1;\n}\n\n.news__item p {\n  margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n  margin-top: 1.25rem;\n  position: relative;\n}\n\n.news__item p:first-of-type:before {\n  content: '';\n  position: absolute;\n  height: 5px;\n  background: #5ad67d;\n  width: 35px;\n  top: -0.75rem;\n  border-radius: 3px;\n}\n\n@media (max-width: 992px) {\n  .news {\n    width: 60%;\n  }\n}\n\n@media (max-width: 568px) {\n  .news {\n    width: 50%;\n  }\n}\n\n@media (min-width: 640px) {\n  .news__item {\n    flex-direction: row;\n    max-width: 700px;\n  }\n\n  .news__item .news__meta {\n    flex-basis: 40%;\n    height: auto;\n  }\n\n  .news__item .news__description {\n    flex-basis: 60%;\n  }\n\n  .news__item .news__description:before {\n    -webkit-transform: skewX(-3deg);\n    transform: skewX(-3deg);\n    content: '';\n    background: #fff;\n    width: 30px;\n    position: absolute;\n    left: -10px;\n    top: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n\n  .news__item.alt {\n    flex-direction: row-reverse;\n  }\n\n  .news__item.alt .news__description:before {\n    left: inherit;\n    right: -10px;\n    -webkit-transform: skew(3deg);\n    transform: skew(3deg);\n  }\n}\n",""]);const i=r},501:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,".sources {\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  flex-wrap: nowrap;\n  height: 80vh;\n  overflow: auto;\n  align-items: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 10px 0;\n}\n\n.source__item {\n  background: none;\n  border: 2px solid #30c5ff;\n  font-size: 16px;\n  line-height: 1;\n  padding: 16px 32px;\n  margin-bottom: 8px;\n  color: #70d6ff;\n  transition: 0.25s;\n  cursor: pointer;\n  width: 100%;\n}\n\n.source__item:last-child {\n  margin-bottom: 0;\n}\n\n.source__item:hover,\n.source__item:focus {\n  border-color: #3fcc59;\n  color: #69db7e;\n  box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n  transform: translateY(-0.25em);\n}\n\n.source__item-name {\n  font-weight: 400;\n  white-space: nowrap;\n}\n\n@media (max-width: 992px) {\n  .source__item {\n    margin-bottom: calc(var(--index) * 0.5);\n    padding: calc(var(--index) * 1) calc(var(--index) * 2);\n    font-size: calc(var(--index) * 1);\n  }\n}\n\n@media (max-width: 768px) {\n  .source__item {\n    padding: calc(var(--index) * 0.5) calc(var(--index) * 1);\n  }\n}\n",""]);const i=r},394:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,":root {\n  --index: calc(1vh + 1vw);\n}\n",""]);const i=r},357:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"html {\n  font-size: 10px;\n}\n\nbody {\n  color: #333333;\n  background: #fff;\n  font-family: 'Roboto', sans-serif;\n}\n\n.wrapper {\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.container {\n  max-width: 1440px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n",""]);const i=r},855:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,'body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n*, *:before, *:after{\n  box-sizing: border-box;\n}\n\n:focus, :active{\n  outline: none;\n}\n\na:focus, a:active{\n  outline: none;\n}\n\nnav, footer, header, aside{\n  display: block;\n}\n\nhtml, body{\n  height: 100%;\n  width: 100%;\n  line-height: 1;\n}\n\ninput::-ms-clear{\n  display: none;\n}\n\nbutton{\n  cursor: pointer;\n  background-color: transparent;\n}\n\na, a:visited, a:hover{\n  text-decoration: none;\n}\n\nol, ul {\n  list-style: none;\n}\n\nimg{\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6{\n  font-size:inherit;\n  font-weight: var(--fw-400);\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: "";\n  content: none;\n}\n',""]);const i=r},492:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,".app {\n  display: flex;\n  gap: 15px;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n",""]);const i=r},968:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,".footer {\n  margin-top: 30px;\n}\n\n.footer__body {\n  padding: 30px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.footer__image {\n  display: inline-block;\n  height: 30px;\n  width: auto;\n}\n\n.footer__row > * {\n  font-size: 14px;\n  color: #5ad67d;\n}\n\n@media (max-width: 992px) {\n  .footer__row > * {\n    font-size: calc(var(--index) * 0.9);\n  }\n}\n",""]);const i=r},205:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,".header {\n  margin-bottom: 30px;\n  color: #000000;\n}\n\n.header__body {\n  padding: 30px 0;\n}\n\n.header__title {\n  font-size: 30px;\n}\n\n@media (max-width: 992px) {\n  .header__title {\n    font-size: calc(var(--index) * 2);\n  }\n}\n",""]);const i=r},402:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(645),r=t.n(o),i=t(394),s=t(357),a=t(855),c=t(205),l=t(968),d=t(492),u=r()((function(n){return n[1]}));u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap);"]),u.i(i.Z),u.i(s.Z),u.i(a.Z),u.i(c.Z),u.i(l.Z),u.i(d.Z),u.push([n.id,"\n",""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function a(n,e){for(var t={},o=[],r=0;r<n.length;r++){var a=n[r],c=e.base?a[0]+e.base:a[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=s(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:h(p,e),references:1}),o.push(d)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var s=r(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function h(n,e){var t,o,r;if(e.singleton){var i=m++;t=f||(f=c(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=c(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=s(t[o]);i[r].references--}for(var c=a(n,e),l=0;l<t.length;l++){var d=s(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=c}}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=class{constructor(n,e){this.baseLink=n,this.options=e,this.baseLink=n,this.options=e}getResp({endpoint:n,options:e},t=(()=>{console.error("No callback for GET response")})){this.load("GET",n,t,e)}errorHandler(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.log(`Sorry, but there is ${n.status} error: ${n.statusText}`),Error(n.statusText);return n}makeUrl(n,e){const t={...this.options,...n};let o=`${this.baseLink}${e}?`;return Object.keys(t).forEach((n=>{o+=`${n}=${t[n]}&`})),o.slice(0,-1)}load(n,e,t,o={}){fetch(this.makeUrl(o,e),{method:n}).then(this.errorHandler).then((n=>n.json())).then((n=>t(n))).catch((n=>n instanceof Error&&console.error(n)))}},e=class extends n{constructor(){super("https://rss-news-api.onrender.com/",{apiKey:"6d2aae09fe9a4a16b0ca9602e26e2dbd"})}},o=class extends e{getSources(n){super.getResp({endpoint:"sources"},n)}getNews(n,e){let{target:t}=n;const o=n.currentTarget;if(!(o instanceof Element))throw new Error;for(;t!==o;)if(t instanceof HTMLElement&&null!==t){if(t.classList.contains("source__item")){const n=t.getAttribute("data-source-id");return void(null!==o&&o instanceof HTMLElement&&o.getAttribute("data-source")!==n&&null!==n&&(o.setAttribute("data-source",n),super.getResp({endpoint:"everything",options:{sources:n}},e)))}t=t.parentNode}}};var r=t(379),i=t.n(r),s=t(669);i()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;var a=t(501);i()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;class c{constructor(){this.news=new class{draw(n){const e=n.length>=10?n.filter(((n,e)=>e<10)):n,t=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp");e.forEach(((n,e)=>{if(null!==o){const r=o.content.cloneNode(!0);if(!(r instanceof DocumentFragment))throw new Error;if(e%2){const n=r.querySelector(".news__item");null!==n&&n.classList.add("alt")}const i=r.querySelector(".news__meta-photo");null!==i&&(i.style.backgroundImage=`url(${n.urlToImage||"img/news_placeholder.jpg"})`);const s=r.querySelector(".news__meta-author");null!==s&&(s.textContent=n.author||n.source.name);const a=r.querySelector(".news__meta-date");null!==a&&(a.textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"));const c=r.querySelector(".news__description-title");null!==c&&(c.textContent=n.title);const l=r.querySelector(".news__description-source");null!==l&&(l.textContent=n.source.name);const d=r.querySelector(".news__description-content");null!==d&&(d.textContent=n.description);const u=r.querySelector(".news__read-more a");null!==u&&u.setAttribute("href",n.url),t.append(r)}}));const r=document.querySelector(".news");null!==r&&(r.innerHTML="",r.appendChild(t))}},this.sources=new class{draw(n){const e=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");n.forEach((n=>{if(null!==t){const o=t.content.cloneNode(!0);if(!(o instanceof DocumentFragment))throw new Error;const r=o.querySelector(".source__item-name");null!==r&&(r.textContent=n.name);const i=o.querySelector(".source__item");null!==i&&i.setAttribute("data-source-id",n.id),e.append(o)}}));const o=document.querySelector(".sources");null!==o&&o.append(e)}}}drawNews(n){const e=n?.articles||[];this.news.draw(e)}drawSources(n){const e=n?.sources||[];this.sources.draw(e)}}var l=t(402);i()(l.Z,{insert:"head",singleton:!1}),l.Z.locals,(new class{constructor(){this.controller=new o,this.view=new c}start(){const n=document.querySelector(".sources");null!==n&&n.addEventListener("click",(n=>this.controller.getNews(n,(n=>{void 0!==n&&this.view.drawNews(n)})))),this.controller.getSources((n=>{void 0!==n&&this.view.drawSources(n)}))}}).start()})()})();