import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    var rawMarkup = marked.parse(markdown, {sanitize: true, breaks: true});
    return { __html: rawMarkup };
  };

  return (
    <div className="App">
      <div className="container-title">Markdown Editor</div>
      <Editor markdown={markdown} onChange={handleChange} />
      <div className="container-title">Preview</div>
      <Preview markdown={getMarkdownText()} />
    </div>
  );
};

const Editor = ({ markdown, onChange }) => (
  <textarea id="editor" value={markdown} onChange={onChange} />
);

const Preview = ({ markdown }) => (
  <div id="preview" dangerouslySetInnerHTML={markdown} />
);

const initialMarkdown = `
# Welcome to My Markdown Previewer!

## This is a Subheading

Here's a link to [freeCodeCamp](https://www.freecodecamp.org).

Inline code can be written within backticks, like this: \`<div></div>\`.

\`\`\`
// This is a code block:
function exampleFunction() {
  console.log('Hello, World!');
}
\`\`\`

- This is a list item

> This is a blockquote.

![Image](https://via.placeholder.com/150 "Placeholder Image")

**This is bold text!**

*This is italic text!*

You can **_combine_** them.
`;

export default App;
