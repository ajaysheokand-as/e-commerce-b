import React from 'react'
import '../components/navbar.css'
import nav_logo from '../Images/logo.png'

const Navbar = () => {
    return (
        <div>
            <header style={{paddingTop:'20px'}}>
                <div className='container'>
                    <div className='navbar'>
                        <div className='nav_content' style={{ width: '100%' }}>
                            <div className='logo'>
                                <img src={nav_logo} alt='logo' />
                            </div>
                            <div className='nav_menu'>
                                <div className='input_group d-flex'>
                                    <input type='search' className='form-control' style={{ width: '480px' }} placeholder='Search' />
                                    <select className='form-select' style={{ width: '132px' }}>
                                        <option>All type</option>
                                        <option>Special </option>
                                        <option>Only best</option>
                                        <option>Latest</option>
                                    </select>
                                    <button class="btn btn-primary">
                                        <i class="fa fa-search">Search</i>
                                    </button>
                                </div>
                            </div>
                            <div className='widgets-wrap'>
                                <div className='widgets-icon'>
                                    <ul>
                                        <li style={{ listStyle: 'none' }}><a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg></a></li>
                                        <small>Profile</small>
                                    </ul>
                                </div>
                                <div className='widgets-icon'>
                                    <ul>
                                        <li><a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                        </svg></a></li>
                                        <small>Message</small>
                                    </ul>
                                </div>
                                <div className='widgets-icon'>
                                    <ul>
                                        <li><a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                        </svg></a></li>
                                        <small>Orders</small>
                                    </ul>
                                </div>
                                <div className='widgets-icon'>
                                    <ul>
                                        <li><a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg></a></li>
                                        <small>My Cart</small>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{marginTop:'0'}}/>
            </header>
        </div>
    )
}

export default Navbar
