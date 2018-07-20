window.social = {
  mostrar:  (usuario) => {
  let usuarioEnviado = localStorage.setItem("key", JSON.stringify(usuario));
  location.href= 'views/vista1.html';
  console.log(usuarioEnviado);
  }
}
