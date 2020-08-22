/* import marked from './marked.min.js'; */

// Elements
var markdown = document.querySelector('.markdown__content');
var preview = document.querySelector('.preview__content');

// EventListneners
  markdown.addEventListener('input', updatePreview);

// Functions

function updatePreview () {
  preview.innerHTML = marked(markdown.innerText);
};
