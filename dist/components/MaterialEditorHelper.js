"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _draftJsExportHtml = require("draft-js-export-html");

var _draftJsImportHtml = require("draft-js-import-html");

var _IconButtons = require("./toolbar/IconButtons");

var _TextButtons = require("./toolbar/TextButtons");

var _Dropdowns = require("./toolbar/Dropdowns");

var _material = require("@mui/material");

require("draft-js/dist/Draft.css");

require("./styles/css/draf-editor.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* This is a helper component for the final exposed component, created just to avoid too
   many lines of code in a single component. This needs to be optimized, but I will
   prioritize it in later versions (after desired functionality is made available).
*/
const MaterialEditorHelper = _ref => {
  let {
    darkMode,
    editorContent,
    setEditorContent,
    handleThemeToggle,
    toolbarDefaultConfig,
    inputs
  } = _ref;
  const theme = (0, _material.useTheme)();
  const toolbarConfig = inputs.toolbarConfig ? inputs.toolbarConfig : toolbarDefaultConfig; // DraftJs requirements
  // state for editor (provided by DraftJs)

  const [editorState, setEditorState] = _react.default.useState(() => editorContent ? _draftJs.EditorState.createWithContent((0, _draftJsImportHtml.stateFromHTML)(editorContent)) : _draftJs.EditorState.createEmpty());

  _react.default.useEffect(() => {
    setEditorContent((0, _draftJsExportHtml.stateToHTML)(editorState.getCurrentContent()));
  }, [editorState, setEditorContent]);

  const selection = editorState.getSelection();
  const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  const editorRef = (0, _react.useRef)(null); // Function to handle key shortcuts such as CMD+B (Bold), CMD+I(Italic) etc.

  const handleKeyCommand = (command, editorState) => {
    const newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return true;
    }

    return false;
  }; // Taken from DraftJs documentation, not sure what this does.


  const mapKeyToEditorCommand = e => {
    if (e.keyCode === 9
    /* TAB */
    ) {
      const newEditorState = _draftJs.RichUtils.onTab(e, editorState, 4
      /* maxDepth */
      );

      if (newEditorState !== editorState) {
        setEditorState(newEditorState);
      }

      return;
    }

    return (0, _draftJs.getDefaultKeyBinding)(e);
  }; // Function to toggle block styles such as headings.


  const toggleBlockType = blockType => {
    setEditorState(_draftJs.RichUtils.toggleBlockType(editorState, blockType));
  }; // Function to toggle inline styles such as bold, italic etc.


  const toggleInlineStyle = inlineStyle => {
    setEditorState(_draftJs.RichUtils.toggleInlineStyle(editorState, inlineStyle));
  }; // Probably not required, if material theme handles styling for blockquote


  const getBlockStyle = block => {
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote';

      default:
        return null;
    }
  }; // Mapping components to toolbar config inputs
  // Not a good way to maintain this, I guess. But it works :D.


  const toolbarMapping = {
    bold: /*#__PURE__*/_react.default.createElement(_IconButtons.BoldButton, {
      key: "cb-bold",
      isActive: editorState.getCurrentInlineStyle().has("BOLD"),
      onToggle: toggleInlineStyle
    }),
    italic: /*#__PURE__*/_react.default.createElement(_IconButtons.ItalicButton, {
      key: "cb-italic",
      isActive: editorState.getCurrentInlineStyle().has("ITALIC"),
      onToggle: toggleInlineStyle
    }),
    underline: /*#__PURE__*/_react.default.createElement(_IconButtons.UnderlineButton, {
      key: "cb-underline",
      isActive: editorState.getCurrentInlineStyle().has("UNDERLINE"),
      onToggle: toggleInlineStyle
    }),
    strikethrough: /*#__PURE__*/_react.default.createElement(_IconButtons.StrikeThroughButton, {
      key: "cb-strikethrough",
      isActive: editorState.getCurrentInlineStyle().has("STRIKETHROUGH"),
      onToggle: toggleInlineStyle
    }),
    monospace: /*#__PURE__*/_react.default.createElement(_TextButtons.MonospaceButton, {
      key: "cb-monospace",
      isActive: editorState.getCurrentInlineStyle().has("CODE"),
      onToggle: toggleInlineStyle
    }),
    typographyDropdown: /*#__PURE__*/_react.default.createElement(_Dropdowns.TypographyDropdown, {
      key: "cb-typography",
      onToggle: toggleBlockType
    }),
    typographyBtn: /*#__PURE__*/_react.default.createElement(_TextButtons.TypographyButton, {
      key: "cb-typography-btn",
      onToggle: toggleBlockType
    }),
    unorderedList: /*#__PURE__*/_react.default.createElement(_IconButtons.UnorderedListButton, {
      key: "cb-unordered-list",
      isActive: blockType === "unordered-list-item",
      onToggle: toggleBlockType
    }),
    orderedList: /*#__PURE__*/_react.default.createElement(_IconButtons.OrderedListButton, {
      key: "cb-ordered-list",
      isActive: blockType === "ordered-list-item",
      onToggle: toggleBlockType
    }),
    blockquote: /*#__PURE__*/_react.default.createElement(_IconButtons.BlockQuoteButton, {
      key: "cb-blockquote",
      isActive: blockType === "blockquote",
      onToggle: toggleBlockType
    }),
    code: /*#__PURE__*/_react.default.createElement(_IconButtons.CodeBlockButton, {
      key: "cb-code-block",
      isActive: blockType === "code-block",
      onToggle: toggleBlockType
    }),
    theme: /*#__PURE__*/_react.default.createElement(_IconButtons.ThemeButton, {
      key: "cb-theme-toggle",
      handleThemeToggle: handleThemeToggle
    })
  }; // The following needs to be replaced with material UI styles.

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
      padding: 2
    }
  };
  return (
    /*#__PURE__*/
    // Paper root for Editor
    _react.default.createElement(_material.Paper, {
      elevation: 3,
      sx: {
        border: theme => "1px solid " + theme.palette.editor.root.borderColor,
        borderRadius: theme => theme.palette.editor.root.borderRadius,
        fontFamily: "'Georgia', serif",
        fontSize: "14px",
        padding: "15px",
        '& .MuiOutlinedInput-input': {
          padding: '8px 15px !important',
          minWidth: '120px'
        }
      }
    }, toolbarConfig.map(item => toolbarMapping[item]), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        borderTop: "2px solid " + theme.palette.editor.body.borderColor,
        cursor: "text",
        fontSize: "16px",
        marginTop: "10px",
        minHeight: "200px",
        maxHeight: "100vh",
        padding: "15px",
        fontFamily: "'Lato', sans-serif"
      },
      onClick: () => editorRef.current.focus()
    }, /*#__PURE__*/_react.default.createElement(_draftJs.Editor, {
      blockStyleFn: getBlockStyle,
      customStyleMap: styleMap,
      editorState: editorState,
      handleKeyCommand: handleKeyCommand,
      keyBindingFn: mapKeyToEditorCommand,
      onChange: setEditorState,
      placeholder: inputs.placeholder ? inputs.placeholder : "Type something here...",
      ref: editorRef,
      spellCheck: true
    })))
  );
};

var _default = MaterialEditorHelper;
exports.default = _default;