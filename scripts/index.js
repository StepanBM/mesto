import Card from './Card.js';
import FormValidator from './FormValidator.js';

const page = document.querySelector('.page');
const profileName = page.querySelector('.profile__name');
const profilProfession = page.querySelector('.profile__profession');

const popupProfileBtnOpened = document.querySelector('.profile__button-edit');

const popupProfileElement = document.querySelector('#popup-profil');
const popupProfilForm = document.forms['profile'];
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputProfession = document.querySelector('.popup__input_type_professia');

const popupCardsBtnOpened = document.querySelector('.profile__button-add');

const popupCardsElement = document.querySelector('#popup-card');
const popupCardsForm = document.forms['cards'];
const popupInputTitle = document.querySelector('.popup__input_type_title');
const popupInputLink = document.querySelector('.popup__input_type_link');

const cardsBlock = document.querySelector('.elements');
const cardsTempl = document.querySelector('.elements__cards').content;

const popupFotoElement = document.querySelector('#popup-foto');
const popupFotoImages = popupFotoElement.querySelector('.popup__images');
const popupFotophotos = popupFotoImages.querySelector('.popup__photos');
const popupFotoSignature = popupFotoImages.querySelector('.popup__signature');

//Условие открытия popup для редеактирования профиля
popupProfileBtnOpened.addEventListener('click', function () {
  openPopup(popupProfileElement);

  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profilProfession.textContent;

  formValidatorProfil.resetValidation();
});

//Условие открытия popup для вставки новых карточек
popupCardsBtnOpened.addEventListener('click', function () {
  openPopup(popupCardsElement);

  popupCardsForm.reset();

  formValidatorCard.resetValidation();
});

//Открытие popup-ов
function openPopup(element) {
  element.classList.add('popup_opened');
  //Навешиваем обработчик событий
  document.addEventListener('keydown', closeByEscape);
}

//Закрытие popup
function closePopup(element) {
  element.classList.remove('popup_opened');
  //Убираем обработчик событий
  document.removeEventListener('keydown', closeByEscape);
}

//Находим все попапы
const popups = document.querySelectorAll('.popup')
//Пробегаемся по ним
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    //Проверка, нажат ли крестик или нет
    if (evt.target.classList.contains('popup__cancel')) {
      closePopup(popup)
    }
  })
})

//Закрытие попапов при нажатии на "Escape"
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    //Находим открытый попап
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//Внесение изменений в popup для редеактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = `${popupInputName.value}`;
  profilProfession.textContent = `${popupInputProfession.value}`;

  closePopup(popupProfileElement);
}
popupProfilForm.addEventListener('submit', handleProfileFormSubmit);

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

const createNewCard = (item) => {
  const card = new Card(item, '.elements__cards', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
};

//Создание новой карточки
popupCardsForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newCard = createNewCard({
    name: popupInputTitle.value,
    link: popupInputLink.value,
  });
  cardsBlock.prepend(newCard);

  closePopup(popupCardsElement);
});

//Вывод изначального массива карточек
initialCards.forEach((item) => {
  //Добавляем в DOM
  cardsBlock.append(createNewCard(item));
});

//Функция для открытия попапа (увеличение картинки)
function handleCardClick(link, name) {
  popupFotophotos.src = link;
  popupFotoSignature.textContent = name;
  popupFotophotos.alt = name;
  openPopup(popupFotoElement);
}

//Объект для валидации
const enableValidationForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input_type_invalid',
  errorClassActive: 'popup__input-error_active',
};

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
