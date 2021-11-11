"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypographyButton = exports.MonospaceButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _CloseRounded = _interopRequireDefault(require("@mui/icons-material/CloseRounded"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// For Dialog animation (Slide from bottom)
const Transition = /*#__PURE__*/_react.default.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/_react.default.createElement(_material.Slide, _extends({
    direction: "up",
    ref: ref
  }, props));
}); // Monospace button


const MonospaceButton = props => {
  const handleClick = (toggleFunction, draftStyle) => {
    toggleFunction(draftStyle);
  };

  return /*#__PURE__*/_react.default.createElement(_material.Button, {
    size: "small",
    sx: {
      color: theme => props.isActive ? theme.palette["monospace"].fgColor : theme.palette.button.disabled.fgColor,
      background: theme => props.isActive ? theme.palette["monospace"].bgColor : theme.palette.button.disabled.bgColor,
      fontWeight: "900 !important",
      margin: "0px 5px 10px 5px",
      padding: "7px 10px !important",
      '&:hover': {
        background: theme => theme.palette.button.hover.bgColor + " !important",
        color: theme => theme.palette.button.hover.fgColor + " !important"
      }
    },
    onClick: () => handleClick(props.onToggle, "CODE")
  }, "Mono");
}; // Typography choices as a button


exports.MonospaceButton = MonospaceButton;

const TypographyButton = props => {
  const [textType, setTextType] = _react.default.useState("paragraph");

  const [isDialogOpen, setIsDialogOpen] = _react.default.useState(false);

  const typographyMap = {
    "paragraph": "Normal",
    "header-one": "Heading 1",
    "header-two": "Heading 2",
    "header-three": "Heading 3",
    "header-four": "Heading 4",
    "header-five": "Heading 5",
    "header-six": "Heading 6"
  };

  const handleClick = () => {
    // open dialog
    setIsDialogOpen(true);
  };

  const handleTypographySelection = value => {
    // set state
    setTextType(value); // set props toggle

    props.onToggle(value); // close dialog

    setIsDialogOpen(false);
  };

  const handleTypographyDialogClose = () => {
    // close dialog
    setIsDialogOpen(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    size: "small",
    sx: {
      color: theme => textType !== "paragraph" ? theme.palette["header"].fgColor : theme.palette.button.disabled.fgColor,
      background: theme => textType !== "paragraph" ? theme.palette["header"].bgColor : theme.palette.button.disabled.bgColor,
      fontWeight: "900 !important",
      margin: "0px 5px 10px 5px",
      padding: "7px 10px !important",
      '&:hover': {
        background: theme => theme.palette.button.hover.bgColor + " !important",
        color: theme => theme.palette.button.hover.fgColor + " !important"
      }
    },
    onClick: handleClick
  }, typographyMap[textType]), /*#__PURE__*/_react.default.createElement(_material.Dialog, {
    sx: {
      color: theme => theme.palette["dialog"].fgColor,
      background: theme => theme.palette["dialog"].bgColor
    },
    fullScreen: true,
    TransitionComponent: Transition,
    "aria-labelledby": "typography-dialog",
    open: isDialogOpen,
    onClose: handleTypographyDialogClose
  }, /*#__PURE__*/_react.default.createElement(_material.AppBar, {
    sx: {
      color: theme => theme.palette["appbar"].fgColor,
      background: theme => theme.palette["appbar"].bgColor
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Toolbar, null, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    edge: "start",
    color: "inherit",
    onClick: handleTypographyDialogClose,
    "aria-label": "close"
  }, /*#__PURE__*/_react.default.createElement(_CloseRounded.default, null)), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h6"
  }, "Choose Style"))), /*#__PURE__*/_react.default.createElement(_material.Toolbar, null), /*#__PURE__*/_react.default.createElement(_material.List, null, Object.keys(typographyMap).map((key, index) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: key
  }, /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    button: true,
    onClick: () => handleTypographySelection(key)
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: typographyMap[key]
  })), /*#__PURE__*/_react.default.createElement(_material.Divider, null))))));
};

exports.TypographyButton = TypographyButton;