import React from 'react'
import Footer from '../../component/frontend/Footer'
import Header from '../../component/frontend/Header'
import NewsLetter from '../../component/frontend/NewsLetter'

function NotFound() {
  return (
    <>
    <Header />
    <section className="text-center py-6">
    <div className="container">
        <div className="row">
        <div className="col-lg-6 mx-auto">
            <img
            src="https://www.aipaze.com/public/assets/img/404.svg"
            className="mw-100 mx-auto mb-5"
            height={300}
            />
            <h1 className="fw-700">Page Not Found!</h1>
            <p className="fs-16 opacity-60">
            The page you are looking for has not been found on our server.
            </p>
        </div>
        </div>
    </div>
    </section>
    <NewsLetter />
    <Footer />
    
    </>
  )
}

export default NotFound