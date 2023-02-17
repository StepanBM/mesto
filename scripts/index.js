const page = document.querySelector('.page');
const profileName = page.querySelector('.profile__name');
const profilProfessia = page.querySelector('.profile__profession');

const popupProfileBtnOpened=document.querySelector('.profile__button-edit');

const popupProfileElement=document.querySelector('#popup-profil');
const popupProfilForm=document.querySelector('.popup__form_type_profile');
const popupInputName=document.querySelector('.popup__input_type_name');
const popupInputProfessia=document.querySelector('.popup__input_type_professia');

const popupCardsBtnOpened=document.querySelector('.profile__button-add');

const popupCardsElement=document.querySelector('#popup-card');
const popupCardsForm=document.querySelector('.popup__form_type_cards');
const popupInputTitle = document.querySelector('.popup__input_type_title');
const popupInputLink = document.querySelector('.popup__input_type_link');

const cardsBlock = document.querySelector('.elements');
const cardsTempl = document.querySelector('.elements__cards').content;
const cardsElement = cardsTempl.querySelector('.element');

const popupFotoElement = document.querySelector('#popup-foto');
const popupFotoImages = popupFotoElement.querySelector('.popup__images');
const popupFotophotos = popupFotoImages.querySelector('.popup__photos');
const popupFotoSignature = popupFotoImages.querySelector('.popup__signature');

//Условие открытия popup для редеактирования профиля
popupProfileBtnOpened.addEventListener('click', function() {
  openPopup(popupProfileElement);

  popupInputName.value = profileName.textContent;
  popupInputProfessia.value = profilProfessia.textContent;

  popupProfilForm.submit.removeAttribute('disabled');
});

//Условие открытия popup для вставки новых карточек
popupCardsBtnOpened.addEventListener('click', function() {
  openPopup(popupCardsElement);

  popupCardsForm.reset();

  popupCardsForm.submit.setAttribute('disabled', 'disabled');
});

//Открытие popup-ов
function openPopup(element) {
  element.classList.add('popup_opened');
  //Навешиваем обработчик событий
  document.addEventListener('keydown', closeByEscape);
}

// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__cancel');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => 
  closePopup(popup)
  );
});

//Закрытие popup
function closePopup(element) {
  element.classList.remove('popup_opened');
  //Убираем обработчик событий
  document.removeEventListener('keydown', closeByEscape);
}

popupFotoElement.addEventListener('mousedown', closePopupClick);
popupCardsElement.addEventListener('mousedown', closePopupClick);
popupProfileElement.addEventListener('mousedown', closePopupClick);

//Закрытие попапов по щелчку за его границей
function closePopupClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

//Закрытие попапов при нажатии на "Escape"
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    //Находим открытый попап
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

//Внесение изменений в popup для редеактирования профиля
function createNewName(evt) {
    evt.preventDefault();
    profileName.textContent=`${popupInputName.value}`;
    profilProfessia.textContent=`${popupInputProfessia.value}`;

    closePopup(popupProfileElement);
}
popupProfilForm.addEventListener('submit', createNewName);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

//Вставка изначального массива карточек
  initialCards.forEach(function (item) {

    const cardArray = decorationCard(item);

    cardsBlock.append(cardArray);
  })

//Добавление новых карточек на сайт
  function createNewCard(evt) {
    evt.preventDefault();

    const cardNew = decorationCard({name: popupInputTitle.value, link: popupInputLink.value});

    cardsBlock.prepend(cardNew);

    closePopup(popupCardsElement);
}
popupCardsForm.addEventListener('submit', createNewCard)

//Непосредственно всё что касается действий с карточкой (создание, клики по ней,...)
function decorationCard(item) {
    const card = cardsElement.cloneNode(true);
    card.querySelector('.element__item').src = item.link;
    card.querySelector('.element__title').textContent = item.name;
    card.querySelector('.element__item').alt = item.name;
 //Удаление карточки
    card.querySelector('.element__button-cancel').addEventListener('click', () => {
        card.remove();
     })
 //Выставление лайка
     card.querySelector('.element__button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__button_active');
     });
 //Условие для вызова popup и вставка изображения и подписи к нему (увеличение фотографий)
     card.querySelector('.element__item').addEventListener('click', function () {
      popupFotophotos.src=item.link;
      popupFotoSignature.textContent=item.name;
      popupFotophotos.alt=item.name;

      openPopup(popupFotoElement);
    });

    return card;
}