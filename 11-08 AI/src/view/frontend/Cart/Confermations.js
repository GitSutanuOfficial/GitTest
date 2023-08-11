import React, { useState } from 'react';
import NewsLetter from '../../../component/frontend/NewsLetter'
import Header from '../../../component/frontend/Header'
import Footer from '../../../component/frontend/Footer'
import { useNavigate } from "react-router-dom"

function Confermations() {
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
                <div className="col done">
                  <div className="text-center text-success">
                    <i className="la-3x mb-2 fa fa-fw fa-credit-card" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block">
                      4. Payment
                    </h3>
                  </div>
                </div>
                <div className="col active">
                  <div className="text-center  text-primary">
                    <i className="la-3x mb-2 fa fa-fw fa-check-circle" />
                    <h3 className="fs-14 fw-600 d-none d-lg-block">
                      5. Confirmation
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container text-left">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="text-center py-4 mb-4">
                <i className="la la-check-circle la-3x text-success mb-3" />
                <h1 className="h3 mb-3 fw-600">Thank You for Your Order!</h1>
                <p className="font-italic">
                  A copy or your order summary has been sent to biswabrata77@gmail.com
                </p>
              </div>
              <div className="mb-4 bg-white p-4 rounded shadow-sm">
                <h5 className="fw-600 mb-3 fs-17 pb-2">Order Summary</h5>
                <div className="row">
                  <div className="col-md-6">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="w-50 fw-600">Order date:</td>
                          <td>18-07-2023 22:46 PM</td>
                        </tr>
                        <tr>
                          <td className="w-50 fw-600">Name:</td>
                          <td>biswa</td>
                        </tr>
                        <tr>
                          <td className="w-50 fw-600">Email:</td>
                          <td>biswabrata77@gmail.com</td>
                        </tr>
                        <tr>
                          <td className="w-50 fw-600">Shipping address:</td>
                          <td>40/1 tangra road, Kolkata, India</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="w-50 fw-600">Order status:</td>
                          <td>Pending</td>
                        </tr>
                        <tr>
                          <td className="w-50 fw-600">Total order amount:</td>
                          <td>Rs 6,680.00</td>
                        </tr>
                        <tr>
                          <td className="w-50 fw-600">Shipping:</td>
                          <td>Flat shipping rate</td>
                        </tr>
                        <tr>
                          <td className="w-50 fw-600">Payment method:</td>
                          <td>Cash on delivery</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card shadow-sm border-0 rounded">
                <div className="card-body">
                  <div className="text-center py-4 mb-4">
                    <h2 className="h5">
                      Order Code:{" "}
                      <span className="fw-700 text-primary">20230718-22463751</span>
                    </h2>
                  </div>
                  <div>
                    <h5 className="fw-600 mb-3 fs-17 pb-2">Order Details</h5>
                    <div>
                      <table className="table table-responsive-md">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th width="30%">Product</th>
                            <th>Variation</th>
                            <th>Quantity</th>
                            <th>Delivery Type</th>
                            <th className="text-right">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <a
                                href=""
                                target="_blank"
                                className="text-reset"
                              >
                                Egg Roll (Single Egg)
                              </a>
                            </td>
                            <td></td>
                            <td>4</td>
                            <td>Home Delivery</td>
                            <td className="text-right">Rs 200.00</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              <a
                                href=""
                                target="_blank"
                                className="text-reset"
                              >
                                Bosch GWS 800 Corded Electric Angle Grinder, M10,
                                800W, 100 mm Disc Dia, Back Switch, Direct Cooling,
                                Ergonomic, 1.7 kg + Auxiliary Handle &amp;
                                Accessories, 1 Year Warranty
                              </a>
                            </td>
                            <td></td>
                            <td>1</td>
                            <td>Home Delivery</td>
                            <td className="text-right">Rs 3,200.00</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              <a
                                href=""
                                target="_blank"
                                className="text-reset"
                              >
                                Bosch GWS 800 Corded Electric Angle Grinder, M10,
                                800W, 100 mm Disc Dia, Back Switch, Direct Cooling,
                                Ergonomic, 1.7 kg + Auxiliary Handle &amp;
                                Accessories, 1 Year Warranty
                              </a>
                            </td>
                            <td></td>
                            <td>1</td>
                            <td>Home Delivery</td>
                            <td className="text-right">Rs 3,200.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <div className="col-xl-5 col-md-6 ml-auto mr-0">
                        <table className="table ">
                          <tbody>
                            <tr>
                              <th>Subtotal</th>
                              <td className="text-right">
                                <span className="fw-600">Rs 6,600.00</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Shipping</th>
                              <td className="text-right">
                                <span className="font-italic">Rs 80.00</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Tax</th>
                              <td className="text-right">
                                <span className="font-italic">Rs 0.00</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Coupon Discount</th>
                              <td className="text-right">
                                <span className="font-italic">Rs 0.00</span>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="fw-600">Total</span>
                              </th>
                              <td className="text-right">
                                <strong>
                                  <span>Rs 6,680.00</span>
                                </strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <NewsLetter />
      <Footer />
    </>
  )
}

export default Confermations