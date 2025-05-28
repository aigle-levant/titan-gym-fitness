// components
import { SubscriptionCard } from '../Card.jsx';
// styles
import '../../styles/components/_subscription-model.scss';
import '../../styles/components/_button.scss';

export default function SubscriptionList() {
    const subscriptions = [
        {
            tier: "Hoplite",
            benefits: [
                "Full-day gym access",
                "Includes group classes (yoga, HIIT, etc.)",
                "Locker access"
            ],
            price: "$19.99 / month",
            subClass: "basic"
        },
        {
            tier: "Promachos",
            benefits: [
                "All Standard features",
                "Personal trainer sessions included",
                "Access to premium amenities (sauna, spa, body analysis)",
                "Free guest passes"
            ],
            price: "$39.99 / month",
            subClass: "pro"
        },
        {
            tier: "Polemarch",
            benefits: [
                "All Premium features",
                "Priority booking",
                "Nutritionist consultation",
                "Exclusive events/workshops"
            ],
            price: "$199.99 / month",
            subClass: "elite"
        }
    ]
    return (
        <div id="subscription-model">
            <h2 className='big'>Join the club</h2>
            <div className='subscription-cards'>
                {subscriptions.map(
                    (card, i) => (
                    <SubscriptionCard
                        key={i}
                        tier={card.tier}
                        benefits={card.benefits}
                        price={card.price}
                        subClass={card.subClass}
                    />)
                )}
            </div>
        </div>
    )
}