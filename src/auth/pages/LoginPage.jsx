
import { LoginButton } from "../components/LoginButton"
import gitGif from '../../assets/img/gitGif.gif'
import '../ui/pages/loginPage.styles.css'

export const LoginPage = () => {
  return (
    <div className="container">
    <h1 className="welcome">Welcome to GifHub!</h1>
    <img src={gitGif} alt="Logo" className="logo" />
    <LoginButton />
    </div>
    
  )
}
