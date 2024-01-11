import React, { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './App.css';

marked.setOptions({
  gfm: true,
  breaks: true
});
const App = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    console.log('markdown:', markdown);
    var rawMarkup = marked.parse(markdown, { breaks: true });
    console.log('rawMarkup:', rawMarkup);
    var cleanMarkup = DOMPurify.sanitize(rawMarkup);
    console.log('cleanMarkup:', cleanMarkup);
    return { __html: cleanMarkup };
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
# Welcome to the Markdown Previewer!

## Experience Markdown
Markdown is a *lightweight markup language* that you can use to add formatting elements to plaintext text documents. Created by **John Gruber** in 2004, Markdown is now one of the world's most popular markup languages.

### What can you do with Markdown?
- Write articles
- Draft emails
- Create documentation

Here's a quick demonstration:

Inline code is indicated with backticks, like this: \`<div></div>\`.

\`\`\`
// This is a code block:
function greet() {
  console.log('Hello, Markdown!');
}
\`\`\`

### Text Elements
Italics: *Asterisks* or _underscores_.
Bold: **Double asterisks** or __double underscores__.
Strikethrough: ~~Tildes~~.

### Lists
Unordered list:
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

Ordered list:
1. First item
2. Second item
3. Third item

### Links and Images
Here's a link to [freeCodeCamp](https://www.freecodecamp.org), an open-source community where you can learn to code for free.

Embedding images is easy: 
![Markdown Logo](https://via.placeholder.com/50x50 "Markdown Logo")

### Blockquotes
> Markdown is a writer's best friend.
> 
> **— Someone famous**

### Tables
Create tables by aligning columns with hyphens and pipes:

| Syntax    | Description |
|-----------|-------------|
| Header    | Title       |
| Paragraph | Text        |


You can even use emojis 😄 and **HTML** tags!

---

Markdown is simple, yet powerful. Explore and enjoy!

*Created with love for Markdown enthusiasts.*
`;

export default App;
