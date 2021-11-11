import { createTheme } from "@mui/material/styles";
import {darkThemeConfig} from "./darkThemeConfig";
import {lightThemeConfig} from "./lightThemeConfig";

const ThemeGenerator = (darkMode, customLightConfig, customDarkConfig) => createTheme(
  darkMode ?
    customDarkConfig ? customDarkConfig : darkThemeConfig :
    customLightConfig ? customLightConfig : lightThemeConfig
);

export default ThemeGenerator;