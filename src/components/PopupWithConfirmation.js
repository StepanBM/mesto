import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
    constructor(popupElement, popupConfirmation){
    super(popupElement);
    
    this._popupFormElement = popupConfirmation;
  }

  handleFuncSubmit(func) {
    this._handleSubmit = func;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupFormElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleSubmit();
      
    });
  }


}