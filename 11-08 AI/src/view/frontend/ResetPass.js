import React, { useState } from 'react';
import NewsLetter from '../../component/frontend/NewsLetter'
import Footer from '../../component/frontend/Footer'
import Header from '../../component/frontend/Header'
import { useNavigate } from "react-router-dom";

function ResetPass() {
    const navigate = useNavigate();
  return (
    <>
    <div className='aiz-main-wrapper d-flex flex-column'>
    <Header />
    <div className="py-6">
  <div className="container">
    <div className="row">
      <div className="col-xxl-5 col-xl-6 col-md-8 mx-auto">
        <div className="bg-white rounded shadow-sm p-4 text-left">
          <h1 className="h3 fw-600">Forgot password?</h1>
          <p className="mb-4 opacity-60">
            Enter your email address to recover your password.{" "}
          </p>
          <form method="POST" action="">
            <input
              type="hidden"
            />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                defaultValue=""
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="form-group text-right">
              <button className="btn btn-primary btn-block  mt-2" type="submit">
                Send Password Reset Link
              </button>
            </div>
          </form>
          <div className="mt-3">
            <a
              onClick={() => navigate("/Login")}
              className="text-reset opacity-60"
            >
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    <NewsLetter />
    <Footer />
    
    </>
  )
}

export default ResetPass