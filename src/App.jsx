
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Productos from './components/Productos'
import Home from './components/Home'
import DetalleProducto from './components/DetalleProducto'
import Error from './components/Error'
import FabricantesYComponentes from './components/FabricantesYComponentes'
import Fabricante from './components/Fabricante'
import Componente from './components/Componente'

function App() {

  return (
    <div className='app'>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/productos/:id' element={<DetalleProducto />} />
          <Route path='/fabricantes-componentes' element={<FabricantesYComponentes />} />
          <Route path='/fabricantes/:id' element={<Fabricante />} />
          <Route path='/componentes/:id' element={<Componente />} />
          <Route path='/error' element={<Error />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
