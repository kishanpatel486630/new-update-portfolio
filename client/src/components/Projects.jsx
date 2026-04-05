import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { projects } from '../data/portfolio';
import Card from './ui/Card';
import SectionHeading from './ui/SectionHeading';
import { StaggerContainer, StaggerItem } from './motion/StaggerContainer';

export default function Projects({ onOpenCaseStudy }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A curated selection of my recent design work across various industries and platforms."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <Card
                glowColor={project.id === 'finflow' ? 'cyan' : project.id === 'pulse' ? 'purple' : 'blue'}
                className="group cursor-pointer h-full"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => project.hasCaseStudy && onOpenCaseStudy?.(project.id)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />

                  {/* Year badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-medium text-text-secondary">
                    {project.year}
                  </div>

                  {/* Case Study indicator */}
                  {project.hasCaseStudy && (
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end text-xs font-semibold"
                      animate={hoveredId === project.id ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Case Study
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-gradient-end font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient-end transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.05] text-text-secondary border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm font-medium text-gradient-end group-hover:gap-3 transition-all duration-300">
                    {project.hasCaseStudy ? 'View Case Study' : 'View Project'}
                    <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
