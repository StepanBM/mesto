export default class UserInfo {
    constructor({profilName, profilProfession}) {
        //Данные имя пользователя
        this._profilNameElement = document.querySelector(profilName);
        //Данные о пользователе
        this._profilProfessionElement = document.querySelector(profilProfession);
    }

    //Метод который возвращает данные о пользоателе
    getUserInfo() {
        return {
            userName: this._profilNameElement.textContent,
            userInformation: this._profilProfessionElement.textContent
          }
    }

    //Добавлет новые данные о пользователе
    setUserInfo({name, information}) {
        this._profilNameElement.textContent = name;
        this._profilProfessionElement.textContent = information;
    }

}