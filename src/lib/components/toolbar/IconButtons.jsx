import React from "react";
import {IconButton} from "@mui/material";
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import FormatUnderlinedRoundedIcon from '@mui/icons-material/FormatUnderlinedRounded';
import StrikethroughSRoundedIcon from '@mui/icons-material/StrikethroughSRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import {StyledIconButton} from "../common/StyledComponents";


// Bold Icon
export const BoldButton = (props) => {
  return (
    <StyledIconButton
      iconName="bold"
      iconStyle="BOLD"
      isActive={props.isActive}
      onToggle={props.onToggle}
      icon={<FormatBoldRoundedIcon />} />
  );
};

// Italic Icon
export const ItalicButton = (props) => {
  return (
    <StyledIconButton
      iconName="italic"
      iconStyle="ITALIC"
      isActive={props.isActive}
      onToggle={props.onToggle}
      icon={<FormatItalicRoundedIcon />} />
  );
};

// Underline Icon
export const UnderlineButton = (props) => {
  return (
    <StyledIconButton
      iconName="underline"
      iconStyle="UNDERLINE"
      isActive={props.isActive}
      onToggle={props.onToggle}
      icon={<FormatUnderlinedRoundedIcon />} />
  );
};

// Strikethrough Icon
export const StrikeThroughButton = (props) => {
  return (
    <StyledIconButton
      iconName="strikethrough"
      iconStyle="STRIKETHROUGH"
      isActive={props.isActive}
      onToggle={props.onToggle}
      icon={<StrikethroughSRoundedIcon />} />
  );
};

// Unordered List Icon
export const UnorderedListButton = (props) => {
  return (
    <StyledIconButton
      iconName="unorderedList"
      iconStyle="unordered-list-item"
      isActive={props.isActive}
      onToggle={props.onToggle}
      icon={<FormatListBulletedRoundedIcon />} />
  );
};

// Ordered List Icon
export const OrderedListButton = (props) => {
  return (
    <StyledIconButton
      iconName="orderedList"
      iconStyle="ordered-list-item"
      isActive={props.isActive}
      onToggle={props.onToggle}
      icon={<FormatListNumberedRoundedIcon />} />
  );
};

// Block Quote Icon
export const BlockQuoteButton = (props) => {
  return (
    <StyledIconButton
      iconName="blockquote"
      iconStyle="blockquote"
      isActive={props.isActive}
      onToggle={props.onToggle}
      icon={<FormatQuoteRoundedIcon />} />
  );
};

// Code Icon
export const CodeBlockButton = (props) => {
  return (
    <StyledIconButton
      iconName="code"
      iconStyle="code-block"
      isActive={props.isActive}
      onToggle={props.onToggle}
      icon={<CodeRoundedIcon />} />
  );
};

// Theme Icon
export const ThemeButton = (props) => {
  return (
    <IconButton
      size="small"
      sx={{
        color: (theme) => theme.palette["theme"].fgColor,
        background: (theme) => theme.palette["theme"].bgColor,
        fontWeight: "900 !important",
        margin: "0px 3px 10px 3px",
        padding: "7px !important",
        '&:hover': {
          background: (theme) => theme.palette.button.hover.bgColor + " !important",
          color: (theme) => theme.palette.button.hover.fgColor + " !important"
        }
      }}
      onClick={props.handleThemeToggle}
    >
      <Brightness4RoundedIcon />
    </IconButton>
  );
};