import React, { useRef } from "react";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import {stateToHTML} from 'draft-js-export-html';
import {stateFromHTML} from 'draft-js-import-html';
import {
  BlockQuoteButton,
  BoldButton, CodeBlockButton,
  ItalicButton, OrderedListButton,
  StrikeThroughButton, ThemeButton,
  UnderlineButton,
  UnorderedListButton
} from "./toolbar/IconButtons";
import {MonospaceButton, TypographyButton} from "./toolbar/TextButtons";
import {TypographyDropdown} from "./toolbar/Dropdowns";
import {Paper, useTheme} from "@mui/material";
import "draft-js/dist/Draft.css";
import "./styles/css/draf-editor.css";


/* This is a helper component for the final exposed component, created just to avoid too
   many lines of code in a single component. This needs to be optimized, but I will
   prioritize it in later versions (after desired functionality is made available).
*/
const MaterialEditorHelper = ({ darkMode, editorContent, setEditorContent, handleThemeToggle, toolbarDefaultConfig, inputs}) => {
  const theme = useTheme();

  const toolbarConfig = inputs.toolbarConfig ? inputs.toolbarConfig :
    toolbarDefaultConfig;

  // DraftJs requirements
  // state for editor (provided by DraftJs)
  const [editorState, setEditorState] = React.useState(
    () => editorContent ? EditorState.createWithContent(stateFromHTML(editorContent)) : EditorState.createEmpty(),
  );

  React.useEffect(
    () => {
      setEditorContent(stateToHTML(editorState.getCurrentContent()));
    }
  , [editorState, setEditorContent]);

  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const editorRef = useRef(null);

  // Function to handle key shortcuts such as CMD+B (Bold), CMD+I(Italic) etc.
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return true;
    }
    return false;
  }

  // Taken from DraftJs documentation, not sure what this does.
  const mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        editorState,
        4, /* maxDepth */
      );
      if (newEditorState !== editorState) {
        setEditorState(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  // Function to toggle block styles such as headings.
  const toggleBlockType = (blockType) => {
    setEditorState(
      RichUtils.toggleBlockType(
        editorState,
        blockType
      )
    );
  }

  // Function to toggle inline styles such as bold, italic etc.
  const toggleInlineStyle = (inlineStyle) => {
    setEditorState(
      RichUtils.toggleInlineStyle(
        editorState,
        inlineStyle
      )
    );
  }

  // Probably not required, if material theme handles styling for blockquote
  const getBlockStyle = (block) => {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
  }

  // Mapping components to toolbar config inputs
  // Not a good way to maintain this, I guess. But it works :D.
  const toolbarMapping = {
    bold: <BoldButton
      key="cb-bold"
      isActive={editorState.getCurrentInlineStyle().has("BOLD")}
      onToggle={toggleInlineStyle}
    />,
    italic: <ItalicButton
      key="cb-italic"
      isActive={editorState.getCurrentInlineStyle().has("ITALIC")}
      onToggle={toggleInlineStyle}
    />,
    underline: <UnderlineButton
      key="cb-underline"
      isActive={editorState.getCurrentInlineStyle().has("UNDERLINE")}
      onToggle={toggleInlineStyle}
    />,
    strikethrough: <StrikeThroughButton
      key="cb-strikethrough"
      isActive={editorState.getCurrentInlineStyle().has("STRIKETHROUGH")}
      onToggle={toggleInlineStyle}
    />,
    monospace: <MonospaceButton
      key="cb-monospace"
      isActive={editorState.getCurrentInlineStyle().has("CODE")}
      onToggle={toggleInlineStyle}
    />,
    typographyDropdown: <TypographyDropdown
      key="cb-typography"
      onToggle={toggleBlockType}
    />,
    typographyBtn: <TypographyButton
      key="cb-typography-btn"
      onToggle={toggleBlockType}
    />,
    unorderedList: <UnorderedListButton
      key="cb-unordered-list"
      isActive={blockType === "unordered-list-item"}
      onToggle={toggleBlockType}
    />,
    orderedList: <OrderedListButton
      key="cb-ordered-list"
      isActive={blockType === "ordered-list-item"}
      onToggle={toggleBlockType}
    />,
    blockquote: <BlockQuoteButton
      key="cb-blockquote"
      isActive={blockType === "blockquote"}
      onToggle={toggleBlockType}
    />,
    code: <CodeBlockButton
      key="cb-code-block"
      isActive={blockType === "code-block"}
      onToggle={toggleBlockType}
    />,
    theme: <ThemeButton
      key="cb-theme-toggle"
      handleThemeToggle={handleThemeToggle}
    />
  };

  // The following needs to be replaced with material UI styles.
  /* If the user changes block type before entering any text, we can
  either style the placeholder or hide it. Let's just hide it now.
  let className = 'RichEditor-editor';
  var contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder';
    }
  } */

  // Custom overrides for "Monospace" style, but why?
  const styleMap = {
    CODE: {
      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };

  return (
    // Paper root for Editor
    <Paper elevation={3}
      sx={{
        border: (theme) => "1px solid " + theme.palette.editor.root.borderColor,
        borderRadius: (theme) => theme.palette.editor.root.borderRadius,
        fontFamily: "'Georgia', serif",
        fontSize: "14px",
        padding: "15px",
        '& .MuiOutlinedInput-input': {
          padding: '8px 15px !important',
          minWidth: '120px'
        }
      }}>

      {/*Toolbar buttons*/}
      {toolbarConfig.map((item) =>
            toolbarMapping[item]
          )}

      {/*Editing area*/}
      <div style={{
            borderTop: "2px solid " + theme.palette.editor.body.borderColor,
            cursor: "text",
            fontSize: "16px",
            marginTop: "10px",
            minHeight: "200px",
            maxHeight: "100vh",
            padding: "15px",
            fontFamily: "'Lato', sans-serif"
          }}
           onClick={() => editorRef.current.focus()} >
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={setEditorState}
          placeholder={inputs.placeholder ? inputs.placeholder : "Type something here..." }
          ref={editorRef}
          spellCheck={true}
        />
      </div>
    </Paper>
  );
}

export default MaterialEditorHelper;