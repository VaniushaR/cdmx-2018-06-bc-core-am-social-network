const drawlogin =()=> {
let login = document.getElementById("login");
// Draw inputs in Index
login.innerHTML = `<h3 id='titulos2'>Sign in</h3>
<input class='validate' type='text' placeholder='Email...' id ='email'>
<input class='validate' type='password' placeholder='Password...' id = 'password'>
<input class='waves-effect waves-light btn' class='btn-floating pulse'  type='button' value='Iniciar Sesión' id='sesion'>
<input class='waves-effect waves-light btn' class='btn-floating pulse'  type='button' value='Iniciar con Google' id='sesionGoogle'>
<input class='waves-effect waves-light btn' class='btn-floating pulse'  type='button' value='Iniciar con Facebook' id='sesionFacebook'>`;
};


drawlogin();
// Entrar a la Database


firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    let user = firebase.auth().currentUser;
    if (user != null) {
      let email_id = user.email;
      location.href = ('views/view1.html');
    }
  } else {


  }
});

 const getdata =()=> {
const mail = document.getElementById('email');
const password = document.getElementById('password');
const nick = document.getElementById('nick');

firebase.auth().signInWithEmailAndPassword(mail.value, password.value).catch(error=> {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("Error "+ errorMessage);
  // ...
});

  firebase
    .auth()
    .signInWithEmailAndPassword(mail, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error " + errorMessage);
      // ...
    });
};

let sesion = document.getElementById("sesion");

sesion.addEventListener("click",getdata);
let google = document.getElementById('sesionGoogle');
google.addEventListener('click', event => {
network.loginGoogle();
    });
let facebook = document.getElementById('sesionFacebook');
  facebook.addEventListener('click', event => {
  network.loginFacebook();
      });
