import React from "react";
import { StyledDropdown } from "../common/StyledComponents";


// Typography as a dropdown
export const TypographyDropdown = (props) => {
  const typographyItems = [
    {label: 'Normal', value: 'paragraph'},
    {label: 'Heading 1', value: 'header-one'},
    {label: 'Heading 2', value: 'header-two'},
    {label: 'Heading 3', value: 'header-three'},
    {label: 'Heading 4', value: 'header-four'},
    {label: 'Heading 5', value: 'header-five'},
    {label: 'Heading 6', value: 'header-six'}
  ]

  return (
    <StyledDropdown
      defaultValue="paragraph"
      items={typographyItems}
      onToggle={props.onToggle} />
  );
};