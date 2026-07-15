import { motion } from 'framer-motion'
import { GithubIcon } from './icons'
import SectionHeader from './SectionHeader'
import { organizations } from '../data/portfolio'

export default function Organizations() {
  return (
    <section className="py-20 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Organizations"
          subtitle="Developer communities I'm part of"
        />

        <div className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-2">
          {organizations.map((org, index) => (
            <motion.a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="block bg-white rounded-xl border border-border p-6 card-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={`https://github.com/${org.slug}.png`}
                    alt={`${org.name} logo`}
                    className="w-12 h-12 rounded-lg border border-border object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-text group-hover:text-primary transition-colors truncate">
                      {org.name}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">
                    {org.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary group-hover:text-primary transition-colors">
                    <GithubIcon size={12} />
                    <span>View on GitHub</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
