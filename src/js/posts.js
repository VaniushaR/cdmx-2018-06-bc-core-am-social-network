
const profileuser = (user)=> {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let icon = document.getElementById('iconuser');
  icon.innerHTML = `<img class='circle' src='${user.photoURL}'>`;
  name.innerHTML = user.displayName;
  email.innerHTML = `<span class='white-text email'>${user.email}</span>`;
};
const logout = () => {
  firebase.auth().signOut();
  location.href = ('../index.html');
};
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    let user = firebase.auth().currentUser;
    if (user !== null) {
      profileuser(user);
      adduser(user);
      // Reference
      // child_added:
    // child_changed:
    // child_remove:
    }
  } else {
  }
});
const adduser =(usuario)=> {
let database = firebase.database();
let user = {
  uid: usuario.uid,
  name: usuario.displayName,
  mail: usuario.email,
  photo: usuario.photoURL
}
firebase.database().ref(`user/${usuario.uid}`).set(user);

}
// Function for update post
window.onload = getpost = ()=> {
let html = '';
let user = firebase.auth().currentUser;
firebase.database().ref('user/posts').on('value', snapshot => {
      snapshot.forEach(event => {
      let key = event.key;
      let element = event.val();

      let ui = element.uid;
      let name = element.name;
      let photo = element.photo;
      let type = element.type;
      let title = element.title.toUpperCase();
      let people = element.people;
      let ingredients = element.ingredients;
      let steps= element.steps;

      // let post = element.posts;
      html = `<ul class ='collection'><li class = 'collection-item avatar'>
      <img src='${photo}' class='circle'>
      <span class = 'title'>${name}</span>
      <p><b>${title} </b><br>
      <b>Porción para </b>${people} Personas<br>
      <b>Ingredientes </b>${ingredients}<br>
      <b>Pasos </b>${steps}<br></p>
      <a class="waves-effect waves-light btn-small btn"><i class="material-icons left ">create</i>Editar</a><a class='waves-effect waves-light btn-small red btn-delete' data-message = '${key}'><i class="material-icons left">delete</i>Borrar</a>
      </section>
      </li></ul>`;
    });
    post.innerHTML = html;
    if(post != ''){
      let elementsDelete = document.getElementsByClassName('btn-delete');
      for (let i = 0; i < elementsDelete.length; i++) {
        console.log(elementsDelete[i]);
        elementsDelete[i].addEventListener('click', e => {
          let key = e.target;
          let keyDataDelete = key.getAttribute("data-message");
          let refPostDelete = firebase.database().ref('user/posts').child(keyDataDelete);
          refPostDelete.remove();
        });
      }
    }
  });
};




const postsRecipe = () => {
  let choosePost = document.getElementById('choose-post');
  let formRecipe = document.getElementById('form-recipe');
  let formPlaces = document.getElementById('form-places');
  let user = firebase.auth().currentUser;
  let title = document.getElementById('input_text');
  let people = document.getElementById('count');
  let ingredients = document.getElementById('get-ingredients');
  let steps = document.getElementById('textarea2');
  // Drawning posts
post.innerHTML = `<ul class ='collection'><li class = 'collection-item avatar'>
<img src='${user.photoURL}' class='circle'>
<span class = 'title'>${user.displayName}</span>
<p><b>${title.value} <b><br>
<b>Porción para </b>${people.value} Personas<br>
<b>Ingredientes </b>${ingredients.value}<br>
<b>Pasos </b>${steps.value}<br>
  </p>
</li></ul>`;
firebase.database().ref(`user/posts`).push({
    ui: user.uid,
    name: user.displayName,
    photo: user.photoURL,
    type: choosePost.value,
    title: title.value,
    people: people.value,
    ingredients: ingredients.value,
    steps: steps.value
  });

  // modified by Francis
  title.value = '';
  people.value ='';
  ingredients.value ='';
  steps.value = '';
  formRecipe.style.display ='none';
  formPlaces.style.display = 'none';
};


// Post button
let btnpost = document.getElementById('btnpost');
let btnplace = document.getElementById('btnplace');

btnpost.addEventListener('click', postsRecipe);
// Button logout
let unsesion = document.getElementById('logout');
unsesion.addEventListener('click', logout);
// modified by Francis
// Event of Choose post
let choosePost = document.getElementById('choose-post');
choosePost.addEventListener('change', e => {
let formRecipe = document.getElementById('form-recipe');
let formPlaces = document.getElementById('form-places');
if (choosePost.value =='Recetas') {
  formRecipe.style.display ='block';
  formPlaces.style.display = 'none';
} else {
  formRecipe.style.display ='none';
  formPlaces.style.display = 'block';
}

});
let ingredientSelected = document.getElementById('ingredients');
ingredientSelected.addEventListener('change', e => {
  let ingredients = document.getElementById('get-ingredients');
  ingredients.value += `${ingredientSelected.value}, `;
})


//modified by Francis
  // With jQuery
  $(document).ready(function(){
    $('select').formSelect();
  });
  $(document).ready(function() {
    $('input#input_text, input#input_places, input#input_address,  input#input_city, input#input_description, extarea#textarea2').characterCounter();
  });
