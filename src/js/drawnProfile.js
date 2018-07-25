//side navbar iniatization with JQuery
$(document).ready(function() {
  $(".sidenav").sidenav();
});
//end of the navbar activation

//login con google y firebase
const provider = new firebase.auth.GoogleAuthProvider();
let btnGoogle = document.activeElement("login-g");
btnGoogle.addEventListener("click", event => {
  firebase.auth().signInWithPopup;
});

//fin
