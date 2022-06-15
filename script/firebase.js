 
  // Inicialização
  const firebaseConfig = {
    apiKey: "AIzaSyAAGqIkpR4nVkdoxgsCDpxYFutEJ0O_mOY",
    authDomain: "diariodoaluno-d32c8.firebaseapp.com",
    projectId: "diariodoaluno-d32c8",
    storageBucket: "diariodoaluno-d32c8.appspot.com",
    messagingSenderId: "843419785955",
    appId: "1:843419785955:web:2fb0903f48c83661a5c3d6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Desconectar a conta
function logout() {
  firebase.auth().signOut()
 .then(() => {
   window.location.href = "./html/login.html";
 }).catch(() => {
   alert("Erro ao fazer logout");
 });
};

// firabase

function addDado(){

   let name = document.getElementById('nome').value 
   
   let obj = {
     username: nome
   }
   
   firebase.firestore().collection('user').add(obj)
   .then(doc=>{
    console.log(doc.id) 
   }).catch(e=>{
     console.log(e)
   })
}


// Storage 
