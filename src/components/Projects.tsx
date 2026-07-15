import { motion } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import { GithubIcon } from './icons'
import SectionHeader from './SectionHeader'
import { projects, type Project } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="Real-world applications I've designed and built end-to-end"
        />

        <div className="space-y-20">
          {projects.map((project, index) =>
            project.isTeaser ? (
              <TeaserCard key={project.title} project={project} index={index} />
            ) : (
              <ProjectCard key={project.title} project={project} index={index} />
            )
          )}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLeft = project.layout === 'left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-2 gap-8 items-center ${
        !isLeft ? 'md:[direction:rtl]' : ''
      }`}
    >
      {/* Screenshot */}
      <div className="[direction:ltr]">
        <div className="relative group">
          <div className="bg-bg-card rounded-xl border border-border overflow-hidden">
            {project.screenshot ? (
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="w-full h-auto object-cover aspect-video"
              />
            ) : (
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-text-secondary text-sm font-medium">
                  {project.title} Screenshot
                </span>
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Details */}
      <div className="[direction:ltr]">
        <h3 className="text-2xl font-bold text-text mb-3">{project.title}</h3>
        <p className="text-text-secondary mb-4">{project.summary}</p>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-1">
              Problem
            </h4>
            <p className="text-sm text-text-secondary">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-1">
              Solution
            </h4>
            <p className="text-sm text-text-secondary">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-1">
              My Role
            </h4>
            <p className="text-sm text-text-secondary">{project.role}</p>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-bold text-text mb-2">Key Features</h4>
          <ul className="space-y-1">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-bold text-text mb-2">Challenge</h4>
          <p className="text-sm text-text-secondary">{project.challenges}</p>
        </div>

        {project.clientImpact && (
          <div className="mb-4">
            <h4 className="text-sm font-bold text-text mb-2">How It Helped Clients</h4>
            <p className="text-sm text-text-secondary">{project.clientImpact}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-lg font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.githubFrontendUrl && (
            <a
              href={project.githubFrontendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text rounded-xl text-sm font-medium hover:bg-bg-card transition-colors"
            >
              <GithubIcon size={14} />
              Frontend
            </a>
          )}
          {project.githubBackendUrl && (
            <a
              href={project.githubBackendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text rounded-xl text-sm font-medium hover:bg-bg-card transition-colors"
            >
              <GithubIcon size={14} />
              Backend
            </a>
          )}
          {project.githubUrl && !project.githubFrontendUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text rounded-xl text-sm font-medium hover:bg-bg-card transition-colors"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function TeaserCard({ project, index }: { project: Project; index: number }) {
  const isLeft = project.layout === 'left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-2 gap-8 items-center ${
        !isLeft ? 'md:[direction:rtl]' : ''
      }`}
    >
      {/* Visual */}
      <div className="[direction:ltr]">
        <div className="relative group">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-border overflow-hidden">
            <div className="aspect-video flex items-center justify-center relative">
              {/* Decorative AI elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-8 h-8 border border-blue-400 rounded-full animate-pulse" />
                <div className="absolute bottom-6 right-6 w-6 h-6 border border-purple-400 rounded-full animate-pulse delay-300" />
                <div className="absolute top-1/2 left-1/3 w-4 h-4 border border-emerald-400 rounded-full animate-pulse delay-700" />
              </div>
              <div className="text-center relative z-10">
                <Sparkles size={32} className="text-blue-400 mx-auto mb-3" />
                <span className="text-white/80 text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Teaser content */}
      <div className="[direction:ltr]">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-2xl font-bold text-text">{project.title}</h3>
          <span className="px-3 py-1 text-xs font-bold bg-blue-50 text-blue-600 rounded-full border border-blue-200">
            Coming Soon
          </span>
        </div>

        <p className="text-text-secondary mb-6 leading-relaxed">
          {project.teaserDescription}
        </p>

        {project.technologies.length > 0 && (
          <>
            <div className="mb-6">
              <h4 className="text-sm font-bold text-text mb-3">AI Capabilities</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Facial Emotion Recognition',
                  'Speech Emotion Analysis',
                  'Speech-to-Text (Tagalog)',
                  'Emotional Spike Detection',
                ].map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <Sparkles size={12} className="text-blue-500 flex-shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-lg font-medium border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}

        {project.title === 'Anumata' && (
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Undergraduate thesis project — STI College Davao
          </div>
        )}
      </div>
    </motion.div>
  )
}
