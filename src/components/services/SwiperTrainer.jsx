// libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
// styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// components
import { TrainerCard } from '../Card';
// images
import trainerOne from '../../assets/img/trainer-3.jpg'; //liang
import trainerTwo from '../../assets/img/trainer-2.jpg'; //latonya
import trainerThree from '../../assets/img/trainer-4.jpg'; //amer
import trainerFour from '../../assets/img/trainer-1.jpg'; //robert
import trainerFive from '../../assets/img/trainer-5.jpg'; //jacqueline

export default function SwiperTrainer() {
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
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {trainers.map((trainers, index) => (
                    <SwiperSlide key={index} className='slide'>
                        <TrainerCard
                            trainerImg={trainers.trainerImg}
                            trainerName={trainers.trainerName}
                            trainerDept={trainers.trainerDept}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
    </>
    )
}