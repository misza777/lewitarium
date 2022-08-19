import * as React from "react"
// import "../styles/css_slider.css"
// import "../styles/font-awesome.min.css"
// import "../styles/style.css"
// import * as styles from "../styles/layout.module.css"
// import { Link } from "gatsby"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
