export const popupProfileBtnOpened = document.querySelector('.profile__button-edit');

export const popupProfilForm = document.forms['profile'];

export const popupCardsBtnOpened = document.querySelector('.profile__button-add');

export const popupCardsForm = document.forms['cards'];

export const popupProfileAvatarBtnOpened = document.querySelector('.profile__button');

export const popupAvatarForm = document.forms['avatar'];

export const popupConfirmationForm = document.forms['confirmation'];

//Массив карточек
export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//Объект для валидации
export const enableValidationForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input_type_invalid',
  errorClassActive: 'popup__input-error_active',
};