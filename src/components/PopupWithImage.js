import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupElement){
    super(popupElement);
    //Картинка для увеличения
    this._popupImgElement = this._popupSet.querySelector('.popup__photos');
    //Подпись к ней
    this._popupImgSignatureElement = this._popupSet.querySelector('.popup__signature');
  }

  //Подстановка ссылки и подписи
  open(name, link) {
    super.open();
    this._popupImgSignatureElement.textContent = name;
    this._popupImgElement.src = link;
    this._popupImgElement.alt = name;

    
  }
}