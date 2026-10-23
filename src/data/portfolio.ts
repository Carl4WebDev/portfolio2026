export const personalInfo = {
  name: 'Carl Ivan Sampan',
  title: 'Full-Stack Developer',
  tagline: 'Building reliable, scalable web applications with a focus on clean architecture and real-world problem solving.',
  bio: `I'm a self-taught developer who chose to learn web development through Udemy courses, official documentation, and hands-on building — because I believe the best way to understand something is to build it. I actively seek feedback, learn from code reviews, and continuously improve my skills with every project. I design and build complete software systems — from database architecture to polished user interfaces — with a focus on writing clean, readable, and maintainable code. I also build functional websites as a hobby and share them on Facebook so others can find them useful. I thrive in remote environments where I can collaborate, learn from senior developers, and grow as an engineer.`,
  email: 'carlforwebdev@gmail.com',
  github: 'https://github.com/Carl4WebDev',
  facebook: 'https://www.facebook.com/carlcarlcarlivanivansss',
  resumeUrl: '/resume.pdf',
}

export const stats = [
  { value: '3+', label: 'Years', description: 'Building Web Applications' },
  { value: '10+', label: 'Projects', description: 'Completed Projects' },
  { value: '2', label: 'Fullstacks', description: 'React+Node & Nuxt+Laravel' },
  { value: 'AI', label: 'ML Engineer', description: 'TensorFlow + OpenCV + NLP' },
]

export interface TechStack {
  name: string
  role: string // e.g. 'Frontend', 'Backend', 'Database'
}

export interface StackGroup {
  label: string
  description: string
  techs: TechStack[]
}

export const stacks: StackGroup[] = [
  {
    label: 'Primary Stack',
    description: 'My go-to fullstack — the stack I know deepest and build most projects with.',
    techs: [
      { name: 'React', role: 'Frontend' },
      { name: 'Node.js + Express', role: 'Backend' },
      { name: 'PostgreSQL', role: 'Database' },
    ],
  },
  {
    label: 'Secondary Stack',
    description: 'My alternative fullstack for projects that benefit from a different ecosystem.',
    techs: [
      { name: 'Nuxt', role: 'Frontend' },
      { name: 'Laravel', role: 'Backend' },
      { name: 'MySQL', role: 'Database' },
    ],
  },
  {
    label: 'AI / ML',
    description: 'I use AI for automation and build ML-powered features — from training models to integrating them into web apps.',
    techs: [
      { name: 'Python', role: 'Language' },
      { name: 'TensorFlow', role: 'ML Framework' },
      { name: 'OpenCV', role: 'Computer Vision' },
    ],
  },
]

export const adaptabilityNote = "These are my primary tools, but I adapt my stack to whatever the project needs. I've learned new frameworks, languages, and even ML pipelines on the fly — that's what being self-taught teaches you."

export interface Project {
  title: string
  summary: string
  problem: string
  solution: string
  role: string
  technologies: string[]
  features: string[]
  challenges: string
  clientImpact?: string
  githubUrl?: string
  githubFrontendUrl?: string
  githubBackendUrl?: string
  liveUrl?: string
  screenshot: string
  layout: 'left' | 'right'
  /** If true, renders as a teaser card instead of full project details */
  isTeaser?: boolean
  teaserDescription?: string
}

