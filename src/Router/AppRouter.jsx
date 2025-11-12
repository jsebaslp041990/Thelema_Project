import { Routes, Route, Navigate } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Quienes_somos } from '../components/Quienes_somos'
import { Nuestros_servicios } from '../components/Nuestros_servicios'
import { Publicaciones } from '../components/Publicaciones'
import { Talleres } from '../components/Talleres'
import { Contacto } from '../components/Contacto'


export const AppRouter = () => {
    return (

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Quienes_somos' element={<Quienes_somos />} />
          <Route path='/Nuestros_servicios' element={<Nuestros_servicios />} />
          <Route path='/Publicaciones' element={<Publicaciones />} />
          <Route path='/Talleres' element={<Talleres />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/*' element={<Navigate to='/'/>} />
        </Routes>
    )
}


