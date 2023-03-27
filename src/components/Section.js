export default class Section {
    constructor({ items, renderer }, containerSelector) {
      //Изначальный массив с карточками
        this._renderedItems = items;
        //Функция которая создает и отрисовывает элементы
        this._renderer = renderer;
        //Секция/контейнер для карточек
        this._container = document.querySelector(containerSelector);
    }

    //Метод для вставления карточек
  addItem(item) {
    this._container.prepend(item);
  }

  //Метод отрисовывает массив карточек
  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}