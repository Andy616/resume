import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";
import React from "react";


/**
 * About section
 */
export interface About {
  profileImageSrc: string;
  description: string | React.ReactElement;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: OverridableComponent<SvgIconTypeMap>;
}

/**
 * Skills section
 */
export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Resume section
 */
export interface TimelineData {
  start_date: Date;
  end_date?: Date;
  location: string;
  title: string;
  content?: string | React.ReactElement;
  logo?: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
  href: string;
  text: string;
}