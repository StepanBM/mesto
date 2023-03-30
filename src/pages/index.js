import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const popupProfileBtnOpened = document.querySelector('.profile__button-edit');

const popupProfilForm = document.forms['profile'];
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputProfession = document.querySelector('.popup__input_type_professia');

const popupCardsBtnOpened = document.querySelector('.profile__button-add');

const popupCardsForm = document.forms['cards'];

//Массив карточек
const initialCards = [
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
const enableValidationForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input_type_invalid',
  errorClassActive: 'popup__input-error_active',
};

//Вставка новых карточек
const createNewCard = (item) => {
  const card = new Card(item, '.elements__cards', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
};

//Функция для открытия попапа (увеличение картинки)
function handleCardClick(link, name) {
  popupWithImage.open(name, link);
}

//Отрисовка карточек на странице
const section = new Section({
  //Изначальный массив карточек
  items: initialCards,
  //Функция для создания и отрисовку карточек
  renderer: (item) => {
    //Отрисовка новых карточек
    section.addItem(createNewCard(item));
  },
}, '.elements')
//Вызов метода для отрисовки массива карточек
section.renderItems()

//Валидация попапа для добавления карточки
const formValidatorCard = new FormValidator(
  enableValidationForm,
  popupCardsForm
);
formValidatorCard.enableValidation();

//Валидация попапа для изменения профиля
const formValidatorProfil = new FormValidator(
  enableValidationForm,
  popupProfilForm
);
formValidatorProfil.enableValidation();

//Подстановка данных для редектирования профиля
const userInfo = new UserInfo({profilName: '.profile__name', profilProfession: '.profile__profession'});
//Форма для редактирования профиля
const popupWithFormProfil = new PopupWithForm('#popup-profil', submitPopupProfil)

//Функция с данными для редактирования профиля
function submitPopupProfil(formObj) {
  userInfo.setUserInfo(formObj)
  popupWithFormProfil.close()
}

//Функция открытия попапа для редактирования профиля
popupProfileBtnOpened.addEventListener('click', () => {
  const userInfoInput = userInfo.getUserInfo();
  popupInputName.value = userInfoInput.userName;
  popupInputProfession.value = userInfoInput.userInformation;
  popupWithFormProfil.open();
  formValidatorProfil.resetValidation();
})
//Вызов метода для отправки формы (для профиля)
popupWithFormProfil.setEventListeners();

//Отправка данных добавления карт
const popupWithFormCard = new PopupWithForm('#popup-card', submitPopupCard);

//Функция с данными карты для вставки
function submitPopupCard(formObj) {
  const newCard = createNewCard({
    name: formObj.name, 
    link: formObj.link
  });
  //Вставка новых карт в начало
  section.addItem(createNewCard(formObj));
  //Закрытие попапа после добавления карты
  popupWithFormCard.close();
}

//Открытие попапа при нажатии на кнопку
popupCardsBtnOpened.addEventListener('click', () => {
  //Проверка на валидность формы
  formValidatorCard.resetValidation();
  popupWithFormCard.open();
})
//Вызов метода для отправки формы (для карточки)
popupWithFormCard.setEventListeners();

//Увеличение картинки
const popupWithImage = new PopupWithImage('#popup-foto');
popupWithImage.setEventListeners();