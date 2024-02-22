var OMathContent=(()=>{var p=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var H=Object.prototype.hasOwnProperty;var q=(r,e)=>{for(var t in e)p(r,t,{get:e[t],enumerable:!0})},I=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of x(e))!H.call(r,n)&&n!==t&&p(r,n,{get:()=>e[n],enumerable:!(i=v(e,n))||i.enumerable});return r};var O=r=>I(p({},"__esModule",{value:!0}),r);var W={};q(W,{initProducts:()=>d});function b(r){C(r),B(r)}function C(r){r.querySelectorAll('figure[data-type="image"]').forEach(e=>P(e))}function P(r){let e=250,t={wheelToZoom:!0,bgOpacity:.9,showAnimationDuration:e,hideAnimationDuration:e},i=new PhotoSwipeLightbox({gallery:r,children:"a[data-pswp-single]",pswpModule:PhotoSwipe,...t,...globalThis.PhotoSwipeLang??{}});i.on("contentAppend",function(a){let o=i.pswp.currSlide.data.element.querySelector("img").getAttribute("data-invert");o&&a.content.element.setAttribute("data-invert",o)});let n=new PhotoSwipeDynamicCaption(i,{type:"below",captionContent:a=>{let o=a.data.element.closest("figure").querySelector("figcaption");return o?o.innerHTML:""},mobileLayoutBreakpoint:()=>!0});i.init()}function B(r){let e=r.querySelectorAll('figure[data-type="video"]'),t={},i={rootMargin:"0px 0px 75px 0px",threshold:0},n=o=>{o.forEach(f=>{let c=f.target,l=c.closest("figure").getAttribute("data-uuid");if(f.isIntersecting){if(t[l]==="new"||t[l]==="inFlow")try{c.play()}catch{}}else c.paused?t[l]!=="new"&&(t[l]="outFlow"):(c.pause(),t[l]="inFlow")})},a=new IntersectionObserver(n,i);e.forEach(o=>{t[o.getAttribute("data-uuid")]="new",a.observe(o.querySelector("video"))})}function T(r){r.querySelectorAll(".accentBlock").forEach(e=>{let t=e.querySelector(":scope > .side > .expand");t&&t.addEventListener("click",()=>e.toggleAttribute("data-expand-open"))})}var g=class{selectorImages;displayImages;constructor(e){this.selectorImages=e.querySelectorAll(":scope > .selector > .inner > .image"),this.displayImages=e.querySelectorAll(":scope > .display > .displayImage"),this.selectorImages.forEach((n,a)=>n.addEventListener("click",()=>{this.selectorImages.forEach(o=>o.removeAttribute("data-current")),n.setAttribute("data-current",""),this.displayImages.forEach(o=>o.removeAttribute("data-current")),this.displayImages[a].setAttribute("data-current","")}));let t=parseFloat(e.getAttribute("data-start"))-1;t<0&&(t=0),t>this.selectorImages.length-1&&(t=this.selectorImages.length-1);let i=this.selectorImages[t];i&&i.click()}};function w(r){r.querySelectorAll(".gallery").forEach(e=>new g(e))}var y={themeVariables:{fontFamily:"Open Sans",primaryColor:"#ecf6ff",primaryBorderColor:"#4672c4",lineColor:"#4672c4",edgeLabelBackground:"#fff",clusterBkg:"#ffffde",clusterBorder:"#bcbc58"},themeCSS:`
        .edgeLabel, .edgeLabel span { font-size: 14px; color: #717171; }

        .featured {
            .nodeLabel
            {
                font-size: 18px;
                font-weight: 600;
                color: white;
            }

            .nodeLabel span
            {
                color: white;
            }

            rect { 
                fill: #4672c4;
            }
        }
    `},k={themeVariables:{fontFamily:"Open Sans",primaryColor:"#263044",primaryTextColor:"#dae6f0",primaryBorderColor:"#4672c4",lineColor:"#4672c4",edgeLabelBackground:"#2d2d2d",clusterBkg:"#49482f",clusterBorder:"#6b6a45"},themeCSS:`
        .edgeLabel, .edgeLabel span { font-size: 14px; color: #949494; }

        .featured {
            .nodeLabel
            {
                font-size: 18px;
                font-weight: 600;
                color: white;
            }

            .nodeLabel span
            {
                color: white;
            }

            rect { 
                fill: #4672c4;
            }
        }
    `};var s=null,m=null;function D(){return(document.documentElement.getAttribute("data-theme")?.split("-").pop()??"light")==="light"?y:k}async function S(r){m?.disconnect(),m=null,s=null,s=(await MermaidPromise).default,s.initialize({startOnLoad:!1}),await new Promise(t=>setTimeout(t,10));let e=r.querySelectorAll(".mermaid");for(let t of e)await L(t),M(t);m=new MutationObserver(()=>{for(let t of e)setTimeout(async()=>{await L(t),M(t)},1)}),m.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}async function L(r){let t=r.querySelector("pre").innerHTML.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");s.initialize({startOnLoad:!1,theme:"base",...D()});let i="";try{await s.parse(t)&&(i=(await s.render("mermaid-"+r.id,t)).svg)}catch(n){console.error(n),i='<b style="color: red">Error when generating mermaid chart!</b>'}r.querySelector(".loading")?.remove(),r.querySelector("svg")?.remove(),r.insertAdjacentHTML("beforeend",i)}function M(r){let e=r.querySelector(":scope > svg");e&&e.addEventListener("click",()=>{let t=e.cloneNode(!0);t.removeAttribute("style"),t.removeAttribute("width");let i=Math.min(1e3,.9*window.innerWidth),n=e.clientHeight/e.clientWidth,a=new PhotoSwipeLightbox({pswpModule:PhotoSwipe,index:0,dataSource:[{html:t.outerHTML,width:i,height:i*n}],wheelToZoom:!0,bgOpacity:1});a.addFilter("isContentZoomable",()=>!0),a.init(),a.loadAndOpen(0)})}function E(r){r.querySelectorAll("a.link").forEach(e=>{let t,i=!1;e.addEventListener("click",n=>{i||!e.hasAttribute("data-preview")||(n.preventDefault(),clearTimeout(t),i=!0,t=setTimeout(()=>{i=!1},300),OMathEvent.onLinkClick(e,n))})})}function A(r){r.querySelectorAll(".task").forEach(e=>{e.querySelectorAll(":scope > header > .controls > button").forEach(t=>{t.addEventListener("click",()=>{if(t.classList.contains("generate")){globalThis.GenTaskManager.genTask(e);return}t.getAttribute("data-section")==="similar"&&!e.hasAttribute("data-similar-open")&&(e.hasAttribute("data-tasks-generated")||(e.setAttribute("data-tasks-generated",""),e.parentElement.querySelectorAll(":scope > .similarTasks .task.genTask").forEach(i=>globalThis.GenTaskManager.genTask(i)))),e.toggleAttribute(`data-${t.getAttribute("data-section")}-open`)})})})}var h=class{elements;constructor(e){this.elements={},this.elements.task=e,this.elements.statement=e.querySelector(":scope > .statement"),this.elements.sections={},e.querySelectorAll("section").forEach(t=>{this.elements.sections[t.getAttribute("data-name")]=t})}get statement(){return this.elements.statement.innerHTML}set statement(e){this.elements.statement.innerHTML=e}getSectionNames(){return Object.keys(this.elements.sections)}getSectionContent(e){let t=this.elements.sections[e];return t?t.querySelector(":scope > .inner > .content").innerHTML:null}setSectionContent(e,t){let i=this.elements.sections[e];i&&(i.querySelector(":scope > .inner > .content").innerHTML=t)}},u=class{worker;taskMap={};initWorker(){let e=globalThis.TaskGenWorker;this.worker=typeof e=="string"?new Worker(e):e,this.worker.onmessage=t=>{this.setupTask(t.data)}}genTask(e){let t=e.getAttribute("data-script-id");if(this.taskMap[t])return;let i=new h(e);this.taskMap[t]=i,e.setAttribute("data-generating","");let n={};n.scriptId=t,n.script=e.getAttribute("data-script"),n.statement=i.statement;let a={};i.getSectionNames().forEach(o=>{a[o]=i.getSectionContent(o)}),Object.keys(a).length>0&&(n.sections=a),this.worker||this.initWorker(),this.worker.postMessage(n)}setupTask(e){let t=this.taskMap[e.scriptId];t.statement=e.statement,e.sections&&Object.keys(e.sections).forEach(i=>{t.setSectionContent(i,e.sections[i])}),d(t.elements.task),t.elements.task.removeAttribute("data-generating"),delete this.taskMap[e.scriptId]}};var F=[b,T,w,S,E,A];function d(r){r&&F.forEach(e=>e(r))}globalThis.OMath_initProducts=d;globalThis.GenTaskManager=new u;return O(W);})();
