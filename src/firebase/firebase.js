import { initializeApp } from "firebase/app";
import  {collection, doc, getDoc,getDocs, getFirestore,query,where,orderBy } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDXGLpSH6L22tGZVrQ9iBnV-sr8NIOsJzM",
  authDomain: "imprenta-farias.firebaseapp.com",
  projectId: "imprenta-farias",
  storageBucket: "imprenta-farias.appspot.com",
  messagingSenderId: "34020098552",
  appId: "1:34020098552:web:843ced6d611cf28274d60d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  

const docRef=doc(db,'items','myop8wjSTBr670nas07F');
getDoc(docRef).then((snapshot)=>{
  console.log({id:snapshot.id,... snapshot.data() });
});


const colRef=collection(db,'items');
constq=query(colRef,where('done','==',true),orderBy('text','desc'));
getDocs(q).then((snp)=>{
  console.log(
    snp.docs.map((document)=>({
      ... document.data(),
      id:document.id,
    }))
 );
});
