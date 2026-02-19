import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, BarChart3, Target, Award } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Projets réalisés', icon: Code2 },
  { value: '2', label: 'Diplômes', icon: Award },
  { value: '2', label: "Domaines d'expertise", icon: Target },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative section-padding bg-[#1a1a2e] overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(109, 40, 217, 0.6) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="relative w-full aspect-square max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Frame */}
                <motion.div 
                  className="absolute -inset-4 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%)',
                  }}
                  animate={{ rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#6d28d9] via-[#8b5cf6] to-[#a78bfa]"
                  animate={{ 
                    boxShadow: [
                      '0 0 30px rgba(109, 40, 217, 0.3)',
                      '0 0 60px rgba(139, 92, 246, 0.5)',
                      '0 0 30px rgba(109, 40, 217, 0.3)',
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Profile Image Placeholder */}
                <div className="relative w-full h-full rounded-2xl bg-[#16213e] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6d28d9] to-[#a78bfa] flex items-center justify-center"
                      animate={{ 
                        rotate: 360,
                        boxShadow: [
                          '0 0 40px rgba(109, 40, 217, 0.4)',
                          '0 0 80px rgba(139, 92, 246, 0.6)',
                          '0 0 40px rgba(109, 40, 217, 0.4)',
                        ]
                      }}
                      transition={{ 
                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                        boxShadow: { duration: 3, repeat: Infinity }
                      }}
                    >
                      <div className="w-36 h-36 rounded-full bg-[#16213e] flex items-center justify-center">
                        <span className="text-5xl font-bold gradient-text">NC</span>
                      </div>
                    </motion.div>
                    <p className="text-[#a78bfa] text-lg">Nanwokan Claire-Lydie</p>
                    <p className="text-[#8b5cf6] text-sm mt-1">OUATTARA</p>
                  </div>
                  
                  {/* Uncomment for actual photo:
                  <img 
                    src="/your-photo.jpg" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </motion.div>

              {/* Floating Badge - Developer */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass rounded-2xl p-4"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6d28d9] to-[#8b5cf6] flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Code2 size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <p className="text-white font-semibold">Développeuse</p>
                    <p className="text-[#a78bfa] text-sm">Full Stack</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Management */}
              <motion.div
                className="absolute -top-6 -left-6 glass rounded-2xl p-4"
                initial={{ opacity: 0, scale: 0, y: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <BarChart3 size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <p className="text-white font-semibold">Contrôle de</p>
                    <p className="text-[#a78bfa] text-sm">Gestion</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Floating Dots */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#8b5cf6]"
                  style={{
                    top: `${10 + i * 20}%`,
                    left: i % 2 === 0 ? '-10%' : '110%',
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Section Label */}
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="w-8 h-0.5 bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6]"
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
              />
              <p className="text-[#a78bfa] font-medium tracking-widest uppercase text-sm">
                À Propos
              </p>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Une double expertise au service de{' '}
              <span className="gradient-text">l'innovation</span>
            </motion.h2>

            {/* Paragraphs with stagger */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              {[
                "Diplômée en développement Web et Mobile Android, je maîtrise les technologies modernes pour créer des applications performantes et des sites web responsives qui répondent aux besoins des utilisateurs.",
                "Mon Master en Audit et Contrôle de Gestion me confère une vision stratégique unique, me permettant d'approcher chaque projet avec une perspective à la fois technique et managériale.",
                "Passionnée par l'innovation digitale, j'ai réalisé plusieurs projets personnels pour mon entourage, allant du développement d'applications mobiles à la création de sites web sur mesure."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-gray-400 leading-relaxed"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            {/* Stats with Counter Animation */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center group cursor-default"
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8,
                    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                >
                  <motion.div
                    className="text-3xl font-bold gradient-text mb-1"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-center gap-1 text-gray-400 text-xs"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <stat.icon size={12} className="text-[#8b5cf6]" />
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
