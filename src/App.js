'use strict'
// import { AuthPage } from "./auth/pages"
// import { useAuth0 } from "@auth0/auth0-react"
import { AppRouter } from "./router/app.routes"
function App() {
  // const {isAuthenticated} = useAuth0()
  return (
    <>
    {/* {isAuthenticated ? <HomePage /> :
    <AuthPage />} */}
    <AppRouter />
      
    </>
  )
}

export default App
