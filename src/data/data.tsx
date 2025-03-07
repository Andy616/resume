import { About, SkillGroup, Social, TimelineData } from "@/data/dataDef";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


export const SiteMetadata = {
  title: "Andy Kuo - Software Engineer",
  description: "Welcome to explore my portfolio! Feel free to reach out and connect with me for inquiries or collaborations.",
  url: "https://andykuo.me",
  keywords: ["resume", "portfolio", "software engineer", "full-stack", "data engineer", "machine learning", "AI"],
}


export const SectionId = {
  About: 'about',
  Resume: 'resume',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * About section
 */
export const AboutData: About = {
  profileImageSrc: "/profile.jpeg",  // root is public folder
  description: <>
    {`
    I'm a passionate Software Engineer based in Taipei,
    with ${new Date().getFullYear() - 2020} years of experience in the tech industry.
    Throughout my career, I've tackled a wide array of projects, 
    from developing scalable web services to crafting AI-driven solutions designed to elevate the user experience.
    `}
    <br/><br/>
    {`
    My core strengths lie in full-stack web development, data engineering, and machine learning. 
    I have a keen interest in artificial intelligence and 
    am constantly seeking new challenges that stretch the limits of current technological capabilities.
    `}
    <br/><br/>
    {`
    I excel in environments that present complex problems, 
    as I am always eager to delve into new technologies and methodologies 
    to refine my skills and push the envelope of what's possible.
    `}
  </>,
  aboutItems: [
    { label: 'Location', text: 'Taipei, Taiwan', Icon: LocationOnIcon },
    { label: 'Age', text: (new Date().getFullYear() - 1998).toString(), Icon: CalendarIcon },
    { label: 'Study', text: 'National Chengchi University', Icon: SchoolIcon },
    { label: 'Employment', text: 'Playsee Co., Ltd.', Icon: BusinessIcon },
  ],
}

/**
 * Skills section
 */
export const SkillGroups: SkillGroup[] = [
  {
    name: "Backend Development",
    skills: [
      { name: "Python", level: 90, },
      { name: "Golang", level: 90, },
      { name: "Node.js", level: 70, },
      { name: "Java", level: 70, },
    ]
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "Typescript", level: 80, },
      { name: "Vue", level: 75, },
      { name: "React", level: 70, },
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", level: 80, },
      { name: "MySQL", level: 80, },
      { name: "Elasticsearch", level: 80, },
      { name: "ScyllaDB", level: 70, },
      { name: "Redis", level: 70, },
      { name: "MongoDB", level: 50, },

    ]
  },
  {
    name: "Data & AI",
    skills: [
      { name: "Spark", level: 70, },
      { name: "ArgoWorkflow", level: 40, },
      { name: "Grafana", level: 80, },
      { name: "Computer Vision", level: 70, },
      { name: "Natural Language Processing", level: 40, },
    ]
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", level: 80, },
      { name: "Kubernetes", level: 50, },
      { name: "AWS", level: 70, },
      { name: "GCP", level: 40, },
    ]
  },
]

/**
 * Resume section
 */
export const Education: TimelineData[] = [
  {
    date: "2019 ~ 2020",
    location: "TIBAME x Institute for Information Industry",
    title: "AI/Big Data Analyst Course",
    logo: "/tibame.jpeg",
  },
  {
    date: "2015 ~ 2019",
    location: "National Chengchi University",
    title: "BA Economics",
    logo: "/National_Chengchi_University_logo.png",
  },
]

export const WorkExperience: TimelineData[] = [
  {
    date: "2024-04 ~ Present",
    location: "Playsee",
    title: "AI Engineer / Backend Engineer",
    content: <ul>
      <li>
        Designed and maintained scalable microservices using Gin Gonic, successfully integrating with self-hosted AI models to enhance system capabilities and performance.
      </li>
      <li>
        Conducted stress testing and research on cutting-edge LLM models and quantization methods, driving efficiency improvements.
      </li>
      <li>
        Enhanced SDK integrations and applied prompt engineering to tailor LLM prompts to improve interoperability and user experience.
      </li>
      <li>
        Deployed custom AI models as an API server to support batch inference, optimizing system performance and maximizing overall throughput.
      </li>
      <li>
        Developed a robust multi-threaded pipeline to handle streaming inference from multiple AI models and deliver real-time processed video streams to clients.
      </li>
    </ul>,
  },
  {
    date: "2021-05 ~ 2024-01",
    location: "Red Building Capital",
    title: "Full Stack Engineer / Data Engineer",
    content: <ul>
      <li>
        Led RESTful API microservices development, boosting system RPS by 30% through migrations to Django, Spring Boot,
        FastAPI, and Gin Gonic.
      </li>
      <li>
        Implemented a robust OAuth2 authentication system, significantly enhancing internal security and data integrity.
      </li>
      <li>
        Developed a geographic search system using Elasticsearch, improving location-based service efficiency and user
        satisfaction.
      </li>
      <li>
        Streamlined development with CI/CD pipelines, cutting deployment times by 50% and accelerating project delivery.
      </li>
      <li>
        Containerized VM projects with Docker and managed with Kubernetes, achieving scalable and reliable
        infrastructure.
      </li>
      <li>
        Automated data processing with cronjobs, Elasticsearch, and Grafana, enabling real-time insights and data-driven
        decisions.
      </li>
      <li>
        Developed deep learning models for image recognition, significantly improving application AI features and user
        interaction.
      </li>
      <li>
        Pioneered the development of Web3 programs, focusing on ERC-4337 standards, blockchain event monitoring, and
        seamless integration with Web2 platforms.
      </li>
      <li>
        Authored K6 testing scripts, optimizing system performance and ensuring stability under load.
      </li>
      <li>
        Developed responsive web applications using Vue3, boosting user engagement by 10%.
      </li>
      <li>
        Developed scalable services using AWS SDK, leveraging S3 for robust data storage solutions, RDS for reliable
        database management, EKS for container orchestration, and EC2 with Security Groups for enhanced security and
        scalability.
      </li>
    </ul>,
  },
  {
    date: "2020-07 ~ 2021-02",
    location: "Syncode Encryption Development Provider",
    title: "Backend Engineer",
    content: <ul>
      <li>
        Designed and implemented scalable RESTful APIs using Django.
      </li>
      <li>
        Seamlessly integrated Google OAuth2 for authentication in the web application, bolstering security and
        simplifying the sign-in process.
      </li>
      <li>
        Led the deployment of multiple projects on Google Cloud Platform using Docker, achieving 30% reduction in
        deployment times.
      </li>
    </ul>,
  },
]

export const ContactWordings: string = `
  I'm passionate about what I do and always eager to engage with like-minded individuals. 
  Whether you're interested in discussing a project, sharing opportunities, 
  potential partnerships, or just having a chat, 
  don't hesitate to get in touch! I'm just a message away.`

/**
 * Social items
 */
export const SocialLinks: Social[] = [
  {
    label: 'Github',
    Icon: GitHubIcon,
    href: 'https://github.com/andy616',
    text: "andy616",
  },
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/guoyuanrong/',
    text: "Andy Kuo",
  },
  {
    label: 'Email',
    Icon: EmailIcon,
    href: 'mailto:contact@andykuo.me',
    text: "contact@andykuo.me",
  },
];
