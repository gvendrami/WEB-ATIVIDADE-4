import { createBrowserRouter } from 'react-router-dom'
import Sobre from '../pages/Sobre'
import Home from '../pages/home'
import NotFound from '../pages/not-found'
import Contato from '../pages/contato'
import Tarefas from '../pages/tarefas'


const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/contato', element: <Contato />},
  {path: '/sobre', element: <Sobre />},
  {path: '/tarefas', element: <Tarefas />}

])

export default router