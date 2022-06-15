const bd = firebase.firestore();

bd.collection('user')
  .doc('e8WppsmfSeMFBSoMIeDWeWI4TcC2')
  .get().then(function (doc){
    if(doc.exists){
      console.log('Existe')
    }else{
      console.log('Nao existe')
    }
  })
