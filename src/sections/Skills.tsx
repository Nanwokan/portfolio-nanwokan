import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Palette, 
  BarChart3, 
  FileSearch, 
  LineChart, 
  LayoutDashboard, 
  Users 
} from 'lucide-react';

const devSkills = [
  { name: 'HTML / CSS / JavaScript', level: 90, icon: Code2 },
  { name: 'React / React Native', level: 85, icon: Code2 },
  { name: 'Android (Kotlin / Java)', level: 80, icon: Smartphone },
  { name: 'PHP / MySQL', level: 75, icon: Database },
  { name: 'UI/UX Design', level: 70, icon: Palette },
];

const managementSkills = [
  { name: 'Contrôle de Gestion', level: 90, icon: BarChart3 },
  { name: 'Audit Financier', level: 85, icon: FileSearch },
  { name: 'Analyse de Données', level: 80, icon: LineChart },
  { name: 'Tableaux de Bord', level: 85, icon: LayoutDashboard },
  { name: 'Gestion de Projet', level: 75, icon: Users },
];

const SkillBar = ({ skill, index }: { skill: typeof devSkills[0]; index: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={barRef}
      className="mb-6 group"
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <motion.div 
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#6d28d9]/20 group-hover:bg-[#8b5cf6]/30 transition-colors"
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            <skill.icon size={20} className="text-[#8b5cf6]" />
          </motion.div>
          <span className="text-white font-medium group-hover:text-[#a78bfa] transition-colors">{skill.name}</span>
        </div>
        <motion.span 
          className="text-[#a78bfa] font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-3 bg-[#16213e] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          style={{ 
            background: 'linear-gradient(90deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%)',
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative section-padding bg-gradient-to-b from-[#1a1a2e] to-[#16213e] overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
              Compétences
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
            Mes domaines d'<span className="gradient-text">expertise</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Une combinaison unique de compétences techniques et managériales 
            pour des projets complets et performants.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Development Skills */}
          <motion.div
            className="glass rounded-3xl p-8 hover:border-[#8b5cf6]/30 transition-colors"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6d28d9] to-[#8b5cf6] flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(109, 40, 217, 0.3)',
                    '0 0 40px rgba(139, 92, 246, 0.5)',
                    '0 0 20px rgba(109, 40, 217, 0.3)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code2 size={28} className="text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">Développement</h3>
                <p className="text-[#a78bfa] text-sm">Web & Mobile</p>
              </div>
            </div>
            <div>
              {devSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Management Skills */}
          <motion.div
            className="glass rounded-3xl p-8 hover:border-[#a78bfa]/30 transition-colors"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                    '0 0 40px rgba(167, 139, 250, 0.5)',
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <BarChart3 size={28} className="text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">Management</h3>
                <p className="text-[#a78bfa] text-sm">Contrôle & Audit</p>
              </div>
            </div>
            <div>
              {managementSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skill Tags */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            'React', 'TypeScript', 'Kotlin', 'Firebase', 'Node.js',
            'Excel', 'Power BI', 'SAP', 'SQL', 'Figma'
          ].map((tag, index) => (
            <motion.span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-medium bg-[#16213e] text-gray-300 border border-[#ffffff08] hover:border-[#8b5cf6] hover:text-[#a78bfa] transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.1, y: -3 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
