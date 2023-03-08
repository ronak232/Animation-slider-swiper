import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Sass/Slider.scss";
function Header() {
  const images = [
    {
      id: "1",
      img: "https://tympanus.net/Development/ShapesSlideshow/6.e96dcfff.jpg",
    },
    {
      id: "2",
      img: "https://tympanus.net/Development/ShapesSlideshow/8.f4323fe0.jpg",
    },
    {
      id: "3",
      img: "https://tympanus.net/Development/ShapesSlideshow/6.e96dcfff.jpg",
    },
  ];

  return (
    <div>
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
      >
        {images.map((item) => {
          return (
            <SwiperSlide className="slider-slideshow-slides">
              <div>
                <div className="slider-slideshow-slides-img1">
                  <img src={item.img} alt="" />
                </div>
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
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Header;
