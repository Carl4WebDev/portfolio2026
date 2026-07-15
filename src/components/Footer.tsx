import { Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
        <p className="flex items-center gap-1">
          &copy; {year} carl4dev. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Built with <Heart size={12} className="text-red-400" /> React + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
