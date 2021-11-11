import React from "react";
import {FormControl, IconButton, MenuItem, Select} from "@mui/material";



// Icon Buttons (Ex: Bold, Italic etc.)
export const StyledIconButton = ({ iconName, iconStyle, isActive, onToggle, icon }) => {
  // Handling button click in editor
  const handleClick = (toggleFunction, draftStyle) => {
    toggleFunction(draftStyle);
  }

  return(
    <IconButton
      size="small"
      sx={{
        color: (theme) => isActive ? theme.palette[iconName].fgColor : theme.palette.button.disabled.fgColor,
        background: (theme) => isActive ? theme.palette[iconName].bgColor : theme.palette.button.disabled.bgColor,
        fontWeight: "900 !important",
        margin: "0px 3px 10px 3px",
        padding: "7px !important",
        '&:hover': {
          background: (theme) => theme.palette.button.hover.bgColor + " !important",
          color: (theme) => theme.palette.button.hover.fgColor + " !important"
        }
      }}
      onClick={() => handleClick(onToggle, iconStyle)}
    >
      {icon}
    </IconButton>
  );
};


// Dropdown (Ex: Headers selection)
export const StyledDropdown = (props) => {
  const [selectionValue, setSelectionValue] = React.useState(props.defaultValue ? props.defaultValue : '');
  const handleChange = (event) => {
    setSelectionValue(event.target.value);
    props.onToggle(event.target.value);
  };

  return (
    <FormControl style={{ margin: '0px 5px' }}>
      <Select
        value={selectionValue}
        variant="outlined"
        onChange={handleChange}
      >
        {props.items.map((item) =>
          <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};