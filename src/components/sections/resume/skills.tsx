'use client';

import { FC, memo } from "react";
import { LinearProgress, Paper, linearProgressClasses } from "@mui/material";
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Skill as SkillType, SkillGroup as SkillGroupType } from '@/data/dataDef';
import Box from "@/components/box";
import { useBreakpointDetector } from "@/hooks/useBreakpointDetector";

import "@/static/skills.css";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : "rgba(93,93,93,0.46)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#69ddff',
  },
}));


const Skill: FC<{ skill: SkillType }> = memo(function Skill({ skill }) {
  return (
    <>
      <Typography component="div">
        {skill.name}
      </Typography>
      <BorderLinearProgress variant="determinate" value={skill.level}/>
    </>
  )
})


const SkillGroup: FC<{ skillGroup: SkillGroupType }> = memo(function SkillGroup({ skillGroup }) {
  // todo: dynamically compute height
  return (
    <Paper elevation={4} sx={{ mx: 4, my: 2, p: 4, backgroundColor: 'divider', borderRadius: 4, height: 320 }}>
      <Typography component="div" variant="h6" textAlign="center" sx={{ pb: 2 }}>{skillGroup.name}</Typography>
      {skillGroup.skills.map((skill, idx) => (
        <Box key={idx} sx={{ my: 1 }}>
          <Skill skill={skill}/>
        </Box>
      ))}
    </Paper>
  )
})


const SkillsMobile: FC<{ skillGroups: SkillGroupType[] }> = memo(function Skills({ skillGroups }) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: -8,
          stretch: 0,
          depth: 300,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          // dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        {
          skillGroups.map((skillGroup, idx) => (
            // add width style here with media query causes error, slides will not be centered
            <SwiperSlide key={idx} style={{ width: 300 }}>
              <SkillGroup skillGroup={skillGroup}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
})


const SkillsDesktop: FC<{ skillGroups: SkillGroupType[]}> = memo(function Skills({ skillGroups }) {

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: -8,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          // dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        {
          skillGroups.map((skillGroup, idx) => (
            // add width style here with media query causes error, slides will not be centered
            <SwiperSlide key={idx} style={{ width: 500 }}>
              <SkillGroup skillGroup={skillGroup}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
})


const Skills: FC<{ skillGroups: SkillGroupType[] }> = memo(function Skills({ skillGroups }) {
  const isMobile = useBreakpointDetector()
  // can only create 2 different component for mobile and desktop setup
  return (
    <>
      {
        isMobile ?
          <SkillsMobile skillGroups={skillGroups}/> :
          <SkillsDesktop skillGroups={skillGroups}/>
      }
    </>
  )
})

export default Skills;