const drawlogin =()=> {
const login = document.getElementById("login");
// Draw inputs in Index
  login.innerHTML = `<input type='text' placeholder='Nickname...' id ='nick'>
  <input type='text' placeholder='Email...' id ='email'>
  <input type='password' placeholder='Password...' id = 'password'>
  <input type='button' value='Iniciar Sesión' id='sesion'>`;
};


const drawlogout = ()=> {
const logout = document.getElementById('userlogout');
let mail = document.getElementById('email').value;
=======
  login.innerHTML = `<h3 id="titulos2">Sign in</h3>
  <input class="validate" type="text" placeholder="Nombre..." id ="nick">
  <input class="validate" type="text" placeholder="Email..." id ="email">
  <input class="validate" type="password" placeholder="Password..." id = "password">
  <input class="waves-effect waves-light btn" class="btn-floating pulse"  type="button" value="Iniciar Sesión" id="sesion">`;
};




drawlogin();
drawlogout();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("userlogout").style.display ="display";
    document.getElementById("login").style.display ="none";
    let user = firebase.auth().currentUser;
    if (user != null) {
      let email_id = user.email;
<<<<<<< HEAD
      document.getElementById('user_id').innerHTML = `Welcome Mexican Lover: ${email_id}`;
=======
      document.getElementById("user_id").innerHTML = `Welcome User: ${email_id}`;
>>>>>>> 9c554cf6157bd5eaf22454d3ab30aa98a497ef38

    }
  } else {
    // No user is signed in.

    document.getElementById("userlogout").style.display ="none";
    document.getElementById("login").style.display ="display";
  }
});

const getdata =()=> {
<<<<<<< HEAD
const mail = document.getElementById('email');
const password = document.getElementById('password');
const nick = document.getElementById('nick');
=======
const mail = document.getElementById("email").value;
console.log(mail);
const password = document.getElementById("password").value;
>>>>>>> 9c554cf6157bd5eaf22454d3ab30aa98a497ef38

firebase.auth().signInWithEmailAndPassword(mail.value, password.value).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("Error "+ errorMessage);
  // ...
});

};

const logout =()=> {
  firebase.auth().signOut()
};


let sesion = document.getElementById("sesion");
let unsesion = document.getElementById("logout");
sesion.addEventListener("click",getdata);
unsesion.addEventListener("click", logout);
