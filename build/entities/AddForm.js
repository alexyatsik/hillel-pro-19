"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _createSuper(o){return function(){var t,e=_getPrototypeOf(o);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var AddForm=function(){_inherits(r,Form);var o=_createSuper(r);function r(t){var e;_classCallCheck(this,r),(e=o.call(this,t)).idRow=new DOMElement("tr",e.table).get(),new DOMElement("th",e.idRow).HTML("ID");var n=new DOMElement("td",e.idRow).get();return new Input(n,"id","",getUniqueId()).get().disabled=!0,e.taskRow=new DOMElement("tr",e.table).get(),new DOMElement("th",e.taskRow).HTML("Task"),e.taskNest=new DOMElement("td",e.taskRow).get(),new Select(e.taskNest,"task",apis.tasks).attr("id","select-task"),e.taskRow=new DOMElement("tr",e.table).get(),new DOMElement("th",e.taskRow).HTML("Priority"),e.taskNest=new DOMElement("td",e.taskRow).get(),new Select(e.taskNest,"priority",apis.priorities).attr("id","select-priorities"),e.taskRow=new DOMElement("tr",e.table).get(),new DOMElement("th",e.taskRow).HTML("Status"),e.taskNest=new DOMElement("td",e.taskRow).get(),new Select(e.taskNest,"status",apis.statuses).attr("id","select-statuses"),e.taskRow=new DOMElement("tr",e.table).get(),new DOMElement("th",e.taskRow).HTML("Description"),e.taskNest=new DOMElement("td",e.taskRow).get(),new Input(e.taskNest,"description","Task description"),e.timestampRow=new DOMElement("tr",e.table).get(),new DOMElement("th",e.timestampRow).HTML("Added"),e.timestampRow=new DOMElement("td",e.timestampRow).get(),new Input(e.timestampRow,"timestamp","",moment().format("Do MMM, h:mm a")).get().disabled=!0,e}return r}();