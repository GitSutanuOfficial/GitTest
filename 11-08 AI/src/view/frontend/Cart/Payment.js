import React, { useState } from 'react';
import NewsLetter from '../../../component/frontend/NewsLetter'
import Header from '../../../component/frontend/Header'
import Footer from '../../../component/frontend/Footer'
import { useNavigate } from "react-router-dom"

function Payment() {
  const navigate = useNavigate()
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
                <div className="col done">
                  <div className="text-center text-success">
                    <i className="la-3x mb-2 fa fa-fw fa-truck" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block">
                      3. Delivery info
                    </h3>
                  </div>
                </div>
                <div className="col active">
                  <div className="text-center text-primary">
                    <i className="la-3x mb-2 fa fa-fw fa-credit-card" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block">
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
        <div className="container text-left">
          <div className="row">
            <div className="col-md-4"></div>
          </div>
          <form
            action="https://aipaze.com/checkout/payment"
            className="form-default"
            role="form"
            method="POST"
            id="checkout-form"
          >
            <div className="row">
              <div className="col-md-8">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="NGUh9Gi7qvxuE2LTy4UxbSITkVZjJgo3OjzmHOkP"
                />{" "}
                <input type="hidden" name="owner_id" defaultValue={1} />
                <div className="card shadow-sm border-0 rounded">
                  <div className="card-header p-3">
                    <h3 className="fs-16 fw-600 mb-0">Select a payment option</h3>
                  </div>
                  <div className="card-body text-center">
                    <div className="row">
                      <div className="col-xxl-8 col-xl-10 mx-auto">
                        <div className="row gutters-10">
                          <div className="col-6 col-md-4">
                            <label className="aiz-megabox d-block mb-3">
                              <input
                                defaultValue="ccavenue"
                                className="online_payment"
                                type="radio"
                                name="payment_option"
                                defaultChecked=""
                              />
                              <span className="d-block p-3 aiz-megabox-elem">
                                <img
                                  src={require("../../../assets/images/cc.jpg")}
                                  className="img-fluid mb-2"
                                />
                                <span className="d-block text-center">
                                  <span className="d-block fw-600 fs-15">
                                    CC avenue
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="col-6 col-md-4">
                            <label className="aiz-megabox d-block mb-3">
                              <input
                                defaultValue="cash_on_delivery"
                                className="online_payment"
                                type="radio"
                                name="payment_option"
                                defaultChecked=""
                              />
                              <span className="d-block p-3 aiz-megabox-elem">
                                <img
                                  src={require("../../../assets/images/cod.png")}
                                  className="img-fluid mb-2"
                                />
                                <span className="d-block text-center">
                                  <span className="d-block fw-600 fs-15">
                                    Cash on Delivery
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="separator mb-3">
                      <span className="bg-white px-3">
                        <span className="opacity-60">Or</span>
                      </span>
                    </div>
                    <div className="text-center py-4">
                      <div className="h6 mb-3">
                        <span className="opacity-80">Your wallet balance :</span>
                        <span className="fw-600">Rs 0.00</span>
                      </div>
                      <button type="button" className="btn btn-secondary" disabled="">
                        Insufficient balance
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" id="cart_summary">
                <div className="check-rgt">
                  <div className="card border-0 shadow-sm rounded">
                    <div className="card-header">
                      <h3 className="fs-16 fw-600 mb-0">Summary</h3>
                      <div className="text-right">
                        <span className="badge badge-inline badge-primary">
                          3 Items
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="product-name">Product</th>
                            <th className="product-total text-right">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="cart_item">
                            <td className="product-name">
                              Egg Roll (Single Egg)
                              <strong className="product-quantity">× 4</strong>
                            </td>
                            <td className="product-total text-right">
                              <span className="pl-4 pr-0">Rs 200.00</span>
                            </td>
                          </tr>
                          <tr className="cart_item">
                            <td className="product-name">
                              Bosch GWS 800 Corded Electric Angle Grinder, M10, 800W,
                              100 mm Disc Dia, Back Switch, Direct Cooling, Ergonomic,
                              1.7 kg + Auxiliary Handle &amp; Accessories, 1 Year
                              Warranty
                              <strong className="product-quantity">× 1</strong>
                            </td>
                            <td className="product-total text-right">
                              <span className="pl-4 pr-0">Rs 3,200.00</span>
                            </td>
                          </tr>
                          <tr className="cart_item">
                            <td className="product-name">
                              Bosch GWS 800 Corded Electric Angle Grinder, M10, 800W,
                              100 mm Disc Dia, Back Switch, Direct Cooling, Ergonomic,
                              1.7 kg + Auxiliary Handle &amp; Accessories, 1 Year
                              Warranty
                              <strong className="product-quantity">× 1</strong>
                            </td>
                            <td className="product-total text-right">
                              <span className="pl-4 pr-0">Rs 3,200.00</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table">
                        <tfoot>
                          <tr className="cart-subtotal">
                            <th>Subtotal</th>
                            <td className="text-right">
                              <span className="fw-600">Rs 6,600.00</span>
                            </td>
                          </tr>
                          <tr className="cart-shipping">
                            <th>Tax</th>
                            <td className="text-right">
                              <span className="font-italic">Rs 0.00</span>
                            </td>
                          </tr>
                          <tr className="cart-shipping">
                            <th>Total Shipping</th>
                            <td className="text-right">
                              <span className="font-italic">Rs 80.00</span>
                            </td>
                          </tr>
                          <tr className="cart-total">
                            <th>
                              <span className="strong-600">Total</span>
                            </th>
                            <td className="text-right">
                              <strong>
                                <span>Rs 6,680.00</span>
                              </strong>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div className="order-btn text-center">
                    <button
                      type="button"
                      onClick={() => navigate("/confermations")}
                      className="cart-btn"
                    >
                      Place Order
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

export default Payment