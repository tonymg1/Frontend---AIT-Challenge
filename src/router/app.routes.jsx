
import { useAuth0 } from '@auth0/auth0-react'
import { Route, Routes } from 'react-router-dom'

import { HomePage, CategoriesPage, UserPage} from '../gif/pages'
// import { LoginPage } from '../auth/components/pages/LoginPage'
// import { LoginPage } from '../auth'
// import {Navbar}from '../ui'

// import { PrivateRoute } from './private.routes'
// import { PublicRoute } from './public.routes'




export const AppRouter = () => {
  // const {isAuthenticated} = useAuth0()
  return (
    <>
      
      <Routes>
      
       
      {/* <Route path="/" element={isAuthenticated ? <HomePage /> : <LoginPage />} /> */}

        <Route path="*" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/user" element={<UserPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path='/login' 
                element={<PublicRoute> 
                    <StartPage />
                </PublicRoute>} />



          <Route path='/*' 
            element={<PrivateRoute> 
                <GifRoutes />
            </PrivateRoute>} /> */}

      </Routes>
    </>
  
  )
}
