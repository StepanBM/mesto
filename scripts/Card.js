export default class Card {
  constructor(objCard, templateSelector, handleCardClick) {
    this._name = objCard.name;
    this._link = objCard.link;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  //Получаем разметку template
  _getTemplate() {
    const templateElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return templateElement;
  }

  //Вставляем данные в разметку (массив карточек)
  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__item');
    this._likeButton = this._element.querySelector('.element__button');
    this._cardDeleteBtn = this._element.querySelector('.element__button-cancel');

    //Вызов метода со всеми событиями (клик)
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardImage.alt = this._name;

    //Возвращаем элементы всех карточек
    return this._element;
  }

  _addLike() {
    this._likeButton.classList.add('element__button_active');
  }
  _deleteLike() {
    this._likeButton.classList.remove('element__button_active');
  }

  _removeCard() {
    this._element.remove();
  }

  //Метод в котором хранятся все обработчики событий
  _setEventListeners() {
    //Клик по картинки для увеличения
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

    //Вставка/удаление лайка
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('element__button_active')) {
        this._deleteLike();
      } else {
        this._addLike();
      }
    });

    //Удаление карточки
    this._cardDeleteBtn.addEventListener('click', () => {
      this._removeCard();
    });
  }
}
