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
  let userDescription = localStorage.setItem(
    'keyD',
    JSON.stringify(newDescription)
  );
  userDescriptionN = JSON.parse(localStorage.getItem('keyD'));
  editDescription.innerHTML = `<p>${userDescriptionN}</p>`;
};
