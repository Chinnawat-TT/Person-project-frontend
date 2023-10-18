import { Outlet } from 'react-router-dom'
import Footer from "./Footer";
import AdminHeader from './AdminHeader';



export default function Layout() {
  return (
    <div>

    <AdminHeader/>
    <Outlet/>
    <Footer/>
    </div>
    
  )
}