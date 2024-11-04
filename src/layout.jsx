
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <header><Navbar /></header>
    <main className='min-h-screen'>
      <Outlet/>
    </main>
  <Footer/>
    </>
  )
}
