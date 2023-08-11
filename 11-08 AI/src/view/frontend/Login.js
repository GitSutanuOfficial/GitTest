import React, { useEffect, useState } from 'react'
import NewsLetter from '../../component/frontend/NewsLetter'
import Footer from '../../component/frontend/Footer'
import Header from '../../component/frontend/Header'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { post } from '../../service/httpClient';
import Swal from 'sweetalert2'


function Login() {
        // Swal JS
        const Swal = require('sweetalert2')
        function customSwal(title,text,icon,btn){
            Swal.fire({
                title: title,
                text: text,
                icon: icon,
                confirmButtonText: btn
            })
        }



    const [Email, SetEmail] = useState('')
    const [Password, SetPassword] = useState('')


    // Choose User type Select
    const [selectedOption, setSelectedOption] = useState('');
    const options = [
        { value: 'buyer', label: 'Buyer' },
        { value: 'vendor', label: 'Vendor' }
    ];
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    };




    // Submit Function
    async function loginData(e) {
        e.preventDefault();

        if (!selectedOption) {
            customSwal('Error!',"Please select User Type.",'warning','Click Here To Login')
            return false;
        }

        if (Email == '') {
            customSwal('Error!',"Please Enter Email Or Phone Number",'warning','Click Here To Login')
            return false
        }
        if (Password == '') {
            customSwal('Error!',"Please Enter Password",'warning','Click Here To Login')
            return false
        }

        let data = {
            email_or_phone: Email,
            password: Password,
            user_type: selectedOption
        }


        let res = await post("login", data)

        if(res && res.token){
            customSwal('success!',"Welcome To AIPAZE!",'success','Click to Home Page')
            navigate("/")
        }
        else{
            customSwal('Error!',"Please Enter Correct Details",'warning','Click Here To Login')
        }


        // console.log("res", res);
    }









    const navigate = useNavigate();
    return (
        <div>
            {/* Start Header */}
            <Header />


            <section className="gry-bg py-5 main-login">
                <div className="profile">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
                                <div className="card">
                                    <div className="text-center pt-4">
                                        <h1 className="h4 fw-600">Login to your account.</h1>
                                    </div>
                                    <div className="px-4 py-3 py-lg-4">
                                        <div className="">
                                            <form
                                                id="reg-form"
                                                className="form-default"
                                                onSubmit={loginData}
                                            >
                                                <input
                                                    type="hidden"
                                                    name=""
                                                />
                                                <div className="form-group">
                                                    <div className="form-group phone-form-group">
                                                        <select value={selectedOption} onChange={handleSelectChange}>
                                                            <option value="">-- Please select User type --</option>
                                                            {options.map((option) => (
                                                                <option key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Email or Phone"
                                                        name="email"
                                                        id="email"
                                                        value={Email}
                                                        onChange={(e) => SetEmail(e.target.value)}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        type="password"
                                                        placeholder="Password"
                                                        name="password"
                                                        id="password"
                                                        value={Password}
                                                        onChange={(e) => SetPassword(e.target.value)}
                                                    />
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-6">
                                                        <label className="aiz-checkbox">
                                                            <input type="checkbox" name="remember" />
                                                            <span className="opacity-60">Remember Me</span>
                                                            <span className="aiz-square-check" />
                                                        </label>
                                                    </div>
                                                    <div className="col-6 text-right">
                                                        <a
                                                             onClick={() => navigate("/resetpass")}
                                                            className="text-reset opacity-60 fs-14"
                                                        >
                                                            Forgot password?
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mb-5">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-block fw-600"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-muted mb-0">Dont have an account?</p>
                                            <a className='no_href' onClick={()=> navigate("/registration")}>
                                                Register Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/*Start Newsletter*/}
            <NewsLetter />

            {/*Start Footer*/}
            <Footer />
        </div>
    )
}

export default Login