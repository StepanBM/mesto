export default class UserInfo {
    constructor({profilName, profilProfession, profileAvatar}) {
        //Данные имя пользователя
        this._profilNameElement = document.querySelector(profilName);
        //Данные о пользователе
        this._profilProfessionElement = document.querySelector(profilProfession);

        this._profileAvatarElement = document.querySelector(profileAvatar);
    }

    //Метод который возвращает данные о пользоателе
    getUserInfo() {
        return {
            userName: this._profilNameElement.textContent,
            userInformation: this._profilProfessionElement.textContent
          }
    }

    //Добавлет новые данные о пользователе
    setUserInfo(objProfil) {
        this._profilNameElement.textContent = objProfil.name;
        this._profilProfessionElement.textContent = objProfil.about;
        this._profileAvatarElement.src = objProfil.avatar;
    }

}