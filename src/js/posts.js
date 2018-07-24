
const profileuser =(user)=>{
let name = document.getElementById('name');
let email = document.getElementById('email');
let icon = document.getElementById('iconuser');
icon.innerHTML =`<img class='circle' src='${user.photoURL}'>`;
name.innerHTML = user.displayName;
email.innerHTML = `<span class='white-text email'>${user.email}</span>`;


}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    let user = firebase.auth().currentUser;
    if (user != null) {
      profileuser(user);
        // Reference
      userConnect = database.ref('/user');
      addUser(user.uid, user.displayName);
      userConnect.on('child_added', data =>{
        console.log('Ha Ingresado a la sala' + data.val().name);
      });
      //child_added:
      //child_changed:
      //child_remove:


    }
  } else {


  }
});

let database = firebase.database();
let userConnect = null;
const addUser=(uid, name) =>{
  let conected = userConnect.push({
    uid: uid,
    name: name,
  })

}

// Button logout
let unsesion = document.getElementById("logout");
const logout =()=> {
  firebase.auth().signOut();
    location.href = ('../index.html');
}
unsesion.addEventListener('click', logout);
