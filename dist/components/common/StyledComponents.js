"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledIconButton = exports.StyledDropdown = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Icon Buttons (Ex: Bold, Italic etc.)
const StyledIconButton = _ref => {
  let {
    iconName,
    iconStyle,
    isActive,
    onToggle,
    icon
  } = _ref;

  // Handling button click in editor
  const handleClick = (toggleFunction, draftStyle) => {
    toggleFunction(draftStyle);
  };

  return /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    size: "small",
    sx: {
      color: theme => isActive ? theme.palette[iconName].fgColor : theme.palette.button.disabled.fgColor,
      background: theme => isActive ? theme.palette[iconName].bgColor : theme.palette.button.disabled.bgColor,
      fontWeight: "900 !important",
      margin: "0px 3px 10px 3px",
      padding: "7px !important",
      '&:hover': {
        background: theme => theme.palette.button.hover.bgColor + " !important",
        color: theme => theme.palette.button.hover.fgColor + " !important"
      }
    },
    onClick: () => handleClick(onToggle, iconStyle)
  }, icon);
}; // Dropdown (Ex: Headers selection)


exports.StyledIconButton = StyledIconButton;

const StyledDropdown = props => {
  const [selectionValue, setSelectionValue] = _react.default.useState(props.defaultValue ? props.defaultValue : '');

  const handleChange = event => {
    setSelectionValue(event.target.value);
    props.onToggle(event.target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    style: {
      margin: '0px 5px'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Select, {
    value: selectionValue,
    variant: "outlined",
    onChange: handleChange
  }, props.items.map(item => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    key: item.value,
    value: item.value
  }, item.label))));
};

exports.StyledDropdown = StyledDropdown;