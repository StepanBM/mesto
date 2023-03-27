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

  _removeCard() {
    this._element.remove();
    //При удалении экземпляра класса его дополнительно после удаления нужно занулять
    this._element = null
  }

  _handleLike() {
    this._likeButton.classList.toggle('element__button_active')
  }

  //Метод в котором хранятся все обработчики событий
  _setEventListeners() {
    //Клик по картинки для увеличения
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

    //Вставка/удаление лайка
    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    });

    //Удаление карточки
    this._cardDeleteBtn.addEventListener('click', () => {
      this._removeCard();
    });
  }
}
