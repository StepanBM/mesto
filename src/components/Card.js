export default class Card {
  constructor({data, templateSelector, userId, handleCardClick, handleRemoveBtn, addCardLike, deleteCardLike}) {
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemoveBtn = handleRemoveBtn;

    this._userId = userId;

    this._addCardLike = addCardLike;
    this._deleteCardLike = deleteCardLike;

    this._likes = data.likes;
  }

  //Получаем разметку template
  _getTemplate() {
    const templateElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return templateElement;
  }

  _purposeBuckets() {
    if(this._ownerId != this._userId) {
      this._cardDeleteBtn.classList.add('element__button-cancel_delete')
    }
  }
  
  countingLike(data) {
    this._likesCounter.textContent = data.length;
  }

  addLike() {
    this._likeButton.classList.add('element__button_active')
  }

  deleteLike() {
    this._likeButton.classList.remove('element__button_active')
  }

  _checkСlicksLike() {
    const checkLike = this._likes.find(element => element._id===this._userId)
    if(checkLike){
      this.addLike()
    }
  }

  //Вставляем данные в разметку (массив карточек)
  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__item');
    this._likeButton = this._element.querySelector('.element__button');
    this._cardDeleteBtn = this._element.querySelector('.element__button-cancel');

    this._likesCounter = this._element.querySelector('.element__counter');
    this._likesCounter.textContent = this._likes.length;

    this._purposeBuckets()
    this._checkСlicksLike()

    //Вызов метода со всеми событиями (клик)
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardImage.alt = this._name;

    //Возвращаем элементы всех карточек
    return this._element;
  }

  //Метод в котором хранятся все обработчики событий
  _setEventListeners() {
    //Клик по картинки для увеличения
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

    //Вставка/удаление лайка
    this._likeButton.addEventListener('click', () => {
      if(this._likeButton.classList.contains('element__button_active')) {
        this._deleteCardLike()
      } else {
        this._addCardLike()
      }
    });

    //Удаление карточки
    this._cardDeleteBtn.addEventListener('click', (evt) => {

      this._handleRemoveBtn(evt);
    });
  }

}
