import { motion } from 'framer-motion'
import {
  Search,
  Layers,
  Puzzle,
  FileCode,
  Users,
  TrendingUp,
} from 'lucide-react'
import SectionHeader from './SectionHeader'
import { engineeringPrinciples } from '../data/portfolio'

const icons = [Search, Layers, Puzzle, FileCode, Users, TrendingUp]

export default function EngineeringPrinciples() {
  return (
    <section className="py-20 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="How I Build Software"
          subtitle="The principles that guide every line of code I write"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((principle, index) => {
            const Icon = icons[index] ?? FileCode
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl border border-border p-6 card-hover"
              >
                <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-text mb-2">{principle.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
