export default class FormValidator {
  constructor(objValid, popupFormElement) {
    this._popupFormElement = popupFormElement;

    //this._formSelector = objValid.formSelector;
    this._inputSelector = objValid.inputSelector;
    this._submitButtonSelector = objValid.submitButtonSelector;
    this._inputErrorClass = objValid.inputErrorClass;
    this._errorClass = objValid.errorClass;
    this._errorClassActive = objValid.errorClassActive;

    //Список инпутов всех попапов
    this._inputsList = Array.from(
      this._popupFormElement.querySelectorAll(this._inputSelector)
    );
    //Кнопка отправки данных submit
    this._buttonElement = this._popupFormElement.querySelector(
      this._submitButtonSelector
    );
  }
  //Вывод сообщений об ошибке
  _outputInputError = (inputElement, errorMessage) => {
    //Текст ошибки
    const errorElement = this._popupFormElement.querySelector(
      `#${inputElement.id} + .${this._inputErrorClass}`
    );
    //Красная линия в инпуте
    inputElement.classList.add(this._errorClass);
    //Вставим в span текст ошибки
    errorElement.textContent = errorMessage;
    //Вывод ошибки на экран
    errorElement.classList.add(this._errorClassActive);
  };

  //Удаление текста с ошибкой
  _deletionInputError = (inputElement) => {
    const errorElement = this._popupFormElement.querySelector(
      `#${inputElement.id} + .${this._inputErrorClass}`
    );
    inputElement.classList.remove(this._errorClass);
    errorElement.classList.remove(this._errorClassActive);
    errorElement.textContent = "";
  };

  //Проверка на валидность (корректность введенных данных)
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._outputInputError(inputElement, inputElement.validationMessage);
    } else {
      this._deletionInputError(inputElement);
    }
  };

  //Обходит массив полей и проверяет валидацию
  _hasInvalidInput() {
    return this._inputsList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  resetValidation() {
    this._toggleFormSubmit();
    this._inputsList.forEach((inputElement) => {
      this._deletionInputError(inputElement)
    });
  }

  //Блокировка и разблокировка кнопки
  _toggleFormSubmit = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.removeAttribute('disabled');
    }
  };

  //Добавление слушателя всем полям
  _addEventListeners = () => {
    //Проверка состояния кнопки в самом начале
    this._toggleFormSubmit();

    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        //Проверка состояния кнопки при изменении любого из полей
        this._toggleFormSubmit();
      });
    });
  };

  //Выполнение валидации (всех методов класса: FormValidator)
  enableValidation = () => {
    this._addEventListeners(this._popupFormElement);
  };
}
