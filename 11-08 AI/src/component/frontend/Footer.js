import React from 'react'
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="footer-sec">
            <div className="container">
                <div className="footer-outr">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="ftr-innr">
                                <h5>SUPPORT</h5>
                                <ul>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}> Contact Us </a>
                                    </li>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}> Order FAQ </a>
                                    </li>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}> Store Locatore </a>
                                    </li>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}>Buying Guide </a>
                                    </li>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}> Frame Size </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="ftr-innr">
                                <h5>company-info</h5>
                                <ul>
                                    <li>
                                    <a onClick={()=> navigate(`/NotFound`)}>About Us </a>
                                    </li>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}> We are Hiring</a>
                                    </li>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}>Refer &amp; Earn </a>
                                    </li>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}>Site Map </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="ftr-innr">
                                <h5>company-info</h5>
                                <ul>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}> T&amp;C </a>
                                    </li>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}> Disclaimer</a>
                                    </li>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}> Privacy </a>
                                    </li>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}>Policy</a>
                                    </li>
                                    <li>
                                        <a onClick={()=> navigate(`/NotFound`)}>Aipaze Coupons</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy text-center">
                <div className="container">
                    <p>© Copyright 2022 Status.. All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer