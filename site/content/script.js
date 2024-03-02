var OMathContent=(()=>{var p=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var x=(i,e)=>{for(var t in e)p(i,t,{get:e[t],enumerable:!0})},H=(i,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of A(e))!v.call(i,n)&&n!==t&&p(i,n,{get:()=>e[n],enumerable:!(r=E(e,n))||r.enumerable});return i};var q=i=>H(p({},"__esModule",{value:!0}),i);var W={};x(W,{initProducts:()=>d});function b(i){I(i),C(i)}function I(i){i.querySelectorAll('figure[data-type="image"]').forEach(e=>O(e))}function O(i){let e=250,t={wheelToZoom:!0,bgOpacity:.9,showAnimationDuration:e,hideAnimationDuration:e},r=new PhotoSwipeLightbox({gallery:i,children:"a[data-pswp-single]",pswpModule:PhotoSwipe,...t,...globalThis.PhotoSwipeLang??{}});r.on("contentAppend",function(a){let o=r.pswp.currSlide.data.element.querySelector("img").getAttribute("data-invert");o&&a.content.element.setAttribute("data-invert",o)});let n=new PhotoSwipeDynamicCaption(r,{type:"below",captionContent:a=>{let o=a.data.element.closest("figure").querySelector("figcaption");return o?o.innerHTML:""},mobileLayoutBreakpoint:()=>!0});r.init()}function C(i){let e=i.querySelectorAll('figure[data-type="video"]'),t={},r={rootMargin:"0px 0px 75px 0px",threshold:0},n=o=>{o.forEach(f=>{let c=f.target,l=c.closest("figure").getAttribute("data-uuid");if(f.isIntersecting){if(t[l]==="new"||t[l]==="inFlow")try{c.play()}catch{}}else c.paused?t[l]!=="new"&&(t[l]="outFlow"):(c.pause(),t[l]="inFlow")})},a=new IntersectionObserver(n,r);e.forEach(o=>{t[o.getAttribute("data-uuid")]="new",a.observe(o.querySelector("video"))})}function T(i){i.querySelectorAll(".accentBlock").forEach(e=>{let t=e.querySelector(":scope > .side > .expand");t&&t.addEventListener("click",()=>e.toggleAttribute("data-expand-open"))})}var g=class{selectorImages;displayImages;constructor(e){this.selectorImages=e.querySelectorAll(":scope > .selector > .inner > .image"),this.displayImages=e.querySelectorAll(":scope > .display > .displayImage"),this.selectorImages.forEach((n,a)=>n.addEventListener("click",()=>{this.selectorImages.forEach(o=>o.removeAttribute("data-current")),n.setAttribute("data-current",""),this.displayImages.forEach(o=>o.removeAttribute("data-current")),this.displayImages[a].setAttribute("data-current","")}));let t=parseFloat(e.getAttribute("data-start"))-1;t<0&&(t=0),t>this.selectorImages.length-1&&(t=this.selectorImages.length-1);let r=this.selectorImages[t];r&&r.click()}};function w(i){i.querySelectorAll(".gallery").forEach(e=>new g(e))}var y={themeVariables:{fontFamily:"Open Sans",primaryColor:"#ecf6ff",primaryBorderColor:"#4672c4",lineColor:"#4672c4",edgeLabelBackground:"#fff",clusterBkg:"#ffffde",clusterBorder:"#bcbc58"},themeCSS:`
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
    `};var s=null,m=null;function P(){return(document.documentElement.getAttribute("data-theme")?.split("-").pop()??"light")==="light"?y:k}async function L(i){m?.disconnect(),m=null,s=null,s=(await MermaidPromise).default,s.initialize({startOnLoad:!1}),await document.fonts.ready,await new Promise(r=>setTimeout(r,150));let e=i.querySelectorAll(".mermaid");function t(){for(let r of e)setTimeout(async()=>{await B(r),D(r)},20)}m=new MutationObserver(()=>{t()}),m.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),t()}async function B(i){let t=i.querySelector("pre").innerHTML.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");s.initialize({startOnLoad:!1,theme:"base",...P()});let r="";try{await s.parse(t)&&(r=(await s.render("mermaid-"+i.id,t)).svg)}catch(n){console.error(n),r='<b style="color: red">Error when generating mermaid chart!</b>'}i.querySelector(".loading")?.remove(),i.querySelector("svg")?.remove(),i.insertAdjacentHTML("beforeend",r)}function D(i){let e=i.querySelector(":scope > svg");e&&e.addEventListener("click",()=>{let t=e.cloneNode(!0);t.removeAttribute("style"),t.removeAttribute("width");let r=Math.min(1e3,.9*window.innerWidth),n=e.clientHeight/e.clientWidth,a=new PhotoSwipeLightbox({pswpModule:PhotoSwipe,index:0,dataSource:[{html:t.outerHTML,width:r,height:r*n}],wheelToZoom:!0,bgOpacity:1});a.addFilter("isContentZoomable",()=>!0),a.init(),a.loadAndOpen(0)})}function M(i){i.querySelectorAll("a.link").forEach(e=>{let t,r=!1;e.addEventListener("click",n=>{r||!e.hasAttribute("data-preview")||(n.preventDefault(),clearTimeout(t),r=!0,t=setTimeout(()=>{r=!1},300),OMathEvent.onLinkClick(e,n))})})}function S(i){i.querySelectorAll(".task").forEach(e=>{e.querySelectorAll(":scope > header > .controls > button").forEach(t=>{t.addEventListener("click",()=>{if(t.classList.contains("generate")){globalThis.GenTaskManager.genTask(e);return}t.getAttribute("data-section")==="similar"&&!e.hasAttribute("data-similar-open")&&(e.hasAttribute("data-tasks-generated")||(e.setAttribute("data-tasks-generated",""),e.parentElement.querySelectorAll(":scope > .similarTasks .task.genTask").forEach(r=>globalThis.GenTaskManager.genTask(r)))),e.toggleAttribute(`data-${t.getAttribute("data-section")}-open`)})})})}var h=class{elements;constructor(e){this.elements={},this.elements.task=e,this.elements.statement=e.querySelector(":scope > .statement"),this.elements.sections={},e.querySelectorAll("section").forEach(t=>{this.elements.sections[t.getAttribute("data-name")]=t})}get statement(){return this.elements.statement.innerHTML}set statement(e){this.elements.statement.innerHTML=e}getSectionNames(){return Object.keys(this.elements.sections)}getSectionContent(e){let t=this.elements.sections[e];return t?t.querySelector(":scope > .inner > .content").innerHTML:null}setSectionContent(e,t){let r=this.elements.sections[e];r&&(r.querySelector(":scope > .inner > .content").innerHTML=t)}},u=class{worker;taskMap={};initWorker(){let e=globalThis.TaskGenWorker;this.worker=typeof e=="string"?new Worker(e):e,this.worker.onmessage=t=>{this.setupTask(t.data)}}genTask(e){let t=e.getAttribute("data-script-id");if(this.taskMap[t])return;let r=new h(e);this.taskMap[t]=r,e.setAttribute("data-generating","");let n={};n.scriptId=t,n.script=e.getAttribute("data-script"),n.statement=r.statement;let a={};r.getSectionNames().forEach(o=>{a[o]=r.getSectionContent(o)}),Object.keys(a).length>0&&(n.sections=a),this.worker||this.initWorker(),this.worker.postMessage(n)}setupTask(e){let t=this.taskMap[e.scriptId];t.statement=e.statement,e.sections&&Object.keys(e.sections).forEach(r=>{t.setSectionContent(r,e.sections[r])}),d(t.elements.task),t.elements.task.removeAttribute("data-generating"),delete this.taskMap[e.scriptId]}};var F=[b,T,w,L,M,S];function d(i){i&&F.forEach(e=>e(i))}globalThis.OMath_initProducts=d;globalThis.GenTaskManager=new u;return q(W);})();
