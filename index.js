let popupProfileBtnOpened=document.querySelector('.profile__button-edit');
let popupProfileElement=document.querySelector('#popup-profil');
let popupProfileBtnClose=document.querySelector('.popup__cancel_type_profile');

popupProfileBtnOpened.addEventListener('click', openProfilPopup);
popupProfileBtnClose.addEventListener('click', closeProfilPopup);

let page = document.querySelector('.page');
let profileName = page.querySelector('.profile__name');
let profilProfessia = page.querySelector('.profile__profession');

let popupInputName=document.querySelector('.popup__input_type_name');
let popupInputProfessia=document.querySelector('.popup__input_type_professia');
let popupProfilForm=document.querySelector('.popup__form_type_profile');

//Открытие popup для редеактирования профиля
function openProfilPopup() {
    popupProfileElement.classList.add('popup_opened');
    popupInputName.value=profileName.textContent;
    popupInputProfessia.value=profilProfessia.textContent;
}

//Закрытие popup для редеактирования профиля
function closeProfilPopup() {
    popupProfileElement.classList.remove('popup_opened');
}

//Внесение изменений в popup для редеактирования профиля
function newName(evt) {
    evt.preventDefault();
    profileName.textContent=`${popupInputName.value}`;
    profilProfessia.textContent=`${popupInputProfessia.value}`;
    
    closeProfilPopup();
}

popupProfilForm.addEventListener('submit', newName);


let popupCardsBtnOpened=document.querySelector('.profile__button-add');
let popupCardsElement=document.querySelector('#popup-card');
let popupCardsClose=document.querySelector('.popup__cancel_type_cards');

popupCardsBtnOpened.addEventListener('click', openCardsPopup);

//Открытие popup для вставки новых карточек
function openCardsPopup() {
    popupCardsElement.classList.add('popup_opened');
}

popupCardsClose.addEventListener('click', closeCardsPopup);

//Закрытие popup для вставки новых карточек
function closeCardsPopup() {
    popupCardsElement.classList.remove('popup_opened');
}

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

let cardsBlock = document.querySelector('.elements');
let cardsTempl = document.querySelector('.elements__cards').content;
let cardsElement = cardsTempl.querySelector('.element');

let popupInputTitle = document.querySelector('.popup__input_type_title');
let popupInputLink = document.querySelector('.popup__input_type_link');
let popupCardsForm=document.querySelector('.popup__form_type_cards');
//Вставка изначального массива карточек
  initialCards.forEach(function (item) {
    Array.from(initialCards);

    let card = decorationCard(item);

    cardsBlock.append(card);
  })

//Добавление новых карточек на сайт
  function newCard(evt) {
    evt.preventDefault();

    let card = decorationCard({name: popupInputTitle.value, link: popupInputLink.value});

    cardsBlock.prepend(card);

    closeCardsPopup();
}
popupCardsForm.addEventListener('submit', newCard)

//Непосредственно всё что касается действий с карточкой (создание, клики по ней,...)
function decorationCard(item) {
    let card = cardsElement.cloneNode(true);
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
     card.querySelector('.element__item').addEventListener('click', openFotoPopup);

//Вставка изображения и подписи к нему в template элемент заготовленный в popup
     card.querySelector('.element__item').addEventListener('click', () => {
        let elementItem = card.querySelector('.element__item').src;
        let elementTitle = card.querySelector('.element__title').textContent;

        popupFotoImages.querySelector('.popup__photos').src=elementItem;
        popupFotoImages.querySelector('.popup__signature').textContent=elementTitle;
        popupFotoImages.querySelector('.popup__photos').alt=elementTitle;

        popupFotoElement.append(popupFotoImages);
     });

    return card;
}

let popupFotoElement = document.querySelector('#popup-foto');
let popupFotoTemplate = document.querySelector('.popup__template').content;
let popupFotoImages = popupFotoTemplate.querySelector('.popup__images');
let popupFotoBtnClose = popupFotoTemplate.querySelector('.popup__cancel_type_foto');

//Открытие popup с увелечинным изображением и подписью к ней
function openFotoPopup() {
    popupFotoElement.classList.add('popup_opened');
}

popupFotoBtnClose.addEventListener('click', closeFotoPopup);

//Закрытие popup с увелечинным изображением и подписью к ней
function closeFotoPopup() {
    popupFotoElement.classList.remove('popup_opened');
}