import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import news1 from '../../assets/img/abela.jpg';
import news2 from '../../assets/img/chakri.jpg';
import news3 from '../../assets/img/bdprotidinjpg.jpg';
import news4 from '../../assets/img/kalerkonto.jpg';
import news5 from '../../assets/img/protomalo.jpg';
import news6 from '../../assets/img/somoykal.jpg';


const OurFeature = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={news1} alt="" />
                    <h2 className='text-2xl font-semibold text-pink-600'>The Abela</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={news2} alt="" />
                    <h2 className='text-2xl font-semibold text-pink-600'>The Chakri</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={news3} alt="" />
                    <h2 className='text-2xl font-semibold text-pink-600'>Daily BD</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={news4} alt="" />
                    <h2 className='text-2xl font-semibold text-pink-600'>KalerKonto</h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={news5} alt="" />
                    <h2 className='text-2xl font-semibold text-pink-600'>Protom Alo</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={news6} alt="" />
                    <h2 className='text-2xl font-semibold text-pink-600'>SomoKal</h2>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default OurFeature;