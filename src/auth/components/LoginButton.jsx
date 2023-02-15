
import { useAuth0 } from "@auth0/auth0-react";
import '../ui/components/loginButton.styles.css'
export const LoginButton = ()=>{
    const {loginWithRedirect} = useAuth0()

    return <button className="login-button" onClick={()=>loginWithRedirect()}>Login</button>
}