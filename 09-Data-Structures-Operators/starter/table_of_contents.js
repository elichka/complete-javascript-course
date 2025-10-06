'use strict';

fetch('table_of_contents.html')
  .then(response => response.text())
  .then(data => (document.getElementById('toc-placeholder').innerHTML = data));
