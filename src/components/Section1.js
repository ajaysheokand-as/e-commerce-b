import './index.css'
import img1 from '../Images/btn-group.png'
import img2 from '../Images/btn-group1.png'
import img3 from '../Images/chevron_right.png'
import img4 from '../Images/clear.png'
import img5 from '../Images/expand_less.png'
import img6 from '../Images/expand_more.png'
import Iphone from '../Images/iphone1.png'
import iphone1 from '../Images/Iphone2.png'
import samsung from '../Images/Samsung1.png'
import tablet from '../Images/tablet.png'
import camera from '../Images/Camera.png'
import laptop from '../Images/laptop.png'
import watch from '../Images/Watch.png' 
import star4 from '../Images/4rating.png'
import star3 from '../Images/rating.png'
import heart from '../Images/btn-basic.png'
function Section1() {
    return (
        <div className="main">
            <div className="top">
                <div className="nav_his">
                    <p >Home</p>
                    <img className="right_arrow" src={img3} alt="..." />
                    <p >Clothings</p>
                    <img className="right_arrow" src={img3} alt="..." />
                    <p >Men’s wear</p>
                    <img className="right_arrow" src={img3} alt="..." />
                    <p >Summer clothing</p>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom_left">
                    <div className="Category">
                        <div className="cat_head">
                            <p>Category</p>
                            <img className="cat_img" src={img5} alt="..." />
                        </div>
                        <div className="cat_content">
                            <p>Mobile accessory</p>
                            <p>Electronics</p>
                            <p>Smartphones </p>
                            <p>Modern tech</p>
                            <p className="cat_see">See all</p>
                        </div>
                    </div>
                    <div className="Brand">
                        <div className="Brand_head">
                            <p>Brand</p>
                            <img className="Brand_img" src={img5} alt="..." />
                        </div>
                        <div>
                            <div className='chec_div'>
                                <form>
                                    <input className="checkbox" type="checkbox" id="Samsung" /><label for="Samsung" className="Brand_content">Samsung</label>
                                </form>
                            </div>
                            <div className='chec_div'>
                                <form>
                                    <input className="checkbox" type="checkbox" id="Apple" /><label for="Apple" className="Brand_content">Apple</label>
                                </form>
                            </div>
                            <div className='chec_div'>
                                <form>
                                    <input className="checkbox" type="checkbox" id="Huawei" /><label for="Huawei" className="Brand_content">Huawei</label>
                                </form>
                            </div>
                            <div className='chec_div'>
                                <form>
                                    <input className="checkbox" type="checkbox" id="Pocco" /><label for="Pocco" className="Brand_content">Pocco</label>
                                </form>
                            </div>
                            <div className='chec_div'>
                                <form>
                                    <input className="checkbox" type="checkbox" id="Lenovo" /><label for="Lenovo" className="Brand_content">Lenovo</label>
                                </form>
                            </div>
                            <p className="Brand_see">See all</p>
                        </div>
                    </div>
                    <div className="Features">
                        <div className="Features_head">
                            <p>Features</p>
                            <img className="Features_img" src={img5} alt="..." />
                        </div>
                        <div>
                            <div className='chec_div'>
                                <form>
                                    <input className="checkbox" type="checkbox" id="Metallic" /><label for="Metallic" className="Features_content">Metallic</label>
                                </form>
                            </div>
                            <div className='chec_div'>
                                <form>
                                    <input className="checkbox" type="checkbox" id="Plastic cover" /><label for="Plastic cover" className="Features_content">Plastic cover</label>
                                </form>
                            </div>
                            <div className='chec_div'>
                                <form>
                                    <input className="checkbox" type="checkbox" id="8GB Ram" /><label for="8GB Ram" className="Features_content">8GB Ram</label>
                                </form>
                            </div>
                            <div className='chec_div'>
                                <form>
                                    <input className="checkbox" type="checkbox" id="Super power" /><label for="Super power" className="Features_content">Super power</label>
                                </form>
                            </div>
                            <div className='chec_div'>
                                <form>
                                    <input className="checkbox" type="checkbox" id="Large Memory" /><label for="Large Memory" className="Features_content">Large Memory</label>
                                </form>
                            </div>
                            <p className="Features_see">See all</p>
                        </div>
                    </div>
                    <div className="Price_range">
                        <div className="Price_range_head">
                            <p>Price range</p>
                            <img className="Price_range_img" src={img6} alt="..." />
                        </div>
                    </div>
                    <div className="Condition">
                        <div className="Condition_head">
                            <p>Condition</p>
                            <img className="Condition_img" src={img6} alt="..." />
                        </div>
                    </div>
                    <div className="Ratings">
                        <div className="Ratings_head">
                            <p>Ratings</p>
                            <img className="Ratings_img" src={img6} alt="..." />
                        </div>
                    </div>
                    <div className="Manufacturer">
                        <div className="Manufacturer_head">
                            <p>Manufacturer</p>
                            <img className="Manufacturer_img" src={img6} alt="..." />
                        </div>
                    </div>
                </div>
                <div className="bottom_right">
                    <div className="nav">
                        <div className="nav_text">12,911 items in <span>Mobile accessory</span></div>
                        <div className="verfie">
                            <form>
                                <input className="checkbox" type="checkbox" id="Verfie" /><label for="Verfie" className="verifie_text">Verified only</label>
                            </form>
                        </div>
                        <div className="nav_fetures">
                            <p className="nav_fetures_text">Featured</p>
                            <img className="Featured_img" src={img6} alt="..." />
                        </div>
                        <div className="btn-grp">
                            <img className="btn_img" src={img1} alt="..." />
                            <img className="btn_img" src={img2} alt="..." />
                        </div>
                    </div>
                    <div className="tags">
                        <div id="Samsung" className="Samsung">
                            <p className="tag_text">Samsung</p>
                            <img className="clear_sams" src={img4} alt="clear" />
                        </div>
                        <div id="Apple" className="Apple">
                            <p className="tag_text">Apple</p>
                            <img className="clear_app" src={img4} alt="clear" />
                        </div>
                        <div id="Pocco" className="Pocco">
                            <p className="tag_text">Pocco</p>
                            <img className="clear_Pocco" src={img4} alt="clear" />
                        </div>
                        <div id="Metallic" className="Metallic">
                            <p className="tag_text">Metallic</p>
                            <img className="clear_Metallic" src={img4} alt="clear" />
                        </div>
                        <div id="4star" className="star4">
                            <p className="tag_text">4 star</p>
                            <img className="clear_4start" src={img4} alt="clear" />
                        </div>
                        <div id="3star" className="star3">
                            <p className="tag_text">3 star</p>
                            <img class="clear_3start" src={img4} alt="clear" />
                        </div>
                        <div className="clear">
                            Clear all filter
                        </div>
                    </div>
                    <div className='cards'>
                        <div style={{ display: "flex" }}>
                            <div class='card1'>
                                <div>
                                    <div className='card_img'>
                                        <img src={Iphone} alt='...'></img>
                                    </div>
                                    <div className='card_price'>
                                        <p>$99.50<span className='strike_price'><strike>$1128.00</strike></span></p>
                                        <img className='like' src={heart} alt='...'></img>
                                    </div>
                                    <div className='rating'>
                                        <img src={star4} alt='...'></img>
                                        <p className='rating_text'>7.5</p>
                                    </div>
                                    <div className='item_name'>
                                        GoPro HERO6 4K Action Camera - Black
                                    </div>
                                </div>
                            </div>
                            <div class='card2'>
                                <div>
                                    <div className='card_img'>
                                        <img src={iphone1} alt='...'></img>
                                    </div>
                                    <div className='card_price'>
                                        <p>$99.50<span className='strike_price'><strike>$1128.00</strike></span></p>
                                        <img className='like' src={heart} alt='...'></img>
                                    </div>
                                    <div className='rating'>
                                        <img src={star3} alt='...'></img>
                                        <p className='rating_text'>5.9</p>
                                    </div>
                                    <div className='item_name'>
                                        GoPro HERO6 4K Action Camera - Black
                                    </div>
                                </div>
                            </div>
                            <div class='card3'>
                                <div>
                                    <div className='card_img'>
                                        <img src={samsung} alt='...'></img>
                                    </div>
                                    <div className='card_price'>
                                        <p>$99.50</p>
                                        <img className='like_span' src={heart} alt='...'></img>
                                    </div>
                                    <div className='rating'>
                                        <img src={star4} alt='...'></img>
                                        <p className='rating_text'>7.5</p>
                                    </div>
                                    <div className='item_name'>
                                        GoPro HERO6 4K Action Camera - Black
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div class='card1'>
                                <div>
                                    <div className='card_img'>
                                        <img src={tablet} alt='...'></img>
                                    </div>
                                    <div className='card_price'>
                                        <p>$99.50<span className='strike_price'><strike>$1128.00</strike></span></p>
                                        <img className='like' src={heart} alt='...'></img>
                                    </div>
                                    <div className='rating'>
                                        <img src={star4} alt='...'></img>
                                        <p className='rating_text'>7.5</p>
                                    </div>
                                    <div className='item_name'>
                                        GoPro HERO6 4K Action Camera - Black
                                    </div>
                                </div>
                            </div>
                            <div class='card2'>
                                <div>
                                    <div className='card_img'>
                                        <img src={camera} alt='...'></img>
                                    </div>
                                    <div className='card_price'>
                                        <p>$99.50<span className='strike_price'><strike>$1128.00</strike></span></p>
                                        <img className='like' src={heart} alt='...'></img>
                                    </div>
                                    <div className='rating'>
                                        <img src={star4} alt='...'></img>
                                        <p className='rating_text'>7.5</p>
                                    </div>
                                    <div className='item_name'>
                                        GoPro HERO6 4K Action Camera - Black
                                    </div>
                                </div>
                            </div>
                            <div class='card3'>
                                <div>
                                    <div className='card_img'>
                                        <img src={iphone1} alt='...'></img>
                                    </div>
                                    <div className='card_price'>
                                        <p>$99.50</p>
                                        <img className='like_span' src={heart} alt='...'></img>
                                    </div>
                                    <div className='rating'>
                                        <img src={star4} alt='...'></img>
                                        <p className='rating_text'>7.5</p>
                                    </div>
                                    <div className='item_name'>
                                        GoPro HERO6 4K Action Camera - Black
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div class='card1'>
                                <div>
                                    <div className='card_img'>
                                        <img src={laptop} alt='...'></img>
                                    </div>
                                    <div className='card_price'>
                                        <p>$99.50<span className='strike_price'><strike>$1128.00</strike></span></p>
                                        <img className='like' src={heart} alt='...'></img>
                                    </div>
                                    <div className='rating'>
                                        <img src={star4} alt='...' />
                                        <p className='rating_text'>7.5</p>
                                    </div>
                                    <div className='item_name'>
                                        GoPro HERO6 4K Action Camera - Black
                                    </div>
                                </div>
                            </div>
                            <div class='card2'>
                                <div>
                                    <div className='card_img'>
                                        <img src={watch} alt='...'></img>
                                    </div>
                                    <div className='card_price'>
                                        <p>$99.50<span className='strike_price'><strike>$1128.00</strike></span></p>
                                        <img className='like' src={heart} alt='...'></img>
                                    </div>
                                    <div className='rating'>
                                        <img src={star4} alt='...'></img>
                                        <p className='rating_text'>7.5</p>
                                    </div>
                                    <div className='item_name'>
                                        GoPro HERO6 4K Action Camera - Black
                                    </div>
                                </div>
                            </div>
                            <div class='card3'>
                                <div>
                                    <div className='card_img'>
                                        <img src={Iphone} alt='...'></img>
                                    </div>
                                    <div className='card_price'>
                                        <p>$99.50</p>
                                        <img className='like_span' src={heart} alt='...'></img>
                                    </div>
                                    <div className='rating'>
                                        <img src={star4} alt='...'></img>
                                        <p className='rating_text'>7.5</p>
                                    </div>
                                    <div className='item_name'>
                                        GoPro HERO6 4K Action Camera - Black
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pagination'>
                        <div className='select_page'>
                            <form>
                                <select className='select'>
                                    <option>Show 1</option>
                                    <option>Show 2</option>
                                    <option>Show 3</option>
                                    <option>Show 4</option>
                                    <option>Show 5</option>
                                    <option>Show 6</option>
                                    <option>Show 7</option>
                                    <option>Show 8</option>
                                    <option>Show 9</option>
                                    <option>Show 10</option>
                                </select>
                            </form>
                        </div>
                        <div className='next_page'>
                            <div className="left_page">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </div>
                            <div className="move_page" style={{backgroundColor: "#EFF2F4"}}>1</div>
                            <div className="move_page">2</div>
                            <div className="move_page">3</div>
                            <div className="right_page">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Section1;