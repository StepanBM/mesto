const popupProfileBtnOpened=document.querySelector('.profile__button-edit');
const popupProfileElement=document.querySelector('#popup-profil');
const popupProfileBtnClose=document.querySelector('.popup__cancel_type_profile');
const popupProfileBtnSave=document.querySelector('.popup__submit_type_save');

const page = document.querySelector('.page');
const profileName = page.querySelector('.profile__name');
const profilProfessia = page.querySelector('.profile__profession');

const popupInputName=document.querySelector('.popup__input_type_name');
const popupInputProfessia=document.querySelector('.popup__input_type_professia');
const popupProfilForm=document.querySelector('.popup__form_type_profile');
const popupCardsBtnOpened=document.querySelector('.profile__button-add');

const popupCardsElement=document.querySelector('#popup-card');
const popupCardsClose=document.querySelector('.popup__cancel_type_cards');
const popupProfileBtnCreate=document.querySelector('.popup__submit_type_create');

const cardsBlock = document.querySelector('.elements');
const cardsTempl = document.querySelector('.elements__cards').content;
const cardsElement = cardsTempl.querySelector('.element');

const popupInputTitle = document.querySelector('.popup__input_type_title');
const popupInputLink = document.querySelector('.popup__input_type_link');
const popupCardsForm=document.querySelector('.popup__form_type_cards');

const popupFotoElement = document.querySelector('#popup-foto');
const popupFotoImages = popupFotoElement.querySelector('.popup__images');
const popupFotoBtnClose = popupFotoElement.querySelector('.popup__cancel_type_foto');
const popupFotophotos = popupFotoImages.querySelector('.popup__photos');
const popupFotoSignature = popupFotoImages.querySelector('.popup__signature');

//Открытие popup для редеактирования профиля
popupProfileBtnOpened.addEventListener('click', openPopup);
//Открытие popup для вставки новых карточек
popupCardsBtnOpened.addEventListener('click', openPopup);

//Открытие popup
function openPopup(evt) {
    if (evt.target === popupProfileBtnOpened) {
    popupProfileElement.classList.add('popup_opened');
    popupInputName.value = profileName.textContent;
    popupInputProfessia.value = profilProfessia.textContent;
    } else if (evt.target === popupCardsBtnOpened) {
        popupCardsElement.classList.add('popup_opened');
        popupInputTitle.value = '';
        popupInputLink.value = '';

    } else {
        popupFotoElement.classList.add('popup_opened');
    }
}

//Закрытие popup для редеактирования профиля
popupProfileBtnClose.addEventListener('click', closePopup);
popupProfileBtnSave.addEventListener('click', closePopup);

//Закрытие popup для вставки новых карточек
popupProfileBtnCreate.addEventListener('click', closePopup);
popupCardsClose.addEventListener('click', closePopup);

//Закрытие popup с увелечинным изображением и подписью к ней
popupFotoBtnClose.addEventListener('click', closePopup);

//Закрытие popup
function closePopup(evt) {
    if (evt.target === popupProfileBtnClose || evt.target === popupProfileBtnSave) {
    popupProfileElement.classList.remove('popup_opened');
    } else if (evt.target === popupCardsClose || evt.target === popupProfileBtnCreate) {
        popupCardsElement.classList.remove('popup_opened');
    } else (evt.target === popupFotoBtnClose); {
        popupFotoElement.classList.remove('popup_opened');
    }
}

//Внесение изменений в popup для редеактирования профиля
function createNewName(evt) {
    evt.preventDefault();
    profileName.textContent=`${popupInputName.value}`;
    profilProfessia.textContent=`${popupInputProfessia.value}`;
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

    const card = decorationCard(item);

    cardsBlock.append(card);
  })

//Добавление новых карточек на сайт
  function createNewCard(evt) {
    evt.preventDefault();

    const card = decorationCard({name: popupInputTitle.value, link: popupInputLink.value});

    cardsBlock.prepend(card);
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
//Условие для вызова popup для увелечинным изображением и подписью к ней
     card.querySelector('.element__item').addEventListener('click', openPopup);

//Вставка изображения и подписи к нему (увеличение фотографий)
     card.querySelector('.element__item').addEventListener('click', () => {

        popupFotophotos.src=item.link;
        popupFotoSignature.textContent=item.name;
        popupFotophotos.alt=item.name;

        popupFotoElement.append(popupFotoImages);
     });

    return card;
}