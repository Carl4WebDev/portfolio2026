import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-bg-card rounded-2xl border border-border p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <GraduationCap size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text">
                {education.degree}
              </h3>
              <p className="text-primary font-medium">{education.university}</p>
              <p className="text-sm text-text-secondary mt-1">
                Expected Graduation: {education.expectedGraduation}
              </p>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-text mb-3">
              <BookOpen size={16} className="text-primary" />
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1.5 text-sm bg-white text-text-secondary rounded-lg border border-border font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
