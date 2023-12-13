import React from 'react'
import nav_logo from '../Images/logo.png'

const Navbar = () => {
    return (
        <div>
            <header>
                <div className='container'>
                    <div className='navbar'>
                        <div className='nav_content'>
                            <div className='nav_menu'>
                                <div className='logo'>
                                    <img src={nav_logo} alt='logo' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
