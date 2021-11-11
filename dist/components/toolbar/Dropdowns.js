"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypographyDropdown = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledComponents = require("../common/StyledComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Typography as a dropdown
const TypographyDropdown = props => {
  const typographyItems = [{
    label: 'Normal',
    value: 'paragraph'
  }, {
    label: 'Heading 1',
    value: 'header-one'
  }, {
    label: 'Heading 2',
    value: 'header-two'
  }, {
    label: 'Heading 3',
    value: 'header-three'
  }, {
    label: 'Heading 4',
    value: 'header-four'
  }, {
    label: 'Heading 5',
    value: 'header-five'
  }, {
    label: 'Heading 6',
    value: 'header-six'
  }];
  return /*#__PURE__*/_react.default.createElement(_StyledComponents.StyledDropdown, {
    defaultValue: "paragraph",
    items: typographyItems,
    onToggle: props.onToggle
  });
};

exports.TypographyDropdown = TypographyDropdown;