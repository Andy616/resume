import { About, SkillGroup, Social, TimelineData } from '@/data/dataDef';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const SiteMetadata = {
  title: 'Andy Kuo - Software Engineer',
  description:
    'Welcome to explore my portfolio! Feel free to reach out and connect with me for inquiries or collaborations.',
  url: 'https://andykuo.me',
  keywords: [
    'resume',
    'portfolio',
    'software engineer',
    'full-stack',
    'data engineer',
    'machine learning',
    'AI',
  ],
};

export const SectionId = {
  About: 'about',
  Resume: 'resume',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Skills section
 */
export const SkillGroups: SkillGroup[] = [
  {
    name: 'Backend Development',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Golang', level: 90 },
      { name: 'Node.js', level: 70 },
      { name: 'Java', level: 70 },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'Typescript', level: 80 },
      { name: 'Vue', level: 75 },
      { name: 'React', level: 70 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 80 },
      { name: 'Elasticsearch', level: 80 },
      { name: 'ScyllaDB', level: 70 },
      { name: 'Redis', level: 70 },
      { name: 'MongoDB', level: 50 },
    ],
  },
  {
    name: 'Data & AI',
    skills: [
      { name: 'Spark', level: 70 },
      { name: 'ArgoWorkflow', level: 40 },
      { name: 'Grafana', level: 80 },
      { name: 'Computer Vision', level: 70 },
      { name: 'Natural Language Processing', level: 40 },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 60 },
      { name: 'AWS', level: 70 },
      { name: 'GCP', level: 70 },
    ],
  },
];

/**
 * Resume section
 */
export const Education: TimelineData[] = [
  {
    start_date: new Date(2019, 7),
    end_date: new Date(2020, 0),
    location: 'TIBAME x Institute for Information Industry',
    title: 'AI/Big Data Analyst Course',
    logo: '/tibame.jpeg',
  },
  {
    start_date: new Date(2015, 8),
    end_date: new Date(2019, 5),
    location: 'National Chengchi University',
    title: 'BA Economics',
    logo: '/National_Chengchi_University_logo.png',
  },
];

export const WorkExperience: TimelineData[] = [
  {
    start_date: new Date(2025, 5),
    end_date: undefined,
    location: 'GUMHK',
    title: 'Senior Backend Engineer',
    content: (
      <ul>
        <li>
          Develop and refactor production backend services using FastAPI within
          a 4-engineer team, improving maintainability and architectural
          consistency.
        </li>
        <li>
          Migrated dependency management from pip to uv, reducing CI/CD build
          time by 2~3 times and improving environment reproducibility.
        </li>
        <li>
          Re-architected CRUD layer using polymorphism, eliminating ~50%
          duplicated logic and reducing technical debt.
        </li>
        <li>
          Decoupled JWT authentication and RBAC into reusable FastAPI dependency
          injection components, improving separation of concerns and API
          composability.
        </li>
        <li>
          Designed and implemented GitHub Actions CI/CD pipelines, containerized
          with Docker, and deployed to AWS EC2, optimizing cost without
          overengineering infrastructure.
        </li>
        <li>
          Proposed long-term migration roadmap to transition highly customized
          Odoo monolith toward a microservices-based architecture.
        </li>
      </ul>
    ),
  },
  {
    start_date: new Date(2024, 3),
    end_date: new Date(2025, 2),
    location: 'Playsee',
    title: 'Backend Engineer / AI Engineer',
    content: (
      <ul>
        <li>
          Designed scalable microservices using Gin (Go) integrated with
          self-hosted LLMs for production AI workloads.
        </li>
        <li>
          Built high concurrency streaming inference pipelines to generate
          real-time video streams across multiple AI models via Goroutines and
          Channels.
        </li>
        <li>
          Architected API-layer batch inference mechanism for custom AI models,
          optimizing throughput and reducing per-request inference overhead.
        </li>
        <li>
          Conducted stress testing and LLM quantization research to optimize
          inference efficiency and system scalability.
        </li>
        <li>
          Improved LLM interoperability through SDK optimization and applied
          prompt engineering techniques.
        </li>
      </ul>
    ),
  },
  {
    start_date: new Date(2021, 4),
    end_date: new Date(2024, 0),
    location: 'Red Building Capital',
    title: 'Backend Engineer / Data Engineer',
    content: (
      <ul>
        <li>
          Led development of RESTful microservices across FastAPI, Gin, Spring
          Boot, and Django, increasing system RPS by 30%.
        </li>
        <li>
          Designed OAuth2-based authentication and implemented
          Elasticsearch-powered geographic search.
        </li>
        <li>
          Built CI/CD pipelines reducing deployment time by 50% and
          containerized services with Docker & Kubernetes (EKS).
        </li>
        <li>
          Developed automated data pipelines and monitoring systems using cron
          jobs, Elasticsearch, and Grafana.
        </li>
        <li>
          Built responsive web applications, and Web3 integrations (ERC-4337),
          blockchain event monitoring.
        </li>
      </ul>
    ),
  },
  {
    start_date: new Date(2020, 6),
    end_date: new Date(2021, 1),
    location: 'Syncode Encryption Development Provider',
    title: 'Backend Engineer',
    content: (
      <ul>
        <li>Designed and implemented scalable RESTful APIs using Django.</li>
        <li>
          Integrated Google OAuth2 authentication to enhance security and user
          experience.
        </li>
        <li>
          Containerized and deployed services to Google Cloud Platform, reducing
          deployment time by 30%.
        </li>
      </ul>
    ),
  },
];

export const ContactWordings = `
  I'm passionate about what I do and always eager to engage with like-minded individuals. 
  Whether you're interested in discussing a project, sharing opportunities, 
  potential partnerships, or just having a chat, 
  don't hesitate to get in touch! I'm just a message away.`;

/**
 * About section
 */
export const AboutData: About = {
  profileImageSrc: '/profile.jpeg', // root is public folder
  description: (
    <>
      {`
      Backend engineer specializing in scalable distributed systems and high-throughput API design. 
      Led architectural refactors reducing duplicated backend logic by ~50% and accelerated CI/CD pipelines by 2~3 times through tooling optimization. 
      Designed batch inference mechanisms for production AI model serving and improved system RPS by 30% across microservice migrations. 
      Experienced in cloud-native infrastructure (AWS, Kubernetes, Docker) and building reliable, maintainable backend platforms at scale.
      `}
      <br />
      {`
      I excel in environments that present complex problems, 
      as I am always eager to delve into new technologies and methodologies 
      to refine my skills and push the envelope of what's possible.
      `}
    </>
  ),
  aboutItems: [
    { label: 'Location', text: 'Taipei, Taiwan', Icon: LocationOnIcon },
    {
      label: 'Age',
      text: (new Date().getFullYear() - 1998).toString(),
      Icon: CalendarIcon,
    },
    {
      label: 'Study',
      text: 'National Chengchi University',
      Icon: SchoolIcon,
    },
    {
      label: 'Employment',
      text: WorkExperience[0].end_date
        ? 'Freelance'
        : WorkExperience[0].location,
      Icon: BusinessIcon,
    },
  ],
};

/**
 * Social items
 */
export const SocialLinks: Social[] = [
  {
    label: 'Github',
    Icon: GitHubIcon,
    href: 'https://github.com/andy616',
    text: 'andy616',
  },
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/guoyuanrong/',
    text: 'Andy Kuo',
  },
  {
    label: 'Email',
    Icon: EmailIcon,
    href: 'mailto:contact@andykuo.me',
    text: 'contact@andykuo.me',
  },
];
