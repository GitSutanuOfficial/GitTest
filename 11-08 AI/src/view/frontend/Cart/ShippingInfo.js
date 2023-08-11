import React, { useState } from 'react';
import NewsLetter from '../../../component/frontend/NewsLetter'
import Header from '../../../component/frontend/Header'
import Footer from '../../../component/frontend/Footer'
import { useNavigate } from "react-router-dom"

function ShippingInfo() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="pt-5 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="row aiz-steps arrow-divider">
                <div className="col done">
                  <div className="text-center text-success">
                    <i className="la-3x mb-2 fa fa-fw fa-shopping-cart" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block">1. My Cart</h3>
                  </div>
                </div>
                <div className="col active">
                  <div className="text-center text-primary">
                    <i className="la-3x mb-2 fa fa-fw fa-map" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block">
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
      <section className="mb-4 checkout-sec cmn-gap">
        <div className="container">
          <form className="form-default">
            <div className="row cols-xs-space cols-sm-space cols-md-space">
              <div className="col-md-8 mx-auto">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="NGUh9Gi7qvxuE2LTy4UxbSITkVZjJgo3OjzmHOkP"
                />
                <div className="shadow-sm bg-white p-4 rounded mb-4">
                  <div className="row gutters-5">
                    <div className="col-md-6 mb-3">
                      <label className="aiz-megabox d-block bg-white mb-0">
                        <input
                          type="radio"
                          name="address_id"
                          defaultValue={6}
                          required=""
                        />
                        <span className="d-flex p-3 aiz-megabox-elem">
                          <span className="aiz-rounded-check flex-shrink-0 mt-1" />
                          <span className="flex-grow-1 pl-3 text-left">
                            <div>
                              <span className="opacity-60">Address:</span>
                              <span className="fw-600 ml-2">40/1 tangra road</span>
                            </div>
                            <div>
                              <span className="opacity-60">Postal code:</span>
                              <span className="fw-600 ml-2">700029</span>
                            </div>
                            <div>
                              <span className="opacity-60">City:</span>
                              <span className="fw-600 ml-2">Kolkata</span>
                            </div>
                            <div>
                              <span className="opacity-60">State:</span>
                              <span className="fw-600 ml-2">West Bengal</span>
                            </div>
                            <div>
                              <span className="opacity-60">Country:</span>
                              <span className="fw-600 ml-2">India</span>
                            </div>
                            <div>
                              <span className="opacity-60">Phone:</span>
                              <span className="fw-600 ml-2">7272838749</span>
                            </div>
                          </span>
                        </span>
                      </label>
                      <div className="dropdown position-absolute right-0 top-0">
                        <button
                          className="btn bg-gray px-2"
                          type="button"
                          data-toggle="dropdown"
                        >
                          <i className="fa fa-fw fa-ellipsis-v" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" onclick="edit_address('6')">
                            Edit
                          </a>
                        </div>
                      </div>
                    </div>
                    <input type="hidden" name="checkout_type" defaultValue="logged" />
                    <div className="col-md-6 mx-auto mb-3">
                      <div
                        className="border p-3 rounded mb-3 c-pointer text-center bg-white h-100 d-flex flex-column justify-content-center"
                        onclick="add_new_address()"
                      >
                        <i className="fa fa-fw fa-plus la-2x mb-3" style={{ width: "100%" }} />
                        <div className="alpha-7">Add New Address</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-4">
                <div className="check-rgt">
                  <div className="order-btn text-center">
                    <button type="submit" className="cart-btn" onClick={() => navigate(`/delivaryInfo`)}>
                      Continue to Delivery Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>



      <NewsLetter />
      <Footer />
    </>
  )
}

export default ShippingInfo