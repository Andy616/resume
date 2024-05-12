'use client';

import { FC, memo } from "react";
import { LinearProgress, Paper, linearProgressClasses } from "@mui/material";
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { CoverflowEffectOptions } from "swiper/types";

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
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : "rgba(72,72,72,0.46)",
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
    <Box className='skillset' sx={{ borderRadius: 4 }}>
      <span className="border-animation"></span>
      <Paper 
        elevation={4} 
        sx={{ p: 4, backgroundColor: 'divider', borderRadius: 4, height: 300 }}
      >
        <Typography component="div" variant="h6" textAlign="center" sx={{ pb: 2 }}>{skillGroup.name}</Typography>
        {skillGroup.skills.map((skill, idx) => (
          <Box key={idx} sx={{ my: 1 }}>
            <Skill skill={skill}/>
          </Box>
        ))}
      </Paper>
    </Box>
  )
})


export interface SkillProps {
  skillGroups: SkillGroupType[],
  coverflowEffect: CoverflowEffectOptions,
  slideWidth?: number,
}


const SkillsMobile: FC<SkillProps> = memo(function Skills(props) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={props.coverflowEffect}
        pagination={{
          clickable: true,
          // dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        {
          props.skillGroups.map((skillGroup, idx) => (
            // add width style here with media query causes error, slides will not be centered
            <SwiperSlide key={idx} style={{ width: props.slideWidth ?? 350 }}>
              <SkillGroup skillGroup={skillGroup}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
})


const SkillsDesktop: FC<SkillProps> = memo(function Skills(props) {

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={props.coverflowEffect}
        pagination={{
          clickable: true,
          // dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        {
          props.skillGroups.map((skillGroup, idx) => (
            // add width style here with media query causes error, slides will not be centered
            <SwiperSlide key={idx} style={{ width: props.slideWidth ?? 500 }}>
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

  const slideWidthMobile = 300
  const coverflowMobile = {
    rotate: -20,
    stretch: 0,
    depth: 150,
    modifier: 2,
    slideShadows: false,
  }

  const slideWidthDesktop = 450
  const coverflowDesktop = {
    rotate: -15,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  }

  return (
    <>
      {
        isMobile ?
          <SkillsMobile skillGroups={skillGroups} coverflowEffect={coverflowMobile} slideWidth={slideWidthMobile}/> :
          <SkillsDesktop skillGroups={skillGroups} coverflowEffect={coverflowDesktop} slideWidth={slideWidthDesktop}/>
      }
    </>
  )
})

export default Skills;