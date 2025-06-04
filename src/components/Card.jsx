//styles
import "../styles/components/_card.scss";

export function ChallengeCard() {
  return (
    <div className="card">
      <img src="" alt="." className="card-img" />
      <div className="card-content"></div>
    </div>
  );
}

export function TrainerCard({ trainerImg, trainerName, trainerDept }) {
  return (
    <div className="trainer-card">
      <div className="trainer-img-wrapper">
        <img src={trainerImg} alt={trainerName} />
      </div>
      <div className="trainer-card--content">
        <h3 className="medium trainer-name">{trainerName}</h3>
        <div className="pill">
          <p className="small trainer-dept">{trainerDept}</p>
        </div>
      </div>
    </div>
  );
}

export function SubscriptionCard({ tier, benefits, price, subClass }) {
  return (
    <div className={`subscription-card ${subClass}`}>
      <div className="sub-benefits">
        <h3 className="big">{tier}</h3>
        <ul>
          {benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="price-tag">
        <p className="medium">Starting at {price}</p>
        <button type="submit" className="small btn subscribe-btn">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export function TestimonialCard({ testimonialDesc, testimonialName }) {
  return (
    <div className="testimonial-card">
      <p className="small">"{testimonialDesc}"</p>
      <span className="small name">{testimonialName}</span>
    </div>
  );
}

export function WorkoutCard({
  workoutName,
  workoutGoal,
  workoutFrequency,
  workoutExercises,
  workoutImg,
}) {
  return (
    <div className="workout-card">
      <div className="workout-card-img">
        <img src={workoutImg} alt={workoutName} />
      </div>
      <p className="medium">{workoutName}</p>
      <div className="workout-card-details">
        <p className="small">Goal: {workoutGoal}</p>
        <p className="small">Frequency: {workoutFrequency}</p>
        <p className="medium">Exercises included:</p>
        <p className="small">{workoutExercises}</p>
      </div>
    </div>
  );
}
