import { motion } from 'framer-motion'
import { ArrowDown, FileText, ChevronDown } from 'lucide-react'
import { GithubIcon, FacebookIcon } from './icons'
import { personalInfo } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4 leading-tight"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-text-secondary mb-6 font-medium"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-text-secondary text-lg mb-8 max-w-lg leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text rounded-xl font-medium hover:bg-bg-card transition-colors"
            >
              <FileText size={16} />
              Download Resume
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text rounded-xl font-medium hover:bg-bg-card transition-colors"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={personalInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text rounded-xl font-medium hover:bg-bg-card transition-colors"
            >
              <FacebookIcon size={16} />
              Facebook
            </a>
          </motion.div>
        </motion.div>

        {/* Visual side — profile photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm">
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/5 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/10 rounded-2xl" />

            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-sm">
              <img
                src="/my-profile-formal.png"
                alt={`${personalInfo.name} — Full-Stack Developer`}
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="eager"
              />
            </div>

            {/* Subtle code decoration peeking behind */}
            <div className="absolute -bottom-6 -right-6 bg-bg-card rounded-xl border border-border p-3 font-mono text-[10px] text-text-secondary opacity-60 hidden lg:block">
              <span className="text-purple-500">const</span>{' '}
              <span className="text-blue-500">dev</span> ={' '}
              <span className="text-green-600">"ready"</span>;
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-text-secondary hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ChevronDown size={16} className="animate-bounce-slow" />
        </a>
      </motion.div>
    </section>
  )
}

