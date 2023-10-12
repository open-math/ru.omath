var OMathContent = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // content/global/script/index.ts
  var script_exports = {};
  __export(script_exports, {
    initProducts: () => initProducts
  });

  // content/block/image/script.ts
  function init(contentElem, options) {
    contentElem.querySelectorAll(".image").forEach((imgElem) => initPhotoSwipeIn(imgElem, options?.vendor?.photoSwipe));
  }
  function initPhotoSwipeIn(imgElement, phrases) {
    let animDuration = 250;
    let options = {
      wheelToZoom: true,
      bgOpacity: 0.9,
      showAnimationDuration: animDuration,
      hideAnimationDuration: animDuration
    };
    let lightbox = new PhotoSwipeLightbox({
      gallery: imgElement,
      children: "a[data-pswp-single]",
      pswpModule: PhotoSwipe,
      ...options,
      ...phrases
    });
    lightbox.on("contentAppend", function(e) {
      let isInvertible = lightbox.pswp.currSlide.data.element.querySelector("img").hasAttribute("data-invertible");
      if (isInvertible)
        e.content.element.setAttribute("data-invertible", "");
    });
    let plugin = new PhotoSwipeDynamicCaption(lightbox, {
      type: "below",
      captionContent: (slide) => {
        let caption = slide.data.element.closest(".image").querySelector(":scope > .caption");
        if (!caption)
          return "";
        return caption.innerHTML;
      }
    });
    lightbox.init();
  }

  // content/block/accentBlock/script.ts
  function init2(contentElem) {
    contentElem.querySelectorAll(".accentBlock").forEach((abElement) => {
      let expandButton = abElement.querySelector(":scope > .side > .expand");
      if (expandButton)
        expandButton.addEventListener("click", () => abElement.toggleAttribute("data-expand-open"));
    });
  }

  // content/block/gallery/script.ts
  var Gallery = class {
    selectorImages;
    displayImages;
    constructor(root) {
      this.selectorImages = root.querySelectorAll(":scope > .selector > .inner > .image");
      this.displayImages = root.querySelectorAll(":scope > .display > .displayImage");
      this.selectorImages.forEach((sImg, i) => sImg.addEventListener("click", () => {
        this.selectorImages.forEach((_sImg) => _sImg.removeAttribute("data-current"));
        sImg.setAttribute("data-current", "");
        this.displayImages.forEach((dImg) => dImg.removeAttribute("data-current"));
        this.displayImages[i].setAttribute("data-current", "");
      }));
      let startNum = parseFloat(root.getAttribute("data-start")) - 1;
      if (startNum < 0)
        startNum = 0;
      if (startNum > this.selectorImages.length - 1)
        startNum = this.selectorImages.length - 1;
      let startImg = this.selectorImages[startNum];
      if (startImg)
        startImg.click();
    }
  };
  function init3(contentElem) {
    contentElem.querySelectorAll(".gallery").forEach((galleryElem) => new Gallery(galleryElem));
  }

  // content/inliner/link/script.ts
  function init4(contentElem) {
    contentElem.querySelectorAll("a.link").forEach((link) => {
      let timeout;
      let canOpenLink = false;
      link.addEventListener("click", (e) => {
        if (canOpenLink || !link.hasAttribute("data-preview"))
          return;
        e.preventDefault();
        clearTimeout(timeout);
        canOpenLink = true;
        timeout = setTimeout(() => {
          canOpenLink = false;
        }, 300);
        OMathEvent.onLinkClick(link, e);
      });
    });
  }

  // content/block/task/script.ts
  function init5(contentElem) {
    contentElem.querySelectorAll(".task").forEach((task) => {
      task.querySelectorAll(":scope > header > .controls > button").forEach((button) => {
        button.addEventListener("click", () => {
          task.toggleAttribute(`data-${button.getAttribute("data-section")}-open`);
        });
      });
    });
  }

  // content/global/script/index.ts
  var products = [
    init,
    init2,
    init3,
    init4,
    init5
  ];
  function initProducts(contentElem, gOptions = {}) {
    products.forEach((product) => product(contentElem, gOptions));
  }
  return __toCommonJS(script_exports);
})();
//# sourceMappingURL=script.js.map
