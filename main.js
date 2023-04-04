(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._templateSelector=r,this._handleCardClick=n}var r,n;return r=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__item"),this._likeButton=this._element.querySelector(".element__button"),this._cardDeleteBtn=this._element.querySelector(".element__button-cancel"),this._setEventListeners(),this._cardImage.src=this._link,this._element.querySelector(".element__title").textContent=this._name,this._cardImage.alt=this._name,this._element}},{key:"_removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleBtnLike",value:function(){this._likeButton.classList.toggle("element__button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this._likeButton.addEventListener("click",(function(){e._handleBtnLike()})),this._cardDeleteBtn.addEventListener("click",(function(){e._removeCard()}))}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function i(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}var a=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_outputInputError",(function(e,t){var r=n._popupFormElement.querySelector("#".concat(e.id," + .").concat(n._inputErrorClass));e.classList.add(n._errorClass),r.textContent=t,r.classList.add(n._errorClassActive)})),i(this,"_deletionInputError",(function(e){var t=n._popupFormElement.querySelector("#".concat(e.id," + .").concat(n._inputErrorClass));e.classList.remove(n._errorClass),t.classList.remove(n._errorClassActive),t.textContent=""})),i(this,"_checkInputValidity",(function(e){e.validity.valid?n._deletionInputError(e):n._outputInputError(e,e.validationMessage)})),i(this,"_toggleFormSubmit",(function(){n._hasInvalidInput()?n._buttonElement.setAttribute("disabled","disabled"):n._buttonElement.removeAttribute("disabled")})),i(this,"_addEventListeners",(function(){n._toggleFormSubmit(),n._inputsList.forEach((function(e){e.addEventListener("input",(function(){n._checkInputValidity(e),n._toggleFormSubmit()}))}))})),i(this,"enableValidation",(function(){n._addEventListeners(n._popupFormElement)})),this._popupFormElement=r,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._errorClassActive=t.errorClassActive,this._inputsList=Array.from(this._popupFormElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._popupFormElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_hasInvalidInput",value:function(){return this._inputsList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._toggleFormSubmit(),this._inputsList.forEach((function(t){e._deletionInputError(t)}))}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var s=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=n,this._renderer=o,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSet=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popupSet.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSet.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSet.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__cancel")&&e.close()}))}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},v.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(n);if(o){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._popupForm=r._popupSet.querySelector(".popup__form"),r._popupInput=r._popupForm.querySelectorAll(".popup__input"),r._handleFormSubmit=t,r}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._popupInput.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;v(b(u.prototype),"setEventListeners",this).call(this),this._popupSet.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"setInputValues",value:function(e){this._popupInput.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){v(b(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===S(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},E.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(o){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImgElement=t._popupSet.querySelector(".popup__photos"),t._popupImgSignatureElement=t._popupSet.querySelector(".popup__signature"),t}return t=u,(r=[{key:"open",value:function(e,t){E(w(u.prototype),"open",this).call(this),this._popupImgSignatureElement.textContent=e,this._popupImgElement.src=t,this._popupImgElement.alt=e}}])&&g(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}var C=function(){function e(t){var r=t.profilName,n=t.profilProfession,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profilNameElement=document.querySelector(r),this._profilProfessionElement=document.querySelector(n),this._profileAvatarElement=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{userName:this._profilNameElement.textContent,userInformation:this._profilProfessionElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,r=e.information,n=e.avatar;this._profilNameElement.textContent=t,this._profilProfessionElement.textContent=r,this._profileAvatarElement.src=n}},{key:"setUserAvatar",value:function(e){var t=e.newAvatar;this._profileAvatarElement.src=t}}])&&O(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}var T=function(){function e(t){var r=t.url,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=r,this._headers=n}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"changeUserInfo",value:function(e){return fetch(url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"addNewCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"removeCard",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"addCardLike",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"deleteCardLike",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"changeProfileAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}}])&&L(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),q=document.querySelector(".profile__button-edit"),A=document.forms.profile,R=document.querySelector(".popup__input_type_name"),V=document.querySelector(".popup__input_type_professia"),B=document.querySelector(".profile__button-add"),F=document.forms.cards,N=document.querySelector(".profile__button"),D=document.forms.avatar,U={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inputErrorClass:"popup__input-error",errorClass:"popup__input_type_invalid",errorClassActive:"popup__input-error_active"},J=new T({url:"https://mesto.nomoreparties.co/v1/cohort-63",headers:{authorization:"7bb725b6-9812-4e2e-8c19-020be604de1f","Content-Type":"application/json"}});J.getInitialCards().then((function(e){e.map((function(e){return e.name,e.link}))}));var z=[x()];console.log(z);var H=function(e){return new r(e,".elements__cards",M).generateCard()};function M(e,t){Z.open(t,e)}var G=new s({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){G.addItem(H(e))}},".elements");G.renderItems();var K=new a(U,F);K.enableValidation();var Q=new a(U,A);Q.enableValidation();var W=new C({profilName:".profile__name",profilProfession:".profile__profession",profileAvatar:".profile__avatar"}),X=new _("#popup-profil",(function(e){W.setUserInfo(e),X.close()}));q.addEventListener("click",(function(){var e=W.getUserInfo();R.value=e.userName,V.value=e.userInformation,X.open(),Q.resetValidation()})),X.setEventListeners();var Y=new _("#popup-card",(function(e){H({name:e.name,link:e.link}),G.addItem(H(e)),Y.close()}));B.addEventListener("click",(function(){K.resetValidation(),Y.open()})),Y.setEventListeners();var Z=new j("#popup-foto");Z.setEventListeners();var $=new _("#popup-avatar",(function(e){J.changeProfileAvatar({avatar:e.link}).then((function(e){W.setUserAvatar({newAvatar:e.avatar}),$.close()})).catch((function(e){console.error(e)}))}));N.addEventListener("click",(function(){ee.resetValidation(),$.open()})),$.setEventListeners();var ee=new a(U,D);ee.enableValidation()})();