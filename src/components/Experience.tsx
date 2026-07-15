import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Experience"
          subtitle="What I've accomplished, not just what I've done"
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-0 w-px bg-border" />

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Briefcase size={12} className="text-primary" />
              </div>

              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-bold text-text">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-text-secondary bg-bg-card px-3 py-1 rounded-lg border border-border">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
