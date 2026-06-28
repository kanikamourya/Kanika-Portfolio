export type ProfileMode = 'professional' | 'artistic'

export interface Artwork {
  id: string
  title: string
  medium: string
  image: string
}

export const contact = {
  name: 'Kanika Mourya',
  email: 'kanumourya20@gmail.com',
  location: 'Hyderabad, India',
  linkedin: 'https://www.linkedin.com/in/kanika-mourya',
  blog: 'https://medium.com/@kanumourya20/unlocking-the-secrets-of-passing-cka-2025-c510407cd599',
  youtube: 'https://www.youtube.com/@KanikaArtspace',
  photo: '/kanika-photo.png',
}

export const professional = {
  title: 'Cloud Platform Engineer',
  summary:
    'Cloud Platform Engineer with 6+ years of experience designing, automating, and securing scalable, production-grade infrastructure across multi-cloud environments. Certified Kubernetes Administrator (CKA) with deep expertise in Infrastructure as Code using Terraform, policy enforcement with Sentinel, and quality controls using TFLint. Highly skilled in Kubernetes, Jenkins, Python, and Shell scripting, with a strong focus on building standardized, secure, and high-performing cloud platforms.',
  experience: [
    {
      company: 'JPMorganChase',
      period: 'Nov 2023 – Present',
    },
    {
      company: 'Infosys',
      period: 'Jan 2022 – Nov 2023',
    },
    {
      company: 'Tata Consultancy Services',
      period: 'Jul 2019 – Jul 2022',
    },
  ],
  education: {
    degree: 'Bachelor of Engineering in Electrical Engineering',
    institution: 'Chhattisgarh Swami Vivekanand Technical University',
    location: 'Bhilai',
    period: 'Jun 2015 – Jul 2019',
  },
  skills: [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Docker',
    'Kubernetes',
    'Container Orchestration',
    'Terraform',
    'CloudFormation',
    'Sentinel (Policy as Code)',
    'Python',
    'Bash',
    'PowerShell',
    'AWS CloudWatch',
    'Splunk',
    'Grafana',
    'MySQL',
    'PostgreSQL',
    'Amazon Aurora',
    'TFLint',
    'CI/CD Pipelines',
    'AI & Prompt Engineering',
  ],
  certifications: [
    'Certified Kubernetes Administrator (CKA)',
    'AWS Certified Solutions Architect – Associate',
    'AWS Certified Developer – Associate',
    'Terraform Associate',
    'Microsoft Azure Fundamentals (AZ-900)',
    'Microsoft Azure AI Fundamentals (AI-900)',
  ],
  awards: [
    { title: 'Rise Award', detail: 'Learning Champ' },
    { title: 'Insta Award', detail: 'Going Above and Beyond' },
    { title: 'Insta Award', detail: 'Delivering Good Project Work' },
  ],
  technologyWithPurpose: {
    title: 'Technology With Purpose',
    items: [
      {
        highlight: 'HashiTalks India 2025 Speaker',
        detail: 'Selected speaker for "From Monolith to Modular", sharing insights on building scalable and maintainable architectures.',
      },
      {
        highlight: 'Innovation Week 2026 Speaker',
        detail: 'Selected to showcase innovative solutions and inspire technology-driven experimentation.',
      },
      {
        highlight: 'Tech for Social Good',
        detail: 'Built solutions that address real-world challenges and create meaningful community impact.',
      },
      {
        highlight: 'Technical Community Leader',
        detail: 'Led knowledge-sharing sessions, workshops, and engineering discussions to foster collaboration and growth.',
      },
    ],
  },
}

export const artistic = {
  title: 'Creative Artist',
  summary:
    'Beyond cloud platforms and automation, I express myself through art — where colour, texture, and imagination come alive. Every brushstroke and thread is a little bit of magic.',
  artFormsTitle: 'The Alchemy of My Art Forms',
  artFormsIntro:
    'Each medium is a different spell — acrylics that blaze with emotion, watercolours that whisper softly, string art that weaves stories, and digital canvases where imagination has no limits.',
  artForms: [
    { name: 'Acrylic Painting', emoji: '🎨', description: 'Bold colours and expressive strokes on canvas' },
    { name: 'Watercolour Painting', emoji: '💧', description: 'Soft blends and dreamy, fluid compositions' },
    { name: 'String Art', emoji: '🧵', description: 'Geometry and emotion woven thread by thread' },
    { name: 'Digital Art', emoji: '✨', description: 'Limitless creativity on a digital canvas' },
  ],
  galleryTitle: 'Art I Created',
  galleryIntro:
    'Pieces born from patience, colour, and a little everyday magic — tap an emoji to share how each one makes you feel.',
  artworks: [
    {
      id: 'art-1',
      title: 'Digital Art',
      medium: 'Digital Art',
      image: '/art/digital-art.jpg',
    },
    {
      id: 'art-2',
      title: 'Water Colour',
      medium: 'Watercolour Painting',
      image: '/art/water-colour.jpg',
    },
    {
      id: 'art-3',
      title: 'String Art',
      medium: 'String Art',
      image: '/art/string-art.jpg',
    },
    {
      id: 'art-4',
      title: 'Acrylic',
      medium: 'Acrylic Painting',
      image: '/art/acrylic.jpg',
    },
    {
      id: 'art-5',
      title: 'Artwork 5',
      medium: 'Mixed Media',
      image: '/art/art-1.jpeg',
    },
    {
      id: 'art-6',
      title: 'Artwork 6',
      medium: 'Mixed Media',
      image: '/art/art-2.jpeg',
    },
    {
      id: 'art-7',
      title: 'Artwork 7',
      medium: 'Mixed Media',
      image: '/art/art-3.jpeg',
    },
    {
      id: 'art-8',
      title: 'Artwork 8',
      medium: 'Mixed Media',
      image: '/art/art-4.jpeg',
    },
    {
      id: 'art-9',
      title: 'Artwork 9',
      medium: 'Mixed Media',
      image: '/art/art-5.jpeg',
    },
    {
      id: 'art-10',
      title: 'Artwork 10',
      medium: 'Mixed Media',
      image: '/art/art-6.jpeg',
    },
    {
      id: 'art-11',
      title: 'Artwork 11',
      medium: 'Mixed Media',
      image: '/art/art-7.jpeg',
    },
    {
      id: 'art-12',
      title: 'Artwork 12',
      medium: 'Mixed Media',
      image: '/art/art-8.jpeg',
    },
    {
      id: 'art-13',
      title: 'Artwork 13',
      medium: 'Mixed Media',
      image: '/art/art-9.jpeg',
    },
    {
      id: 'art-14',
      title: 'Artwork 14',
      medium: 'Mixed Media',
      image: '/art/art-10.jpeg',
    },
    {
      id: 'art-15',
      title: 'Artwork 15',
      medium: 'Mixed Media',
      image: '/art/art-11.jpeg',
    },
    {
      id: 'art-16',
      title: 'Artwork 16',
      medium: 'Mixed Media',
      image: '/art/art-12.jpeg',
    },
    {
      id: 'art-17',
      title: 'Artwork 17',
      medium: 'Mixed Media',
      image: '/art/art-13.jpeg',
    },
  ] as Artwork[],
  philosophy:
    'I believe creativity and engineering share the same foundation: curiosity, iteration, and the courage to build something meaningful. Whether designing a Kubernetes cluster or painting on canvas, I approach both with intention, care, and a desire to leave something better than before.',
}
