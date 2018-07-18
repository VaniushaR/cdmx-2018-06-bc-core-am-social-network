const drawlogin =()=> {
const login = document.getElementById("login");
// Draw inputs in Index
  login.innerHTML = `<h3 id="titulos2">Sign in</h3>
  <input class="validate" type="text" placeholder="Nombre..." id ="nick">
  <input class="validate" type="text" placeholder="Email..." id ="email">
  <input class="validate" type="password" placeholder="Password..." id = "password">
  <input class="waves-effect waves-light btn" class="btn-floating pulse"  type="button" value="Iniciar Sesión" id="sesion">`;
};


const drawlogout =()=> {
const logout = document.getElementById("userlogout");
let mail = document.getElementById("email").value;
// Draw button logout
logout.innerHTML = `<label id="user_id"></label><input type="button" value="Cerrar sesion" id="logout">`;
};


window.onload = drawlogin();
window.onload = drawlogout();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("userlogout").style.display ="display";
    document.getElementById("login").style.display ="none";
    let user = firebase.auth().currentUser;
    if (user != null) {
      let email_id = user.email;
      document.getElementById("user_id").innerHTML = `Welcome User: ${email_id}`;

    }
  } else {
    // No user is signed in.

    document.getElementById("userlogout").style.display ="none";
    document.getElementById("login").style.display ="display";
  }
});

const getdata =()=> {
const mail = document.getElementById("email").value;
console.log(mail);
const password = document.getElementById("password").value;

firebase.auth().signInWithEmailAndPassword(mail, password).catch(function(error) {
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
