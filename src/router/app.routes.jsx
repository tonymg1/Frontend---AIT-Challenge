
import { Route, Routes } from 'react-router-dom'
import { HomePage} from '../gif/pages'
import FormsFirebase from '../firebase/page/FormsFirebase'

export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<HomePage />} /> */}
      <Route path="*" element={<FormsFirebase/>} />
    </Routes>
  )
}
