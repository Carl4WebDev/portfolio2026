import { motion } from 'framer-motion'
import { Code, Lightbulb, BookOpen, Rocket } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { personalInfo } from '../data/portfolio'

const highlights = [
  { icon: Code, label: 'Self-Taught Developer' },
  { icon: BookOpen, label: 'Udemy Courses' },
  { icon: Lightbulb, label: 'Problem Solver' },
  { icon: Rocket, label: 'Hobby Builder' },
  { icon: Lightbulb, label: 'Feedback-Driven' },
  { icon: BookOpen, label: 'Eager to Learn' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-bg-card border border-border"
                >
                  <item.icon size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-text">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-bg-card rounded-2xl border border-border p-8"
          >
            <h3 className="font-bold text-text mb-4">How I Work</h3>
            <ul className="space-y-3">
              {[
                'Write clean, readable, and maintainable code',
                'Design clean architectures with separation of concerns',
                'Build complete, production-ready applications',
                'Actively seek feedback and learn from code reviews',
                'Thrive in remote environments — self-disciplined and proactive',
                'Eager to learn from senior developers through mentorship',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
