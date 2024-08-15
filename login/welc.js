import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
import { getDatabase, ref, set, child, update, remove, onValue, push } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";

const firebaseApp = initializeApp({
        apiKey: "AIzaSyBso6HyS60ohZFE-tXJQB2SyD4FJuGoNpg",
        authDomain: "login-a912a.firebaseapp.com",
        projectId: "login-a912a",
        storageBucket: "login-a912a.appspot.com",
        messagingSenderId: "550398747095",
        appId: "1:550398747095:web:cb44f6f9fb9530c46aeb92",
        measurementId: "G-EMF6ZZPDX0"
  });

  var adm;
  const auth = getAuth(firebaseApp);
  onAuthStateChanged(auth, (user) => {
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
        adm = (user.email);
        //adm=document.getElementById('user.email');
        //document.getElementById("user1").innerHTML = "Hello, "+adm;
        console.log(adm)
    }
});
onAuthStateChanged(auth,(user)=>{
    console.log(adm);
});
onAuthStateChanged(auth,(user)=>{
    console.log("hello, "+adm);

const post = {
    email: adm,
    name: "Siddhartha",
    roll: "21052195"
  }
  
  const app = firebaseApp;
  const db = getDatabase();
    set(ref(db), {
      user1: post
    });
    update(ref(db), post) 
    onValue(ref(db,"user1/name"), (snapshot) => {
      document.getElementById("data").innerHTML="value in the database is: "+snapshot.val()
    });
});

document.getElementById("logout").addEventListener('click',function logout(){
    signOut(auth)
  });
  
