// components
import { SubscriptionCard } from '../Card.jsx';
// styles
import '../../styles/components/_subscription-model.scss';

export default function SubscriptionList() {
    const subscriptions = [
        {
            tier: "Hoplite",
            benefits: [
                "Full-day gym access",
                "Includes group classes (yoga, HIIT, etc.)",
                "Locker access"
            ],
            price: "₹999 / month",
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
            price: "₹1316 / month",
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
            price: "₹1899 / month",
            subClass: "elite"
        }
    ]
    return (
        <div id="subscription-model">
            <h2 className='big'>Join the club</h2>
            <div className='subscription-wrapper'>
                {subscriptions.map((subs, i) => (
                    <SubscriptionCard
                        key={i}
                        tier={subs.tier}
                        benefits={subs.benefits}
                        price={subs.price}
                        className={subs.subClass}
                    />
                ))}
            </div>
        </div>
    )
}