import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Awards & Honors"
          subtitle="Recognition for competitive excellence"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl border border-border p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text mb-2">{achievement.title}</h3>
                  <p className="text-sm text-text-secondary mb-4">{achievement.description}</p>
                  {achievement.image && (
                    <div className="mt-4">
                      <img
                        src={achievement.image}
                        alt={`${achievement.title} certificate`}
                        className="rounded-lg border border-border max-w-full h-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
