import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, BarChart3 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Stage en Contrôle de Gestion',
    period: '2023 - 2024',
    description: 'Participation à l\'élaboration des tableaux de bord, analyse des écarts budgétaires, et contribution à l\'optimisation des processus de reporting.',
    icon: BarChart3,
  },
  {
    id: 2,
    type: 'project',
    title: 'Projets de Développement Web & Mobile',
    period: '2022 - Présent',
    description: 'Conception et développement d\'applications mobiles Android et de sites web pour mon entourage. Création de solutions sur mesure répondant aux besoins spécifiques de chaque projet.',
    icon: Code2,
  },
  {
    id: 3,
    type: 'education',
    title: 'Master en Audit et Contrôle de Gestion',
    period: '2022 - 2024',
    description: 'Formation approfondie en audit financier, contrôle de gestion, analyse stratégique et tableaux de bord.',
    icon: GraduationCap,
  },
  {
    id: 4,
    type: 'education',
    title: 'Diplôme de Développeur Web & Mobile',
    period: '2020 - 2022',
    description: 'Acquisition des compétences en développement front-end, back-end, et développement mobile Android.',
    icon: Briefcase,
  },
];

const TimelineItem = ({ 
  experience, 
  index, 
  isLeft 
}: { 
  experience: typeof experiences[0]; 
  index: number;
  isLeft: boolean;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={itemRef}
      className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:items-stretch`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Content Card */}
      <div className={`lg:w-5/12 ${isLeft ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'} w-full mb-8 lg:mb-0`}>
        <motion.div
          className="glass rounded-2xl p-6 relative group hover:border-[#8b5cf6]/30 transition-all duration-300"
          whileHover={{ scale: 1.03, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow Effect */}
          <motion.div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ 
              background: `radial-gradient(circle at ${isLeft ? '100%' : '0%'} 50%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)` 
            }}
          />
          
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div 
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#6d28d9]/20"
              whileHover={{ rotate: 15, scale: 1.1 }}
            >
              <experience.icon size={20} className="text-[#8b5cf6]" />
            </motion.div>
            <motion.span 
              className="text-sm font-medium px-3 py-1 rounded-full bg-[#6d28d9]/20 text-[#a78bfa]"
              whileHover={{ scale: 1.05 }}
            >
              {experience.period}
            </motion.span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#a78bfa] transition-colors">{experience.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{experience.description}</p>
        </motion.div>
      </div>

      {/* Center Dot */}
      <div className="lg:w-2/12 flex justify-center relative">
        <motion.div
          className="w-6 h-6 rounded-full border-4 border-[#8b5cf6] bg-[#0f0f1a] z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
          whileHover={{ scale: 1.3 }}
        />
        {/* Pulse Effect */}
        <motion.div
          className="absolute w-6 h-6 rounded-full bg-[#8b5cf6]"
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Empty Space for Alternating Layout */}
      <div className="lg:w-5/12 hidden lg:block" />
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative section-padding bg-[#0f0f1a] overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <motion.div
              className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#8b5cf6]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ delay: 0.2 }}
            />
            <p className="text-[#a78bfa] font-medium tracking-widest uppercase text-sm">
              Parcours
            </p>
            <motion.div
              className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#8b5cf6]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Mon expérience <span className="gradient-text">professionnelle</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Un parcours riche combinant formation académique et expériences pratiques 
            dans le développement et le management.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden lg:block"
            style={{
              background: 'linear-gradient(180deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%)',
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Mobile Line */}
          <motion.div
            className="absolute left-3 w-0.5 h-full lg:hidden"
            style={{
              background: 'linear-gradient(180deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%)',
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="lg:py-8">
                <div className="lg:hidden pl-12">
                  <motion.div
                    className="glass rounded-2xl p-6 relative hover:border-[#8b5cf6]/30 transition-colors"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <div className="absolute -left-10 top-6 w-6 h-6 rounded-full border-4 border-[#8b5cf6] bg-[#0f0f1a] z-10" />
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#6d28d9]/20"
                        whileHover={{ rotate: 15 }}
                      >
                        <experience.icon size={20} className="text-[#8b5cf6]" />
                      </motion.div>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#6d28d9]/20 text-[#a78bfa]">
                        {experience.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{experience.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{experience.description}</p>
                  </motion.div>
                </div>
                <div className="hidden lg:block">
                  <TimelineItem 
                    experience={experience} 
                    index={index}
                    isLeft={index % 2 === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
