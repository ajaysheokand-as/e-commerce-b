import React from 'react'
import '../components/footer.css'
import footer_logo from '../Images/logo.png'
import { Data_footer } from './Data'

function Footer() {
    return (
        <>
            <footer className='footer mt-5 pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                    <div className='footer_logo'>
                                        <img src={footer_logo} alt='logo' />
                                    </div>
                                    <div className='footer_text'>
                                        <p style={{ color: '#505050', marginTop: '10px' }}>Best information about the company gies here but now lorem ipsum is</p>
                                    </div>
                                    <div className='social_icon'>
                                        <ul className='foot_ul'>
                                            <li>
                                                <a href='/'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 mob_foot'>
                                    <div className='footer_list'>
                                        <h4 className='foot_list_head'>About</h4>
                                        <ul className='foot_ul'>
                                            {Data_footer.map((foot) => {
                                                return (
                                                    <li key={foot}><a href='/'>{foot.lis}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 mob_foot'>
                                    <div className='footer_list'>
                                        <h4 className='foot_list_head'>Partnership</h4>
                                        <ul className='foot_ul'>
                                            {Data_footer.map((foot) => {
                                                return (
                                                    <li key={foot}><a href='/'>{foot.lis}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-lg-3 col-md-3 col-sm-3 mob_foot'>
                                    <div className='footer_list'>
                                        <h4 className='foot_list_head'>Information</h4>
                                        <ul className='foot_ul'>
                                            {Data_footer.map((foot) => {
                                                return (
                                                    <li key={foot}><a href='/'>{foot.lis}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 mob_foot'>
                                    <div className='footer_list'>
                                        <h4 className='foot_list_head'>For users</h4>
                                        <ul className='foot_ul'>
                                            {Data_footer.map((foot) => {
                                                return (
                                                    <li key={foot}><a href='/'>{foot.lis}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                    <div className='footer_market'>
                                        <h4 className='foot_list_head'>Get app</h4>
                                        <div className='market_btn'>
                                            <a href='/'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="124" height="42" viewBox="0 0 124 42" fill="none">
                                                    <rect width="124" height="42" rx="6" fill="#1C1C1C" />
                                                    <path d="M24.9292 8.6897C25.0796 10.0467 24.5379 11.384 23.7462 12.3669C22.9201 13.3345 21.5985 14.0747 20.3113 13.9793C20.1428 12.6736 20.795 11.2851 21.5251 10.4379C22.3503 9.47658 23.7834 8.74006 24.9292 8.6897Z" fill="white" />
                                                    <path d="M29.1431 16.5179C28.9994 16.6031 26.6188 18.0136 26.6449 20.8904C26.6757 24.3643 29.7066 25.5127 29.7429 25.5244C29.7248 25.6054 29.2682 27.1836 28.1314 28.7826C27.1821 30.1927 26.1875 31.5713 24.6077 31.5947C23.8564 31.6123 23.3491 31.3979 22.8205 31.1745C22.2694 30.9417 21.6951 30.699 20.7968 30.699C19.8445 30.699 19.2447 30.9497 18.6663 31.1914C18.1659 31.4006 17.6814 31.6031 16.9986 31.6306C15.494 31.6855 14.3445 30.127 13.3607 28.7295C11.3942 25.8779 9.8633 20.6934 11.9159 17.1655C12.9105 15.4353 14.724 14.3211 16.6625 14.2914C17.5162 14.2741 18.3349 14.6007 19.0526 14.887C19.6015 15.1059 20.0913 15.3013 20.4924 15.3013C20.8448 15.3013 21.3208 15.1137 21.8757 14.8951C22.7501 14.5506 23.8201 14.1289 24.9102 14.2428C25.6557 14.2644 27.7772 14.5351 29.1459 16.5162L29.1431 16.5179Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M40.0404 9.46421H37.9139V15.7452H40.0404C41.9213 15.7452 43.0261 14.583 43.0261 12.6025C43.0261 10.6264 41.9169 9.46421 40.0404 9.46421ZM38.7031 10.1694V15.04H39.9877C41.4215 15.04 42.2194 14.1695 42.2194 12.6112C42.2194 11.0399 41.4258 10.1694 39.9877 10.1694H38.7031Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M46.0745 15.8235C44.8118 15.8235 43.9612 14.9225 43.9612 13.4818C43.9612 12.0367 44.8118 11.14 46.0745 11.14C47.3328 11.14 48.1834 12.0367 48.1834 13.4818C48.1834 14.9225 47.3328 15.8235 46.0745 15.8235ZM47.4074 13.4818C47.4074 14.5482 46.8812 15.1576 46.0745 15.1576C45.2678 15.1576 44.7372 14.5482 44.7372 13.4818C44.7372 12.4154 45.2678 11.806 46.0745 11.806C46.8812 11.806 47.4074 12.4154 47.4074 13.4818Z" fill="white" />
                                                    <path d="M53.003 15.7452H53.7791L55.0506 11.2184H54.2964L53.3845 14.9008H53.367L52.3322 11.2184H51.5956L50.5653 14.9008H50.5478L49.6358 11.2184H48.8773L50.1532 15.7452H50.9292L51.9552 12.2412H51.9727L53.003 15.7452Z" fill="white" />
                                                    <path d="M56.6915 11.2184H55.9725V15.7452H56.7354V13.0813C56.7354 12.3152 57.2045 11.8103 57.9235 11.8103C58.625 11.8103 58.9714 12.2108 58.9714 12.942V15.7452H59.7343V12.8071C59.7343 11.7799 59.1556 11.14 58.1559 11.14C57.45 11.14 56.9633 11.4534 56.7091 11.9409H56.6915V11.2184Z" fill="white" />
                                                    <path d="M61.042 9.46421V15.7452H61.8049V9.46421H61.042Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M62.911 13.4818C62.911 14.9225 63.7615 15.8235 65.0243 15.8235C66.2826 15.8235 67.1332 14.9225 67.1332 13.4818C67.1332 12.0367 66.2826 11.14 65.0243 11.14C63.7615 11.14 62.911 12.0367 62.911 13.4818ZM65.0242 15.1576C65.831 15.1576 66.3571 14.5482 66.3571 13.4818C66.3571 12.4154 65.831 11.806 65.0242 11.806C64.2175 11.806 63.687 12.4154 63.687 13.4818C63.687 14.5482 64.2175 15.1576 65.0242 15.1576Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M69.5326 15.8235C68.625 15.8235 68.0156 15.2794 68.0156 14.4655C68.0156 13.6907 68.6163 13.2032 69.6685 13.1423L70.9751 13.0683V12.6896C70.9751 12.1368 70.6068 11.806 69.9754 11.806C69.3879 11.806 69.0196 12.0802 68.9232 12.5242H68.1866C68.2392 11.7407 68.9144 11.14 69.993 11.14C71.0628 11.14 71.738 11.7146 71.738 12.6156V15.7452H71.0145V14.966H70.997C70.7252 15.484 70.1464 15.8235 69.5326 15.8235ZM70.9751 14.0259C70.9751 14.6788 70.4226 15.1793 69.7036 15.1793C69.1555 15.1793 68.7916 14.8964 68.7916 14.4655C68.7916 14.0389 69.1424 13.7691 69.7562 13.7299L70.9751 13.6559V14.0259Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M72.7826 13.4818C72.7826 14.9008 73.5718 15.8235 74.7337 15.8235C75.3914 15.8235 75.9131 15.5014 76.2069 14.9791H76.22V15.7452H76.9478V9.46421H76.1849V11.954H76.1674C75.8956 11.4578 75.3694 11.14 74.7162 11.14C73.5674 11.14 72.7826 12.0628 72.7826 13.4818ZM74.8784 11.806C74.0717 11.806 73.5631 12.4589 73.5631 13.4818C73.5631 14.509 74.0717 15.1576 74.8784 15.1576C75.6632 15.1576 76.1893 14.496 76.1893 13.4818C76.1893 12.4719 75.6632 11.806 74.8784 11.806Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M82.3079 15.8235C81.0452 15.8235 80.1946 14.9225 80.1946 13.4818C80.1946 12.0367 81.0452 11.14 82.3079 11.14C83.5663 11.14 84.4168 12.0367 84.4168 13.4818C84.4168 14.9225 83.5663 15.8235 82.3079 15.8235ZM83.6408 13.4818C83.6408 14.5482 83.1147 15.1576 82.3079 15.1576C81.5012 15.1576 80.9707 14.5482 80.9707 13.4818C80.9707 12.4154 81.5012 11.806 82.3079 11.806C83.1147 11.806 83.6408 12.4154 83.6408 13.4818Z" fill="white" />
                                                    <path d="M86.2025 11.2184H85.4834V15.7452H86.2463V13.0813C86.2463 12.3152 86.7154 11.8103 87.4345 11.8103C88.136 11.8103 88.4824 12.2108 88.4824 12.942V15.7452H89.2453V12.8071C89.2453 11.7799 88.6665 11.14 87.6669 11.14C86.961 11.14 86.4743 11.4534 86.22 11.9409H86.2025V11.2184Z" fill="white" />
                                                    <path d="M93.6627 10.1258H92.8998V11.2184H92.2202V11.8408H92.8998V14.57C92.8998 15.4405 93.2243 15.78 94.0617 15.78C94.2414 15.78 94.4519 15.7669 94.544 15.7452V15.1097C94.4914 15.1184 94.316 15.1315 94.2283 15.1315C93.8381 15.1315 93.6627 14.9443 93.6627 14.5308V11.8408H94.5484V11.2184H93.6627V10.1258Z" fill="white" />
                                                    <path d="M95.6982 9.46421V15.7452H96.4611V13.1074C96.4611 12.3239 96.9303 11.8103 97.6888 11.8103C98.4034 11.8103 98.7673 12.2412 98.7673 12.9594V15.7452H99.5302V12.8202C99.5302 11.8103 98.9252 11.14 97.9255 11.14C97.2328 11.14 96.733 11.436 96.4787 11.9409H96.4611V9.46421H95.6982Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M104.573 14.4481H103.824C103.697 14.8746 103.271 15.1663 102.693 15.1663C101.873 15.1663 101.36 14.5961 101.36 13.7299V13.6863H104.63V13.3991C104.63 12.028 103.872 11.14 102.64 11.14C101.382 11.14 100.575 12.0933 100.575 13.4992C100.575 14.9225 101.368 15.8235 102.675 15.8235C103.67 15.8235 104.442 15.2403 104.573 14.4481ZM102.627 11.7973C101.912 11.7973 101.412 12.3414 101.364 13.0944H103.841C103.824 12.337 103.346 11.7973 102.627 11.7973Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M45.3018 31.1427L44.197 27.9019H39.5933L38.4884 31.1427H36.5382L40.8991 19.1518H42.9247L47.2856 31.1427H45.3018ZM40.0704 26.4062L41.87 21.1461H41.9202L43.7198 26.4062H40.0704Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M57.1019 26.7718C57.1019 24.0047 55.6287 22.2596 53.3939 22.2596C52.1216 22.2596 51.1088 22.8995 50.5898 23.905H50.5564V22.4009H48.807V34.0345H50.6149V29.7051H50.6568C51.159 30.6774 52.1634 31.2923 53.4274 31.2923C55.6371 31.2923 57.1019 29.539 57.1019 26.7718ZM52.9168 29.7716C54.3481 29.7716 55.2437 28.6083 55.2437 26.7718C55.2437 24.9437 54.3481 23.772 52.9168 23.772C51.5357 23.772 50.6066 24.9686 50.6066 26.7718C50.6066 28.5916 51.5273 29.7716 52.9168 29.7716Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M63.4864 22.2596C65.7213 22.2596 67.1944 24.0047 67.1944 26.7718C67.1944 29.539 65.7296 31.2923 63.5199 31.2923C62.256 31.2923 61.2515 30.6774 60.7493 29.7051H60.7075V34.0345H58.8995V22.4009H60.6489V23.905H60.6824C61.2013 22.8995 62.2141 22.2596 63.4864 22.2596ZM65.3362 26.7718C65.3362 28.6083 64.4406 29.7716 63.0093 29.7716C61.6198 29.7716 60.6991 28.5916 60.6991 26.7718C60.6991 24.9686 61.6282 23.772 63.0093 23.772C64.4406 23.772 65.3362 24.9437 65.3362 26.7718Z" fill="white" />
                                                    <path d="M74.4056 27.8022H72.5558C72.673 29.9711 74.4809 31.3422 77.1594 31.3422C80.0221 31.3422 81.8217 29.9378 81.8217 27.6942C81.8217 25.9408 80.7921 24.952 78.3145 24.3703L76.9837 24.0462C75.4268 23.664 74.7906 23.1654 74.7906 22.3178C74.7906 21.2541 75.7867 20.5229 77.2431 20.5229C78.6996 20.5229 79.6956 21.2458 79.8044 22.4424H81.6291C81.5705 20.3733 79.8212 18.9523 77.2682 18.9523C74.6902 18.9523 72.8739 20.3733 72.8739 22.4424C72.8739 24.1127 73.9034 25.1431 76.1215 25.6749L77.6868 26.0489C79.252 26.4311 79.9132 26.9879 79.9132 27.9186C79.9132 28.9905 78.8167 29.7716 77.2934 29.7716C75.703 29.7716 74.5395 28.9905 74.4056 27.8022Z" fill="white" />
                                                    <path d="M86.0383 20.3318H84.2219V22.4009H82.9413V23.8219H84.2219V28.8409C84.2219 30.5278 84.9167 31.2009 86.6995 31.2009C87.1013 31.2009 87.5031 31.1677 87.704 31.1178V29.6968C87.5868 29.7218 87.2938 29.7384 87.1097 29.7384C86.3731 29.7384 86.0383 29.3977 86.0383 28.6415V23.8219H87.7123V22.4009H86.0383V20.3318Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M88.9994 26.7718C88.9994 29.5888 90.6567 31.3089 93.1761 31.3089C95.6956 31.3089 97.3529 29.5888 97.3529 26.7718C97.3529 23.9631 95.6872 22.243 93.1761 22.243C90.665 22.243 88.9994 23.9631 88.9994 26.7718ZM93.1761 29.8298C94.5991 29.8298 95.5114 28.7163 95.5114 26.7718C95.5114 24.8356 94.5907 23.7221 93.1761 23.7221C91.7615 23.7221 90.8408 24.8356 90.8408 26.7718C90.8408 28.7163 91.7615 29.8298 93.1761 29.8298Z" fill="white" />
                                                    <path d="M99.1589 22.4009H100.883V23.8883H100.925C101.218 22.8662 102.005 22.2596 103.043 22.2596C103.302 22.2596 103.528 22.3012 103.662 22.3261V23.9964C103.52 23.9382 103.202 23.8966 102.85 23.8966C101.687 23.8966 100.967 24.6694 100.967 25.9076V31.1427H99.1589V22.4009Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M111.026 28.5812H112.742C112.491 30.1767 110.967 31.3151 108.95 31.3151C106.364 31.3151 104.798 29.5784 104.798 26.8196C104.798 24.0774 106.389 22.2492 108.875 22.2492C111.319 22.2492 112.842 23.961 112.842 26.6118V27.2267H106.623V27.3348C106.623 28.8555 107.544 29.8609 108.992 29.8609C110.021 29.8609 110.783 29.3457 111.026 28.5812ZM106.623 26.0752L111.026 26.0339C111.026 25.6656 110.871 24.9828 110.506 24.6207C110.141 24.2587 109.604 23.9838 108.875 23.9838C107.406 23.9838 106.623 24.958 106.623 26.0752Z" fill="white" />
                                                </svg>
                                            </a>
                                            <a href='/'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="124" height="42" viewBox="0 0 124 42" fill="none">
                                                    <rect width="124" height="42" rx="6" fill="#1C1C1C" />
                                                    <path d="M38.1173 11.1907H35.5787V11.9386H37.3793C37.2902 12.9874 36.4113 13.4347 35.5818 13.4347C34.5204 13.4347 33.5941 12.6056 33.5941 11.4435C33.5941 10.3115 34.477 9.43977 35.584 9.43977C36.4382 9.43977 36.9415 9.98022 36.9415 9.98022L37.4689 9.43794C37.4689 9.43794 36.7919 8.6897 35.5571 8.6897C33.9847 8.6897 32.7684 10.0072 32.7684 11.4301C32.7684 12.8246 33.9126 14.1842 35.5971 14.1842C37.0788 14.1842 38.1634 13.1767 38.1634 11.6867C38.1634 11.3723 38.1173 11.1907 38.1173 11.1907Z" fill="white" />
                                                    <path d="M38.5956 23.2445H44.1741C44.178 23.2603 44.275 23.6573 44.275 24.3341C44.275 27.6082 41.8918 29.8225 38.6362 29.8225C34.9344 29.8225 32.4202 26.8347 32.4202 23.7707C32.4202 20.6437 35.0931 17.7487 38.5481 17.7488C41.2614 17.7488 42.7492 19.393 42.7492 19.393L41.59 20.5846C41.59 20.5846 40.4842 19.3967 38.6073 19.3967C36.1749 19.3967 34.2348 21.3125 34.2348 23.8C34.2348 26.3533 36.27 28.1753 38.6023 28.1753C40.4252 28.1753 42.3565 27.1924 42.552 24.8879H38.5956V23.2445Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M44.9867 25.9031C44.9867 23.8309 46.6271 22.0544 48.9162 22.0544C50.7978 22.0544 52.8382 23.378 52.8382 25.9482C52.8382 28.1906 51.0841 29.8154 48.9429 29.8154C46.5777 29.8154 44.9867 28.0058 44.9867 25.9031ZM51.1313 25.938C51.1313 24.4821 50.0646 23.5785 48.9389 23.5785C47.6741 23.5785 46.702 24.5825 46.702 25.9266C46.702 27.3003 47.6862 28.2922 48.9337 28.2922C50.069 28.2922 51.1313 27.3629 51.1313 25.938Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M57.555 22.0544C55.266 22.0544 53.6255 23.8309 53.6255 25.9031C53.6255 28.0058 55.2166 29.8154 57.582 29.8154C59.723 29.8154 61.4772 28.1906 61.4772 25.9482C61.4772 23.378 59.4368 22.0544 57.555 22.0544ZM57.5778 23.5785C58.7034 23.5785 59.7702 24.4821 59.7702 25.938C59.7702 27.3629 58.7079 28.2922 57.5725 28.2922C56.3251 28.2922 55.341 27.3003 55.341 25.9266C55.341 24.5825 56.3129 23.5785 57.5778 23.5785Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M62.2641 25.9358C62.2641 23.8853 63.9158 22.0585 66.0167 22.0585C66.9315 22.0585 67.6205 22.4099 68.1244 22.949V22.2918H69.7632V29.2647C69.7632 32.0044 68.1711 33.3104 66.082 33.3104C64.1722 33.3104 63.0994 32.1446 62.5663 31.0253L64.0686 30.4018C64.2767 30.9019 64.8756 31.7837 66.0695 31.7837C67.3055 31.7837 68.1243 30.9815 68.1243 29.6427V28.8775C67.687 29.3814 67.0947 29.8205 65.9805 29.8205C64.1788 29.8205 62.2641 28.2716 62.2641 25.9358ZM66.1688 23.5796C67.199 23.5796 68.2568 24.4528 68.2568 25.9441C68.2568 27.4598 67.2012 28.2951 66.1461 28.2951C65.0261 28.2951 63.9838 27.3923 63.9838 25.9585C63.9838 24.4687 65.0663 23.5796 66.1688 23.5796Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M73.7486 25.9246C73.7486 23.6146 75.4125 22.0491 77.3944 22.0491C78.9576 22.0491 80.1387 23.0842 80.645 24.3232L80.9172 24.956L75.6759 27.115C75.989 27.6936 76.4943 28.291 77.593 28.2911C78.5713 28.2911 79.1575 27.7631 79.5082 27.2228L80.8593 28.1154C80.2535 28.9202 79.2386 29.8183 77.5848 29.8183C75.6033 29.8183 73.7486 28.3688 73.7486 25.9246ZM77.4628 23.5417C78.177 23.5417 78.6909 23.9185 78.9092 24.3705L75.409 25.8229C75.2581 24.6984 76.3313 23.5417 77.4628 23.5417Z" fill="white" />
                                                    <path d="M72.7991 29.588H71.0775V18.1501H72.7991V29.588Z" fill="white" />
                                                    <path d="M94.1596 29.588H95.8812V18.1501H94.1596V29.588Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M86.7517 29.588H85.0301V18.1501L89.1945 18.15C91.2132 18.15 92.8648 19.7896 92.8648 21.7938C92.8648 23.7978 91.2132 25.4374 89.1945 25.4374H86.7517V29.588ZM86.7516 23.7283V19.8591H89.1945C90.263 19.8591 91.1433 20.733 91.1433 21.7938C91.1433 22.8544 90.263 23.7283 89.1945 23.7283H86.7516Z" fill="white" />
                                                    <path d="M108.592 33.3104L113.577 22.0494H111.696L109.441 27.1452L107.185 22.0494H105.305L108.5 29.2693L106.712 33.3104H108.592Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M102.927 29.588H104.649V25.4742C104.918 21.2315 99.4999 20.2336 97.4497 23.2922L98.8351 24.2151C99.8375 22.4752 102.698 22.8755 102.886 24.7401C102.026 24.5141 101.098 24.3502 100.249 24.4354C98.9247 24.5684 97.7907 25.4035 97.6105 26.7712C97.5131 27.5103 97.6793 28.4213 98.199 28.9765C99.0089 29.8416 100.339 29.9582 101.431 29.6626C102.046 29.4961 102.53 29.1334 102.927 28.6647V29.588ZM101.022 28.1717C101.964 27.917 102.707 27.2328 102.927 26.2816C102.445 26.1268 102.002 26.0018 101.494 25.9409C98.5359 25.4994 99.0312 28.7105 101.022 28.1717Z" fill="white" />
                                                    <path d="M49.2771 14.0776H48.4937V8.87237H49.2771V14.0776Z" fill="white" />
                                                    <path d="M44.1061 14.0776H44.8896V9.65012H46.1757V8.87237H42.82V9.65012H44.1061V14.0776Z" fill="white" />
                                                    <path d="M41.994 14.0776H38.9893V8.87237H41.994V9.65012H39.7729V11.0861H41.7266V11.8639H39.7729V13.2997H41.994V14.0776Z" fill="white" />
                                                    <path d="M51.9844 14.0776V9.65012H53.2705V8.87237H49.915V9.65012H51.201V14.0776H51.9844Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M55.2864 11.4301C55.2864 10.007 56.5028 8.6897 58.0751 8.6897C59.6475 8.6897 60.8639 10.007 60.8639 11.4301C60.8639 12.8134 59.7378 14.1624 58.0751 14.1837C56.4125 14.1624 55.2864 12.8134 55.2864 11.4301ZM58.0751 13.4344C57.0241 13.4216 56.1122 12.5966 56.1122 11.4435C56.1122 10.3208 56.9808 9.45403 58.0751 9.44001C59.1695 9.45403 60.0381 10.3208 60.0381 11.4435C60.0381 12.5966 59.1262 13.4216 58.0751 13.4344Z" fill="white" />
                                                    <path d="M62.43 14.0776H61.6464V8.87237H62.43L64.9449 12.662V8.87237H65.7285V14.0776H64.9463L62.43 10.286V14.0776Z" fill="white" />
                                                    <path d="M11.3758 15.1823L20.2279 23.9573L11.4183 32.8092C11.1612 32.647 11.0234 32.2958 11.021 31.8422L10.9412 16.1314C10.9387 15.6346 11.1208 15.3315 11.3758 15.1823Z" fill="white" />
                                                    <path d="M12.3827 15.1941L23.147 21.0243L20.5941 23.5892L12.0071 15.0769C12.1372 15.0939 12.2678 15.1318 12.3827 15.1941Z" fill="white" />
                                                    <path d="M23.6257 26.5944L20.9628 23.9547L23.623 21.2821L27.2863 23.266C28.1887 23.7545 27.7271 24.3657 27.2863 24.6052L23.6257 26.5944Z" fill="white" />
                                                    <path d="M12.3827 32.7031C12.3014 32.7482 12.223 32.7836 12.148 32.8116L20.5967 24.3227L23.1492 26.853L12.3827 32.7031Z" fill="white" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >

            <div className='mini_footer pt-4 pb-4'>
                <div className='container'>
                    <div className='footer_span'>
                        <span>© 2023 Ecommerce. </span>
                        <span>© 2023 Ecommerce. </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
