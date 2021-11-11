"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@mui/material/styles");

var _darkThemeConfig = require("./darkThemeConfig");

var _lightThemeConfig = require("./lightThemeConfig");

const ThemeGenerator = (darkMode, customLightConfig, customDarkConfig) => (0, _styles.createTheme)(darkMode ? customDarkConfig ? customDarkConfig : _darkThemeConfig.darkThemeConfig : customLightConfig ? customLightConfig : _lightThemeConfig.lightThemeConfig);

var _default = ThemeGenerator;
exports.default = _default;