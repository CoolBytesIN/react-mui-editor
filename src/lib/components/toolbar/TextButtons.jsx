import React, { Fragment } from "react";
import {
  AppBar,
  Button,
  Dialog, Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  Toolbar,
  Typography
} from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


// For Dialog animation (Slide from bottom)
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


// Monospace button
export const MonospaceButton = (props) => {
  const handleClick = (toggleFunction, draftStyle) => {
    toggleFunction(draftStyle);
  }

  return (
    <Button
      size="small"
      sx={{
        color: (theme) => props.isActive ? theme.palette["monospace"].fgColor : theme.palette.button.disabled.fgColor,
        background: (theme) => props.isActive ? theme.palette["monospace"].bgColor : theme.palette.button.disabled.bgColor,
        fontWeight: "900 !important",
        margin: "0px 5px 10px 5px",
        padding: "7px 10px !important",
        '&:hover': {
          background: (theme) => theme.palette.button.hover.bgColor + " !important",
          color: (theme) => theme.palette.button.hover.fgColor + " !important"
        }
      }}
      onClick={() => handleClick(props.onToggle, "CODE")}
    >
      Mono
    </Button>
  );
};


// Typography choices as a button
export const TypographyButton = (props) => {
  const [textType, setTextType] = React.useState("paragraph");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const typographyMap = {
    "paragraph": "Normal",
    "header-one": "Heading 1",
    "header-two": "Heading 2",
    "header-three": "Heading 3",
    "header-four": "Heading 4",
    "header-five": "Heading 5",
    "header-six": "Heading 6"
  }

  const handleClick = () => {
    // open dialog
    setIsDialogOpen(true);
  }

  const handleTypographySelection = (value) => {
    // set state
    setTextType(value);
    // set props toggle
    props.onToggle(value);
    // close dialog
    setIsDialogOpen(false);
  }

  const handleTypographyDialogClose = () => {
    // close dialog
    setIsDialogOpen(false);
  }

  return (
    <>
      <Button
        size="small"
        sx={{
          color: (theme) => textType !== "paragraph" ? theme.palette["header"].fgColor : theme.palette.button.disabled.fgColor,
          background: (theme) => textType !== "paragraph" ? theme.palette["header"].bgColor : theme.palette.button.disabled.bgColor,
          fontWeight: "900 !important",
          margin: "0px 5px 10px 5px",
          padding: "7px 10px !important",
          '&:hover': {
            background: (theme) => theme.palette.button.hover.bgColor + " !important",
            color: (theme) => theme.palette.button.hover.fgColor + " !important"
          }
        }}
        onClick={handleClick}
      >
        {typographyMap[textType]}
      </Button>
      <Dialog
        sx={{
          color: (theme) => theme.palette["dialog"].fgColor,
          background: (theme) => theme.palette["dialog"].bgColor
        }}
        fullScreen
        TransitionComponent={Transition}
        aria-labelledby="typography-dialog"
        open={isDialogOpen}
        onClose={handleTypographyDialogClose}
      >
        <AppBar
          sx={{
            color: (theme) => theme.palette["appbar"].fgColor,
            background: (theme) => theme.palette["appbar"].bgColor
          }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleTypographyDialogClose} aria-label="close">
              <CloseRoundedIcon />
            </IconButton>
            <Typography variant="h6">
              Choose Style
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <List>
          {Object.keys(typographyMap).map((key, index) => (
            <Fragment key={key}>
              <ListItem button onClick={() => handleTypographySelection(key)}>
                <ListItemText primary={typographyMap[key]} />
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Dialog>
    </>
  );
};