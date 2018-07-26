//side navbar iniatization with JQuery
$(document).ready(function() {
  $('.sidenav').sidenav();
});

//activation of side down panel display
$(document).ready(function() {
  $('#flip').click(function() {
    $('#panel').slideToggle('slow');
  });
});

/* <section id="panel">
                        <a>
                            <i class="material-icons icon-pad">add_location</i>
                        </a>
                        <a>
                            <i class="material-icons icon-pad">add_a_photo</i>
                        </a>
                    </section> */

//login con google y firebase
/*const provider = new firebase.auth.GoogleAuthProvider();
let btnGoogle = document.activeElement("login-g");
btnGoogle.addEventListener("click", event => {
  firebase.auth().signInWithPopup;
});*/

//fin
