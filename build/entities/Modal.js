"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var l=e[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}var Modal=function(){function u(t,e,a){_classCallCheck(this,u),this.modal=document.createElement("div"),this.modal.classList.add("modal","fade"),this.modal.setAttribute("id",t),this.modal.setAttribute("tabindex","-1"),this.modal.setAttribute("role","dialog"),this.modal.setAttribute("aria-labelledby","".concat(t,"Label")),this.modal.setAttribute("aria-hidden",!0),this.modal.dataset.backdrop="static";var l=new DOMElement("div",this.modal);l.addClass("modal-dialog"),l.attr("role","document");var n=new DOMElement("div",l.get());n.addClass("modal-content");var d=new DOMElement("div",n.get());d.addClass("modal-header");var s=new DOMElement("h5",d.get());s.addClass("modal-title"),s.attr("id","".concat(t,"Label"));var r=new DOMElement("button",d.get());r.addClass("close"),r.attr("type","button"),r.attr("aria-label","Close"),r.attr("data-dismiss","modal"),r.HTML('<span aria-hidden="true">&times;</span>'),r.click(a[0]);var i=new DOMElement("div",n.get());i.addClass("modal-body"),i.attr("id","".concat(t,"Content"));var o=new DOMElement("div",n.get());o.addClass("modal-footer");var c=new DOMElement("button",o.get());c.addClass("btn","btn-secondary"),c.attr("type","button"),c.attr("data-dismiss","modal"),c.click(a[0]);var m=new DOMElement("button",o.get());m.addClass("btn","btn-primary"),m.attr("type","button"),m.click(a[1]),s.HTML(e),c.HTML("Close"),m.HTML("Apply")}return _createClass(u,[{key:"get",value:function(){return this.modal}}]),u}();