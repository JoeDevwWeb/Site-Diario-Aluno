const storage = firebase.storage();
// Variaveis postar imagem 

async function postar() {
  
  
  let titulo = document.getElementById('titulo').value;
  let nomeAutor = document.getElementById('nomeAutor').value;
  let descrisao = document.getElementById('textProjeto').value;
  let arquivo = document.getElementById('arquivo').files[0];
  loading();

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
