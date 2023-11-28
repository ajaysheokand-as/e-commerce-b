import './fig2.css';
import img1 from '../Images/229921_thry6d.png'
import gridview from '../Images/gridview.jpg'
import listview from '../Images/listview.jpg'
function Fig2() {
    return (
        <div class="containe">
            <div className="top">
                <div className="nav_his">
                    <p >Home</p>
                    <i class="bi bi-chevron-right"></i>
                    <p >Clothings</p>
                    <i class="bi bi-chevron-right"></i>
                    <p >Men’s wear</p>
                    <i class="bi bi-chevron-right"></i>
                    <p >Summer clothing</p>
                </div>
            </div>
            <div class="row">
                <div class="colu-2">
                    <div className="markname">
                        <h4>
                            Category
                        </h4>
                        <i class="bi bi-chevron-down" id="down"></i>
                    </div>
                    <div className='category_item'>Mobile accessory</div>
                    <div className='category_items'>Electronics</div>
                    <div className='category_items'>Smartphones </div>
                    <div className='category_items'>Modern tech</div>
                    <div className='category_items_see'>See all</div>






                    <div className="markname">
                        <h4>
                            Brands
                        </h4>
                        <i class="bi bi-chevron-down" id="down"></i>
                    </div>
                    <div className='brands_items'>
                        <input type='checkbox' id="samsung"></input>
                        <label className='txt' for="samsung">Samsung</label>
                    </div>
                    <div className='brands_items'>
                        <input type='checkbox' id="apple"></input>
                        <label className='txt' for="apple">Apple</label>
                    </div>
                    <div className='brands_items'>
                        <input type='checkbox' id="hauwai"></input>
                        <label className='txt' for="hauwai">Hauwai</label>
                    </div>
                    <div className='brands_items'>
                        <input type='checkbox' id="poco"></input>
                        <label className='txt' for="poco">Poco</label>
                    </div>
                    <div className='brands_items'>
                        <input type='checkbox' id="lenovo"></input>
                        <label className='txt' for="lenovo">Lenovo</label>
                    </div>
                    <div className='category_items_see'>See all</div>






                    <div className="markname">
                        <h4>
                            Features
                        </h4>
                        <i class="bi bi-chevron-down" id="down"></i>
                    </div>
                    <div className='features_items'>
                        <input type='checkbox'></input>
                        <div className='txt'>Metallic</div>
                    </div>
                    <div className='features_items'>
                        <input type='checkbox'></input>
                        <div className='txt'>Plastic cover</div>
                    </div>
                    <div className='features_items'>
                        <input type='checkbox'></input>
                        <div className='txt'>8GB Ram</div>
                    </div>
                    <div className='features_items'>
                        <input type='checkbox'></input>
                        <div className='txt'>Super power</div>
                    </div>
                    <div className='features_items'>
                        <input type='checkbox'></input>
                        <div className='txt'>Large Memory</div>
                    </div>
                    <div className='category_items_see'>See all</div>





                    <div className="markname">
                        <h4>
                            Price Range
                        </h4>
                        <i class="bi bi-chevron-down" id="down"></i>
                    </div>
                    <input type='range' className='pricerange' />
                    <div className='range'>
                        <div className='min_range'>
                            Min
                            <input type='text' placeholder='0' />
                        </div>
                        <div className='max_range'>
                            Max
                            <input type='text' placeholder='999999' />
                        </div>
                    </div>
                    <div className='apply_button'>Apply</div>





                    <div className="markname">
                        <h4>
                            Condition
                        </h4>
                        <i class="bi bi-chevron-down" id="down"></i>
                    </div>
                    <div className='Condition_items'>
                        <input type='radio'></input>
                        <div className='txt'>Any</div>
                    </div>
                    <div className='Condition_items'>
                        <input type='radio'></input>
                        <div className='txt'>Refurbished</div>
                    </div>
                    <div className='Condition_items'>
                        <input type='radio'></input>
                        <div className='txt'>Brand News</div>
                    </div>
                    <div className='Condition_items'>
                        <input type='radio'></input>
                        <div className='txt'>Old Items</div>
                    </div>



                    <div className="rating">
                        <div className="markname">
                            <h4>
                                Ratings
                            </h4>
                            <i class="bi bi-chevron-down" id="down"></i>
                        </div>
                        <div className='ratings_items'>
                            <input type='checkbox'></input>
                            <div className='txt'>Super power</div>
                        </div>
                        <div className='ratings_items'>
                            <input type='checkbox'></input>
                            <div className='txt'>Super power</div>
                        </div>
                        <div className='ratings_items'>
                            <input type='checkbox'></input>
                            <div className='txt'>Super power</div>
                        </div>
                        <div className='ratings_items'>
                            <input type='checkbox'></input>
                            <div className='txt'>Super power</div>
                        </div>
                    </div>
                </div>
                <div class="colu-10">
                    <div className="item_bar">
                        <div className="item_avaible">12,911 items in <b>Mobile accessory</b> </div>
                        <input type="checkbox"></input>
                        <div className="verify_check">Verified only</div>
                        <div className="feature">Featured <i class="bi bi-chevron-down"></i></div>
                        <img src={gridview} alt='img'/>
                        <img src={listview} alt='img'/>
                    </div>
                    <div className="available_items">
                        <div className="img1">
                            <img src={img1} />
                        </div>
                        <div className="item_specs">
                            <div className="item_name">Canon Cmera EOS 2000, Black 10x zoom</div>
                            <div className="item_price">$998.00 <strike>$1128.00</strike></div>
                            <div className="available_item_rating"><img src="https://www.shutterstock.com/image-vector/rating-sticker-icon-five-gold-260nw-1926055046.jpg" /> 9.5 <span style={{ color: "#8B96A5" }}>154 ordes</span> <span style={{ color: "#00B517" }}>Free Shipping</span></div>
                            <div className="available_item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                            <span style={{ color: "#0D6EFD" }}>View details</span>
                        </div>
                    </div>
                    <div className="available_items">
                        <div className="img1">
                            <img src={img1} style={{ width: '100%' }} />
                        </div>
                        <div className="item_specs">
                            <div className="item_name">Canon Cmera EOS 2000, Black 10x zoom</div>
                            <div className="item_price">$998.00 <strike>$1128.00</strike></div>
                            <div className="available_item_rating"><img src="https://www.shutterstock.com/image-vector/rating-sticker-icon-five-gold-260nw-1926055046.jpg" /> 9.5 <span style={{ color: "#8B96A5" }}>154 ordes</span> <span style={{ color: "#00B517" }}>Free Shipping</span></div>
                            <div className="available_item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                            <span style={{ color: "#0D6EFD" }}>View details</span>
                        </div>
                    </div>
                    <div className="available_items">
                        <div className="img1">
                            <img src={img1} style={{ width: '100%' }} />
                        </div>
                        <div className="item_specs">
                            <div className="item_name">Canon Cmera EOS 2000, Black 10x zoom</div>
                            <div className="item_price">$998.00 <strike>$1128.00</strike></div>
                            <div className="available_item_rating"><img src="https://www.shutterstock.com/image-vector/rating-sticker-icon-five-gold-260nw-1926055046.jpg" /> 9.5 <span style={{ color: "#8B96A5" }}>154 ordes</span> <span style={{ color: "#00B517" }}>Free Shipping</span></div>
                            <div className="available_item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                            <span style={{ color: "#0D6EFD" }}>View details</span>
                        </div>
                    </div>
                    <div className="available_items">
                        <div className="img1">
                            <img src={img1} style={{ width: '100%' }} />
                        </div>
                        <div className="item_specs">
                            <div className="item_name">Canon Cmera EOS 2000, Black 10x zoom</div>
                            <div className="item_price">$998.00 <strike>$1128.00</strike></div>
                            <div className="available_item_rating"><img src="https://www.shutterstock.com/image-vector/rating-sticker-icon-five-gold-260nw-1926055046.jpg" /> 9.5 <span style={{ color: "#8B96A5" }}>154 ordes</span> <span style={{ color: "#00B517" }}>Free Shipping</span></div>
                            <div className="available_item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                            <span style={{ color: "#0D6EFD" }}>View details</span>
                        </div>
                    </div>
                    <div className="available_items">
                        <div className="img1">
                            <img src={img1} style={{ width: '100%' }} />
                        </div>
                        <div className="item_specs">
                            <div className="item_name">Canon Cmera EOS 2000, Black 10x zoom</div>
                            <div className="item_price">$998.00 <strike>$1128.00</strike></div>
                            <div className="available_item_rating"><img src="https://www.shutterstock.com/image-vector/rating-sticker-icon-five-gold-260nw-1926055046.jpg" /> 9.5 <span style={{ color: "#8B96A5" }}>154 ordes</span> <span style={{ color: "#00B517" }}>Free Shipping</span></div>
                            <div className="available_item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                            <span style={{ color: "#0D6EFD" }}>View details</span>
                        </div>
                    </div>
                    <div className="available_items">
                        <div className="img1">
                            <img src={img1} style={{ width: '100%' }} />
                        </div>
                        <div className="item_specs">
                            <div className="item_name">Canon Cmera EOS 2000, Black 10x zoom</div>
                            <div className="item_price">$998.00 <strike>$1128.00</strike></div>
                            <div className="available_item_rating"><img src="https://www.shutterstock.com/image-vector/rating-sticker-icon-five-gold-260nw-1926055046.jpg" /> 9.5 <span style={{ color: "#8B96A5" }}>154 ordes</span> <span style={{ color: "#00B517" }}>Free Shipping</span></div>
                            <div className="available_item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                            <span style={{ color: "#0D6EFD" }}>View details</span>
                        </div>
                    </div>
                    <div className="available_items">
                        <div className="img1">
                            <img src={img1} style={{ width: '100%' }} />
                        </div>
                        <div className="item_specs">
                            <div className="item_name">Canon Cmera EOS 2000, Black 10x zoom</div>
                            <div className="item_price">$998.00 <strike>$1128.00</strike></div>
                            <div className="available_item_rating"><img src="https://www.shutterstock.com/image-vector/rating-sticker-icon-five-gold-260nw-1926055046.jpg" /> 9.5 <span style={{ color: "#8B96A5" }}>154 ordes</span> <span style={{ color: "#00B517" }}>Free Shipping</span></div>
                            <div className="available_item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                            <span style={{ color: "#0D6EFD" }}>View details</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagi">
                <div className="page_numbers">Show 10 <i class="bi bi-chevron-down"></i></div>
                <div className="page_no"><i class="bi bi-chevron-left"></i></div>
                <div className="page_no">1</div>
                <div className="page_no">2</div>
                <div className="page_no">3</div>
                <div className="page_no"><i class="bi bi-chevron-right"></i></div>
            </div>
        </div>
    );
}
export default Fig2;