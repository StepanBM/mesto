const popupFotoElement = document.querySelector('#popup-foto');
const popupFotophotos = popupFotoElement.querySelector('.popup__photos');
const popupFotoSignature = popupFotoElement.querySelector('.popup__signature');
const closeButtons = document.querySelector('.popup__cancel');

export default class Card {
    constructor(objCard, templateSelector) {

      this._name = objCard.name;
      this._link = objCard.link;

      this._templateSelector = templateSelector;
    }

    //Получаем разметку template 
    _getTemplate() {
      const templateElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

      return templateElement;
    }

    //Вставляем данные в разметку (массив карточек)
    generateCard() {
      this._element = this._getTemplate();

      //Вызов метода со всеми событиями (клик)
      this._setEventListeners();

      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__item').src = this._link;

      //Возвращаем элементы всех карточек
      return this._element;
    }

    //Открытие попапа с увеличенной картонкой и подписью к ней
    _handleOpenPopup() {
      popupFotophotos.src = this._link;
      popupFotoSignature.textContent = this._name;
      popupFotoElement.classList.add('popup_opened');
    }

    //Закрытие попапа с увеличенной картонкой и подписью к ней нажатием на крестик
    _handleClosePopup() {
      popupFotoElement.src = '';
      popupFotoElement.classList.remove('popup_opened');
    }

    //Метод в котором хранятся все обработчики событий
    _setEventListeners() {
      //Клик по картинки для увеличения
      this._element.querySelector('.element__item').addEventListener('click', () => {
      this._handleOpenPopup();
      });
      
      //Клик на крестик для закрытия
      closeButtons.addEventListener('click', () => {
      this._handleClosePopup();
      });
    }
}

