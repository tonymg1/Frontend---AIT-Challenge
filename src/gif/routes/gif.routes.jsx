import { Navigate, Route, Routes } from 'react-router-dom'
import {HomePage, CategoriesPage, UserPage} from '../pages'



export const GifRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
            
                <Route path='home' element={<HomePage />} />
                <Route path='categories' element={<CategoriesPage />} />
                <Route path='user' element={<UserPage />} />
              

                

                <Route path='/' element={<Navigate to = "/home"/>} />
    
            </Routes>
        </div>
     
    </>
  )
}
