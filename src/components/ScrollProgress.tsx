import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%)',
        boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
      }}
    />
  );
};

export default ScrollProgress;
