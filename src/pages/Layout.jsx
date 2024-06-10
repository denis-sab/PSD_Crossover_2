import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"



function Layout() {
  return (
    <>
       <Navbar />
      <main>
        <Hero />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout