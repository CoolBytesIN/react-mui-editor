"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/material/styles");

var _MaterialEditorHelper = _interopRequireDefault(require("./MaterialEditorHelper"));

var _ThemeGenerator = _interopRequireDefault(require("./styles/ThemeGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This is the Material UI Editor component that gets rendered in App.js of this app
  and also gets published to npm/yarn for use in other react apps.
*/
const MaterialEditor = props => {
  // Accepted Props for Customization
  // 1. placeholder (placeholder text for editor)
  // 2. lightThemeConfig (colors for light theme)
  // 3. darkThemeConfig (colors for dark theme)
  // 4. setDarkTheme (theme toggler, dark theme enabled if `true`)
  // 5. toolbarConfig (to rearrange the toolbar buttons)
  // 5.1. Choose between "typographyBtn" and "typographyDropdown" (default)
  // state for light/dark theme
  const [darkMode, setDarkMode] = _react.default.useState(props.setDarkTheme ? props.setDarkTheme : false);

  const [defaultEditorContent, setDefaultEditorContent] = _react.default.useState(undefined);
  /* Theme selection based on dark mode state.
     The config passed as props is given priority, else default config is used.
  */


  const themeObj = _react.default.useMemo(() => (0, _ThemeGenerator.default)(darkMode, props.lightThemeConfig, props.darkThemeConfig), [darkMode, props.lightThemeConfig, props.darkThemeConfig]);

  const handleThemeToggle = () => {
    setDarkMode(darkMode => !darkMode);
  };
  /* Default config for Editor Toolbar (which items to show and in what order).
    The toolbar config passed as input prop will be chosen over this.
  */


  const toolbarDefaultConfig = ['typographyDropdown', 'bold', 'italic', 'underline', 'strikethrough', 'monospace', 'unorderedList', 'orderedList', 'blockquote', 'code', 'theme'];
  return (
    /*#__PURE__*/

    /*
    ScopedCssBaseline instead of CssBaseline to restrict styling to child components.
    It's assumed that the react app using this component will probably have a dependency
    on material UI. So the code in this package tries to avoid conflicts.
    */
    _react.default.createElement(_styles.ThemeProvider, {
      theme: themeObj
    }, /*#__PURE__*/_react.default.createElement(_material.ScopedCssBaseline, {
      sx: {
        borderRadius: theme => theme.palette.editor.container.borderRadius,
        backgroundColor: theme => theme.palette.editor.container.backgroundColor,
        color: theme => theme.palette.editor.container.color
      }
    }, /*#__PURE__*/_react.default.createElement(_MaterialEditorHelper.default, {
      darkMode: darkMode,
      editorContent: props.editorContent ? props.editorContent : defaultEditorContent,
      setEditorContent: props.setEditorContent ? props.setEditorContent : setDefaultEditorContent,
      handleThemeToggle: handleThemeToggle,
      toolbarDefaultConfig: toolbarDefaultConfig,
      inputs: props
    })))
  );
};

var _default = MaterialEditor;
exports.default = _default;