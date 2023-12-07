import React, { useState } from 'react'
import '../components/navbar.css'
import nav_logo from '../Images/logo.png'
import mob_avt from '../Images/avt.png'

const Navbar = () => {
    const [barclickcontent, setbarclickcontent] = useState(false);
    const toggleNav = () => {
        console.log('hlo', toggleNav)
        setbarclickcontent(true);

    };

    // const [barclickconten, setbarclickconten] = useState(true);
    const closeNav = () => {
        console.log('close', closeNav)
        setbarclickcontent(false);
    }
    return (
        <div>
            <header style={{ paddingTop: '20px' }}>
                <div className='container-fluid'>
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
                                    <button class="btn btn-primary">Search</button>
                                </div>
                            </div>
                            <div className='widgets-wrap'>
                                <div className='widgets-icon'>
                                    <ul>
                                        <li style={{ listStyle: 'none' }}>
                                            <a href='/'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                                </svg>
                                            </a>
                                        </li>
                                        <small>Profile</small>
                                    </ul>
                                </div>
                                <div className='widgets-icon'>
                                    <ul>
                                        <li>
                                            <a href='/'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                                </svg>
                                            </a>
                                        </li>
                                        <small>Message</small>
                                    </ul>
                                </div>
                                <div className='widgets-icon'>
                                    <ul>
                                        <li>
                                            <a href='/'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                                </svg>
                                            </a>
                                        </li>
                                        <small>Orders</small>
                                    </ul>
                                </div>
                                <div className='widgets-icon'>
                                    <ul>
                                        <li>
                                            <a href='/'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                                </svg>
                                            </a>
                                        </li>
                                        <small>My Cart</small>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Mobile_Navbar> */}
                    <div className='mobile_nav'>
                        <div className='bar&logo' style={{ display: 'inline-flex' }}>
                            <div className='bar_btn'>
                                <i class="fa-solid fa-bars " onClick={toggleNav}></i>
                            </div>
                            <div className='mob_nav_logo'>
                                <img src={nav_logo} alt='logo' />
                            </div>
                        </div>
                        <div className='mob-widgets-icon' style={{ display: 'inline-flex' }}>
                            <ul style={{ display: 'inline-flex' }}>
                                <li>
                                    <a href='/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16.5461 13C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.26609 2H1.99609V4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H19.9961V15H7.99609L9.09609 13H16.5461ZM7.15609 6H19.3061L16.5461 11H9.52609L7.15609 6ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM17.9961 18C16.8961 18 16.0061 18.9 16.0061 20C16.0061 21.1 16.8961 22 17.9961 22C19.0961 22 19.9961 21.1 19.9961 20C19.9961 18.9 19.0961 18 17.9961 18Z" fill="#1C1C1C" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#1C1C1C" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mob_search_in'>
                        <input type='search' className='form-control' style={{ width: '480px' }} placeholder='Search' />
                    </div>
                    <div className={`barclickcontent ${barclickcontent ? "d-block" : "d-none "}`} id='barclick' >
                        <div className='mob_nav_main' >
                            <div className='avtar_login d-flex'>
                                <div className='avtar_btn'>
                                    <img src={mob_avt} alt='avt' />
                                    <div className='btn'>
                                        <button className='btn_1'>Sign in</button>
                                        <button className='btn_2'>Register</button>
                                    </div>
                                </div>
                                <div className='close_nav'>
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={closeNav} width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </div>
                            </div>
                            <div className='click_menu'>
                                <ul>
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='/'>Categories</a></li>
                                    <li><a href='/'>Favorites</a></li>
                                    <li><a href='/'>My orders</a></li>
                                </ul>
                                <hr />
                                <ul>
                                    <li><a href='/'>English | USD</a></li>
                                    <li><a href='/'>Contact us</a></li>
                                    <li><a href='/'>About</a></li>
                                </ul>
                                <hr />
                                <div className='trems'>
                                    <ul>
                                        <li><a href='/'>User agreement</a></li>
                                        <li><a href='/'>Partnership</a></li>
                                        <li><a href='/'>Privacy policy</a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ marginTop: '0' }} className='nav_hr' />
                <div className='container-fluid'>
                    <div className='mini_nav_main'>
                        <div className='mini_nav d-flex'>
                            <div className='mini_nav_content'>
                                <ul className=' mini_list d-flex'>
                                    <li><a href='/'>All category</a></li>
                                    <li><a href='/'>Hot offers</a></li>
                                    <li><a href='/'>Gift boxes</a></li>
                                    <li><a href='/'>Projects</a></li>
                                    <li><a href='/'>Menu item</a></li>
                                    <li><a href='/'>Help</a></li>
                                </ul>
                            </div>
                            <div className='state_lang'>
                                <ul className=' mini_list d-flex'>
                                    <li><a href='/'>English, USD</a></li>
                                    <li><a href='/'>Ship to</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr style={{ marginTop: '0' }} className='nav_hr' />
                </div>
            </header>
        </div>
    )
}

export default Navbar
