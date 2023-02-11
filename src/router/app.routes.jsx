import { Route, Routes, useNavigate } from 'react-router-dom'
import { HomePage} from '../gif/pages'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginPage } from '../auth/pages/LoginPage'
import { useEffect } from 'react'
export const AppRouter = () => {
  const {isAuthenticated, isLoading} = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login')
    }
  }, [isLoading, isAuthenticated, navigate])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}