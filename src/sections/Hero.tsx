import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Code2, BarChart3, Sparkles } from 'lucide-react';

// Particle Component with more dynamic movement
const Particle = ({ delay, index }: { delay: number; index: number }) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const size = Math.random() * 6 + 3;
  const duration = Math.random() * 8 + 12;
  
  const colors = ['#6d28d9', '#8b5cf6', '#a78bfa', '#c4b5fd'];
  const color = colors[index % colors.length];

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: `${randomX}%`,
        top: `${randomY}%`,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
      animate={{
        y: [0, -50, 0, 30, 0],
        x: [0, Math.random() * 40 - 20, Math.random() * -40 + 20, 0],
        opacity: [0.2, 0.8, 0.4, 0.9, 0.2],
        scale: [1, 1.3, 0.8, 1.2, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

// Typing Effect Component
const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {!isComplete && <span className="cursor-blink text-[#8b5cf6]">|</span>}
    </span>
  );
};

// Floating Icon Component
const FloatingIcon = ({ 
  icon: Icon, 
  delay, 
  x, 
  y, 
  size = 24 
}: { 
  icon: React.ElementType; 
  delay: number; 
  x: string; 
  y: string;
  size?: number;
}) => (
  <motion.div
    className="absolute text-[#8b5cf6]/30"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    <Icon size={size} />
  </motion.div>
);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Parallax transforms
  const parallaxX = useTransform(mouseX, [-500, 500], [30, -30]);
  const parallaxY = useTransform(mouseY, [-500, 500], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate particles
  const particles = Array.from({ length: 40 }, (_, i) => i);

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a]" />
      
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(109, 40, 217, 0.4) 0%, transparent 60%)',
            left: '10%',
            top: '10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 60%)',
            right: '5%',
            bottom: '10%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((i) => (
          <Particle key={i} delay={i * 0.15} index={i} />
        ))}
      </div>

      {/* Floating Icons */}
      <FloatingIcon icon={Code2} delay={0} x="10%" y="20%" size={32} />
      <FloatingIcon icon={BarChart3} delay={1} x="85%" y="30%" size={28} />
      <FloatingIcon icon={Sparkles} delay={2} x="15%" y="70%" size={24} />
      <FloatingIcon icon={Code2} delay={1.5} x="80%" y="75%" size={20} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Greeting with Sparkle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <motion.div
                animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="text-[#8b5cf6]" size={20} />
              </motion.div>
              <p className="text-[#a78bfa] font-medium tracking-widest uppercase text-sm">
                Bonjour, je suis
              </p>
            </motion.div>

            {/* Name with Typing Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="gradient-text">
                <TypingText text="Nanwokan Claire-Lydie" delay={600} />
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              OUATTARA
            </motion.h2>

            {/* Animated Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <motion.span 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#6d28d9]/20 text-[#a78bfa] text-sm font-medium border border-[#8b5cf6]/30"
                whileHover={{ scale: 1.05, borderColor: '#8b5cf6' }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Code2 size={16} />
                </motion.div>
                Développeuse Web & Mobile
              </motion.span>
              <motion.span 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/20 text-[#c4b5fd] text-sm font-medium border border-[#a78bfa]/30"
                whileHover={{ scale: 1.05, borderColor: '#a78bfa' }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <BarChart3 size={16} />
                </motion.div>
                Experte en Contrôle de Gestion
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Je combine expertise technique en développement avec une vision stratégique 
              en management pour créer des solutions digitales innovantes et performantes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Voir mes projets</span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.button>
            </motion.div>

            {/* Social Links with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.4 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Mail, href: '#contact', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => {
                    if (social.href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(social.href);
                    }
                  }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#8b5cf6] hover:border-[#8b5cf6] transition-all duration-300 border border-transparent"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.6 + index * 0.15, type: "spring" }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div 
              className="relative"
              style={{ x: parallaxX, y: parallaxY }}
            >
              {/* Outer Glow Rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%)',
                  padding: '4px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-[#0f0f1a]" />
              </motion.div>

              {/* Main Photo Container */}
              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%)',
                  padding: '4px',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Photo Placeholder - Replace with your image */}
                <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center overflow-hidden">
                  {/* Default Avatar - Replace src with your photo */}
                  <div className="text-center">
                    <motion.div
                      className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#6d28d9] to-[#a78bfa] flex items-center justify-center"
                      animate={{ 
                        boxShadow: [
                          '0 0 30px rgba(109, 40, 217, 0.3)',
                          '0 0 60px rgba(139, 92, 246, 0.5)',
                          '0 0 30px rgba(109, 40, 217, 0.3)',
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-5xl font-bold text-white">NC</span>
                    </motion.div>
                    <p className="text-[#a78bfa] text-sm">Ajoutez votre photo ici</p>
                  </div>
                  
                  {/* Uncomment and replace src when you have a photo:
                  <img 
                    src="/your-photo.jpg" 
                    alt="Nanwokan Claire-Lydie OUATTARA"
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-14 h-14 rounded-full bg-gradient-to-br from-[#6d28d9] to-[#8b5cf6] flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: 360,
                  boxShadow: [
                    '0 0 20px rgba(109, 40, 217, 0.4)',
                    '0 0 40px rgba(139, 92, 246, 0.6)',
                    '0 0 20px rgba(109, 40, 217, 0.4)',
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ originX: -3, originY: 3 }}
              >
                <Code2 size={24} className="text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 w-14 h-14 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: -360,
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.4)',
                    '0 0 40px rgba(167, 139, 250, 0.6)',
                    '0 0 20px rgba(139, 92, 246, 0.4)',
                  ]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ originX: 3, originY: -3 }}
              >
                <BarChart3 size={24} className="text-white" />
              </motion.div>

              {/* Decorative Dots */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-[#8b5cf6]"
                  style={{
                    top: `${20 + Math.sin(i * 1.04) * 40}%`,
                    left: `${20 + Math.cos(i * 1.04) * 40}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-gray-400 hover:text-[#8b5cf6] transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs mb-2 uppercase tracking-widest">Découvrir</span>
          <motion.div
            animate={{ 
              y: [0, 5, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
