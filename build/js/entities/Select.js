"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _createSuper(r){return function(){var t,e=_getPrototypeOf(r);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Select=function(){_inherits(f,DOMElement);var u=_createSuper(f);function f(t,e,o,r){var n;_classCallCheck(this,f),(n=u.call(this,"select",t)).attr("name",e),n.coverOption=new DOMElement("option",n.element),r&&"Not defined"!==r?(n.coverOption.attr("value",r),n.coverOption.HTML(r)):(n.coverOption.attr("value","0"),n.coverOption.HTML("Not defined"));for(var c=0;c<o.length;c++)if(r!==o[c].value){var i=new DOMElement("option",n.element);i.HTML(o[c].value),i.attr("value",o[c].value)}return n}return f}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJET01FbGVtZW50IiwicGFyZW50IiwibmFtZSIsImNvbGxlY3Rpb24iLCJjb3Zlck9wdGlvbiIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl9zdXBlciIsImNhbGwiLCJhdHRyIiwiZWxlbWVudCIsIkhUTUwiLCJpIiwibGVuZ3RoIiwidmFsdWUiLCJvcHRpb24iXSwibWFwcGluZ3MiOiJBQUFBLG1wREFFTUEsOEJBQWVDLGtDQUNqQixTQUFBRCxFQUFZRSxFQUFRQyxFQUFNQyxFQUFZQyxHQUFhLElBQUFDLEVBQUFDLGdCQUFBQyxLQUFBUixJQUMvQ00sRUFBQUcsRUFBQUMsS0FBQUYsS0FBTSxTQUFVTixJQUVYUyxLQUFLLE9BQVFSLEdBRWxCRyxFQUFLRCxZQUFjLElBQUlKLFdBQVcsU0FBVUssRUFBS00sU0FDNUNQLEdBQStCLGdCQUFoQkEsR0FJaEJDLEVBQUtELFlBQVlNLEtBQUssUUFBU04sR0FDL0JDLEVBQUtELFlBQVlRLEtBQUtSLEtBSnRCQyxFQUFLRCxZQUFZTSxLQUFLLFFBQVMsS0FDL0JMLEVBQUtELFlBQVlRLEtBQUssZ0JBSzFCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJVixFQUFXVyxPQUFRRCxJQUNuQyxHQUFJVCxJQUFnQkQsRUFBV1UsR0FBR0UsTUFBbEMsQ0FHQSxJQUFNQyxFQUFTLElBQUloQixXQUFXLFNBQVVLLEVBQUtNLFNBQzdDSyxFQUFPSixLQUFLVCxFQUFXVSxHQUFHRSxPQUMxQkMsRUFBT04sS0FBSyxRQUFTUCxFQUFXVSxHQUFHRSxPQW5CUSxPQUFBViIsImZpbGUiOiJlbnRpdGllcy9TZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBET01FbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgbmFtZSwgY29sbGVjdGlvbiwgY292ZXJPcHRpb24pIHtcclxuICAgICAgICBzdXBlcignc2VsZWN0JywgcGFyZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyKCduYW1lJywgbmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY292ZXJPcHRpb24gPSBuZXcgRE9NRWxlbWVudCgnb3B0aW9uJywgdGhpcy5lbGVtZW50KTtcclxuICAgICAgICBpZiAoIWNvdmVyT3B0aW9uIHx8IGNvdmVyT3B0aW9uID09PSAnTm90IGRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY292ZXJPcHRpb24uYXR0cigndmFsdWUnLCAnMCcpO1xyXG4gICAgICAgICAgICB0aGlzLmNvdmVyT3B0aW9uLkhUTUwoJ05vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb3Zlck9wdGlvbi5hdHRyKCd2YWx1ZScsIGNvdmVyT3B0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5jb3Zlck9wdGlvbi5IVE1MKGNvdmVyT3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb3Zlck9wdGlvbiA9PT0gY29sbGVjdGlvbltpXS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IERPTUVsZW1lbnQoJ29wdGlvbicsIHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5IVE1MKGNvbGxlY3Rpb25baV0udmFsdWUpO1xyXG4gICAgICAgICAgICBvcHRpb24uYXR0cigndmFsdWUnLCBjb2xsZWN0aW9uW2ldLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
