
export function ChallengeCard() {
    return (
        <div className="card">
            <img src="" alt="." className="card-img"/>
            <div className="card-content">
            </div>
        </div>
    )
}

export function TrainerCard({ trainerImg, trainerName, trainerDescription, trainerDept }) {
    return (
        <div className="trainer-card">
            <img src={trainerImg} alt={trainerName}/>
            <div className="trainer-card--content">
                <h3 className="medium trainer-name">{trainerName}</h3>
                <div className="pill">
                    <p className="small trainer-dept">{trainerDept}</p>
                </div>
                <p className="small trainer-desc">{trainerDescription}</p>
            </div>
        </div>
    )
}