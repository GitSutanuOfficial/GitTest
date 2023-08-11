import React, { useState } from 'react';
import Footer from '../../component/frontend/Footer'
import Header from '../../component/frontend/Header'
import NewsLetter from '../../component/frontend/NewsLetter'

function SingleProduct() {



    // count
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        if (count < 100) {
            setCount((prevCount) => prevCount + 1);
             console.log(count);
          }
      };
    
      const handleDecrement = () => {
        if (count > 1) {
          setCount((prevCount) => prevCount - 1);
           console.log(count);
        }
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted quantity:', count);
      };

    //   count End

  return (
    <>
            {/* Start Header */}
            <Header />

            <section className="whole-sec cmn-gap">
  <div className="container">
    <div className="whole-wrap">
      <div className="row">
        <div className="col-md-6">

        </div>
        <div className="col-md-6">
          <div className="prd-details">
            <div className="details-top">
              <h2>
                Bosch GWS 800 Corded Electric Angle Grinder, M10, 800W, 100 mm
                Disc Dia, Back Switch, Direct Cooling, Ergonomic, 1.7 kg +
                Auxiliary Handle &amp; Accessories, 1 Year Warranty
              </h2>
              <h6>Bosch</h6>
              <p>
                Rs 3,200.00
                <span className="sml-span"> M.R.P: Rs 5,900.00</span>
                <span>1 Piece</span>
              </p>
              <span className="save-span">
                You Save: <span className="green">Rs 2,700.00</span> Inclusive
                of all taxes
              </span>
              <div className="stock-sec">
                <p id="available-quantity green">In stock</p>
                <p>
                  <span> Sold by </span>Aipaze Retail
                </p>
              </div>
            </div>
            <div className="details-mdl">
              <h5>Available offers</h5>
              <ul className="tag-lst">
                <li>Partner Offer No min Order, Lowest Prices! Know More</li>
                <li>
                  Bank Offer 5% Unlimited Cashback on Axis Bank Credit
                  CardT&amp;C
                </li>
                <li>Combo OfferT&amp;C</li>
              </ul>
              <div className="offer-sec">
                
              </div>
            </div>
            <div className="details-btm">
              <form id="option-choice-form"  onSubmit={handleSubmit}> 
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="g3HZclkUmthzQHvm5o5MoLAr3njU3Q62uwja9Dn9"
                />
                <input type="hidden" name="id" defaultValue={568} />
                <div className="row no-gutters">
                  <div className="col-sm-3">
                    <div className="opacity-50 my-2 qty">Quantity:</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="product-quantity d-flex align-items-center">
                      <div
                        className="row no-gutters align-items-center aiz-plus-minus mr-3 sing_qtty"
                        
                      >
                        <button onClick={handleDecrement}>-</button>
                        <input
                          className="input_change"                       
                          value={count}
                          style={{ border: "none", textAlign: "center" }}
                        />
                         <button onClick={handleIncrement}>+</button>
                        <span>1 Piece</span>
                        <div className="avialable-amount opacity-60">
                        (<span id="available-quantity">In stock</span>)
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row no-gutters pb-3" id="chosen_price_div">
                  <div className="col-sm-3">
                    <div className="opacity-50 my-2 qty">Total Price:</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="product-price">
                      <strong
                        id="chosen_price"
                        className="h4 fw-600 text-primary"
                      >
                        Rs 3,200.00
                      </strong>
                    </div>
                  </div>
                </div>
              </form >
              <div className="mt-3 qty-btm-lwr">
                <button
                  type="button"
                  className="btn btn-soft-primary mr-2 add-to-cart fw-600 cart-btn cart-btn2"
                  onclick="addToCart()"
                >
                  <i className="fa fa-fw fa-shopping-bag" />
                  <span className="d-none d-md-inline-block dds">
                    {" "}
                    Add to cart
                  </span>
                </button>
                <button
                  type="button"
                  className="btn btn-primary buy-now fw-600"
                  onclick="buyNow()"
                >
                  <i className="fa fa-fw fa-shopping-cart" /> Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-secondary out-of-stock fw-600 d-none"
                  disabled=""
                >
                  <i className="fa fa-fw fa-cart-arrow-down" />  Out of Stock
                </button>
              </div>
              <div className="d-table width-100 mt-3">
                <div className="d-table-cell">
                  {/* Add to wishlist button */}
                  <button
                    type="button"
                    className="btn pl-0 btn-link fw-600"
                    onclick="addToWishList(568)"
                  >
                    Add to wishlist
                  </button>
                  {/* Add to compare button */}
                  <button
                    type="button"
                    className="btn btn-link btn-icon-left fw-600"
                    onclick="addToCompare(568)"
                  >
                    Add to compare
                  </button>
                </div>
              </div>
              <div className="row no-gutters mt-4">
                <div className="col-sm-2">
                  <div className="opacity-50 my-2">Share:</div>
                </div>
                <div className="col-sm-10">
                  <div className="aiz-share jssocials">
                    <div className="jssocials-shares">
                      <div className="jssocials-share jssocials-share-email">
                        <a
                          target="_self"
                          href=""
                          className="jssocials-share-link"
                        >
                          <i className="fa fa-fw fa-envelope" />
                        </a>
                      </div>
                      <div className="jssocials-share jssocials-share-twitter">
                        <a
                          target="_blank"
                          href=""
                          className="jssocials-share-link"
                        >
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </div>
                      <div className="jssocials-share jssocials-share-facebook">
                        <a
                          target="_blank"
                          href=""
                          className="jssocials-share-link"
                        >
                          <i className="fa-brands fa-facebook" />
                        </a>
                      </div>
                      <div className="jssocials-share jssocials-share-linkedin">
                        <a
                          target="_blank"
                          href=""
                          className="jssocials-share-link"
                        >
                          <i className="fa-brands fa-linkedin" />
                        </a>
                      </div>
                      <div className="jssocials-share jssocials-share-whatsapp">
                        <a
                          target="_self"
                          href=""
                          className="jssocials-share-link"
                        >
                          <i className="fa-brands fa-whatsapp" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

            {/*Start Newsletter*/}
            <NewsLetter />

            {/*Start Footer*/}
            <Footer />
    </>
  )
}

export default SingleProduct