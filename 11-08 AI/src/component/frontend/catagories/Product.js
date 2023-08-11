import React from 'react'

function Product({ prod_img = "", prod_name = "", prod_price = "", prod_brnd = "", review_count = "",id = "",prod_discount="" }) {

    let fullImgPath = prod_img ? "http://aipaze.com/public/" + prod_img  :  `https://aipaze.com/public/assets/img/placeholder.jpg`

    
    return (
        <div className="col-lg-4 col-md-6">
            <div className="list-innr">
                <a
                    href="javascript:void(0)"
                    className="list-fig"
                >
                    <figure>
                        <img
                            src={fullImgPath}
                            alt={prod_name}
                        />
                    </figure>
                </a>
                <div className="list-txt">
                    <h5>
                        <a href="javascript:void(0)">
                            {prod_name}
                        </a>
                    </h5>
                    <span className="product-brand">{prod_brnd}</span>
                    <div className="price-lst">
                        <div className="price-lft">
                            <a href="#">
                                <span className="price">Rs {prod_price - prod_discount}</span>
                            </a>
                        </div>
                        <div className="price-rgt">
                            <i className="fa fa-fw fa-star" />
                            <i className="fa fa-fw fa-star" />
                            <i className="fa fa-fw fa-star" />
                            <i className="fa fa-fw fa-star" />
                            <i className="fa fa-fw fa-star" />
                            <a href="javascript:void(0)">
                                <span className="reviews">({review_count  ? review_count : `100+` } Reviews)</span>
                            </a>
                        </div>
                    </div>
                    <a
                        className="cart-btn cart-btn2"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Product