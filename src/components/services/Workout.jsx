// components
import Accordion from "./Accordion.jsx";
// libraries
import { useState } from "react";

export default function Workout() {
  const [isActive, setIsActive] = useState(null);
  const toggleAccordion = (index) => {
    setIsActive(isActive === index ? null : index);
  };
  const data = [
    {
      title: "Full-Body Fire (30-Day Strength Challenge)",
      goal: "Build overall strength and endurance with progressive bodyweight and dumbbell workouts.",
      exercise: "Squats, lunges, push-ups, planks, and progressive overload.",
      repeat: "3-4x per week",
    },
    {
      title: "Cardio Crusher (14-Day HIIT Challenge)",
      goal: "Burn fat and boost stamina with short, high-intensity workouts.",
      exercise: "Jump squats, burpees, mountain climbers, sprints.",
      repeat: "20 mins/day",
    },
    {
      title: "Flex Flow (10-Day Mobility & Flexibility Reset)",
      goal: "Improve posture, flexibility, and muscle recovery.",
      exercise: "Yoga flows, hip openers, shoulder mobility, spine stretches.",
      repeat: "15 mins/day",
    },
    {
      title: "Core Inferno (7-Day Abs Challenge)",
      goal: "Sculpt and strengthen your core in one week.",
      exercise: "Planks, leg raises, Russian twists, flutter kicks.",
      repeat: "10 mins/day",
    },
    {
      title: "Push-Up Power (21-Day Strength Builder)",
      goal: "Master push-ups and increase upper body strength.",
      exercise: "Standard, diamond, decline push-ups.",
      repeat: "20 mins/day",
    },
  ];
  return (
    <div className="workout-section">
      <h2 className="big">Featured challenges</h2>
      <div>
        {data.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            goal={item.goal}
            exercise={item.exercise}
            repeat={item.repeat}
            isOpen={isActive === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
}
