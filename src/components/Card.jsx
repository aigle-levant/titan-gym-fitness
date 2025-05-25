//styles
import '../styles/components/_card.scss';

export function ChallengeCard() {
    return (
        <div className="card">
            <img src="" alt="." className="card-img"/>
            <div className="card-content">
            </div>
        </div>
    )
}

export function TrainerCard({ trainerImg, trainerName, trainerDept }) {
    return (
        <div className="trainer-card">
            <div className="trainer-img-wrapper">
                <img src={trainerImg} alt={trainerName}/>
            </div>
            <div className="trainer-card--content">
                <h3 className="medium trainer-name">{trainerName}</h3>
                <div className="pill">
                    <p className="small trainer-dept">{trainerDept}</p>
                </div>
            </div>
        </div>
    )
}