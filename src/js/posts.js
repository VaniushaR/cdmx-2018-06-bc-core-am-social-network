const profileuser = user => {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let icon = document.getElementById('iconuser');
  icon.innerHTML = `<img class='circle' src='${user.photoURL}'>`;
  name.innerHTML = user.displayName;
  email.innerHTML = `<span class='white-text email'>${user.email}</span>`;
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    let user = firebase.auth().currentUser;
    if (user != null) {
      profileuser(user);
      // Reference
      userConnect = database.ref(`user/${user.uid}`);
      //addUser(user.uid, user.displayName);
      //child_added:
      //child_changed:
      //child_remove:
    }
  } else {
  }
});

let database = firebase.database();
let userConnect = null;
const addUser = (uid, name) => {
  let conected = userConnect.push({
    uid: uid,
    name: name
  });
};

const updatepost = () => {
  firebase
    .database()
    .ref('posts')
    .on('value', snapshot => {
      let html = '';
      snapshot.forEach(e => {
        let element = e.val();
        let title = element.title;
        let post = element.post;
        // Pinto los post que se obtiene en la base de datos
        html += `<li><h2>${title}</h2></li>
<li>${post}</li>`;
      });
      post.innerHTML = html;
    });
};

const posts = () => {
  let post = document.getElementById('post');
  let title = document.getElementById('title');
  let massage = document.getElementById('recipe');
  let titlePost = title.value;
  // console.log(titlePost);
  let massagepost = massage.value;
  // console.log(massagepost);
  // Pinto en una tabla los post
  post.innerHTML += `  <li><h2>${titlePost}</h2></li>
   <li>${massagepost}</li>`;

  firebase
    .database()
    .ref('posts')
    .push({
      title: titlePost,
      post: massagepost
    });
  updatepost();
  titlePost = '';
  massagepost = '';
};

window.onload = updatepost();
// Post button
let btnpost = document.getElementById('btnpost');

// Button logout
let unsesion = document.getElementById('logout');
const logout = () => {
  firebase.auth().signOut();
  location.href = '../index.html';
};

btnpost.addEventListener('click', posts);
unsesion.addEventListener('click', logout);
