export default class Api {
    constructor({url, headers}) {
      this._url = url;
      this._headers = headers;
    }
  
    getUserInfo() {
      return fetch(this._url + `/users/me`, {
        headers: this._headers,
      }).then((res) => {
        if (res.ok) {
            return res.json();
          } return Promise.reject(`Что-то пошло не так: ${res.status}`)
      });
    }
  
    getInitialCards() {
      return fetch(this._url + '/cards', {
        headers: this._headers,
      }).then((res) => {
        if (res.ok) {
            return res.json();
          } return Promise.reject(`Что-то пошло не так: ${res.status}`)
      });
    }

    changeUserInfo(data) {
      return fetch(this._url + `/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            name: data.name, 
            about: data.about
        }),
      }).then((res) => {
        if (res.ok) {
            return res.json();
          } return Promise.reject(`Что-то пошло не так: ${res.status}`)
      });
    }
  
    addNewCard(data) {
      return fetch(this._url + '/cards', {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
            return res.json();
          } return Promise.reject(`Что-то пошло не так: ${res.status}`)
      });
    }
  
    removeCard(cardId) {
      return fetch(this._url + `/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
      }).then((res) => {
        if (res.ok) {
            return res.json();
          } return Promise.reject(`Что-то пошло не так: ${res.status}`)
      });
    }

    changeProfileAvatar(data) {
        return fetch(this._url + `/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
              avatar: data.avatar, 
              about: data.information
          }),
        }).then((res) => {
          if (res.ok) {
              return res.json();
            } return Promise.reject(`Что-то пошло не так: ${res.status}`)
        });
      }
  
    addCardLike(cardId) {
      return fetch(this._url + `/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: this._headers,
      }).then((res) => {
        if (res.ok) {
            return res.json();
          } return Promise.reject(`Что-то пошло не так: ${res.status}`)
      });
    }
  
    deleteCardLike(cardId) {
      return fetch(this._url + `/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
      }).then((res) => {
        if (res.ok) {
            return res.json();
          } return Promise.reject(`Что-то пошло не так: ${res.status}`)
      });
    }
  }