class SearchView {
  _parentEl = document.querySelector('.search');

  // Get the user's search query and clear the input field
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  // Handle search form submission
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
