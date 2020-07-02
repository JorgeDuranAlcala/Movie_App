import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Footer } from '..'

const Layout = ({ handlePageChange, children }) => {
    return (
        <>
            <Navbar/>
                { children }
            <Footer onChange={handlePageChange}/>
        </>
    )
}

export default Layout
