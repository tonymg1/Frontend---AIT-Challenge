import React from "react";
import { useAuth0} from "@auth0/auth0-react";
import '../ui/components/logoutButton.styles.css'

export const LogoutButton = () =>{
    const {logout} = useAuth0()

    return <button onClick={()=> logout({returnTo: window.location.origin})} className="logout-button">Logout</button>

}