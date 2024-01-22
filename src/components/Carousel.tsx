import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules'
// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
// custom style
import './Carousel.css'

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination
      spaceBetween={24}
      slidesPerView={1}
    >
      <SwiperSlide>
        {window.innerWidth > 1200 
          ?
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true" alt="img" />
          :
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E8%A1%8C%E5%8B%95%E7%89%88/room2-1.png?raw=true" alt="img" />
        }
      </SwiperSlide>
      <SwiperSlide>
        {window.innerWidth > 1200 
          ?
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true" alt="img" />
          :
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E8%A1%8C%E5%8B%95%E7%89%88/room2-1.png?raw=true" alt="img" />
        }
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel