import React, { useState } from 'react';
import NewsLetter from '../../../component/frontend/NewsLetter'
import Header from '../../../component/frontend/Header'
import Footer from '../../../component/frontend/Footer'
import { useNavigate } from "react-router-dom"


function MyCart() {
  const navigate = useNavigate();


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
    <div>
      <Header />
      <section className="pt-5 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="row aiz-steps arrow-divider">
                <div className="col active">
                  <div className="text-center text-primary">
                    <i className="la-3x mb-2 fa fa-fw fa-shopping-cart" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block">1. My Cart</h3>
                  </div>
                </div>
                <div className="col">
                  <div className="text-center">
                    <i className="la-3x mb-2 opacity-50 fa fa-fw fa-map" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block opacity-50">
                      2. Shipping info
                    </h3>
                  </div>
                </div>
                <div className="col">
                  <div className="text-center">
                    <i className="la-3x mb-2 opacity-50 fa fa-fw fa-truck" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block opacity-50">
                      3. Delivery info
                    </h3>
                  </div>
                </div>
                <div className="col">
                  <div className="text-center">
                    <i className="la-3x mb-2 opacity-50 fa fa-fw fa-credit-card" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block opacity-50">
                      4. Payment
                    </h3>
                  </div>
                </div>
                <div className="col">
                  <div className="text-center">
                    <i className="la-3x mb-2 opacity-50 fa fa-fw fa-check-circle" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block opacity-50">
                      5. Confirmation
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="mb-4 checkout-sec cmn-gap" id="cart-summary">
        <div className="container">
          <div className="checkout-outr">
            <div className="row">
              <div className="col-md-8">
                <div className="check-lft">
                  <div className="cmn-outr">
                    <div className="cmn-hdr-wrap">
                      <h5>My Cart </h5>
                    </div>
                    <div className="wishlist-outr cmn-innr-outr">
                      <div className="row">
                        <div className="col-md-5">
                          <figure className="check-img">
                            <a href="javascript:void(0)">
                              <img
                                src={require("../../../assets/images/LwsfZUI9sSCFC5BDY1DMIPhmfeagLEmf2lShfnUS.jpg")}
                                className="img-fit size-60px rounded"
                                alt="Bosch GWS 800 Corded Electric Angle Grinder, M10, 800W, 100 mm Disc Dia, Back Switch, Direct Cooling, Ergonomic, 1.7 kg + Auxiliary Handle & Accessories, 1 Year Warranty"
                              />
                            </a>
                          </figure>
                        </div>
                        <div className="col-md-7">
                          <div className="checkout-top-rgt">
                            <div className="wish-hdr">
                              <h6>
                                <a href="#">
                                  Bosch GWS 800 Corded Electric Angle Grinder, M10,
                                  800W, 100 mm Disc Dia, Back Switch, Direct Cooling,
                                  Ergonomic, 1.7 kg + Auxiliary Handle &amp;
                                  Accessories, 1 Year Warranty
                                </a>
                              </h6>
                              <div className="price-lft">
                                <a href="#">
                                  <span className="price">Rs 3,200.00</span>
                                </a>
                              </div>
                            </div>
                            <div className="check-innr">
                              <div className="qty_design">
                                <button onClick={handleDecrement}>-</button>
                                <input
                                  className="input_change"
                                  value={count}
                                  style={{ border: "none", textAlign: "center" }}
                                />
                                <button onClick={handleIncrement}>+</button>
                              </div>
                              <em className="off">( 46% off )</em>
                              <span>
                                ₹<del> 5900</del>
                              </span>
                            </div>
                            <div className="wish-innr">
                              <div className="wish-lft">
                                <p>
                                  Brand: <em> Bosch</em>
                                </p>
                              </div>
                            </div>
                            <p>
                              Type: <em> grinder</em>
                            </p>
                            <div className="check-btm">
                              <a
                                className="cart-btn rem-btn"
                                href="javascript:void(0)"
                                onclick="removeFromCartView(event, 372)"
                              >
                                Remove
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wishlist-outr cmn-innr-outr">
                      <div className="row">
                        <div className="col-md-5">
                          <figure className="check-img">
                            <a href="javascript:void(0)">
                              <img
                                src={require("../../../assets/images/LwsfZUI9sSCFC5BDY1DMIPhmfeagLEmf2lShfnUS.jpg")}
                                className="img-fit size-60px rounded"
                                alt="Bosch GWS 800 Corded Electric Angle Grinder, M10, 800W, 100 mm Disc Dia, Back Switch, Direct Cooling, Ergonomic, 1.7 kg + Auxiliary Handle & Accessories, 1 Year Warranty"
                              />
                            </a>
                          </figure>
                        </div>
                        <div className="col-md-7">
                          <div className="checkout-top-rgt">
                            <div className="wish-hdr">
                              <h6>
                                <a href="#">
                                  Bosch GWS 800 Corded Electric Angle Grinder, M10,
                                  800W, 100 mm Disc Dia, Back Switch, Direct Cooling,
                                  Ergonomic, 1.7 kg + Auxiliary Handle &amp;
                                  Accessories, 1 Year Warranty
                                </a>
                              </h6>
                              <div className="price-lft">
                                <a href="#">
                                  <span className="price">Rs 3,200.00</span>
                                </a>
                              </div>
                            </div>
                            <div className="check-innr">
                              <div className="qty_design">
                                <button onClick={handleDecrement}>-</button>
                                <input
                                  className="input_change"
                                  value={count}
                                  style={{ border: "none", textAlign: "center" }}
                                />
                                <button onClick={handleIncrement}>+</button>
                              </div>
                              <em className="off">( 46% off )</em>
                              <span>
                                ₹<del> 5900</del>
                              </span>
                            </div>
                            <div className="wish-innr">
                              <div className="wish-lft">
                                <p>
                                  Brand: <em> Bosch</em>
                                </p>
                              </div>
                            </div>
                            <p>
                              Type: <em> grinder</em>
                            </p>
                            <div className="check-btm">
                              <a
                                className="cart-btn rem-btn"
                                href="javascript:void(0)"
                                onclick="removeFromCartView(event, 372)"
                              >
                                Remove
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="check-rgt">
                  <h5>Price Details</h5>
                  <ul>
                    <li>
                      <h4>Price ( 2 items )</h4>
                      <span>Rs 9,600.00</span>
                    </li>
                    <li>
                      <h4>Discount</h4>
                      <span className="blu">Rs 8,100.00</span>
                    </li>
                    <li>
                      <h4>Estimated Tax</h4>
                      <span className="blu">Free</span>
                    </li>
                    <li>
                      <h4>Shipping</h4>
                      <span className="blu">By 1 Days</span>
                    </li>
                    <li>
                      <h4>Estimated Time</h4>
                      <span className="blu">By 02:00:00 </span>
                    </li>
                    <li>
                      <h5>Order Total</h5>
                      <em>Rs 9,600.00</em>
                    </li>
                  </ul>
                  <div className="order-btn text-center">
                    <a onClick={() => navigate(`/shipping`)} className="cart-btn">
                      Continue to Shipping
                    </a>
                  </div>
                </div>
                <div className="check-rgt-btm">
                  <p>You will save Rs 8,100.00 on this order</p>
                  <div className="shield">
                    <em>
                      <img
                        src={require("../../../assets/images/shield.png")}

                        alt="shield"
                      />
                    </em>
                    <p>
                      Safe &amp; Secure Payment. Easy returns. 100% authentic product
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <NewsLetter />
      <Footer />
    </div>
  )
}

export default MyCart