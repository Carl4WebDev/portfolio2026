import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { stacks, adaptabilityNote } from '../data/portfolio'
import {
  ReactIcon,
  NodeIcon,
  PostgresIcon,
  NuxtIcon,
  LaravelIcon,
  MySQLIcon,
  PythonIcon,
  TensorFlowIcon,
  OpenCVIcon,
} from './TechStackIcons'

const techIcons: Record<string, React.FC<{ size?: number; className?: string }>> = {
  'React': ReactIcon,
  'Node.js + Express': NodeIcon,
  'PostgreSQL': PostgresIcon,
  'Nuxt': NuxtIcon,
  'Laravel': LaravelIcon,
  'MySQL': MySQLIcon,
  'Python': PythonIcon,
  'TensorFlow': TensorFlowIcon,
  'OpenCV': OpenCVIcon,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Tech Stacks"
          subtitle="Fullstack web development and AI-powered solutions"
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stacks.map((stack, stackIndex) => {
            const badgeStyles = [
              'bg-primary/10 text-primary',
              'bg-emerald-50 text-emerald-600',
              'bg-violet-50 text-violet-600',
            ]
            return (
            <motion.div
              key={stack.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stackIndex * 0.15, duration: 0.5 }}
              className="bg-white rounded-xl border border-border p-6 card-hover"
            >
              <div className="mb-2">
                <span
                  className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${badgeStyles[stackIndex]}`}
                >
                  {stack.label}
                </span>
              </div>
              <p className="text-sm text-text-secondary mb-6">
                {stack.description}
              </p>

              <div className="flex items-center justify-center gap-4">
                {stack.techs.map((tech, techIndex) => {
                  const Icon = techIcons[tech.name]
                  return (
                    <div key={tech.name} className="flex items-center gap-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: stackIndex * 0.15 + techIndex * 0.1,
                          duration: 0.3,
                        }}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="p-3 bg-bg-card rounded-xl border border-border">
                          {Icon && <Icon size={32} />}
                        </div>
                        <span className="text-xs font-bold text-text text-center leading-tight">
                          {tech.name}
                        </span>
                        <span className="text-[10px] text-text-secondary">
                          {tech.role}
                        </span>
                      </motion.div>

                      {techIndex < stack.techs.length - 1 && (
                        <ArrowRight
                          size={16}
                          className="text-border flex-shrink-0"
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )})}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-text-secondary mt-8 max-w-2xl mx-auto text-sm italic"
        >
          {adaptabilityNote}
        </motion.p>
      </div>
    </section>
  )
}
