(()=>{var a=class{constructor(e){this.onClick=()=>{};this.button=e,this.lastY=scrollY,this.button.addEventListener("click",()=>this.onClick()),scrollY===0&&this.toggleShowing(!0),window.addEventListener("scroll",()=>{this.toggleShowing(scrollY===0||scrollY<this.lastY),this.lastY=scrollY}),window.addEventListener("resize",()=>this.toggleShowing(scrollY===0))}toggleLock(e){this.locked=e,e?this.toggleShowing(!1):this.toggleShowing(scrollY===0)}toggleShowing(e){e&&!this.locked?this.button.setAttribute("data-showing",""):this.button.removeAttribute("data-showing")}};var c=class{constructor(){this.asides={},this.asides.major=document.querySelector("body > aside.major"),this.asides.minor=document.querySelector("body > aside.minor"),this.openButtons={},this.openButtons.major=new a(document.querySelector("body > main > .bottomSticky > .asideControls > .majorOpen")),this.openButtons.minor=new a(document.querySelector("body > main > .bottomSticky > .asideControls > .minorOpen")),this.openButtons.major.onClick=()=>this.toggleAside(this.asides.major,!0),this.openButtons.minor.onClick=()=>this.toggleAside(this.asides.minor,!0),document.querySelector("body > main").addEventListener("click",e=>{let t=e.composedPath();for(let i=0;i<t.length;i++)if(t[i]==this.openButtons.major.button||t[i]==this.openButtons.minor.button)return;this.hideAsides()});{let e=document.querySelector("#preview");e.addEventListener("screen",()=>{this.previewLock=!0,this.updateOpenButtons()}),e.addEventListener("close",()=>{this.previewLock=!1,this.updateOpenButtons()})}}updateOpenButtons(){let e=!1;this.asides.major.hasAttribute("data-showing")&&(e=!0),this.asides.minor.hasAttribute("data-showing")&&(e=!0),(document.querySelector("#preview").hasAttribute("style")||this.previewLock)&&(e=!0),this.openButtons.major.toggleLock(e),this.openButtons.minor.toggleLock(e)}toggleAside(e,t){t?e.setAttribute("data-showing",""):e.removeAttribute("data-showing"),this.updateOpenButtons()}hideAsides(){this.toggleAside(this.asides.major,!1),this.toggleAside(this.asides.minor,!1),this.updateOpenButtons()}};var h=class{constructor(e){this.asideMajor=document.querySelector("body > aside.major");let t=(i,o)=>{let n=i.getAttribute("data-target");i.addEventListener("click",()=>{this.switchTo(n),o&&e.toggleAside(this.asideMajor,!0)})};this.asideMajor.querySelectorAll(":scope > .full > .paneSwitcher > .inner > button").forEach(i=>{t(i,!1)}),this.asideMajor.querySelectorAll(":scope > .mini > button").forEach(i=>{t(i,!0)})}switchTo(e){this.asideMajor.setAttribute("data-pane",e)}};var u=class{constructor(e){this.toggler=e,this.panesManager=new h(this.toggler)}};var d=class{constructor(e){this.viewContainer=e.asides.major.querySelector(':scope .pane[data-pane="toc"] .viewContainer'),this.views={},this.views.global=this.viewContainer.querySelector(':scope > .view[data-view="global"]'),this.views.loading=this.viewContainer.querySelector(':scope > .view[data-view="loading"]'),this.views.book=this.viewContainer.querySelector(':scope > .view[data-view="book"]'),this.setupBookClickLogic(),this.views.book.querySelector(":scope .controls > .navButtons > .back").addEventListener("click",()=>this.setView(this.views.global));let t=this.views.book.querySelector(".bookToc");if(t){let i=t.getAttribute("data-book-id");this.initBookToc(i,document.documentElement.getAttribute("data-topic")),this.bookTocs[i]=t}}setupBookClickLogic(){this.bookTocs={},this.views.global.querySelectorAll(".tocItem > a").forEach(e=>{let t=e.closest(".tocItem").getAttribute("data-id");e.addEventListener("click",()=>{t in this.bookTocs?(this.setCurrentBookToc(t),this.setView(this.views.book)):(this.setView(this.views.loading),fetch("/site/book-tocs/"+t+".html").then(i=>i.text()).then(i=>{this.views.book.querySelector(":scope > .inner").insertAdjacentHTML("beforeend",i),this.bookTocs[t]=this.views.book.querySelector(`.bookToc[data-book-id="${t}"]`),this.initBookToc(t),this.setCurrentBookToc(t),this.setView(this.views.book)}))})})}setCurrentBookToc(e){Object.values(this.bookTocs).forEach(t=>t.removeAttribute("data-current")),this.bookTocs[e].setAttribute("data-current",""),this.views.book.querySelector(".bookTitle").innerHTML=this.views.global.querySelector(`.tocItem[data-id="${e}"] > a > .label`).innerHTML}setView(e){this.viewContainer.setAttribute("data-view",e.getAttribute("data-view"))}initBookToc(e,t=null){let i=this.views.book.querySelector(`.bookToc[data-book-id="${e}"]`);if(i.querySelectorAll(".tocSection > .tocItem > a").forEach(o=>o.addEventListener("click",function(){this.closest(".tocSection").toggleAttribute("data-open")})),t){let o=i.querySelector(`.tocItem[data-id="${t}"]`);if(o){o.setAttribute("data-current","");let n=o;for(;n!=null;)n.classList.contains("tocItem")&&n.setAttribute("data-accent",""),n.classList.contains("tocSection")&&(n.setAttribute("data-open",""),n.querySelector(":scope > .tocItem").setAttribute("data-accent","")),n=n.parentElement}}}};function A(){let s=getComputedStyle(document.documentElement);return parseFloat(s.getPropertyValue("--transitionSpeed"))*1e3}function C(s){s.querySelectorAll(".accentBlock").forEach(e=>{let t=e.querySelector(":scope > .side > .expand");t&&t.addEventListener("click",()=>e.toggleAttribute("data-expand-open"))})}var L=class{constructor(e){this.selectorImages=e.querySelectorAll(":scope > .selector > .inner > .image"),this.displayImages=e.querySelectorAll(":scope > .display > .displayImage"),this.selectorImages.forEach((t,i)=>t.addEventListener("click",()=>{this.selectorImages.forEach(o=>o.removeAttribute("data-current")),t.setAttribute("data-current",""),this.displayImages.forEach(o=>o.removeAttribute("data-current")),this.displayImages[i].setAttribute("data-current","")}))}};function x(s){s.querySelectorAll(".gallery").forEach(e=>new L(e))}var r=class{static get(){return window.OMath}};function H(s){s.querySelectorAll("a[data-preview]").forEach(e=>{let t,i=!1;e.addEventListener("click",o=>{i||(o.preventDefault(),clearTimeout(t),i=!0,t=setTimeout(()=>{i=!1},300),r.get().preview.loadView(e.getAttribute("data-preview"),e.getAttribute("href")))})})}function B(s){s.querySelectorAll(".task").forEach(e=>{e.querySelectorAll(":scope > header > .controls > button").forEach(t=>{t.addEventListener("click",()=>{e.toggleAttribute(`data-${t.getAttribute("data-section")}-open`)})})})}function f(s){C(s),x(s),B(s),H(s),s.querySelectorAll(".image").forEach(e=>M(e))}function M(s){let e=250,t={wheelToZoom:!0,showAnimationDuration:e,hideAnimationDuration:e,...PhotoSwipeLang},i=new PhotoSwipeLightbox({gallery:s,children:"a[data-pswp-single]",pswpModule:PhotoSwipe,...t});i.on("afterSetContent",function(o){i.pswp.currSlide.data.element.querySelector("img").classList.contains("invertible")&&o.slide.image.classList.add("_invert")}),i.on("uiRegister",function(){i.pswp.ui.registerElement({name:"custom-caption",order:9,isButton:!1,appendTo:"root",onInit:o=>{i.pswp.on("change",()=>{let T=i.pswp.currSlide.data.element.querySelector("img").parentElement.parentElement.querySelector(".caption")?.innerHTML;o.innerHTML=T||"",o.classList.toggle("_noCaption",!T)})}})}),i.init()}var m=class{constructor(e){this.element=e,this.element.addEventListener("click",()=>this.onClick&&this.canClick()&&this.onClick())}canClick(){return!0}},v=class extends m{constructor(t){super(t);this.title=this.element.getAttribute("title")}setDisabled(t){this.element.classList.toggle("disabled",t),t?this.element.removeAttribute("title"):this.element.setAttribute("title",this.title)}canClick(){return!this.element.classList.contains("disabled")}},S=class extends v{},k=class extends v{setSource(e){this.setDisabled(!e),this.element.setAttribute("href",e||"")}};var y=class extends m{setState(e){this.element.dataset.state=e,this.element.setAttribute("title",this.element.getAttribute(`data-label-${e}`))}},E=class extends m{};var l=class{constructor(e,t){this.id=e;let i;if(typeof t=="string"){let o=document.createElement("div");o.className="screen";let n=document.createElement("div");n.className="inner",n.innerHTML=t,o.appendChild(n),i=o}else i=t;this.element=i,this.inner=this.element.querySelector(":scope > .inner"),this.observer=new ResizeObserver(()=>this.onHeightChange&&this.onHeightChange(this.getHeight()))}setCurrent(e){e?(this.element.setAttribute("data-current",""),this.observer.observe(this.inner)):(this.element.removeAttribute("data-current"),this.observer.unobserve(this.inner))}getHeight(){return this.inner.offsetHeight+1}};var p=class{constructor(){this.screens={};{this.elements={},this.elements.preview=document.querySelector("#preview"),this.elements.display=this.elements.preview.querySelector(":scope > .display");let e=new Event("closed");this.elements.preview.dispatchEvent(e)}{let e=getComputedStyle(this.elements.preview);this.heights={},this.heights.maxPreview=parseInt(e.getPropertyValue("--maxHeight")),this.heights.footer=parseInt(e.getPropertyValue("--footerHeight"))}{let e=document.querySelector("#preview > footer > .controls");this.buttons={},this.buttons.back=new S(e.querySelector(".back")),this.buttons.goto=new k(e.querySelector(".goto")),this.buttons.mini=new y(e.querySelector(".mini")),this.buttons.exit=new E(e.querySelector(".exit"))}{this.buttons.mini.setState("collapse"),this.buttons.back.onClick=()=>this.onBackClick&&this.onBackClick(),this.buttons.mini.onClick=()=>{this.closed||this.setCollapsed(!this.collapsed)};{let e;this.buttons.exit.onClick=()=>{clearTimeout(e),this.closed=!0,this.screen&&this.screen.setCurrent(!1),this.elements.preview.removeAttribute("style"),e=setTimeout(()=>{!this.closed||(this.clearScreen(),this.setButtons(!1,null),this.setCollapsed(!1),this.onCloseComplete&&this.onCloseComplete(),this.elements.preview.dispatchEvent(new Event("close")))},this.animSpeed)}}}this.animSpeed=A(),this.stateScreens={},this.stateScreens.loading=new l("loading",this.elements.display.querySelector(":scope > .loading")),this.stateScreens.error=new l("error",this.elements.display.querySelector(":scope > .error"))}getClosed(){return this.closed}setButtons(e,t){this.buttons.back.setDisabled(!e),this.buttons.goto.setSource(t)}exit(){this.buttons.exit.element.click()}setViewScreen(e){this.setScreen(this.screens[e.url]||new l(e.url,e.content))}setLoadingScreen(){this.setStateScreen("loading")}setErrorScreen(){this.setStateScreen("error")}setStateScreen(e){let t=150;this.screen&&(t=Math.max(t,this.elements.display.clientHeight));let i=this.stateScreens[e];i.inner.setAttribute("style","height: "+t+"px;"),this.setScreen(i)}setScreen(e){if(this.elements.preview.dispatchEvent(new Event("screen")),this.closed=!1,this.setCollapsed(!1),this.screen){if(e.id===this.screen.id){this.screen.setCurrent(!0);return}this.screen.setCurrent(!1)}e.id in this.screens||(this.screens[e.id]=e,this.elements.display.appendChild(e.element),f(e.element),e.onHeightChange=t=>!this.collapsed&&this.setHeight(t)),this.screen=this.screens[e.id],setTimeout(()=>this.screen.setCurrent(!0),0),this.setHeight(this.screen.getHeight())}clearScreen(){this.screen&&(this.screen.setCurrent(!1),this.screen=null),Object.values(this.screens).forEach(e=>{e==this.stateScreens.loading||e==this.stateScreens.error||this.elements.display.removeChild(e.element)}),this.screens={...this.stateScreens}}setHeight(e,t=!1){t||(e+=this.heights.footer),e=Math.min(e,this.heights.maxPreview),this.elements.preview.setAttribute("style","height: "+e+"px;")}setCollapsed(e){this.collapsed=e,e?(this.setHeight(50,!0),this.buttons.mini.setState("expand")):(this.screen&&(this.closed||this.setHeight(this.screen.getHeight())),this.buttons.mini.setState("collapse"))}};var g=class{static isValid(e){return!(!("source"in e)||!("content"in e))}};var w=class{constructor(){this.cache={};this.pendingUrls={}}load(e,t){if(e===this.currentUrl)return;if(e in this.cache){let o=this.cache[e];o===null?this.onError(e):this.onLoad(o);return}if(this.currentUrl=e,this.pendingUrls[e])return;this.pendingUrls[e]=!0;let i;fetch(e).then(o=>o.text()).then(o=>{let n=new g;n.url=e,n.source=t,n.content=o,this.cache[e]=n,i=()=>this.onLoad(n)}).catch(()=>{this.cache[e]=null,i=()=>this.onError(e)}).finally(()=>{delete this.pendingUrls[e],e===this.currentUrl&&(i(),this.currentUrl=null)})}};var b=class{constructor(){this.viewStack=[];this.ui=new p,this.ui.onBackClick=()=>{let e;for(let t=0;t<(this.loading?1:2);t++)e=this.viewStack.pop();e&&this.showView(e)},this.ui.onCloseComplete=()=>{this.loading=!1,this.viewStack=[]};{this.loader=new w;let e=()=>this.loading;this.loader.onLoad=t=>{!e()||this.showView(t)},this.loader.onError=()=>{!e()||this.showError()}}}exit(){this.ui.exit()}loadView(e,t){if(this.viewStack[this.viewStack.length-1]?.url===e){this.exit();return}this.showLoading(),this.loader.load(e,t)}showView(e){this.loading=!1,this.viewStack.at(-1)!=e&&this.viewStack.push(e),this.ui.setViewScreen(e),this.ui.setButtons(this.canBack(),q(e.source)?null:e.source)}showLoading(){this.loading||(this.loading=!0,this.ui.setLoadingScreen(),this.ui.setButtons(this.canBack(),null))}showError(){this.ui.setErrorScreen(),this.ui.setButtons(this.canBack(),null)}canBack(){let e=this.loading?1:2;return this.viewStack.length>=e}};function q(s){let e=location.host+location.pathname,t=location.host+s.split("/").slice(0,-1).join("/")+"/";return e===t}window.OMath=new r;window.addEventListener("load",()=>{r.get().preview=new b,r.get().asideToggler=new c,new u(r.get().asideToggler),new d(r.get().asideToggler),f(document.querySelector("body > main > article"))});})();