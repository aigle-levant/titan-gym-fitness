// libraries
import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
// videos
import videoOne from '../../assets/Videos/challenge-1.mp4';
import videoTwo from '../../assets/Videos/challenge-2.mp4';
import videoThree from '../../assets/Videos/challenge-3.mp4';

const slides = [videoOne, videoTwo, videoThree];

export default function App() {
  const [index, set] = useState(0);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length)
      }
    },
    exitBeforeEnter: true,
  });

  const containerStyle = {
    width: '600px',
    height: '400px',
    position: 'relative',
    overflow: 'hidden',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  };

  return (
    <div style={containerStyle}>
      {transitions((style, i) => (
        <animated.div key={i} style={{ ...style, ...videoStyle }}>
          <video
            src={slides[i]}
            autoPlay
            muted
            loop
            playsInline
            style={videoStyle}
          />
        </animated.div>
      ))}
    </div>
  );
}
