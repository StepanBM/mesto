import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';

const popupProfileBtnOpened = document.querySelector('.profile__button-edit');

const popupProfilForm = document.forms['profile'];
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputProfession = document.querySelector('.popup__input_type_professia');

const popupCardsBtnOpened = document.querySelector('.profile__button-add');

const popupCardsForm = document.forms['cards'];

const popupProfileAvatarBtnOpened = document.querySelector('.profile__button');

const popupAvatarForm = document.forms['avatar'];

const popupBtnSave = document.querySelector('.popup__submit');

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

const renderLoading = (isLoading) => {
  if(isLoading){
    popupBtnSave.textContent = 'Сохранение...';
  } else
  popupBtnSave.textContent = 'Сохранить';
}

//Подключение API
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: '7bb725b6-9812-4e2e-8c19-020be604de1f',
    'Content-Type': 'application/json'
  }
});

let userId = null;

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([user, cards]) => {
  userId = user._id;
  userInfo.setUserInfo(user);
  section.renderItems(cards)
}).catch((err) => {
  console.error(err);
});

//Вставка новых карточек
const createNewCard = (data) => {
  const card = new Card({data, templateSelector: '.elements__cards', userId, handleCardClick, 
  handleRemoveBtn: (evt) =>{
    const cardElement = evt.target.closest('.element');
    popupWithConfirmation.open();
    popupWithConfirmation.handleFuncSubmit(() => {
      api.removeCard(data._id).then(() => {
        cardElement.remove();
        popupWithConfirmation.close();
      }).catch((err) => {
        console.error(err);
      })
    })
  },
  addCardLike: () => {
    api.addCardLike(data._id).then((res) => {
      card.addLike();
      card.countingLike(res.likes);
    }).catch((err) => {
      console.error(err);
    })
  },
  deleteCardLike: () => {
    api.deleteCardLike(data._id).then((res) => {
      card.deleteLike();
      card.countingLike(res.likes);
    }).catch((err) => {
      console.error(err);
    })
  }
});
  const cardElement = card.generateCard();

  return cardElement;
};

//Функция для открытия попапа (увеличение картинки)
function handleCardClick(link, name) {
  popupWithImage.open(name, link);
}

//Отрисовка карточек на странице
const section = new Section({
  //Функция для создания и отрисовку карточек
  renderer: (item) => {
    //Отрисовка новых карточек
    section.addItem(createNewCard(item));
  },
}, '.elements')

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
const userInfo = new UserInfo({profilName: '.profile__name', profilProfession: '.profile__profession', profileAvatar: '.profile__avatar'});
//Форма для редактирования профиля
const popupWithFormProfil = new PopupWithForm('#popup-profil', submitPopupProfil)

//Функция с данными для редактирования профиля
function submitPopupProfil(data) {
  renderLoading(true);
  api.changeUserInfo(data).then((res) => {
  userInfo.setUserInfo(res)
  popupWithFormProfil.close()
}).catch((err) => {
  console.error(err);
}).finally(() => {
  renderLoading(false)
})
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
  renderLoading(true);
  api.addNewCard({
    name: formObj.name, 
    link: formObj.link
  })
  .then((res) => {
      //Вставка новых карт в начало
  section.addItem(createNewCard(res));
  //Закрытие попапа после добавления карты
  popupWithFormCard.close();
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    renderLoading(false)
  });
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

//Отправка данных для смены аватарки
const popupWithFormAvatar = new PopupWithForm('#popup-avatar', submitPopupAvatar);
 function submitPopupAvatar(data) {
  renderLoading(true);
  api.changeProfileAvatar(data).then((res) => {
    userInfo.setUserInfo(res);
    popupWithFormAvatar.close();
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    renderLoading(false)
  })
 }

//Открытие попапа при нажатии на кнопку
popupProfileAvatarBtnOpened.addEventListener('click', () => {
  //Проверка на валидность формы
  formValidatorAvatar.resetValidation();
  popupWithFormAvatar.open();
})
//Вызов метода для отправки формы (для аватарки)
popupWithFormAvatar.setEventListeners();

//Валидация попапа для смены аватарки
const formValidatorAvatar = new FormValidator(
  enableValidationForm,
  popupAvatarForm
);
formValidatorAvatar.enableValidation();

const popupConfirmationForm = document.forms['confirmation'];

const popupWithConfirmation = new PopupWithConfirmation('#popup-confirmation', popupConfirmationForm)
popupWithConfirmation.setEventListeners()



   