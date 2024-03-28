import { FC, memo } from "react";
import { Education as EducationData } from "@/data/data";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";


const Education: FC = memo(function Education() {
  return (
    <Grid container>
      {EducationData.map(({ date, location, title, logo }, idx) => (

        <Grid key={idx} container xs={12} sm={6}>
          <Grid xs={12} sm={3} display="flex" justifyContent="center">
            <Avatar alt={`${location} logo`} src={logo} sx={{ width: 64, height: 64 }}/>
          </Grid>
          <Grid xs={12} sm={9}>
            <Typography component="div">
              {date}
            </Typography>
            <Typography component="div" variant="h5" fontWeight="bold">
              {location}
            </Typography>
            <Typography component="div" variant="h6">
              {title}
            </Typography>
          </Grid>
        </Grid>

      ))}
    </Grid>
  )
})

export default Education;