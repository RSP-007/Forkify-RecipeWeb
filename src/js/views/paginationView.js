import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  // Handle pagination button clicks
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage,
    );

    // First page
    if (curPage === 1 && numPages > 1)
      return this._generateMarkupButton('next', curPage + 1);

    // Last page
    if (curPage === numPages && numPages > 1)
      return this._generateMarkupButton('prev', curPage - 1);

    // Middle pages
    if (curPage < numPages)
      return (
        this._generateMarkupButton('prev', curPage - 1) +
        this._generateMarkupButton('next', curPage + 1)
      );

    // Single page
    return '';
  }

  // Generate pagination button markup
  _generateMarkupButton(type, page) {
    return `
      <button
        class="btn--inline pagination__btn--${type}"
        data-goto="${page}"
      >
        ${
          type === 'prev'
            ? `
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${page}</span>
            `
            : `
              <span>Page ${page}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            `
        }
      </button>
    `;
  }
}

export default new PaginationView();
