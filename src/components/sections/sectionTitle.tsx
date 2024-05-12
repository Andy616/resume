import { FC, memo } from "react";
import Divider, { DividerProps } from '@mui/material/Divider';
import TextBox, { TextBoxProps } from "@/components/textbox";

import "@/static/glowy.css";


interface SectionTitleProps {
  dividerProps?: DividerProps,
  textBoxProps: TextBoxProps,
}
const SectionTitle: FC<SectionTitleProps> = memo(function SectionTitle(props) {
  return (
    <Divider {...props.dividerProps} className="divider">
      <TextBox {...props.textBoxProps} className="textbox"/>
    </Divider>
  )
})

export default SectionTitle;