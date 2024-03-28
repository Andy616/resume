import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";
import React from "react";


/**
 * About section
 */
export interface About {
  profileImageSrc: string;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: OverridableComponent<SvgIconTypeMap>;
}

/**
 * Resume section
 */
export interface TimelineData {
  date: string;
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
}