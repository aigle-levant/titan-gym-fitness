// components
import SwiperTrainer from "./SwiperTrainer"

export default function Trainer() {
    return (
        <div className="service-trainer">
            <h2 className="big">Trainers</h2>
            <p className='small'>Hint: Swipe to see the trainers</p>
            <SwiperTrainer/>
        </div>
    )
}