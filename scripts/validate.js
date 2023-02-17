const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input_type_invalid',
    errorClassActive: 'popup__input-error_active'
  };

//Функция выводит ошибки
const outputInputError = (formElement, inputElement, errorMessage, obj) => {
    const errorElement = formElement.querySelector(`#${inputElement.id} + .${obj.inputErrorClass}`);
    inputElement.classList.add(obj.errorClass);
    // Заменим содержимое span с ошибкой на переданный параметр
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClassActive);
  };
  
  //Функция удаляет ошибки
  const deletionInputError = (formElement, inputElement, obj) => {
    const errorElement = formElement.querySelector(`#${inputElement.id} + .${obj.inputErrorClass}`);
    inputElement.classList.remove(obj.errorClass);
    errorElement.classList.remove(obj.errorClassActive);
    errorElement.textContent = '';
  };
  
  //Проверка на валидность (корректность введенных данных)
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        outputInputError(formElement, inputElement, inputElement.validationMessage, enableValidation);
    } else {
        deletionInputError(formElement, inputElement, enableValidation);
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
  const addEventListeners = (formElement, obj) => {
    const inputData = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);

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
  const enableValidationForm = (obj) => {
    const inputData = Array.from(document.querySelectorAll(obj.formSelector));
    inputData.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      addEventListeners(formElement, enableValidation);
    });
  };
  enableValidationForm(enableValidation);