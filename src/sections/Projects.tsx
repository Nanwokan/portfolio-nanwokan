import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, AppWindow } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Application Mobile de Gestion',
    description: 'Application Android pour la gestion personnelle avec suivi des tâches, rappels et organisation quotidienne.',
    technologies: ['Kotlin', 'Firebase', 'Material Design'],
    type: 'mobile',
    icon: Smartphone,
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Site Web E-commerce',
    description: 'Site de vente en ligne complet avec panier d\'achat, système de paiement sécurisé et espace administrateur.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    type: 'web',
    icon: Globe,
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Dashboard de Reporting',
    description: 'Tableau de bord interactif pour la visualisation de données en temps réel et le suivi des KPIs.',
    technologies: ['React', 'Chart.js', 'REST API'],
    type: 'webapp',
    icon: AppWindow,
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Application de Suivi Financier',
    description: 'App mobile pour le suivi des dépenses, la gestion budgétaire personnelle et les rapports financiers.',
    technologies: ['React Native', 'SQLite'],
    type: 'mobile',
    icon: Smartphone,
    github: '#',
    demo: '#',
  },
];

const filterCategories = [
  { id: 'all', label: 'Tous' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web' },
  { id: 'webapp', label: 'Web App' },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      layout
    >
      <motion.div
        className="glass rounded-3xl overflow-hidden h-full border border-transparent hover:border-[#8b5cf6]/30 transition-all duration-500"
        whileHover={{ y: -15, scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        {/* Card Header with Icon */}
        <div 
          className="h-48 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)' }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="w-24 h-24 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(109, 40, 217, 0.2)' }}
              animate={{
                boxShadow: [
                  '0 0 30px rgba(109, 40, 217, 0.2)',
                  '0 0 50px rgba(139, 92, 246, 0.3)',
                  '0 0 30px rgba(109, 40, 217, 0.2)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <project.icon size={48} className="text-[#8b5cf6]" />
            </motion.div>
          </motion.div>
          
          {/* Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-[#0f0f1a]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <div className="flex gap-4">
              <motion.a
                href={project.github}
                className="w-12 h-12 rounded-full bg-[#6d28d9]/50 flex items-center justify-center text-white hover:bg-[#8b5cf6] transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={project.demo}
                className="w-12 h-12 rounded-full bg-[#8b5cf6]/50 flex items-center justify-center text-white hover:bg-[#a78bfa] transition-colors"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Type Badge */}
          <motion.div 
            className="absolute top-4 left-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#6d28d9]/40 text-[#a78bfa]">
              {project.type}
            </span>
          </motion.div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <motion.h3 
            className="text-xl font-bold text-white mb-3 group-hover:text-[#a78bfa] transition-colors"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#16213e] text-gray-300 border border-[#ffffff08] hover:border-[#8b5cf6] hover:text-[#a78bfa] transition-all cursor-default"
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.4 + i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative section-padding bg-[#1a1a2e] overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(109, 40, 217, 0.5) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
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
              Projets
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
            Mes <span className="gradient-text">réalisations</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Découvrez une sélection de mes projets personnels, réalisés avec passion 
            et dévouement pour mon entourage.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filterCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] text-white shadow-lg shadow-[#8b5cf6]/30'
                  : 'bg-[#16213e] text-gray-400 hover:text-white border border-[#ffffff08] hover:border-[#8b5cf6]/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#8b5cf6] text-[#a78bfa] font-medium hover:bg-[#8b5cf6] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Voir plus sur GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
