// components
import AnimatedVideo from './AnimatedVideo.jsx';
// styles
import '../../styles/components/_animated-section.scss';

export default function AnimatedSection() {
    return (
        <>
            <div id="animated-section">

                <div className="animated-section--text-content">
                    <h2 className="big">Train like a Spartan</h2>
                    <p className="small">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC
                    </p>
                </div>

                <div className="animated-section--video-content">
                    <AnimatedVideo/>
                </div>
            </div>
        </>
    )
}