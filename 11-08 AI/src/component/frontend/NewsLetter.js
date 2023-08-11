import React from 'react'

function NewsLetter() {
    return (
        <section className="subs-sec">
            <div className="container">
                <div className="sub-outr">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="sub-lft">
                                <p>Join The Community</p>
                                <div className="social-innr">
                                    <ul></ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sub-rgt">
                                <form method="POST" action="">
                                    <input
                                        type="hidden"
                                        name=""
                                    />
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="ENTER EMAIL ADDRESS"
                                            className="form-control"
                                        />
                                        <div className="submit-inn">
                                            <input
                                                type="submit"
                                                className="subs-btn"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default NewsLetter