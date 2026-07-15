import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">{title}</h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
    </motion.div>
  )
}