export const projects: Project[] = [
  {
    title: 'Listahub',
    summary: 'A full-stack financial management system for sari-sari stores — track sales, manage inventory, and automate financial reports. Replaces paper-based record keeping with a modern, mobile-first web application.',
    problem: 'Small sari-sari store owners in the Philippines rely on paper records to manage sales and inventory, leading to lost data, calculation errors, and difficulty tracking financial health.',
    solution: 'Built a web-based sales and inventory tracker with automated financial calculations, SMS/Email alerts for low stock and overdue payments, data visualization dashboards, and PDF/CSV report generation — all in a mobile-first interface.',
    role: 'Sole developer — designed the database schema, built the RESTful API with Express.js and PostgreSQL, implemented the React.js frontend with Tailwind CSS, and deployed to Netlify.',
    technologies: ['React.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'Recharts', 'jsPDF'],
    features: [
      'Sales and inventory tracking in real time',
      'SMS and Email alerts for low stock and overdue payments',
      'Data visualization with interactive charts (Recharts)',
      'PDF and CSV export for financial reports',
      'Mobile-first responsive design',
      'Borrower management with payment history',
      'Public borrower status page (shareable link, no auth)',
      'Voice input via Web Speech API for mobile',
    ],
    challenges: 'Designing a system simple enough for non-technical store owners while handling real financial data reliably — including concurrent access and accurate running balances.',
    clientImpact: 'Actively used by 3+ sari-sari stores for inventory and sales management, replacing manual paper-based record keeping with automated financial tracking and real-time reporting.',
    githubFrontendUrl: 'https://github.com/Carl4WebDev/sari-sari-fe',
    githubBackendUrl: 'https://github.com/Carl4WebDev/sari-sari-be',
    liveUrl: 'https://listahub.netlify.app',
    screenshot: '/listahub_logo.png',
    layout: 'left',
  },
  {
    title: 'Vet Clinic Management Platform',
    summary: 'A full-stack veterinary clinic management platform built for a real client — enabling pet owners to discover clinics, book appointments online, and manage their pets\' medical records, while providing clinics with tools to streamline daily operations through a centralized dashboard.',
    problem: 'The client needed a system to simplify appointment scheduling, reduce administrative workload, and maintain organized digital records for pets and treatments. Existing processes relied heavily on manual coordination, making appointment management and record retrieval inefficient.',
    solution: 'Built a responsive web application connecting pet owners with veterinary clinics through an intuitive booking system, while giving clinic staff powerful management tools for appointments, patient records, and operational insights.',
    role: 'Full-stack developer — gathered client requirements, designed the system architecture, built the frontend and backend, designed the PostgreSQL database, integrated Google Maps API, and implemented role-based authentication.',
    technologies: ['React', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'Google Maps API'],
    features: [
      'Pet owner portal — register pets, search clinics, book appointments, view medical history',
      'Clinic portal — manage appointments, accept/reject/reschedule, maintain patient records',
      'Google Maps API integration for clinic discovery and navigation',
      'Online appointment booking with approval workflow',
      'Digital pet profiles with vaccination and treatment records',
      'Dashboard with appointment analytics and patient statistics',
      'Role-based authentication and authorization',
      'Responsive design for mobile and desktop',
    ],
    challenges: 'Building a multi-role platform that serves both pet owners and clinic staff — designing appointment workflows that handle booking, approval, rescheduling, and status tracking while keeping the experience intuitive for both sides.',
    clientImpact: 'Provides veterinary clinics with a centralized system for managing appointments, patient information, and treatment records — reducing manual administrative tasks and delivering a more accessible veterinary service.',
    githubBackendUrl: 'https://github.com/Carl4WebDev/vet_backend',
    githubFrontendUrl: 'https://github.com/Carl4WebDev/vet_user',
    screenshot: '/favicon.svg',
    layout: 'right',
  },
  {
    title: 'Anumata',
    summary: 'A web-based AI-assisted emotional state pre-evaluation system for therapists — using facial emotion recognition and speech emotion analysis to help therapists understand their patients before the session even begins.',
    problem: 'Therapists meet patients cold — with no prior emotional context. Traditional intake forms miss what video can capture: facial micro-expressions, vocal tone shifts, and emotional spikes during specific questions.',
    solution: 'An AI-powered pre-evaluation tool where patients answer therapist-created questions via video. The system analyzes facial expressions and speech tone in real time, then generates an emotional report for the therapist — highlighting which questions triggered sadness, anger, or distress.',
    role: 'Sole developer — built the full system: React frontend, Express backend, Python ML microservice (TensorFlow + OpenCV + Librosa), and three AI training factories for Filipino dataset collection.',
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Python', 'FastAPI', 'TensorFlow', 'OpenCV', 'Librosa', 'faster-whisper', 'MediaPipe'],
    features: [
      'Facial Emotion Recognition (FER) via webcam',
      'Speech Emotion Recognition (SER) via microphone',
      'Speech-to-text transcription (Tagalog support)',
      'Therapist-created interview questions',
      'Emotional timeline and spike detection',
      'Per-question breakdown with video clips',
      'AI-generated session summary with hedging language',
      'Consent and data privacy compliance (RA 10173)',
    ],
    challenges: 'Combining three independent ML models (face, speech, language) into a single emotion decision engine — where face and speech drive the conclusion, and language only strengthens or weakens confidence. Never diagnosing, always hedging.',
    clientImpact: 'Designed for therapists to gain deeper emotional context before sessions, enabling more targeted and effective therapy. The system provides objective emotional data that complements traditional intake methods.',
    githubUrl: 'https://github.com/Carl4WebDev/Anumata',
    screenshot: '/screenshots/anumata.png',
    layout: 'right',
    isTeaser: true,
    teaserDescription: 'A web-based AI-assisted emotional state pre-evaluation system for therapists — using facial emotion recognition and speech emotion analysis to help therapists understand their patients before the session begins. A personal side project where I explore applied machine learning and affective computing.',
  },
  {
    title: 'FinalHealth',
    summary: 'A full-stack healthcare management platform designed to streamline clinic operations — built with production-inspired architecture, Clean Architecture, SOLID principles, and feature-based organization.',
    problem: 'Clinics rely on manual workflows for managing patients, appointments, and medical records — leading to inefficiency, data fragmentation, and poor coordination between staff.',
    solution: 'Built a centralized platform for patient management, appointment scheduling, medical records, and clinic operations — with role-based access for administrators, doctors, and receptionists.',
    role: 'Sole developer — designed the system architecture, built the frontend and backend, implemented authentication and authorization, designed the PostgreSQL database, and applied Clean Architecture and SOLID principles throughout.',
    technologies: ['React', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'React Router', 'JWT'],
    features: [
      'Patient management — create, edit, archive profiles with full medical history',
      'Appointment scheduling — calendar-based overview with reschedule/cancel support',
      'Medical records — consultation notes, diagnoses, prescribed medications',
      'Role-based access control — admin, doctor, receptionist roles',
      'JWT authentication with protected routes',
      'Dashboard with patient statistics, appointment analytics, and recent activities',
      'Clean Architecture with Repository pattern and Use Case layer',
      'Feature-based folder structure for scalable codebase organization',
    ],
    challenges: 'Building a production-inspired architecture that separates business logic from infrastructure — using Repository pattern, Use Case layer, and feature-based organization to make the codebase maintainable and extensible as the application grows.',
    githubFrontendUrl: 'https://github.com/Carl4WebDev/finalHealth_frontend',
    githubBackendUrl: 'https://github.com/Carl4WebDev/finalHealth_backend',
    screenshot: '/finalhealth-logo.png',
    layout: 'left',
  },
]

export const experiences = [
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    duration: '2024 - Present',
    achievements: [
      'Designed and built Listahub — a full-stack financial management system for sari-sari stores, actively used by 3+ stores for sales and inventory tracking',
      'Developed a web application using React.js and Tailwind CSS for a user-friendly interface',
      'Built a RESTful API with Express.js and PostgreSQL to manage backend data',
      'Integrated Recharts and jsPDF for data visualization and document management',
      'Collaborated with stakeholders to gather requirements and deliver iterative improvements',
    ],
  },
]

