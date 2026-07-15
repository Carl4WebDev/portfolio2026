import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { GithubIcon, FacebookIcon } from './icons'
import SectionHeader from './SectionHeader'
import { personalInfo } from '../data/portfolio'

const pinnedRepos = [
  { name: 'finalHealth_backend', description: 'Clean Architecture backend for healthcare management — Node.js, Express, PostgreSQL, JWT auth, Repository pattern', language: 'JavaScript', url: 'https://github.com/Carl4WebDev/finalHealth_backend' },
  { name: 'finalHealth_frontend', description: 'React + Vite + Tailwind frontend for healthcare management — role-based UI, responsive design, feature-based structure', language: 'JavaScript', url: 'https://github.com/Carl4WebDev/finalHealth_frontend' },
  { name: 'topcit-preparation', description: 'TOPCIT exam prep app — 17 topics, ~25 questions, ~300 flashcards, SM-2 spaced repetition, timed/untimed practice', language: 'TypeScript', url: 'https://github.com/Carl4WebDev/topcit-preparation', liveUrl: 'https://topcit-prep.netlify.app' },
  { name: 'batalearn', description: "Children's learning website — bilingual EN/FIL, question generators, TTS, React/Vite/Tailwind/Zustand", language: 'TypeScript', url: 'https://github.com/Carl4WebDev/batalearn', liveUrl: 'https://batalearn.netlify.app' },
  { name: 'ccat-practice', description: 'CCAT practice test app — timed tests, question banks, score tracking', language: 'JavaScript', url: 'https://github.com/Carl4WebDev/ccat-practice' },
  { name: 'cc-interview-practice', description: 'Coding interview practice app — algorithm challenges, problem sets, progress tracking', language: 'JavaScript', url: 'https://github.com/Carl4WebDev/cc-interview-practice' },
  { name: 'Simon-Game-1', description: 'Classic Simon memory game built with web technologies', language: 'JavaScript', url: 'https://github.com/Carl4WebDev/Simon-Game-1' },
  { name: 'eCommerce-web', description: 'Full-stack e-commerce web application — product listings, cart, checkout, responsive design', language: 'JavaScript', url: 'https://github.com/Carl4WebDev/eCommerce-web', liveUrl: 'https://carl4dev-ecommerce-web.netlify.app/' },
]

const languageColors: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  HTML: '#E34F26',
  CSS: '#1572B6',
}

const INITIAL_VISIBLE = 4

export default function GitHubSection() {
  const [expanded, setExpanded] = useState(false)
  const visibleRepos = expanded ? pinnedRepos : pinnedRepos.slice(0, INITIAL_VISIBLE)

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="GitHub"
          subtitle="Open source contributions and project activity"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Star size={16} className="text-primary" />
            <h3 className="font-bold text-text">Pinned Repositories</h3>
          </div>

          {visibleRepos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-bg-card rounded-xl border border-border p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <GithubIcon size={14} className="text-text" />
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary text-sm hover:underline"
                  >
                    {repo.name}
                  </a>
                </div>
                {repo.liveUrl && (
                  <a
                    href={repo.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <ExternalLink size={10} />
                    Live Demo
                  </a>
                )}
              </div>
              <p className="text-xs text-text-secondary mb-2">
                {repo.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-text-secondary">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          languageColors[repo.language] ?? '#999',
                      }}
                    />
                    {repo.language}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {pinnedRepos.length > INITIAL_VISIBLE && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm text-primary font-medium hover:bg-bg-card rounded-xl border border-border transition-colors"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp size={14} />
                </>
              ) : (
                <>
                  Show More ({pinnedRepos.length - INITIAL_VISIBLE} more) <ChevronDown size={14} />
                </>
              )}
            </button>
          )}

          <div className="mt-6 p-4 bg-bg-card rounded-xl border border-border">
            <div className="flex items-start gap-3">
              <FacebookIcon size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-text font-medium mb-1">Hobby Projects</p>
                <p className="text-xs text-text-secondary">
                  I also build websites as a hobby and share them on Facebook for others to use.{' '}
                  <a
                    href={personalInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Follow me on Facebook
                  </a>{' '}
                  to see my latest hobby projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
