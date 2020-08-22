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

Split(['.markdown', '.preview'], {
  minSize: [500, 500],
  elementStyle: (dimension, size, gutterSize) => ({
      'flex-basis': `calc(${size}% - ${gutterSize}px)`,
  }),
  gutterStyle: (dimension, gutterSize) => ({
      'flex-basis':  `${gutterSize}px`,
  }),
})

