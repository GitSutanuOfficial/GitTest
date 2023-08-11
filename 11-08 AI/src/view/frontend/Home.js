import React, { useEffect, useState } from 'react';
import { get, post } from '../../service/httpClient';
import Slider from "react-slick";
import Header from "../../component/frontend/Header";
import Banner_slider from '../../component/frontend/Banner_slider';
// import SL from '../../component/frontend/SL';
import Add_Area from '../../component/frontend/Add_Area';
import CatagoriesBox from '../../component/frontend/CatagoriesBox';
import NewsLetter from '../../component/frontend/NewsLetter';
import Footer from '../../component/frontend/Footer';
// import DiscountRound from '../../component/frontend/DiscountRound';
import { useNavigate } from "react-router-dom"


function Home() {

  const navigate = useNavigate();

  // Banner Slider
  var bnn_slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    slidesToScroll: 1,
  };

  const [bannerData, setbannerData] = useState([])
  async function getslider() {
    let bannerSlider = await get("sliders")
    setbannerData(bannerSlider)
  }
  useEffect(() => {
    getslider()
  }, [])
  // Banner Slider End




  // Home Catagories Top
  const [cat_top, set_cat_top] = useState([])
  async function getData() {
    let top_cat = await get("categories/top")
    set_cat_top(top_cat)
  }
  useEffect(() => {
    getData()
  }, [])
  // Home Catagories Top End



  // Home Catagories Bottom
  const [cat_bottom, set_cat_bottom] = useState([])
  async function get_cat_btmm() {
    let bot_cat = await get("categories")
    set_cat_bottom(bot_cat)
  }
  useEffect(() => {
    get_cat_btmm()
  }, [])
  // Home Catagories Bottom End



  // Home Advataised Sec
  const [addArea, SetaddArea] = useState([])
  async function setAdd() {
    let add_total = await get("banners")
    SetaddArea(add_total)
  }
  useEffect(() => {
    setAdd()
  }, [])
  // Home Advataised Sec End

  return (
    <div>

      {/* Start Header */}
      <Header />


      {/* Start Banner */}
      <section className="banner-sec">
        <div className="container">
          <div className="ban-slider">

            {
              <Slider {...bnn_slider}>
                {
                  bannerData.map(item => {
                    return <Banner_slider imgsrc={item.file_name} imgalt={item.file_original_name} />
                  })
                }

              </Slider>
            }
          </div>
        </div>
      </section>

      {/*Start Add Section1 */}
      <section className="advertise-sec cmn-gap">
        <div className="container">
          <div className="ad-outr">
            <div className="row ad-row">
              {
                addArea.map(item => {
                  return <Add_Area
                    addImg={item.photo}
                    id={item.id}
                  />
                })
              }
            </div>
          </div>
        </div>
      </section>


      {/*Start Catagories Sec*/}
      <section className="category-sec">
        <div className="container">
          <div className="cate-outr">
            <div className="deal-top u-line">
              <h4>Shop by category</h4>
            </div>
            <div className="cate-btm">
              <div className="row">
                {
                  cat_top.map(item => {
                    return <CatagoriesBox slugname={item.slug} cataName={item.name} cataImg={item.file_name} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>



      {/*Start Add Section2 */}
      <section className="advertise-sec cmn-gap">
        <div className="container">
          <div className="ad-outr">
            <div className="row ad-row">
              {/* <Add_Area addImg={require("../../assets/images/add_img3.png")} /> */}

              {
                addArea.map(item => {
                  return <Add_Area
                    addImg={item.photo}
                    id={item.id}
                  />
                })
              }
            </div>
          </div>
        </div>
      </section>




      {/*Start Add Catagories Sec */}
      <section className="category-sec grn_back">
        <div className="container">
          <div className="cate-outr">
            <div className="cate-btm">
              <div className="row cate-row">

                {
                  cat_bottom.map(item => {
                    return <CatagoriesBox
                      slugname={item.slug}
                      cataName={item.name}
                      cataImg={item.file_name}
                    />
                  })
                }


              </div>
            </div>
          </div>
        </div>
      </section>




      {/*Start Add Section4 */}
      <section className="advertise-sec cmn-gap">
        <div className="container">
          <div className="ad-outr">
            <div className="row ad-row">
              {
                addArea.map(item => {
                  return <Add_Area
                    addImg={item.photo}
                    id={item.id}
                  />
                })
              }
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

export default Home