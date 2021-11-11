# React Material WYSIWYG Editor

A [Material-UI](https://mui.com/) based WYSIWYG editor for React.

* Built using [DraftJs](https://draftjs.org).
* Material UI (updated for v5) design for the editor toolbar buttons.
* Light & Dark themes for the editor.

**Light Theme:**
![React MUI Editor Light](https://api.coolbytes.in/v1/images/public/4 "Light theme editor")

**Dark Theme:**
![React MUI Editor Dark](https://api.coolbytes.in/v1/images/public/5 "Dark theme editor")

_The editor is customizable, and I have already added some options to customize. If you'd like to have more customization ability, let me know by making a feature request._

## Installation

The package is available via npm - `react-mui-wysiwyg`.
To install, run the following command (You need to have `node` or `npm` or `yarn` installed):

```sh
// with npm
npm install react-mui-editor

// with yarn
yarn add react-mui-editor
```

## Usage

After installation, you can just import the `MaterialEditor` component as follows:

```javascript
import { MaterialEditor } from "react-mui-editor";

<MaterialEditor />;
```

_See the example (`App.js`) in Github repo, on how to customize the editor._
_editorContent state variable can be used to store editor contents as html._

_More details on how to customize, will be added soon._

## Upcoming Features

**0.1.0**
Initial set of changes

**Upcoming**
* Add/Remove Hyperlinks
* Text alignment
* Add/Remove Images

**Future releases**
* Undo/Redo
* Change default RichUtils styling
* Text & highlight color
* Subscript and Superscript
* Code refactoring & bug fixes
* New feature requests

## Help/Feature requests

* Use the Github "Discussion" section for help.
* Bug reports or feature/enhancement requests can be made through "Issues" section.