 
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
  const storage = firebase.storage();
  const database = firebase.firestore();
  

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
      
   let obj = {
        titulo: titulo,
        Autor: nomeAutor,
        descrisao: descrisao,
        url: url
      }
      
    firebase.firestore()
      .collection('projetos')
      .add(obj)
      .then(()=>{
        loadingOut();
        window.location.href = '/';
      }).catch(e=>{
        alert('Nao deu certo');
      })
    })

}

// Apresentar img

// function Apresentar(){
//     const 
// }

//   const li = document.createElement('li');

//   const divFoto = document.createAttribute('div');

// //   Div principal
//   const titulo = document.createElement('div');
//   titulo.classList.add("data");
  
//   titulo.innerHTML = transaction.titulo;
//   titulo.classList.add("projetos");
//   li.appendChild(titulo);

// // div da foto do projeto
//   const divfoto = document.createElement('div');
//   divfoto.classList.add("imgProjeto");
//   titulo.appendChild(divfoto);


//   const divtexto = document.createElement('div');
//   divtexto.classList.add("TextProjeto");
//   titulo.appendChild(divtexto);

//   const img = document.createElement('img');
//   img.src = transaction.url;
//   titulo.appendChild(img);
//   divfoto.appendChild(img);

//   const texto = document.createElement('h2');
//   texto.innerHTML =  transaction.titulo;
//   divtexto.appendChild(texto);


//   const type = document.createElement('p');
//   type.innerHTML = transaction.transactionType;
//   titulo.appendChild(type);
//   divtexto.appendChild(type);


//   orderedList.appendChild(li);




// Salvar text


function postTexto(){
 let nomeAutor = document.getElementById('Autor').value;
 let titulo = document.getElementById('Titulo').value;
 let texto = document.getElementById('postagem').value;
 
 loading();
  let obj = {
        titulo: titulo,
        Autor: nomeAutor,
        texto: texto
      }
      
    firebase.firestore()
      .collection('diario')
      .add(obj)
      .then(doc=>{
        alert('deus certo firebase'+doc.id);
        loadingOut();
        window.location.href = '/';
      }).catch(e=>{
        alert('Nao deu certo');
      })
  
}
