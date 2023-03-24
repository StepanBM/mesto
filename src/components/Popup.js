export default class Popup {
    constructor(popupElement) {
      //3 попапа
      this._popupSet = document.querySelector(popupElement);
      //Функция для закрытия по Escape
      this._handleEscClose = this._handleEscClose.bind(this);
    }

    //Открытие попапа через добавление класса
    open() {
      this._popupSet.classList.add('popup_opened');
      //Навешиваем обработчик событий
      document.addEventListener('keydown', this._handleEscClose);
    }

    //Закрытие попапа
    close() {
      this._popupSet.classList.remove('popup_opened');
      //Убираем обработчик событий
      document.removeEventListener('keydown', this._handleEscClose);
    }

    //Закрытие через Escape
    _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }

    //Добавляет слушителя клика иконке закрытия попапа
    setEventListeners() {
      this._popupSet.addEventListener('mousedown', evt => {
        //Закрытие попапа нажатием за его пределы
        if (evt.target.classList.contains('popup_opened')) {
          this.close();
        } 
        //Проверка, нажат ли крестик или нет
        if (evt.target.classList.contains('popup__cancel')) {
          this.close();
        }
      });
    }
  }