import React from "react"

import Footer from "@modules/layout/templates/footer"
import Header from "./header"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
