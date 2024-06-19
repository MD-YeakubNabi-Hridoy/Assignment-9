import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='w-[100%] h-[81vh] bg-[#12252399] bg-[url(slider-1.jpg)] bg-cover bg-center bg-no-repeat bg-blend-overlay'>
          <div className='w-[100%] h-[81vh] flex flex-col items-center justify-center'>
            <h1 className='text-7xl text-white font-bold'>WelCome To Our <span className='text-orange-500'>Real-Estate</span></h1>
            <p className='text-slate-100 text-md lg:px-[450px] mt-4 text-center'>Are you Looking for a Dream House for you and your family? So, You are now in right Place. We will provide you our best Service!!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-[100%] h-[81vh] bg-[#12252399] bg-[url(slider-2.jpg)] bg-cover bg-center bg-no-repeat bg-blend-overlay'>
          <div className='w-[100%] h-[81vh] flex flex-col items-center justify-center'>
            <h1 className='text-7xl text-white font-bold'>WelCome To Our <span className='text-orange-500'>Real-Estate</span></h1>
            <p className='text-slate-100 text-md lg:px-[450px] mt-4 text-center'>Are you Looking for a Dream House for you and your family? So, You are now in right Place. We will provide you our best Service!!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-[100%] h-[81vh] bg-[#12252399] bg-[url(slider-3.jpg)] bg-cover bg-center bg-no-repeat bg-blend-overlay'>
          <div className='w-[100%] h-[81vh] flex flex-col items-center justify-center'>
            <h1 className='text-7xl text-white font-bold'>WelCome To Our <span className='text-orange-500'>Real-Estate</span></h1>
            <p className='text-slate-100 text-md lg:px-[450px] mt-4 text-center'>Are you Looking for a Dream House for you and your family? So, You are now in right Place. We will provide you our best Service!!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-[100%] h-[81vh] bg-[#12252399] bg-[url(slider-4.jpg)] bg-cover bg-center bg-no-repeat bg-blend-overlay'>
          <div className='w-[100%] h-[81vh] flex flex-col items-center justify-center'>
            <h1 className='text-7xl text-white font-bold'>WelCome To Our <span className='text-orange-500'>Real-Estate</span></h1>
            <p className='text-slate-100 text-md lg:px-[450px] mt-4 text-center'>Are you Looking for a Dream House for you and your family? So, You are now in right Place. We will provide you our best Service!!</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;