export const education = {
  university: 'STI College Davao',
  degree: 'Bachelor of Science in Computer Science',
  coursework: [
    'Data Structures & Algorithms',
    'Database Systems',
    'Software Engineering',
    'Operating Systems',
    'Computer Networks',
    'Web Development',
  ],
}

export const achievements = [
  {
    title: '2nd Runner Up - Codefest - Tagisan ng Talino 2024-25 Local Level Competition',
    description: 'Awarded 2nd Runner Up in the Codefest - Tagisan ng Talino 2024-25 Local Level Competition, demonstrating strong problem-solving and coding skills under competitive pressure.',
    image: '/Tagisan_talino_cert.jpg',
  },
]

export const organizations = [
  {
    name: 'Zero to Mastery',
    slug: 'zero-to-mastery',
    url: 'https://github.com/zero-to-mastery',
    description: 'A developer education community with 8K+ followers and 120+ open-source repositories — focused on making coding education accessible through hands-on projects and collaborative learning.',
  },
  {
    name: 'STI-WEB-DEVS',
    slug: 'STI-WEB-DEVS',
    url: 'https://github.com/STI-WEB-DEVS',
    description: 'A web development community I was part of — collaborating on projects and sharing knowledge in front-end and back-end development.',
  },
]

export const engineeringPrinciples = [
  {
    title: 'Understand First',
    description: 'I spend time understanding the problem deeply before writing a single line of code.',
  },
  {
    title: 'Design for Maintenance',
    description: 'I build architectures that other developers can understand, extend, and debug.',
  },
  {
    title: 'Reusable Components',
    description: 'I extract common patterns into shared, well-tested components and utilities.',
  },
  {
    title: 'Clean & Readable',
    description: 'I write code that reads like documentation — clear naming, small functions, no clever tricks.',
  },
  {
    title: 'User-Centered',
    description: 'Every technical decision serves the end user — performance, accessibility, and reliability.',
  },
  {
    title: 'Always Improving',
    description: 'I actively seek feedback, review my own code critically, and stay current with best practices.',
  },
]
