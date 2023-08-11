import React, { useEffect, useState } from 'react'
import NewsLetter from '../../component/frontend/NewsLetter'
import Footer from '../../component/frontend/Footer'
import Header from '../../component/frontend/Header'
import { useNavigate } from "react-router-dom";
import { post } from '../../service/httpClient';

function Registration() {
    const navigate = useNavigate();

    const [Name, SetName] = useState('')
    const [Phone, SetPhone] = useState('')
    const [Email, SetEmail] = useState('')
    const [Password, SetPassword] = useState('')
    const [ConformPass, SetConfromPass] = useState('')


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


    // Choose Checkbox
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        const { checked } = event.target;
        setIsChecked(checked);
    };


    // Submit Function
    async function sendData(e) {
        e.preventDefault();


        if (!selectedOption) {
            alert("Please select User Type.")
            return false;
        }

        if (Name == '') {
            alert("Please Enter Your Name")
            return false
        }
        if (Phone == '' && Email == '') {
            alert("Please Enter Your Phone Number Or Email Address.")
            return false
        }
        if (Phone.length !== 10 && Email == '') {
            alert("Please Enter Your Correct Phone Number Or Email Address.")
            return false
        }
        if (Password == '') {
            alert("Please Re-Enter Your Password")
            return false
        }
        if (ConformPass != Password) {
            alert("Please Match The Password")
            return false
        }
        if (!isChecked) {
            alert('Please Read Then Check the Tearm And Condition Checkbox.');
            return;
        }


        let data = {
            name: Name,
            email_or_phone: Email ? Email : Phone,
            password: Password,
            user_type: selectedOption,
            register_by: Email ? "email" : "phone"
        }


        alert("Validation Working Properly.")
        console.log(data);

        let res = await post("signup", { data })
        console.log("res", res);
    }

    return (
        <div>
            {/* Start Header */}
            <Header />


            <section className="gry-bg py-4">
                <div className="profile">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
                                <div className="card">
                                    <div className="text-center pt-4">
                                        <h1 className="h4 fw-600">Create an account.</h1>
                                    </div>
                                    <div className="px-4 py-3 py-lg-4">
                                        <div className="">
                                            <form
                                                id="reg-form"
                                                className="form-default"
                                                onSubmit={sendData}
                                            >
                                                <input
                                                    type="hidden"
                                                    name=""
                                                />
                                                <div className="form-group">
                                                    {/* <label className="col-sm-3 col-from-label mb-2" htmlFor="name">
                                                        User Type
                                                    </label> */}
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
                                                        placeholder="Full Name"
                                                        name="name"
                                                        id="name"
                                                        value={Name}
                                                        onChange={(e) => SetName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group phone-form-group">
                                                    <input
                                                        className="form-control"
                                                        type="tel"
                                                        placeholder="Phone"
                                                        name="phone"
                                                        id="phone"
                                                        value={Phone}
                                                        onChange={(e) => SetPhone(e.target.value)}
                                                    />

                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        type="email"
                                                        placeholder="Email"
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
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        name="c_password"
                                                        id="c_password"
                                                        value={ConformPass}
                                                        onChange={(e) => SetConfromPass(e.target.value)}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={isChecked}
                                                            onChange={handleCheckboxChange}
                                                        />

                                                        <span className="opacity-60">
                                                            By signing up you agree to our <a>Terms and Conditions</a>.
                                                        </span>
                                                        <span className="aiz-square-check" />
                                                    </label>
                                                </div>
                                                <div className="mb-5">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-block fw-600"
                                                    >

                                                        Create Account
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-muted mb-0">Already have an account?</p>
                                            <a className='no_href' onClick={() => navigate("/login")} >Log In</a>
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

export default Registration