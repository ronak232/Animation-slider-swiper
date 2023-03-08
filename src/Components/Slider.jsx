import React from "react";
// import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../Sass/Slider.scss";
import { BsChevronRight } from "react-icons/bs";
// import { useEffect } from "react";

// import { useEffect } from "react";
function Slider() {
  // useEffect(() => {}, []);

  return (
    <section>
      <div className="slider-container">
        <h3 className="slider-container-success-title">Success Stories</h3>
        <Swiper
          className="slider-slideshow"
          loop={true}
          modules={[Navigation, Autoplay, Pagination]}
          parallax={true}
          speed={900}
          direction="vertical"
          navigation={true}
          pagination={{
            type: "fraction",
          }}
          allowTouchMove={false}
          // autoplay={{
          //   delay:5000,
          //   disableOnInteraction:false
          // }}
        >
          <SwiperSlide className="slider-slideshow-slides">
            <div className="slider-slideshow-slides-img1"></div>
            <div className="slider-slideshow-slides-text">
              <h1 className="slider-slideshow-slides-heading">
                <span
                  className="slider-slideshow-slides-title"
                  // data-swiper-parallax-y="-800"
                  // data-swiper-parallax-duration="2500"
                >
                  Changing the Lives of 15K Kids
                </span>
                {/* <span className="slider-slideshow-slides-title1">
              Changing the Lives of 15K Kids
              </span> */}
              </h1>
              <div className="slider-slideshow-slides-link">
                <a href="/">
                  Operation smile
                  <BsChevronRight />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-slideshow-slides">
            <div className="slider-slideshow-slides-img2"></div>
            {/* <h3 className="slider-slideshow-success-title">Success Stories</h3> */}
            <div className="slider-slideshow-slides-text">
              <h1 className="slider-slideshow-slides-heading">
                <span
                  className="slider-slideshow-slides-title"
                  // data-swiper-parallax-y="-800"
                  // data-swiper-parallax-duration="2500"
                >
                  Changing the Lives of 15K Kids
                </span>
                {/* <span className="slider-slideshow-slides-title1">
              Changing the Lives of 15K Kids
              </span> */}
              </h1>
              <div className="slider-slideshow-slides-link">
                <a href="/">
                  Operation smile
                  <BsChevronRight />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-slideshow-slides">
            <div className="slider-slideshow-slides-img3"></div>
            {/* <h3 className="slider-slideshow-success-title">Success Stories</h3> */}
            <div className="slider-slideshow-slides-text">
              <h1 className="slider-slideshow-slides-heading">
                <span
                  className="slider-slideshow-slides-title"
                  // data-swiper-parallax-y="-800"
                  // data-swiper-parallax-duration="2500"
                >
                  Changing the Lives of 15K Kids
                </span>
                {/* <span className="slider-slideshow-slides-title1">
              Changing the Lives of 15K Kids
              </span> */}
              </h1>
              <div className="slider-slideshow-slides-link">
                <a href="/">
                  Operation smile
                  <BsChevronRight />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
