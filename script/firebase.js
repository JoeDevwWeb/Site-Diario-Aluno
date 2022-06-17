 
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
  const bd = firebase.database();
  const storage = firebase.storage();

// Desconectar a conta
async function logout() {
  await firebase
  loading();
  firebase.auth().signOut()
 .then(() => {
   loadingOut();
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

async function postar() {
  loading();
  let titulo = document.getElementById('titulo').value;
  let nomeAutor = document.getElementById('nomeAutor').value;
  let descrisao = document.getElementById('textProjeto').value;
  let arquivo = document.getElementById('arquivo').files[0];
  
  await storage
  .ref('projetos/')
  .child(arquivo.name)
  .put(arquivo);
  
  await storage
    .ref('projetos/')
    .child(arquivo.name)
    .getDownloadURL()
    .then((url) => {
      bd
      .collection('diario')
      .doc()
      .set({
        titulo : titulo,
        Autor : nomeAutor,
        urlimg : url,
        decrisao : descrisao
      })
      alert(url);
      loadingOut();
      window.location.href = '/';
    })

}

// Apresentar img


// Salvar text


function postTexto(){
 let nomeAutor = document.getElementById('autor').value;
 let texto = document.getElementById('postagem').value;
  
}
