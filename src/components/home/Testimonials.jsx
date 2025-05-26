// components
import { TestimonialCard } from "../Card";
// styles
import '../../styles/components/_testimonials.scss';

export default function Testimonials() {
    return (
        <div id="testimonials">
            <h2 className="big">What they say about us</h2>
            <div className="testimonials-wrapper">
                <div className="top-wrapper">
                    <TestimonialCard
                        testimonialDesc={
                            "Their Greek-themed gym offers a unique approach to fitness that combines strength training with cardio prowess."
                        }
                        testimonialName={"Alexandra Reed"}/>
                    <TestimonialCard
                        testimonialDesc={
                            "Titan Fitness has transformed my workout routine with their unique blend of Greek mythology-inspired gym fitness."
                        }
                        testimonialName={"Ravish Khan"}/>
                </div>
                <div className="bottom-wrapper">
                    <TestimonialCard
                        testimonialDesc={
                            "The variety of cardio and strength training exercises kept me engaged and motivated throughout my journey to becoming fit."
                        }
                        testimonialName={"Somerset Blair"}/>
                    <TestimonialCard
                        testimonialDesc={
                            "I highly recommend Titan Fitness to anyone seeking a unique and effective fitness experience."
                        }
                        testimonialName={"Jan Kowalski"}
                        />
                </div>
            </div>
        </div>
    )
}