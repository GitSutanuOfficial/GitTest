import React from 'react'
import { useNavigate } from "react-router-dom"

function CatagoriesBox({cataName,cataImg,slugname}) {
  const navigate = useNavigate();
  
  let fullImgPath = cataImg ? "http://aipaze.com/public/" + cataImg  :  `https://aipaze.com/public/assets/img/placeholder.jpg`
  return (
    <div className="col-xl-2 col-lg-4 col-sm-6 cate-col">
    <div className="cate-innr text-center">
      <a onClick={()=> navigate(`/catagory/`+`${slugname}`)}>
        <figure>
          <img
            src={fullImgPath}
            alt={cataName}
          />
        </figure>
        <h6>{cataName}</h6>

        {/* <a href={img_path + cataImg2}>{img_path + cataImg2}</a> */}
      </a>
    </div>
  </div>
  )
}

export default CatagoriesBox