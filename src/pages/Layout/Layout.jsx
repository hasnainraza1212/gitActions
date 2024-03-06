import React, { useEffect} from 'react'
import { Outlet} from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
const Layout = () => {
  useEffect(()=>{
  },[])
  return (
    <div className="layout">
      <div className='header'>
        <Header />
      </div>
      <div className='outlet'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
