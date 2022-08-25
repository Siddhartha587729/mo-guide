import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

const firebaseApp = initializeApp({
        apiKey: "AIzaSyBso6HyS60ohZFE-tXJQB2SyD4FJuGoNpg",
        authDomain: "login-a912a.firebaseapp.com",
        projectId: "login-a912a",
        storageBucket: "login-a912a.appspot.com",
        messagingSenderId: "550398747095",
        appId: "1:550398747095:web:cb44f6f9fb9530c46aeb92",
        measurementId: "G-EMF6ZZPDX0"
  });

  const auth = getAuth(firebaseApp);
  onAuthStateChanged(auth, (user) => {
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
});
document.getElementById("logout").addEventListener('click',function logout(){
    signOut(auth)
  });
  
