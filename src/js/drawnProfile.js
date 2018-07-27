
// side navbar iniatization with JQuery
$(document).ready(function () {
  $('.sidenav').sidenav();
});
// end of the navbar activation

// login con google y firebase
/* const provider = new firebase.auth.GoogleAuthProvider();
let btnGoogle = document.activeElement("login-g");
btnGoogle.addEventListener("click", event => {
  firebase.auth().signInWithPopup;
});*/

// fin


// Aqui empezo a codear Mir.

const btnEditPerfil = document.getElementById('btn-edit');
let editDescription = document.getElementById('perfil');

let userDescription = JSON.parse(localStorage.getItem('keyD'));

editDescription.innerHTML = userDescription;

const editAboutMe = () => {
  editDescription.innerHTML = `
    <input id = "n-descripcion" type = "text" class = "validate">
    <label for = "descripcion"></label>
    <a id = "btn-save" href = "#">
      <i class = "material-icons ">done</i>
    </a>
  `;
  const btnSave = document.getElementById('btn-save');
  btnSave.addEventListener('click', saveNewAboutMe);
};

btnEditPerfil.addEventListener('click', editAboutMe); 

const saveNewAboutMe = () => {
  let newDescription = document.getElementById('n-descripcion').value;
  let userDescription = localStorage.setItem('keyD', JSON.stringify(newDescription));
  userDescriptionN = JSON.parse(localStorage.getItem('keyD'));
  editDescription.innerHTML = `<p>${userDescriptionN}</p>`;
};