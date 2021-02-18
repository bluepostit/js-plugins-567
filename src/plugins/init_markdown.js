import MarkdownIt from 'markdown-it';

const initMarkdown = () => {
  const editor = document.getElementById('editor');
  const preview = document.querySelector('#preview');
  const markdown = new MarkdownIt();
  editor.addEventListener('keyup', (event) => {
    const html = markdown.render(editor.value);
    preview.innerHTML = html;
  });
};

export { initMarkdown };
