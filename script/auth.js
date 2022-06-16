// Ja logado direcionar automaticamente
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location.href = "../index.html";
    }
  });
  
// Pegar valores
const form = {
email: () => document.querySelector('[name=email]'),
password: () => document.querySelector('[name=password]')
}


// Conta nova
function registrar() {
loading();
const email = form.email().value;
const senha = form.password().value;

firebase.auth().createUserWithEmailAndPassword(email, senha)
.then(() => {
  loadingOut();
  window.location.href = "../index.html";
}).catch((error) => {
  alert('Error:' + error);
});
    
};
    

// Ja tem conta
function login() {
loading();
const email = form.email().value;
const senha = form.password().value;

firebase.auth().signInWithEmailAndPassword(email, senha)
  .then(response => {
    loadingOut();
    window.location.href = "../index.html";
  }).catch(erro => {
    alert("Senha ou email Inválidos");
  });
};
