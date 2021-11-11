"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnorderedListButton = exports.UnderlineButton = exports.ThemeButton = exports.StrikeThroughButton = exports.OrderedListButton = exports.ItalicButton = exports.CodeBlockButton = exports.BoldButton = exports.BlockQuoteButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _FormatBoldRounded = _interopRequireDefault(require("@mui/icons-material/FormatBoldRounded"));

var _FormatItalicRounded = _interopRequireDefault(require("@mui/icons-material/FormatItalicRounded"));

var _FormatUnderlinedRounded = _interopRequireDefault(require("@mui/icons-material/FormatUnderlinedRounded"));

var _StrikethroughSRounded = _interopRequireDefault(require("@mui/icons-material/StrikethroughSRounded"));

var _FormatListBulletedRounded = _interopRequireDefault(require("@mui/icons-material/FormatListBulletedRounded"));

var _FormatListNumberedRounded = _interopRequireDefault(require("@mui/icons-material/FormatListNumberedRounded"));

var _FormatQuoteRounded = _interopRequireDefault(require("@mui/icons-material/FormatQuoteRounded"));

var _CodeRounded = _interopRequireDefault(require("@mui/icons-material/CodeRounded"));

var _Brightness4Rounded = _interopRequireDefault(require("@mui/icons-material/Brightness4Rounded"));

var _StyledComponents = require("../common/StyledComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Bold Icon
const BoldButton = props => {
  return /*#__PURE__*/_react.default.createElement(_StyledComponents.StyledIconButton, {
    iconName: "bold",
    iconStyle: "BOLD",
    isActive: props.isActive,
    onToggle: props.onToggle,
    icon: /*#__PURE__*/_react.default.createElement(_FormatBoldRounded.default, null)
  });
}; // Italic Icon


exports.BoldButton = BoldButton;

const ItalicButton = props => {
  return /*#__PURE__*/_react.default.createElement(_StyledComponents.StyledIconButton, {
    iconName: "italic",
    iconStyle: "ITALIC",
    isActive: props.isActive,
    onToggle: props.onToggle,
    icon: /*#__PURE__*/_react.default.createElement(_FormatItalicRounded.default, null)
  });
}; // Underline Icon


exports.ItalicButton = ItalicButton;

const UnderlineButton = props => {
  return /*#__PURE__*/_react.default.createElement(_StyledComponents.StyledIconButton, {
    iconName: "underline",
    iconStyle: "UNDERLINE",
    isActive: props.isActive,
    onToggle: props.onToggle,
    icon: /*#__PURE__*/_react.default.createElement(_FormatUnderlinedRounded.default, null)
  });
}; // Strikethrough Icon


exports.UnderlineButton = UnderlineButton;

const StrikeThroughButton = props => {
  return /*#__PURE__*/_react.default.createElement(_StyledComponents.StyledIconButton, {
    iconName: "strikethrough",
    iconStyle: "STRIKETHROUGH",
    isActive: props.isActive,
    onToggle: props.onToggle,
    icon: /*#__PURE__*/_react.default.createElement(_StrikethroughSRounded.default, null)
  });
}; // Unordered List Icon


exports.StrikeThroughButton = StrikeThroughButton;

const UnorderedListButton = props => {
  return /*#__PURE__*/_react.default.createElement(_StyledComponents.StyledIconButton, {
    iconName: "unorderedList",
    iconStyle: "unordered-list-item",
    isActive: props.isActive,
    onToggle: props.onToggle,
    icon: /*#__PURE__*/_react.default.createElement(_FormatListBulletedRounded.default, null)
  });
}; // Ordered List Icon


exports.UnorderedListButton = UnorderedListButton;

const OrderedListButton = props => {
  return /*#__PURE__*/_react.default.createElement(_StyledComponents.StyledIconButton, {
    iconName: "orderedList",
    iconStyle: "ordered-list-item",
    isActive: props.isActive,
    onToggle: props.onToggle,
    icon: /*#__PURE__*/_react.default.createElement(_FormatListNumberedRounded.default, null)
  });
}; // Block Quote Icon


exports.OrderedListButton = OrderedListButton;

const BlockQuoteButton = props => {
  return /*#__PURE__*/_react.default.createElement(_StyledComponents.StyledIconButton, {
    iconName: "blockquote",
    iconStyle: "blockquote",
    isActive: props.isActive,
    onToggle: props.onToggle,
    icon: /*#__PURE__*/_react.default.createElement(_FormatQuoteRounded.default, null)
  });
}; // Code Icon


exports.BlockQuoteButton = BlockQuoteButton;

const CodeBlockButton = props => {
  return /*#__PURE__*/_react.default.createElement(_StyledComponents.StyledIconButton, {
    iconName: "code",
    iconStyle: "code-block",
    isActive: props.isActive,
    onToggle: props.onToggle,
    icon: /*#__PURE__*/_react.default.createElement(_CodeRounded.default, null)
  });
}; // Theme Icon


exports.CodeBlockButton = CodeBlockButton;

const ThemeButton = props => {
  return /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    size: "small",
    sx: {
      color: theme => theme.palette["theme"].fgColor,
      background: theme => theme.palette["theme"].bgColor,
      fontWeight: "900 !important",
      margin: "0px 3px 10px 3px",
      padding: "7px !important",
      '&:hover': {
        background: theme => theme.palette.button.hover.bgColor + " !important",
        color: theme => theme.palette.button.hover.fgColor + " !important"
      }
    },
    onClick: props.handleThemeToggle
  }, /*#__PURE__*/_react.default.createElement(_Brightness4Rounded.default, null));
};

exports.ThemeButton = ThemeButton;