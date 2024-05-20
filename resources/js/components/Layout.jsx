import React from 'react'
import PreLoader from './preloader/PreLoader'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SearchForm from './SearchForm/SearchForm'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
   <>
   <PreLoader/>
   <div className="main-wrapper p-0">
   <Header/>
   <Outlet/>
<Footer/>
   </div>
   <SearchForm />

   </>
  )
}

export default Layout