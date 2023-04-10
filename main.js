(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t){var n=t.data,r=t.templateSelector,o=t.userId,i=t.handleCardClick,u=t.handleRemoveBtn,a=t.addCardLike,c=t.deleteCardLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._ownerId=n.owner._id,this._templateSelector=r,this._handleCardClick=i,this._handleRemoveBtn=u,this._userId=o,this._addCardLike=a,this._deleteCardLike=c,this._likes=n.likes}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_purposeBuckets",value:function(){this._ownerId!=this._userId&&this._cardDeleteBtn.classList.add("element__button-cancel_delete")}},{key:"countingLike",value:function(e){this._likesCounter.textContent=e.length}},{key:"addLike",value:function(){this._likeButton.classList.add("element__button_active")}},{key:"deleteLike",value:function(){this._likeButton.classList.remove("element__button_active")}},{key:"_checkСlicksLike",value:function(){var e=this;this._likes.find((function(t){return t._id===e._userId}))&&this.addLike()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__item"),this._likeButton=this._element.querySelector(".element__button"),this._cardDeleteBtn=this._element.querySelector(".element__button-cancel"),this._likesCounter=this._element.querySelector(".element__counter"),this._likesCounter.textContent=this._likes.length,this._purposeBuckets(),this._checkСlicksLike(),this._setEventListeners(),this._cardImage.src=this._link,this._element.querySelector(".element__title").textContent=this._name,this._cardImage.alt=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("element__button_active")?e._deleteCardLike():e._addCardLike()})),this._cardDeleteBtn.addEventListener("click",(function(t){e._handleRemoveBtn(t)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u(r.key),r)}}function i(e,t,n){return(t=u(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}var a=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_outputInputError",(function(e,t){var n=r._popupFormElement.querySelector("#".concat(e.id," + .").concat(r._inputErrorClass));e.classList.add(r._errorClass),n.textContent=t,n.classList.add(r._errorClassActive)})),i(this,"_deletionInputError",(function(e){var t=r._popupFormElement.querySelector("#".concat(e.id," + .").concat(r._inputErrorClass));e.classList.remove(r._errorClass),t.classList.remove(r._errorClassActive),t.textContent=""})),i(this,"_checkInputValidity",(function(e){e.validity.valid?r._deletionInputError(e):r._outputInputError(e,e.validationMessage)})),i(this,"_toggleFormSubmit",(function(){r._hasInvalidInput()?r._buttonElement.setAttribute("disabled","disabled"):r._buttonElement.removeAttribute("disabled")})),i(this,"_addEventListeners",(function(){r._toggleFormSubmit(),r._inputsList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleFormSubmit()}))}))})),i(this,"enableValidation",(function(){r._addEventListeners(r._popupFormElement)})),this._popupFormElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._errorClassActive=t.errorClassActive,this._inputsList=Array.from(this._popupFormElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._popupFormElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputsList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._toggleFormSubmit(),this._inputsList.forEach((function(t){e._deletionInputError(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var s=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSet=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSet.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSet.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSet.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__cancel")&&e.close()}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popupForm=n._popupSet.querySelector(".popup__form"),n._popupInput=n._popupForm.querySelectorAll(".popup__input"),n._handleFormSubmit=t,n._popupBtnSave=n._popupSet.querySelector(".popup__submit"),n}return t=u,n=[{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранить";this._popupBtnSave.textContent=e?"Сохранение...":t}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._popupInput.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._popupInput.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;m(b(u.prototype),"setEventListeners",this).call(this),this._popupSet.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){m(b(u.prototype),"close",this).call(this),this._popupForm.reset()}}],n&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImgElement=t._popupSet.querySelector(".popup__photos"),t._popupImgSignatureElement=t._popupSet.querySelector(".popup__signature"),t}return t=u,(n=[{key:"open",value:function(e,t){k(E(u.prototype),"open",this).call(this),this._popupImgSignatureElement.textContent=e,this._popupImgElement.src=t,this._popupImgElement.alt=e}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var C=function(){function e(t){var n=t.profilName,r=t.profilProfession,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profilNameElement=document.querySelector(n),this._profilProfessionElement=document.querySelector(r),this._profileAvatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profilNameElement.textContent,about:this._profilProfessionElement.textContent}}},{key:"setUserInfo",value:function(e){this._profilNameElement.textContent=e.name,this._profilProfessionElement.textContent=e.about,this._profileAvatarElement.src=e.avatar}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popupFormElement=t,n}return t=u,(n=[{key:"handleFuncSubmit",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;R(B(u.prototype),"setEventListeners",this).call(this),this._popupFormElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var x=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{headers:this._headers}).then(this._checkResponse)}},{key:"changeUserInfo",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeProfileAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar,about:e.information})}).then(this._checkResponse)}},{key:"addCardLike",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCardLike",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),V=document.querySelector(".profile__button-edit"),D=document.forms.profile,U=document.querySelector(".profile__button-add"),N=document.forms.cards,J=document.querySelector(".profile__button"),H=document.forms.avatar,M=document.forms.confirmation,z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inputErrorClass:"popup__input-error",errorClass:"popup__input_type_invalid",errorClassActive:"popup__input-error_active"};function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=new x({url:"https://mesto.nomoreparties.co/v1/cohort-63",headers:{authorization:"7bb725b6-9812-4e2e-8c19-020be604de1f","Content-Type":"application/json"}}),K=null;Promise.all([G.getUserInfo(),G.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K=o._id,ee.setUserInfo(o),X.renderItems(i)})).catch((function(e){console.error(e)}));var Q=function(e){var t=new n({data:e,templateSelector:".elements__cards",userId:K,handleCardClick:W,handleRemoveBtn:function(t){var n=t.target.closest(".element");ue.open(),ue.handleFuncSubmit((function(){G.removeCard(e._id).then((function(){n.remove(),ue.close()})).catch((function(e){console.error(e)}))}))},addCardLike:function(){G.addCardLike(e._id).then((function(e){t.addLike(),t.countingLike(e.likes)})).catch((function(e){console.error(e)}))},deleteCardLike:function(){G.deleteCardLike(e._id).then((function(e){t.deleteLike(),t.countingLike(e.likes)})).catch((function(e){console.error(e)}))}});return t.generateCard()};function W(e,t){re.open(t,e)}var X=new s({renderer:function(e){X.addItem(Q(e))}},".elements"),Y=new a(z,N);Y.enableValidation();var Z=new a(z,D);Z.enableValidation();var ee=new C({profilName:".profile__name",profilProfession:".profile__profession",profileAvatar:".profile__avatar"}),te=new _("#popup-profil",(function(e){te.renderLoading(!0),G.changeUserInfo(e).then((function(e){ee.setUserInfo(e),te.close()})).catch((function(e){console.error(e)})).finally((function(){te.renderLoading(!1)}))}));V.addEventListener("click",(function(){var e=ee.getUserInfo();te.setInputValues(e),te.open(),Z.resetValidation()})),te.setEventListeners();var ne=new _("#popup-card",(function(e){ne.renderLoading(!0),G.addNewCard({name:e.name,link:e.link}).then((function(e){X.addItem(Q(e)),ne.close()})).catch((function(e){console.error(e)})).finally((function(){ne.renderLoading(!1)}))}));U.addEventListener("click",(function(){Y.resetValidation(),ne.open()})),ne.setEventListeners();var re=new j("#popup-foto");re.setEventListeners();var oe=new _("#popup-avatar",(function(e){oe.renderLoading(!0),G.changeProfileAvatar(e).then((function(e){ee.setUserInfo(e),oe.close()})).catch((function(e){console.error(e)})).finally((function(){oe.renderLoading(!1)}))}));J.addEventListener("click",(function(){ie.resetValidation(),oe.open()})),oe.setEventListeners();var ie=new a(z,H);ie.enableValidation();var ue=new q("#popup-confirmation",M);ue.setEventListeners()})();