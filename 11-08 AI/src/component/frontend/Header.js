import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { get } from '../../service/httpClient';

function Header() {

  const navigate = useNavigate();


  // Sidebar Js
  const [sidebar_active, set_sidebar_active] = useState(false);
  const Sidebar_handleClick = () => {
      {
          sidebar_active ? set_sidebar_active(false) : set_sidebar_active(true)
      }
  };
  // Sidebar Js End


  // Side bar catagories
  const [catSide, setcatSide] = useState([])
  async function getCatagories(){
    let catList = await get("categories")
    setcatSide(catList)
  }
  useEffect(() => {
    getCatagories()
  }, [])
  // Side bar catagories End





  // Search Data Fetch
  const [searchObject, setSearchObject] = useState([])
  const [searchText, setSearchText] = useState('')
function searchData(e){
  e.preventDefault();
  console.log(catSide);
  // navigate(`/catagory/`)
  alert("Not Implemented yet!!")
}
  // Search Data Fetch
  return (
<header className="main-head">
  <div className="hdr-top">
    <div className="custom-container">
      <div className="row align-items-center">
        <div className="col-md-2">
          <nav className="navbar">
            <button
              className="navbar-toggler navbar-toggler-main" onClick={Sidebar_handleClick}
              type="button"
            >
              <span className="stick" />
            </button>
            <div
              id="navbarSupportedContent"
              className={sidebar_active ? 'side_bar_active collapse navbar-collapse' : 'side_bar_removed collapse navbar-collapse'}
            >
              <button
                className="navbar-toggler navbar-toggler-main"
                type="button"
                onClick={Sidebar_handleClick}
              >
                <span className="stick" />
              </button>
              <ul className="navbar-nav ms-auto">
                {
                  catSide.map(item =>  <li><a onClick={()=> navigate(`/catagory/`+`${item.slug}`)}>{item.name}</a></li>)
                }
              </ul>
            </div>
            <a onClick={()=> navigate(`/`)} className="logo" href="javascript:void(0)">
              <img
                src={require("../../assets/images/logo_hdr.png")}
                alt="Aipaze"
              />
            </a>
          </nav>
        </div>
        <div className="col-md-10">
          <div className="hdr-top-rgt">
            <div className="hdr-mddle">
              <div className="choose-adrs">
                <div className="choose-rgt hdr_reg">
                  <p>
                    <a onClick={()=> navigate("/registration")}>
                      Vendor/Buyer Register
                    </a>
                  </p>
                </div>
              </div>
              <div className="hdr-form">
                <form
                  onSubmit={searchData}
                  className="stop-propagation"
                >
                  <div className="d-flex position-relative align-items-center">
                    {/* <div
                      className="d-lg-none"
                      data-toggle="class-toggle"
                      data-target=".front-header-search"
                    >
                      <button className="btn px-2" type="button">
                        <i className="la la-2x la-long-arrow-left" />
                      </button>
                    </div> */}
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="search"
                        name="keyword"
                        placeholder="I am shopping for..."
                        autoComplete="off"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                      <div className="all-selct">
                        <select
                          className="select-control"
                          name="category"
                          id="search_category"
                        >
                          <option>All</option>

                          {
                            catSide.map(item => <option className='scr_opp'>{item.name}</option> )
                          }
                        </select>
                      </div>
                      <div className="srch-icon">
                        <button className="border-0 bg-white" type="submit">
                          <img
                            src={require("../../assets/images/srch.png")}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="country dropdown">
                <button
                  type="button"
                  className="dropdown-btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src={require("../../assets/images/india.png")}
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="hdr-rgt">
              <ul>
                <li>
                  <em>
                    <a className="a_col_white" onClick={()=> navigate(`/login`)}>
                      Hello, Sign in
                    </a>
                  </em>
                  <p>
                    <a className="a_col_white" onClick={()=> navigate(`/login`)}>
                      My Account &amp; Lists
                    </a>
                  </p>
                </li>
                <li>
                  <em>
                    <a className="a_col_white" onClick={()=> navigate(`/login`)}>Return</a>
                  </em>
                  <p>
                    <a className="a_col_white" onClick={()=> navigate(`/login`)}>
                      &amp; Orders
                    </a>
                  </p>
                </li>
                <li>
                  <div className="nav-cart-box dropdown h-100" id="cart_items">
                    <a onClick={()=> navigate("/cart")}
                      className="d-flex align-items-center text-reset h-100"
                    >
                      <img
                        src={require("../../assets/images/cart.png")}
                        alt="cart"
                      />
                      <span className="flex-grow-1 ml-1">
                        <span className="badge badge-primary badge-inline badge-pill cart-count">
                          0
                        </span>
                        <span className="nav-box-text d-none d-xl-block opacity-70">
                          Cart
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 stop-propagation">
                      <div className="text-center p-3">
                        <i className="las la-frown la-3x opacity-60 mb-3" />
                        <h3 className="h6 fw-700">Your Cart is empty</h3>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <button
    className="navbar-toggler collapsed"
    id="navoverlay"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  /> */}
</header>

  )
}

export default Header