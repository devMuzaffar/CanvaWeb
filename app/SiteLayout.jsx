import React from 'react'
import { Banner, Footer, Navbar } from './components'

const SiteLayout = ({children}) => {
  return (
    <div className="font-work-sans">
        <Banner/>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default SiteLayout