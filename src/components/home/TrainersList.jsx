// styles
import '../../styles/components/_trainers-list.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// images
import trainerOne from '../../assets/img/trainer-3.jpg'; //liang
import trainerTwo from '../../assets/img/trainer-2.jpg'; //latonya
import trainerThree from '../../assets/img/trainer-4.jpg'; //amer
import trainerFour from '../../assets/img/trainer-1.jpg'; //robert
import trainerFive from '../../assets/img/trainer-5.jpg'; //jacqueline
// components
import { TrainerCard } from '../Card';
// libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function TrainersList() {
    const trainers = [
        {
            trainerImg: trainerOne,
            trainerName: "Samuel Liang",
            trainerDept: "cardio"
        },
        {
            trainerImg: trainerTwo,
            trainerName: "La'Tonya Smith",
            trainerDept: "yoga"
        },
        {
            trainerImg: trainerThree,
            trainerName: "Amer Dilqis",
            trainerDept: "hiit"
        },
        {
            trainerImg: trainerFour,
            trainerName: "Robert Molineaux",
            trainerDept: "nutrition"
        },
        {
            trainerImg: trainerFive,
            trainerName: "Jacqueline Hartmann",
            trainerDept: "endurance"
        }
    ]
    return (
        <div id="trainer-section-wrapper">
            <h2 className='big'>Meet our titans</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                breakpoints={{
                768: { slidesPerView: 1, },
                1024: { slidesPerView: 1, },
                }} className="trainer-swiper"
            >
                {trainers.map((trainers, index) => (
                <SwiperSlide key={index}>
                    <TrainerCard
                        trainerImg={trainers.trainerImg}
                        trainerName={trainers.trainerName}
                        trainerDept={trainers.trainerDept}
                    />
                </SwiperSlide>))}
            </Swiper>
        </div>
    )
}