import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const OurFeature = () => {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-12"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl text-center text-white -mt-20 uppercase'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl text-center text-white -mt-20 uppercase'>Fizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl text-center text-white -mt-20 uppercase'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl text-center text-white -mt-20 uppercase'>Desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl text-center text-white -mt-20 uppercase'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OurFeature;