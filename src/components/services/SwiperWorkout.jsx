// libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
// styles
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function SwiperWorkout() {
    const workouts = [
        {
            name: "Full-Body Fire (30-Day Strength Challenge)",
            goal: "Build overall strength and endurance with progressive bodyweight and dumbbell workouts.",
            frequency: "3-4x per week",
            exercises: "Squats, lunges, push-ups, planks, and progressive overload."
        },
        {
            name: "Cardio Crusher (14-Day HIIT Challenge)",
            goal: "Burn fat and boost stamina with short, high-intensity workouts.",
            frequency: "20 mins/day",
            exercises: "Jump squats, burpees, mountain climbers, sprints."
        },
        {
            name: "Flex Flow (10-Day Mobility & Flexibility Reset)",
            goal: "Improve posture, flexibility, and muscle recovery.",
            frequency: "15 mins/day",
            exercises: "Yoga flows, hip openers, shoulder mobility, spine stretches."
        },
        {
            name: "Core Inferno (7-Day Abs Challenge)",
            goal: "Sculpt and strengthen your core in one week.",
            frequency: "10 mins/day",
            exercises: "Planks, leg raises, Russian twists, flutter kicks."
        },
        {
            name: "Push-Up Power (21-Day Strength Builder)",
            goal: "Master push-ups and increase upper body strength.",
            frequency: "20 mins/day",
            exercises: "Standard, diamond, decline push-ups."
        }
    ]
    return (
        <>
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
            clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
        >
            {workouts.map((workout, i) => (
                <SwiperSlide key={i}>
                    <div className='workout-card'>
                        
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
    )
}