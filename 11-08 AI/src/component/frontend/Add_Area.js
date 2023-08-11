import React from 'react'
import { BASE_URL } from "../../service/httpClient";

function Add_Area({ addImg }) {
    return (
        <div className="col-md-6 ad-col">
            <div className="ad-inr">
                <a href="">
                    <figure>
                        <img
                            src={BASE_URL + addImg}
                            alt={"Img not Found"}
                        />
                    </figure>
                </a>
            </div>
        </div>

    )
}

export default Add_Area