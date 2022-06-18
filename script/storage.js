const database = firebase.firestore();
// Apresentar 
   const lista = document.getElementById('ListaProjetos');
  
  
database
    .collection("projetos")
    .onSnapshot(function (documentos){
    
    documentos
      .docChanges()
      .forEach(function(changes){
            
            const documento = changes.doc;
            const titulo = documento.data().titulo;
            const autor = documento.data().Autor;
            const descricao = documento.data().descrisao;
            const url = documento.data().url;
            
            const lista = document.getElementById('ListaProjetos');
            
            const li = document.createElement('li');
            
            const divIten = document.createElement('div');
            divIten.classList.add('ProjetoAdd');
            
            const img = document.createElement('img');
            img.src = url;
            divIten.appendChild(img);
            
            const h2 = document.createElement('h2');
            h2.innerHTML = titulo;
            divIten.appendChild(h2);
            
            const p1 = document.createElement('p');
            p1.innerHTML = autor;
            divIten.appendChild(p1);
            
            const p2 = document.createElement('p');
            p2.innerHTML = descricao;
            divIten.appendChild(p2);
                    
            li.appendChild(divIten);
            lista.appendChild(li);
        
            //const nomeAutor = document.getElementById('nomeText');
            //nomeAutor.innerHTML = ("Por " + documento.data().Autor);
            //const img = document.getElementById('imgText');
            //img.src = documento.data().url;
      })
    })
        
