import React from "react";
import {ScopedCssBaseline} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MaterialEditorHelper from "./MaterialEditorHelper";
import ThemeGenerator from "./styles/ThemeGenerator";


/* This is the Material UI Editor component that gets rendered in App.js of this app
  and also gets published to npm/yarn for use in other react apps.
*/
const MaterialEditor = (props) => {
  // Accepted Props for Customization
  // 1. placeholder (placeholder text for editor)
  // 2. lightThemeConfig (colors for light theme)
  // 3. darkThemeConfig (colors for dark theme)
  // 4. setDarkTheme (theme toggler, dark theme enabled if `true`)
  // 5. toolbarConfig (to rearrange the toolbar buttons)
  // 5.1. Choose between "typographyBtn" and "typographyDropdown" (default)

  // state for light/dark theme
  const [darkMode, setDarkMode] = React.useState(
    props.setDarkTheme ? props.setDarkTheme : false
  );

 const [defaultEditorContent, setDefaultEditorContent] = React.useState(
    undefined
  );

  /* Theme selection based on dark mode state.
     The config passed as props is given priority, else default config is used.
  */
  const themeObj = React.useMemo(
    () => ThemeGenerator(darkMode, props.lightThemeConfig, props.darkThemeConfig)
    , [darkMode, props.lightThemeConfig, props.darkThemeConfig]);

  const handleThemeToggle = () => {
    setDarkMode(darkMode => !darkMode);
  };

  /* Default config for Editor Toolbar (which items to show and in what order).
    The toolbar config passed as input prop will be chosen over this.
  */
  const toolbarDefaultConfig = [
    'typographyDropdown', 'bold', 'italic', 'underline', 'strikethrough', 'monospace',
    'unorderedList', 'orderedList', 'blockquote', 'code', 'theme'
  ]

  return (
    /*
    ScopedCssBaseline instead of CssBaseline to restrict styling to child components.
    It's assumed that the react app using this component will probably have a dependency
    on material UI. So the code in this package tries to avoid conflicts.
    */
    <ThemeProvider theme={themeObj}>
      <ScopedCssBaseline
        sx={{
          borderRadius: (theme) => theme.palette.editor.container.borderRadius,
          backgroundColor: (theme) => theme.palette.editor.container.backgroundColor,
          color: (theme) => theme.palette.editor.container.color
        }}
      >
        <MaterialEditorHelper
          darkMode={darkMode}
          editorContent={props.editorContent ? props.editorContent : defaultEditorContent}
          setEditorContent={props.setEditorContent ? props.setEditorContent : setDefaultEditorContent}
          handleThemeToggle={handleThemeToggle}
          toolbarDefaultConfig={toolbarDefaultConfig}
          inputs={props} />
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};

export default MaterialEditor;