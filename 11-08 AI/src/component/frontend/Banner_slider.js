import React from "react";
import { BASE_URL } from "../../service/httpClient";


function Banner_slider({ imgsrc, imgalt}) {
   

    return (
        <>
            {

                <div className="ban-slide">
                    <div className="ban-wrap">
                        <div className="banner-img">
                            <a href="">
                                <img
                                    src={BASE_URL + imgsrc}
                                    alt={imgalt}
                                />
                            </a>
                        </div>
                        <div className="inner-wrap hdr-clr text-center">

                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Banner_slider