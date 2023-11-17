import React from 'react'
import './layout.css'
import '../../../src/index.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className='layout lg'>
                {children}
            </main>
            <Footer/>
        </div>

    )
}

export default Layout