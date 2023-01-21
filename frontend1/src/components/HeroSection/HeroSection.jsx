import { Swiper, SwiperSlide } from "swiper/react";
import "./hero.scss"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
const HeroSection = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{position: "relative"}} >


          <img style={{ width: "100%", height: 800 }} src="https://preview.colorlib.com/theme/hexa/images/slider-1.jpg" alt="" />
          <div className="div" >
            <h1 >Creative Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
            <ul>
              <li><button>Get Started</button></li>
              <li><button>Download</button></li>
            </ul>
            </div>
          
        </SwiperSlide>
        <SwiperSlide style={{position: "relative"}}>
          <img style={{ width: "100%", height: 800 }} src="https://preview.colorlib.com/theme/hexa/images/slider-2.jpg" alt="" />
          <div className="div" >
            <h1 >Creative Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
            <ul>
              <li><button>Get Started</button></li>
              <li><button>Download</button></li>
            </ul>
            </div>

        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default HeroSection