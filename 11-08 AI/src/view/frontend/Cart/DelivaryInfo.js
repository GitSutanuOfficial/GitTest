import React, { useState } from 'react';
import NewsLetter from '../../../component/frontend/NewsLetter'
import Header from '../../../component/frontend/Header'
import Footer from '../../../component/frontend/Footer'
import { useNavigate } from "react-router-dom"

function DelivaryInfo() {

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
                <div className="col done">
                  <div className="text-center text-success">
                    <i className="la-3x mb-2 fa fa-fw fa-map" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block">
                      2. Shipping info
                    </h3>
                  </div>
                </div>
                <div className="col active">
                  <div className="text-center text-primary">
                    <i className="la-3x mb-2 fa fa-fw fa-truck" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block">
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
          <form
            className="form-default"
          >
            <div className="row">
              <div className="col-md-8 mx-auto">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="NGUh9Gi7qvxuE2LTy4UxbSITkVZjJgo3OjzmHOkP"
                />
                <div className="card mb-3 shadow-sm border-0 rounded">
                  <div className="card-header p-3">
                    <h5 className="fs-16 fw-600 mb-0">Aipaze Products</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div className="d-flex">
                          <span className="mr-2">
                            <img
                              src={require("../../../assets/images/i4Cf1UN4x7EOOuZUeeES1K6TNAkvJPzEwWgG2vhl.jpg")}

                              className="img-fit size-60px rounded"
                              alt="Egg Roll (Single Egg)"
                            />
                          </span>
                          <span className="fs-14 opacity-60">
                            Egg Roll (Single Egg)
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="row border-top pt-3">
                      <div className="col-md-6">
                        <h6 className="fs-15 fw-600">Choose Delivery Type</h6>
                      </div>
                      <div className="col-md-6">
                        <div className="row gutters-5">
                          <div className="col-6">
                            <label className="aiz-megabox d-block bg-white mb-0">
                              <input
                                type="radio"
                                name="shipping_type_1"
                                defaultValue="home_delivery"
                                onchange="show_pickup_point(this)"
                                data-target=".pickup_point_id_admin"
                                defaultChecked=""
                              />
                              <span className="d-flex p-3 aiz-megabox-elem">
                                <span className="aiz-rounded-check flex-shrink-0 mt-1" />
                                <span className="flex-grow-1 pl-3 fw-600">
                                  Home Delivery
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="col-6">
                            <label className="aiz-megabox d-block bg-white mb-0">
                              <input
                                type="radio"
                                name="shipping_type_1"
                                defaultValue="pickup_point"
                                onchange="show_pickup_point(this)"
                                data-target=".pickup_point_id_admin"
                              />
                              <span className="d-flex p-3 aiz-megabox-elem">
                                <span className="aiz-rounded-check flex-shrink-0 mt-1" />
                                <span className="flex-grow-1 pl-3 fw-600">
                                  Local Pickup
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                        {/* <div className="mt-4 pickup_point_id_admin">
                    <div className="dropdown bootstrap-select form-control aiz-">
                      <select
                        className="form-control aiz-selectpicker"
                        name="pickup_point_id_1"
                        data-live-search="true"
                        tabIndex={-98}
                      >
                        <option>Select your nearest pickup point</option>
                      </select>
                      <button
                        type="button"
                        className="btn dropdown-toggle btn-light"
                        data-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-1"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="Select your nearest pickup point"
                      >
                        <div className="filter-option">
                          <div className="filter-option-inner">
                            <div className="filter-option-inner-inner">
                              Select your nearest pickup point
                            </div>
                          </div>
                        </div>
                      </button>
                      <div
                        className="dropdown-menu"
                        style={{ overflow: "hidden" }}
                      >
                        <div className="bs-searchbox">
                          <input
                            type="search"
                            className="form-control"
                            autoComplete="off"
                            role="combobox"
                            aria-label="Search"
                            aria-controls="bs-select-1"
                            aria-autocomplete="list"
                            aria-activedescendant="bs-select-1-0"
                          />
                        </div>
                        <div
                          className="inner show"
                          role="listbox"
                          id="bs-select-1"
                          tabIndex={-1}
                          style={{ overflowY: "auto" }}
                        >
                          <ul
                            className="dropdown-menu inner show"
                            role="presentation"
                            style={{ marginTop: 0, marginBottom: 0 }}
                          >
                            <li className="selected active">
                              <a
                                role="option"
                                className="dropdown-item active selected"
                                id="bs-select-1-0"
                                tabIndex={0}
                                aria-setsize={1}
                                aria-posinset={1}
                                aria-selected="true"
                              >
                                <span className="text">
                                  Select your nearest pickup point
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3 shadow-sm border-0 rounded">
                  <div className="card-header p-3"></div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div className="d-flex">
                          <span className="mr-2">
                            <img
                              src={require("../../../assets/images/LwsfZUI9sSCFC5BDY1DMIPhmfeagLEmf2lShfnUS.jpg")}

                              className="img-fit size-60px rounded"
                              alt="Bosch GWS 800 Corded Electric Angle Grinder, M10, 800W, 100 mm Disc Dia, Back Switch, Direct Cooling, Ergonomic, 1.7 kg + Auxiliary Handle & Accessories, 1 Year Warranty"
                            />
                          </span>
                          <span className="fs-14 opacity-60">
                            Bosch GWS 800 Corded Electric Angle Grinder, M10, 800W,
                            100 mm Disc Dia, Back Switch, Direct Cooling, Ergonomic,
                            1.7 kg + Auxiliary Handle &amp; Accessories, 1 Year
                            Warranty
                          </span>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex">
                          <span className="mr-2">
                            <img
                              src={require("../../../assets/images/LwsfZUI9sSCFC5BDY1DMIPhmfeagLEmf2lShfnUS.jpg")}

                              className="img-fit size-60px rounded"
                              alt="Bosch GWS 800 Corded Electric Angle Grinder, M10, 800W, 100 mm Disc Dia, Back Switch, Direct Cooling, Ergonomic, 1.7 kg + Auxiliary Handle & Accessories, 1 Year Warranty"
                            />
                          </span>
                          <span className="fs-14 opacity-60">
                            Bosch GWS 800 Corded Electric Angle Grinder, M10, 800W,
                            100 mm Disc Dia, Back Switch, Direct Cooling, Ergonomic,
                            1.7 kg + Auxiliary Handle &amp; Accessories, 1 Year
                            Warranty
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="row border-top pt-3">
                      <div className="col-md-6">
                        <h6 className="fs-15 fw-600">Choose Delivery Type</h6>
                      </div>
                      <div className="col-md-6">
                        <div className="row gutters-5">
                          <div className="col-6">
                            <label className="aiz-megabox d-block bg-white mb-0">
                              <input
                                type="radio"
                                name="shipping_type_1"
                                defaultValue="home_delivery"
                                onchange="show_pickup_point(this)"
                                data-target=".pickup_point_id_1"
                                defaultChecked=""
                              />
                              <span className="d-flex p-3 aiz-megabox-elem">
                                <span className="aiz-rounded-check flex-shrink-0 mt-1" />
                                <span className="flex-grow-1 pl-3 fw-600">
                                  Home Delivery
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="col-6">
                            <label className="aiz-megabox d-block bg-white mb-0">
                              <input
                                type="radio"
                                name="shipping_type_1"
                                defaultValue="pickup_point"
                                onchange="show_pickup_point(this)"
                                data-target=".pickup_point_id_1"
                              />
                              <span className="d-flex p-3 aiz-megabox-elem">
                                <span className="aiz-rounded-check flex-shrink-0 mt-1" />
                                <span className="flex-grow-1 pl-3 fw-600">
                                  Local Pickup
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="check-rgt">
                  <div className="order-btn text-center">
                    <button type="submit" className="cart-btn" onClick={() => navigate("/payment")}>
                      Continue to Payment
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

export default DelivaryInfo