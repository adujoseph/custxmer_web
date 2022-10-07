import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { chat, user, mail } from '../images';

const Slider = () => {
    return (
        <div className='h-[600px] sm:h-[400px] max-w-7xl mx-auto my-20 px-8 lg:px-10'>
            <Swiper
                className='h-full w-full bg-[#27bec5] '
                loop={true}
                speed={2000}
                modules={[Navigation, Pagination, A11y]}
                navigation={true}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                
            >
                <SwiperSlide className='flex items-center flex-col sm:flex-row lg:space-x-20 justify-center'>
                    <p className='w-[200px] text-white text-base sm:w-[300px] font-light sm:text-xl lg:tracking-wider '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel officiis, at temporibus enim accusantium amet consectetur architecto illum in similique quo inventore iste, vitae deserunt nesciunt suscipit distinctio quasi magnam.</p>
                    <img src={mail} className='w-[250px] lg:w-[350px] rounded-2xl' alt="" />
                </SwiperSlide>
                <SwiperSlide className='flex items-center flex-col sm:flex-row lg:space-x-20 justify-center'>
                    <p className='w-[200px] text-white text-base sm:w-[250px] font-l35ht sm:text-xl lg:tracking-wider '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel officiis, at temporibus enim accusantium amet consectetur architecto illum in similique quo inventore iste, vitae deserunt nesciunt suscipit distinctio quasi magnam.</p>
                    <img src={chat} className='w-[250px] lg:w-[350px] rounded-2xl' alt="" />
                </SwiperSlide>
                <SwiperSlide className='flex items-center flex-col sm:flex-row lg:space-x-20 justify-center'>
                    <p className='w-[200px] text-white text-base sm:w-[300px] font-light sm:text-xl lg:tracking-wider '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel officiis, at temporibus enim accusantium amet consectetur architecto illum in similique quo inventore iste, vitae deserunt nesciunt suscipit distinctio quasi magnam.</p>
                    <img src={user} className='w-[250px] lg:w-[350px] rounded-2xl' alt="" />
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default Slider
