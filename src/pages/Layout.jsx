import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Foursection from "../components/foursection"


function Layout() {
  return (
    <>
       <Navbar />
      <main>
        <Outlet />
        <Foursection />
      </main>
      <Footer />
    </>
  )
}

export default Layout