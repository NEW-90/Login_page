// не работают


function onSignIn(googleUser) {
    // Получаем токен и информацию о пользователе
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
  
    // Отправьте токен на сервер для проверки
    console.log("ID Token: " + id_token);
    console.log("Name: " + profile.getName());
    console.log("Email: " + profile.getEmail());
    
    // Вы можете передать id_token на сервер для дополнительной обработки
  }
  

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  function start() {
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',  // Ваш Client ID
      });
    });
  }
  