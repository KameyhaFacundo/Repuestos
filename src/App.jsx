import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes'
import { AxiosInterceptor } from './interceptors/Axios.interceptor'
import useTokenExpirationCheck from './hooks/useTokenExpirationCheck'

function App() {
  AxiosInterceptor()
  useTokenExpirationCheck()

  return (
    <RouterProvider router={router} />
  )
}

export default App
