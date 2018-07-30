
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

//activation of collapsible and expanded accordion for coments and opinions
$(document).ready(function() {
  $('.collapsible').collapsible();
});


// llamdo del DOM
const btnEditPerfil = document.getElementById('btn-edit');
let editDescription = document.getElementById('perfil');

// const perfilFirebase = () => {
//   console.log(editDescription.value);

//   let user = firebase.auth().currentUser;
//   let database = firebase.database();
//   firebase.database().ref('perfil').set({
//     ui: user.uid,
//     name: user.displayName,
//     photo: user.photoURL,
//     aboutMe: userDescriptionN
//   });
// };
// perfilFirebase();

let userDescription = JSON.parse(localStorage.getItem('keyD'));


// Función para rellenar perfil de usuario o poner "Sin About me" si no tiene
const perfilLogin = () => {
  // console.log(userDescription);
  if (userDescription) {
    userDescription;
  } else {
    userDescription = 'Usuario sin "About Me"';
  }
  return editDescription.innerHTML = userDescription;
};

perfilLogin();

// Función del boton editar perfil
const editAboutMe = () => {
  editDescription.innerHTML = `
    <p id = descrition-original>${userDescription}</p>
    <input id = "n-descripcion" type = "text" class = "validate">
    <label for = "descripcion"></label>
    <a id = "btn-save" href = "#">
      <i class = "material-icons ">done</i>
    </a>
    <a id = "btn-cancel" href = "#">
    <i class = "material-icons">cancel</i>
    </a>
  `;
  const btnSave = document.getElementById('btn-save');
  const btnCancel = document.getElementById('btn-cancel');
  btnSave.addEventListener('click', saveNewAboutMe);
  btnCancel.addEventListener('click', cancelNewAboutMe);
  btnEditPerfil.style.display = 'none';
};
btnEditPerfil.addEventListener('click', editAboutMe);


// Función del boton salvar el nuevo perfil
const saveNewAboutMe = () => {
  let newDescription = document.getElementById('n-descripcion').value;
  // Validando que no se admitan etiquetas html
  for (let i = 0; i < newDescription.length; i++) {
    let letterDescrip = newDescription[i].charCodeAt();
    if (letterDescrip === 60 || letterDescrip === 62) {
      swal('Ooops,no puedes usar los signos "<" ">"');
      btnEditPerfil.style.display = 'block';
      return perfilLogin();
    }
  }
  let userDescription = localStorage.setItem('keyD', JSON.stringify(newDescription));
  userDescriptionN = JSON.parse(localStorage.getItem('keyD'));
  btnEditPerfil.style.display = 'block';
  return editDescription.innerHTML = `<p>${userDescriptionN}</p>`;
};

const cancelNewAboutMe = () => {
  perfilLogin();
  btnEditPerfil.style.display = 'block';
};

// Aqui dejo de codear mir
