import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';
import { searchMovies, handleSearch } from './movies';

initSortable();
initMarkdown();
initSelect2();

// Setup the form to trigger a search!
const form = document.querySelector('#search-movies');
form.addEventListener('submit', handleSearch);

searchMovies('shrek');
