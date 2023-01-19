let popupOpened=document.querySelector('.profile__button-edit');
let popupElement=document.querySelector('.popup');
let popupClose=document.querySelector('.popup__cancel');

popupOpened.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

let page = document.querySelector('.page');
let profileName = page.querySelector('.profile__name');
let popupProfessia = page.querySelector('.profile__profession');
let popupSubmit = page.querySelector('.popup__submit');

let name=document.querySelector('.popup__input_type_name');
let professia=document.querySelector('.popup__input_type_professia');
let form=document.querySelector('.popup__form');

function openPopup() {
    popupElement.classList.add('popup_opened');
    name.value=profileName.textContent;
    professia.value=popupProfessia.textContent;
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
}

function newName(evt) {
    evt.preventDefault();
    profileName.textContent=`${name.value}`;
    popupProfessia.textContent=`${professia.value}`;
    
    closePopup();
}

form.addEventListener('submit', newName);