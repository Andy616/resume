import { About, Social, TimelineData } from "@/data/dataDef";
import MapIcon from '@mui/icons-material/Map';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const SectionId = {
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * About section
 */
export const AboutData: About = {
  profileImageSrc: "/profile.jpeg",  // root is public folder
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores atque corporis doloribus ea,
            harum ipsum laudantium, nihil quidem quisquam reprehenderit totam, ut voluptatem! Cupiditate dolore
            molestias quod rem rerum!`,
  aboutItems: [
    { label: 'Location', text: 'Taipei, Taiwan', Icon: MapIcon },
    { label: 'Age', text: (new Date().getFullYear() - 1998).toString(), Icon: CalendarIcon },
    { label: 'Study', text: 'National Chengchi University', Icon: SchoolIcon },
    { label: 'Employment', text: 'Playsee Co., Ltd.', Icon: BusinessIcon },
  ],
}

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
    date: "2021-05 ~ 2024-01",
    location: "Red Building Capital",
    title: "Full Stack Developer / Data Engineer",
    content: <ul>
      <li>
        Led RESTful API microservices development, boosting system RPS by 30% through migrations to Django, Spring Boot, FastAPI, and Gin Gonic.
      </li>
      <li>
        Implemented a robust OAuth2 authentication system, significantly enhancing internal security and data integrity.
      </li>
      <li>
        Developed a geographic search system using Elasticsearch, improving location-based service efficiency and user satisfaction.
      </li>
      <li>
        Streamlined development with CI/CD pipelines, cutting deployment times by 50% and accelerating project delivery.
      </li>
      <li>
        Containerized VM projects with Docker and managed with Kubernetes, achieving scalable and reliable infrastructure.
      </li>
      <li>
        Automated data processing with cronjobs, Elasticsearch, and Grafana, enabling real-time insights and data-driven decisions.
      </li>
      <li>
        Developed deep learning models for image recognition, significantly improving application AI features and user interaction.
      </li>
      <li>
        Pioneered the development of Web3 programs, focusing on ERC-4337 standards, blockchain event monitoring, and seamless integration with Web2 platforms.
      </li>
      <li>
        Authored K6 testing scripts, optimizing system performance and ensuring stability under load.
      </li>
      <li>
        Developed responsive web applications using Vue3, boosting user engagement by 10%.
      </li>
      <li>
        Developed scalable services using AWS SDK, leveraging S3 for robust data storage solutions, RDS for reliable database management, EKS for container orchestration, and EC2 with Security Groups for enhanced security and scalability.
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
        Seamlessly integrated Google OAuth2 for authentication in the web application, bolstering security and simplifying the sign-in process.
      </li>
      <li>
        Led the deployment of multiple projects on Google Cloud Platform using Docker, achieving 30% reduction in deployment times.
      </li>
    </ul>,
  },
]

/**
 * Social items
 */
export const SocialLinks: Social[] = [
  { label: 'Github', Icon: GitHubIcon, href: 'https://github.com/andy616' },
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/%E5%85%83%E6%A6%AE-%E9%83%AD-b64985198/'
  },
];
