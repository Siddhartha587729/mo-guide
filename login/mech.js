document.getElementById("loginform").addEventListener("submit",(event)=>{
  event.preventDefault()
})
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword,  sendPasswordResetEmail} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

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
  if (user) {
    location.replace("welcome.html")
  }
});
document.getElementById("submit-btn").addEventListener('click',function loginform(){
  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;
  const auth = getAuth(firebaseApp);
  signInWithEmailAndPassword(auth, userEmail, userPassword)
  .catch((error) => {
    document.getElementById("error").innerHTML= error.message
  })
});
document.getElementById("signup-btn").addEventListener('click',function loginform(){
  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;
  const auth = getAuth(firebaseApp);
  createUserWithEmailAndPassword(auth, userEmail, userPassword)
  .catch((error) => {
    document.getElementById("error").innerHTML= error.message
  })
});
document.getElementById("forgetpass").addEventListener('click',function forgotPassword(){
  var userEmail = document.getElementById("email_field").value;
  const auth = getAuth();
  sendPasswordResetEmail(auth, userEmail)
  .then(() => {
    alert("Reset email send to your emailId")
  })
  .catch((error) => {
    document.getElementById("error").innerHTML= error.message
  });
});

