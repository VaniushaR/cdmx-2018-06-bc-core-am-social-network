const profileuser =(user)=>{
let name = document.getElementById('name');
name.innerHTML = user.displayName;
}

// Button logout
let unsesion = document.getElementById("logout");
const logout =()=> {
  firebase.auth().signOut();
    location.href = ('../index.html');
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



unsesion.addEventListener("click", logout);
