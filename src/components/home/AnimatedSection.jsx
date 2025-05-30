// libraries
import { motion } from 'framer-motion';
// components
import AnimatedVideo from './AnimatedVideo.jsx';

export default function AnimatedSection() {
    return (
        <>
            <motion.div id="animated-section"
                initial={{ x: -50, y:0 }}
                animate={{ x: 50, y:0 }}>

                <div className="animated-section--text-content">
                    <h2 className="big">Train like a Spartan</h2>
                    <p className="small">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC
                    </p>
                </div>
            </motion.div>
            <div className="animated-section--video-content">
                    <AnimatedVideo/>
            </div>
        </>
    )
}