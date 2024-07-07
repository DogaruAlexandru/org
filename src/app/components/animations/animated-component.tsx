import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedComponentProps {
  children: React.ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: scrollDirection === 'up' ? -50 : 50,
        transition: { duration: 0.6 },
      });
    }
  }, [controls, inView, scrollDirection]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: scrollDirection === 'down' ? 50 : -50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
