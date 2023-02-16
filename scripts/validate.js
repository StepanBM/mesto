const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inputErrorClass: '`#${inputElement.id} + .popup__input-error`',
    errorClass: '.popup__input_type_invalid',
    errorClassActive: '.popup__input-error_active'
  };

//Функция выводит ошибки
const outputInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass, errorClassActive) => {
    const errorElement = formElement.querySelector(inputErrorClass);
    inputElement.classList.add(errorClass);
    // Заменим содержимое span с ошибкой на переданный параметр
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClassActive);
  };
  
  //Функция удаляет ошибки
  const deletionInputError = (formElement, inputElement, inputErrorClass, errorClass, errorClassActive) => {
    const errorElement = formElement.querySelector(inputErrorClass);
    inputElement.classList.remove(errorClass);
    errorElement.classList.remove(errorClassActive);
    errorElement.textContent = '';
  };
  
  //Проверка на валидность (корректность введенных данных)
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        outputInputError(formElement, inputElement, inputElement.validationMessage, `#${inputElement.id} + .popup__input-error`, '.popup__input_type_invalid', 'popup__input-error_active');
    } else {
        deletionInputError(formElement, inputElement, `#${inputElement.id} + .popup__input-error`, '.popup__input_type_invalid', 'popup__input-error_active');
    }
  };

  //Обходит массив полей и проверяет валидацию
  function hasInvalidInput(inputData) {
    return inputData.some((inputElement) => {
    return !inputElement.validity.valid;
  });
  }

//Блокировка и разблокировка кнопки
const toggleFormSubmit = (inputData, buttonElement) => {
    if (hasInvalidInput(inputData)) {
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.removeAttribute('disabled');
    }
  };
  //Добавление слушателя всем полям
  const addEventListeners = (formElement, inputSelector, submitButtonSelector) => {
    const inputData = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

      //Проверка состояния кнопки в самом начале
      toggleFormSubmit(inputData, buttonElement);

      inputData.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
         //Проверка состояния кнопки при изменении любого из полей
         toggleFormSubmit(inputData, buttonElement);
      });
    });
  };
  //Нахождение всех форм на странице
  const enableValidationForm = (formSelector) => {
    const inputData = Array.from(document.querySelectorAll(formSelector));
    inputData.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      addEventListeners(formElement, '.popup__input', '.popup__submit');
    });
  };
  enableValidationForm('.popup__form');