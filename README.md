# Site-Diario-Aluno

let storageRef = firebase.storage().ref('projetos');

function postar(){
  loading();
  let arquivo = document.getElementById('arquivo').files[0];

 let thisRef = storageRef.child(arquivo.name)

 thisRef.put(arquivo).then(res=>{

 thisRef.child(arquivo).getDownloadURL()
 .then(url=>{
   //let imgFoda = document.getElementById('Afoto');
   //imgFoda.src = url;
   alert(url);
}).catch(e=>{
  alert('Not donwload');
})
//  $('.addDados').css('background', 'gren');
  loadingOut();
  window.location.href = '/';
  
}).catch(e=>{
  alert('Deu merda'+ e);
})


}
