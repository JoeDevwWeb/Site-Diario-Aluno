 
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
  const bd = firebase.firestore();
  const storage = firebase.storage();

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

let photo = document.getElementById('Foto');
let file = document.getElementById('arquivo');

file.addEventListener('change', (event) =>{
  
  if(file.files.length <=0){
    return;
  }
  let leitor = new  FileReader();
  leitor.onload = () =>{
    photo.src = leitor.result;
  }
  leitor.readAsDataURL(file.files[0]);
})


// Storage

// Variaveis postar imagem 

let titulo = document.getElementById('titulo').value;
let data = document.getElementById('data').value;
let nameAutor = document.getElementById('nomeAutor').value;

let texto = document.getElementById('textProjeto').value;

let storageRef = firebase.storage().ref('imagens');

let fotoFOda = storageRef.child('imagem1.jpg').getDownloadURL()
.then(url=>{
   alert('Donwload');
   let imgFoda = document.getElementById('Afoto');
   imgFoda.src = fotoFOda;
}).catch(e=>{
  alert('Not donwload');
})

function postar(){
let arquivo = document.getElementById('arquivo').files[0];

let thisRef = storageRef.child(arquivo.name)

thisRef.put(arquivo).then(res=>{
  alert('Deu certo');
}).catch(e=>{
  alert('Deu merda'+ e);
})
  
bd.collection('user')
  .doc('e8WppsmfSeMFBSoMIeDWeWI4TcC2')
  .get().then(function (doc){
    if(doc.exists){
      console.log('Existe')
    }else{
      console.log('Nao existe')
    }
  })
  
}

