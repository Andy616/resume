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
    date: "2015 - 2019",
    location: "National Chengchi University",
    title: "BA Economics",
  },
  {
    date: "2019 - 2020",
    location: "TIBAME x Institute for Information Industry",
    title: "AI/Big Data Analyst Course",
  }
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
