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
      this._popupBtnSave = this._popupSet.querySelector('.popup__submit');
    }

    renderLoading(isLoading, buttonText='Сохранить') {
      if(isLoading){
        this._popupBtnSave.textContent = 'Сохранение...';
      } else
      this._popupBtnSave.textContent = buttonText;
    }

    //Метод собирает данные всех полей
    _getInputValues() {
      this._formValues = {};
      this._popupInput.forEach((input) => {
        this._formValues[input.name] = input.value});
      return this._formValues;
    }

    setInputValues(data) {
      this._popupInput.forEach((input) => {
        // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
        input.value = data[input.name];
      });
    }

    //Метод для отпраки формы
    setEventListeners() {
      super.setEventListeners();
      this._popupSet.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
    }

   //Закрытие
    close() {
      super.close();
      this._popupForm.reset();
    }
}