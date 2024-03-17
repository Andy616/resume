import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";


export interface About {
  profileImageSrc: string;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: OverridableComponent<SvgIconTypeMap> & { muiName: string; };
}