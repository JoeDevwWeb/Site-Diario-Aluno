 
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

firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "./html/login.html";
    }
  });


// Prewview da imagem selecionada
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

// loading

function loading() {
  const div = document.createElement("div");
  div.classList.add("loading");
  
  const carrega = document.createElement("div");
  carrega.classList.add('carrega');
  div.appendChild(carrega);
  document.body.appendChild(div);
}

function loadingOut() {
 const loadings = document.getElementsByClassName("loading");
 if(loadings.length){
   loadings[0].remove();
 }
}


// Storage

// Variaveis postar imagem 

let titulo = document.getElementById('titulo').value;
let nameAutor = document.getElementById('nomeAutor').value;
let texto = document.getElementById('textProjeto').value;


function posta(){
  let arquivoImg = document.getElementById('Foto').files[0];
  loading();
  const uploadImg = storage.ref('projetos').child(arquivoImg.name)
  .put(arquivoImg).then(res=>{
    loadingOut();
    alert('Upload')
  }).catch(e=>{
    console.log(e);
  });
  

}
