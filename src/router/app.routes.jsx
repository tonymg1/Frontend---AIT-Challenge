
import { Route, Routes } from 'react-router-dom'
import { HomePage, UserPage} from '../gif/pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
