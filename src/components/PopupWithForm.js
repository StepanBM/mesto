import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupElement, handleFormSubmit) {
      super(popupElement);
      //2 формы попапов
      this._popupForm = this._popupSet.querySelector('.popup__form');
      //Все инпуты двух попапов
      this._popupInput = this._popupForm.querySelectorAll('.popup__input');
      //Функции с данными для отправки
      this._handleFormSubmit = handleFormSubmit;
    }

    //Метод собирает данные всех полей
    getInputValues() {
      this._formValues = {};
      this._popupInput.forEach(input => {
        this._formValues[input.name] = input.value});
      return this._formValues;
    }

    //Метод для отпраки формы
    setEventListeners() {
      super.setEventListeners();
      this._popupSet.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this.getInputValues());
      });
    }

   //Закрытие
    close() {
      super.close();
      this._popupForm.reset();
    }
}