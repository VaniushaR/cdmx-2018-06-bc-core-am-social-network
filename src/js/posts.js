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
    }
  } else {


  }
});
unsesion.addEventListener("click", logout);
