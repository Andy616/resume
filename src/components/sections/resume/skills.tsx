'use client';

import { FC, memo } from "react";
import { LinearProgress, Paper, linearProgressClasses } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Skill as SkillType, SkillGroup } from '@/data/dataDef';
import Typography from "@mui/material/Typography";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/material/Box";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
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


const Skills: FC<{ skillGroup: SkillGroup[] }> = memo(function Skills({ skillGroup }) {
  return (
    <Grid container>

      {skillGroup.map(({ name, skills }, idx) => (
        <Grid key={idx} xs={12} sm={6} md={4}>
          <Paper elevation={4} sx={{ mx: 4, my: 2, p: 4, backgroundColor: 'divider', borderRadius: 4 }}>
            <Typography component="div" variant="h6" textAlign="center" sx={{ pb: 2 }}>{name}</Typography>
            {skills.map((skill, idx) => (
              <Box key={idx} sx={{ my: 1 }}>
                <Skill skill={skill}/>
              </Box>
            ))}
          </Paper>
        </Grid>
      ))}

    </Grid>
  )
})

export default Skills;