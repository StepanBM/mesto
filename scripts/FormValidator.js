export default class FormValidator {
    constructor(obj, popupFormElement) {
      this._popupFormElement = popupFormElement;

        //this._formSelector = obj.formSelector;
        this._inputSelector = obj.inputSelector;
        this._submitButtonSelector = obj.submitButtonSelector;
        this._inputErrorClass = obj.inputErrorClass;
        this._errorClass = obj.errorClass;
        this._errorClassActive = obj.errorClassActive;

        //Массив инпутов всех попапов
        this._inputData = Array.from(this._popupFormElement.querySelectorAll(this._inputSelector));
        //Кнопка отправки данных submit
        this._buttonElement = this._popupFormElement.querySelector(this._submitButtonSelector);
    }
    //Вывод сообщений об ошибке
    _outputInputError = (inputElement, errorMessage) => {
      //Текст ошибки
      const errorElement = this._popupFormElement.querySelector(`#${inputElement.id} + .${this._inputErrorClass}`);
      //Красная линия в инпуте
      inputElement.classList.add(this.errorClass);
      //Вставим в span текст ошибки
      errorElement.textContent = errorMessage;
      //Вывод ошибки на экран
      errorElement.classList.add(this._errorClassActive);
    }

    //Удаление текста с ошибкой
    _deletionInputError = (inputElement) => {
      const errorElement = this._popupFormElement.querySelector(`#${inputElement.id} + .${this._inputErrorClass}`);
      inputElement.classList.remove(this.errorClass);
      errorElement.classList.remove(this._errorClassActive);
      errorElement.textContent = '';
    }

    //Проверка на валидность (корректность введенных данных)
    _checkInputValidity = (inputElement) => {
      if (!inputElement.validity.valid) {
        this._outputInputError(inputElement, inputElement.validationMessage);
      } else {
        this._deletionInputError(inputElement);
      }
    }

    //Обходит массив полей и проверяет валидацию
    _hasInvalidInput() {
      return this._inputData.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }

    //Блокировка и разблокировка кнопки
    _toggleFormSubmit = () => {
      if (this._hasInvalidInput()) {
        this._buttonElement.setAttribute('disabled', 'disabled');
      } else {
        this._buttonElement.removeAttribute('disabled');
      }
    }

    //Добавление слушателя всем полям
    _addEventListeners = () => {
      //Проверка состояния кнопки в самом начале
      this._toggleFormSubmit();
    
      this._inputData.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {

          this._checkInputValidity(inputElement);
          //Проверка состояния кнопки при изменении любого из полей
          this._toggleFormSubmit();
        });
      });
    }

    //Выполнение валидации (всех методов класса: FormValidator)
    enableValidation = () => {
      this._addEventListeners(this._popupFormElement);
    };
}