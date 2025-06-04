// libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
// styles
import "swiper/css";
import "swiper/css/effect-cards";
// components
import { WorkoutCard } from "../Card";
// images
import workoutOne from "../../assets/img/workout-1.jpg";
import workoutTwo from "../../assets/img/workout-2.jpg";
import workoutThree from "../../assets/img/workout-3.jpg";
import workoutFour from "../../assets/img/workout-4.jpg";
import workoutFive from "../../assets/img/workout-5.jpg";

export default function SwiperWorkout() {
  const workouts = [
    {
      name: "Full-Body Fire (30-Day Strength Challenge)",
      goal: "Build overall strength and endurance with progressive bodyweight and dumbbell workouts.",
      frequency: "3-4x per week",
      exercises: "Squats, lunges, push-ups, planks, and progressive overload.",
      img: workoutOne,
    },
    {
      name: "Cardio Crusher (14-Day HIIT Challenge)",
      goal: "Burn fat and boost stamina with short, high-intensity workouts.",
      frequency: "20 mins/day",
      exercises: "Jump squats, burpees, mountain climbers, sprints.",
      img: workoutTwo,
    },
    {
      name: "Flex Flow (10-Day Mobility & Flexibility Reset)",
      goal: "Improve posture, flexibility, and muscle recovery.",
      frequency: "15 mins/day",
      exercises: "Yoga flows, hip openers, shoulder mobility, spine stretches.",
      img: workoutThree,
    },
    {
      name: "Core Inferno (7-Day Abs Challenge)",
      goal: "Sculpt and strengthen your core in one week.",
      frequency: "10 mins/day",
      exercises: "Planks, leg raises, Russian twists, flutter kicks.",
      img: workoutFour,
    },
    {
      name: "Push-Up Power (21-Day Strength Builder)",
      goal: "Master push-ups and increase upper body strength.",
      frequency: "20 mins/day",
      exercises: "Standard, diamond, decline push-ups.",
      img: workoutFive,
    },
  ];
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {workouts.map((workout, i) => (
          <SwiperSlide key={i} className="slide">
            <WorkoutCard
              workoutImg={workout.img}
              workoutName={workout.name}
              workoutGoal={workout.goal}
              workoutFrequency={workout.goal}
              workoutExercises={workout.exercises}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
