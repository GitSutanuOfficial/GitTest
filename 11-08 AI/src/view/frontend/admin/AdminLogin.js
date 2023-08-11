import React from 'react'
import { useNavigate } from "react-router-dom"



function AdminLogin() {
  const navigate = useNavigate();
  return (
    <>
      <div className="aiz-main-wrapper d-flex admin_login">
        <div className="flex-grow-1">
          <div
            className="h-100 bg-cover bg-center py-5 d-flex align-items-center"
            style={{
              backgroundImage:
                "url(https://www.aipaze.com/public/uploads/all/kIaW9sEPHBh622goaRCsIWxQuCExll9xfki3vqHx.jpg)"

            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-xl-4 mx-auto">
                  <div className="card text-left">
                    <div className="card-body">
                      <div className="mb-5 text-center">
                        <img src="" className="mw-100 mb-4" height={40} />
                        <h1 className="h3 text-primary mb-0">Welcome to Aipaze</h1>
                        <p>Login to your account.</p>
                      </div>
                      <form
                        className="pad-hor cmmn_frmm"
                      >
                        <input
                          type="hidden"
                        />
                        <div className="form-group">
                          <input
                            id="email"
                            type="email"
                            className="form-control"
                            name="email"
                            defaultValue=""
                            required=""
                            autofocus=""
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            id="password"
                            type="password"
                            className="form-control"
                            name="password"
                            required=""
                            placeholder="Password"
                          />
                        </div>
                        <div className="row mb-2">
                          <div className="col-sm-6">
                            <div className="text-left">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  name="remember"
                                  id="remember"
                                />
                                <span>Remember Me</span>
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="text-right">
                              <a
                                onClick={() => navigate("/resetpass")}
                                className="text-reset fs-14"
                              >
                                Forgot password ?
                              </a>
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AdminLogin