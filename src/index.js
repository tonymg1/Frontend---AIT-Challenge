import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Auth0Provider domain='dev-a76jgw4b0myhf3cm.us.auth0.com' clientId='gSRJaskYlhc8PjZ3CPtO0GU6W6Duk8yj' redirectUri={window.location.origin}>
<BrowserRouter>
       <App />

    </BrowserRouter>
    </Auth0Provider>

   

    
  </React.StrictMode>
)
