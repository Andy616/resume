import { About } from "@/data/dataDef";
import MapIcon from '@mui/icons-material/Map';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';


export const SectionId = {
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];


export const AboutData: About = {
  profileImageSrc: "/profile.jpeg",  // root is public folder
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores atque corporis doloribus ea,
            harum ipsum laudantium, nihil quidem quisquam reprehenderit totam, ut voluptatem! Cupiditate dolore
            molestias quod rem rerum!`,
  aboutItems: [
    {label: 'Location', text: 'Taipei, Taiwan', Icon: MapIcon},
    {label: 'Age', text: (new Date().getUTCFullYear() - 1998).toString(), Icon: CalendarIcon},
    { label: 'Study', text: 'National Chengchi University', Icon: SchoolIcon },
    { label: 'Employment', text: 'Playsee Co., Ltd.', Icon: BusinessIcon },
  ],
}