import firebase from 'firebase/app'
import 'firebase/auth'
import { initializeApp } from "firebase/app";

import gifGit from '../../assets/img/gitGif.gif'
import { LoginButton } from '../components'
import '../ui/pages/loginPage.styles.css'

const firebaseConfig = {
  apiKey: "AIzaSyAMaThv1HWH0Ou0nYfX14FPC1y4EB09ke4",
  authDomain: "probando-e3408.firebaseapp.com",
  projectId: "probando-e3408",
  storageBucket: "probando-e3408.appspot.com",
  messagingSenderId: "762004068965",
  appId: "1:762004068965:web:ca515f87dbc4c811e9c48c"
};
firebase.initializeApp(firebaseConfig);

const handleLogin = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      // El usuario ha iniciado sesión correctamente, aquí puedes redirigir al usuario a la página de inicio
    })
    .catch((error) => {
      console.error(error)
      // Muestra un error al usuario
    })
}


export const LoginPage = () => {

  return (
    <div className='container'>
    <h1 className='welcome'>Welcome to Gifub!</h1>
    <img src={gifGit} alt="" />
    <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(event) => setEmail(event.target.value)}
        />
        <input
           type="password"
           placeholder="Password"
           value={password}
           onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
    <LoginButton />
    </div>
  )
}

  

  

