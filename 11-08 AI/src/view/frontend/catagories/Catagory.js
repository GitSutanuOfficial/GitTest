import React, { useEffect, useState } from 'react';
// import CatagoriesLeftPanel from '../../../component/frontend/catagories/CatagoriesLeftPanel'
import Product from '../../../component/frontend/catagories/Product'
import Footer from '../../../component/frontend/Footer'
import Header from '../../../component/frontend/Header'
import NewsLetter from '../../../component/frontend/NewsLetter'
import { useParams } from 'react-router-dom';
import { get } from '../../../service/httpClient';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Catagory() {
    const navigate = useNavigate();
    // Side bar catagories
    const [catSide, setcatSide] = useState([])
    async function getCatagories() {
        let catList = await get("categories")
        setcatSide(catList)
    }
    useEffect(() => {
        getCatagories()
    }, [])
    // Side bar catagories End

    // Fetch each product by slugname
    let { slug } = useParams();

    const [catData, setcatData] = useState([])
    useEffect(() => {
        setLoading(true);
    }, [slug])

    async function getCategories() {
        let allCatData = await get(`products-category/` + `${slug}`)
        setcatData(allCatData)
        setLoading(false);
    }
    useEffect(() => {
        getCategories()
    }, [slug])


    // Fetch each product by slugname End


    // Loader Start
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);




    // All Brand Fetch
    const [allBrand, setAllBrand] = useState([])
    async function showBrand() {
        let brandList = await get("brands/0/30")
        setAllBrand(brandList.data)
    }
    useEffect(() => {
        showBrand()
    }, [])
    // All Brand Fetch
    
    async function changeBrand(brand) {

        if(brand == "All"){
            getCategories();
            return false
        }
            let cBrand = await get(`products-brand/` + `${brand}`)
            setcatData(cBrand)
    }
    


    


    return (
        <div>
            <Header />

            <section className="mb-4 pt-3">
                <div className="container sm-px-0">
                    <form className="" id="search-form" action="" method="GET">
                        <div className="row">
                            <div className="col-xl-3">
                                <div className="aiz-filter-sidebar collapse-sidebar-wrap sidebar-xl sidebar-right z-1035">
                                    <div
                                        className="overlay overlay-fixed dark c-pointer"
                                        data-toggle="class-toggle"
                                        data-target=".aiz-filter-sidebar"
                                        data-same=".filter-sidebar-thumb"
                                    />
                                    <div className="collapse-sidebar c-scrollbar-light text-left">
                                        <div className="d-flex d-xl-none justify-content-between align-items-center pl-3 border-bottom">
                                            <h3 className="h6 mb-0 fw-600">Filters</h3>
                                            <button
                                                type="button"
                                                className="btn btn-sm p-2 filter-sidebar-thumb"
                                                data-toggle="class-toggle"
                                                data-target=".aiz-filter-sidebar"
                                            >
                                                <i className="las la-times la-2x" />
                                            </button>
                                        </div>
                                        <div className="bg-white shadow-sm rounded mb-3">
                                            <div className="fs-15 fw-600 p-3 border-bottom">Categories</div>
                                            <div className="p-3">
                                                <ul className="navbar-nav ms-auto inner">
                                                    {
                                                        catSide.map(item => <li><a onClick={() => navigate(`/catagory/` + `${item.slug}`)}>{item.name}</a></li>)
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-white shadow-sm rounded mb-3">
                                            <div className="fs-15 fw-600 p-3 border-bottom">
                                                Price range
                                            </div>
                                            {/* <div className="p-3">
                            <div className="aiz-range-slider">
                                <div
                                    id="input-slider-range"
                                    data-range-value-min={0}
                                    data-range-value-max={100000}
                                    className="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                                >
                                    <div className="noUi-base">
                                        <div className="noUi-connects">
                                            <div
                                                className="noUi-connect"
                                                style={{
                                                    transform: "translate(0.03%) scale(0.0587, 1)"
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="noUi-origin"
                                            style={{ transform: "translate(-999.7%)", zIndex: 5 }}
                                        >
                                            <div
                                                className="noUi-handle noUi-handle-lower"
                                                data-handle={0}
                                                tabIndex={0}
                                                role="slider"
                                                aria-orientation="horizontal"
                                                aria-valuemin={0.0}
                                                aria-valuemax={5900.0}
                                                aria-valuenow={30.0}
                                                aria-valuetext={30.0}
                                            >
                                                <div className="noUi-touch-area" />
                                            </div>
                                        </div>
                                        <div
                                            className="noUi-origin"
                                            style={{ transform: "translate(-941%)", zIndex: 6 }}
                                        >
                                            <div
                                                className="noUi-handle noUi-handle-upper"
                                                data-handle={1}
                                                tabIndex={0}
                                                role="slider"
                                                aria-orientation="horizontal"
                                                aria-valuemin={30.0}
                                                aria-valuemax={100000.0}
                                                aria-valuenow={5900.0}
                                                aria-valuetext={5900.0}
                                            >
                                                <div className="noUi-touch-area" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-6">
                                        <span
                                            className="range-slider-value value-low fs-14 fw-600 "
                                            data-range-value-low={30}
                                            id="input-slider-range-value-low"
                                        >
                                            30.00
                                        </span>
                                    </div>
                                    <div className="col-6 text-right">
                                        <span
                                            className="range-slider-value value-high fs-14 fw-600 "
                                            data-range-value-high={5900}
                                            id="input-slider-range-value-high"
                                        >
                                            5900.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                                        </div>
                                        <div className="bg-white shadow-sm rounded mb-3">
                                            <div className="fs-15 fw-600 p-3 border-bottom">
                                                Filter by Shoe Size
                                            </div>
                                            <div className="p-3">
                                                <div className="aiz-checkbox-list">
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue={5}

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>5</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue={6}

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>6</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue={7}

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>7</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue={8}

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>8</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue={9}

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>9</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue={10}

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>10</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue={11}

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>11</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue={5}

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>5</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white shadow-sm rounded mb-3">
                                            <div className="fs-15 fw-600 p-3 border-bottom">
                                                Filter by Size
                                            </div>
                                            <div className="p-3">
                                                <div className="aiz-checkbox-list">
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="S"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>S</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="M"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>M</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="L"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>L</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="XL"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>XL</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="XXL"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>XXL</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="XXXL"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>XXXL</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white shadow-sm rounded mb-3">
                                            <div className="fs-15 fw-600 p-3 border-bottom">
                                                Filter by Generator
                                            </div>
                                            <div className="p-3">
                                                <div className="aiz-checkbox-list">
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="Petrol Generator"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>Petrol Generator</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="Disel Generator"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>Disel Generator</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white shadow-sm rounded mb-3">
                                            <div className="fs-15 fw-600 p-3 border-bottom">
                                                Filter by litter
                                            </div>
                                            <div className="p-3">
                                                <div className="aiz-checkbox-list">
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="1L"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>1L</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="5L"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>5L</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="2L"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>2L</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white shadow-sm rounded mb-3">
                                            <div className="fs-15 fw-600 p-3 border-bottom">
                                                Filter by g
                                            </div>
                                            <div className="p-3">
                                                <div className="aiz-checkbox-list">
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="500g"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>500g</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="300g"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>300g</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="250g"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>250g</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="750g"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>750g</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="950g"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>950g</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="100g"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>100g</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="200g"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>200g</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="800g"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>800g</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="900g"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>900g</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="350g"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>350g</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white shadow-sm rounded mb-3">
                                            <div className="fs-15 fw-600 p-3 border-bottom">
                                                Filter by kg
                                            </div>
                                            <div className="p-3">
                                                <div className="aiz-checkbox-list">
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="1kg"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>1kg</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="5kg"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>5kg</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="10kg"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>10kg</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="3kg"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>3kg</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="6kg"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>6kg</span>
                                                    </label>
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            defaultValue="4kg"

                                                        />
                                                        <span className="aiz-square-check" />
                                                        <span>4kg</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <CatagoriesLeftPanel /> */}
                            <div className="col-xl-9 loader_ottr">


                                <ul className="breadcrumb bg-transparent p-0">
                                    <li className="breadcrumb-item opacity-50">
                                        <a className="text-reset" href="https://www.aipaze.com">
                                            Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item fw-600  text-dark">
                                        <a className="text-reset" href="https://www.aipaze.com/search">
                                            "All categories"
                                        </a>
                                    </li>
                                </ul>
                                <div className="text-left">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h1 className="h6 fw-600 text-body">All products</h1>
                                            <input type="hidden" name="keyword" defaultValue="" />
                                        </div>
                                        <div className="form-group ml-auto mr-0 w-200px d-none d-xl-block">
                                            <label className="mb-0 opacity-50">Brands</label>
                                            <div className="">
                                                <select onChange={(e)=> changeBrand(e.target.value)} className="form-control form-control-sm">
                                                    <option value="All">All</option>
                                                      {allBrand.map((item,index) => {
                                                            return <option count={index} value={item.slug}>{item.name}</option>
                                                      })}
                                                </select>

                                                {/* <div className="dropdown-menu ">
                    <div className="bs-searchbox">
                      <input
                        type="search"
                        className="form-control"
                        autoComplete="off"
                        role="combobox"
                        aria-label="Search"
                        aria-controls="bs-select-1"
                        aria-autocomplete="list"
                      />
                    </div>
                    <div
                      className="inner show"
                      role="listbox"
                      id="bs-select-1"
                      tabIndex={-1}
                    >
                      <ul
                        className="dropdown-menu inner show"
                        role="presentation"
                      />
                    </div>
                  </div> */}
                                            </div>
                                        </div>
                                        <div className="form-group w-200px ml-0 ml-xl-3 mr_left_10">
                                            <label className="mb-0 opacity-50">Sort by</label>
                                            <div className="">
                                                <select
                                                    className="form-control form-control-sm"
                                                    name="sort_by"
                                                >
                                                    <option value="newest">Newest</option>
                                                    <option value="oldest">Oldest</option>
                                                    <option value="price-asc">Price low to high</option>
                                                    <option value="price-desc">Price high to low</option>
                                                </select>

                                                {/* <div className="dropdown-menu ">
                    <div
                      className="inner show"
                      role="listbox"
                      id="bs-select-2"
                      tabIndex={-1}
                    >
                      <ul
                        className="dropdown-menu inner show"
                        role="presentation"
                      />
                    </div>
                  </div> */}
                                            </div>
                                        </div>
                                        <div className="d-xl-none ml-auto ml-2 mr-0 form-group align-self-end">
                                            <button
                                                type="button"
                                                className="btn btn-icon p-0"
                                                data-toggle="class-toggle"
                                                data-target=".aiz-filter-sidebar"
                                            >
                                                <i className="la la-filter la-2x" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="min_price" defaultValue="" />
                                <input type="hidden" name="max_price" defaultValue="" />
                                <div className="row gutters-5">
                                    {loading ? (
                                        <div className='lo_oootr'>
                                            <span class="l"></span>
                                        </div>
                                    ) :
                                        catData.length <= 0 ? <h3 className='mt-3 mb-3 text-center'>Sorry!! Product Was Not Available.</h3> : catData.map(item => {
                                            return <Product slugname={slug}
                                                id={item.id}
                                                prod_name={item.name}
                                                prod_img={item.file_name}
                                                prod_price={item.unit_price}
                                                prod_brnd={item.brand_name}
                                                review_count={item.rating}
                                                prod_discount={item.discount}
                                            />
                                        })
                                    }



                                </div>
                                <div className="aiz-pagination aiz-pagination-center mt-4">
                                    <nav>
                                        <ul className="pagination">
                                            <li
                                                className="page-item disabled"
                                                aria-disabled="true"
                                                aria-label="« Previous"
                                            >
                                                <span className="page-link" aria-hidden="true">
                                                    ‹
                                                </span>
                                            </li>
                                            <li className="page-item active" aria-current="page">
                                                <span className="page-link">1</span>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="https://www.aipaze.com/category/Vegetable-Seed-3BQs9?page=2"
                                                >
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="https://www.aipaze.com/category/Vegetable-Seed-3BQs9?page=3"
                                                >
                                                    3
                                                </a>
                                            </li>

                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="https://www.aipaze.com/category/Vegetable-Seed-3BQs9?page=31"
                                                >
                                                    31
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="https://www.aipaze.com/category/Vegetable-Seed-3BQs9?page=2"
                                                    rel="next"
                                                    aria-label="Next »"
                                                >
                                                    ›
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <NewsLetter />
            

            <Footer />
        </div>
    )
}

export default Catagory