interface IconProps {
  size?: number
  className?: string
}

export function ReactIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  )
}

export function NodeIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 1.5L3 6.5v11l9 5 9-5v-11l-9-5z" fill="#339933"/>
      <path d="M12 1.5v21l9-5v-11l-9-5z" fill="#2D8B2D"/>
      <text x="12" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="monospace">N</text>
      <text x="12" y="18" textAnchor="middle" fill="white" fontSize="4.5" fontFamily="monospace">Ex</text>
    </svg>
  )
}

export function ExpressIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#111111"/>
      <text x="12" y="15" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="monospace">Ex</text>
    </svg>
  )
}

export function PostgresIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="7" rx="8" ry="4" fill="#336791"/>
      <path d="M4 7v10c0 2.2 3.6 4 8 4s8-1.8 8-4V7" stroke="#336791" strokeWidth="1.5" fill="none"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#336791" strokeWidth="1" fill="none"/>
      <ellipse cx="12" cy="17" rx="8" ry="3" stroke="#336791" strokeWidth="1" fill="none"/>
    </svg>
  )
}

export function NuxtIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 18L12 4l8 14H4z" fill="#00DC82"/>
      <path d="M8 18L12 10l4 8H8z" fill="#003822"/>
    </svg>
  )
}

export function LaravelIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 17l4-8h8l-4 8" stroke="#FF2D20" strokeWidth="2" fill="none"/>
      <path d="M8 9l4 8 4-8" stroke="#FF2D20" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <circle cx="12" cy="8" r="2" fill="#FF2D20"/>
    </svg>
  )
}

export function MySQLIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="6" rx="8" ry="3.5" fill="#4479A1"/>
      <path d="M4 6v12c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V6" stroke="#4479A1" strokeWidth="1.5" fill="none"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#4479A1" strokeWidth="1" fill="none"/>
      <ellipse cx="12" cy="17.5" rx="8" ry="3" stroke="#4479A1" strokeWidth="1" fill="none"/>
      <text x="12" y="15" textAnchor="middle" fill="#4479A1" fontSize="5" fontWeight="bold" fontFamily="monospace">My</text>
    </svg>
  )
}

export function PythonIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C6.5 2 6 4 6 4.5V8h6v1H5.5S3 8.5 3 12s2.5 3.5 2.5 3.5H7v-2s-.5-1 1.5-1h4s2.5 0 2.5-2.5V5.5S15.5 2 12 2z" fill="#3776AB"/>
      <path d="M12 22c5.5 0 6-2 6-2.5V16h-6v-1h6.5S21 15.5 21 12s-2.5-3.5-2.5-3.5H17v2s.5 1-1.5 1h-4s-2.5 0-2.5 2.5v5S8.5 22 12 22z" fill="#FFD43B"/>
      <circle cx="9" cy="5" r="1" fill="white"/>
      <circle cx="15" cy="19" r="1" fill="white"/>
    </svg>
  )
}

export function TensorFlowIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L4 6.5v5L12 16l8-4.5v-5L12 2z" fill="#FF6F00"/>
      <path d="M12 16v6l8-4.5v-5L12 16z" fill="#FF8F00"/>
      <path d="M12 22v-6L4 11.5v5L12 22z" fill="#FFA000"/>
      <path d="M12 2L4 6.5 12 11l8-4.5L12 2z" fill="#FF6F00"/>
    </svg>
  )
}

export function OpenCVIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#5C3EE8"/>
      <circle cx="9" cy="10" r="2" fill="white"/>
      <circle cx="15" cy="10" r="2" fill="white"/>
      <path d="M8 15c0 0 2 3 4 3s4-3 4-3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  )
}
