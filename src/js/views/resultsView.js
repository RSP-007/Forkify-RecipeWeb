import View from './View';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found. Please try another search!';

  _generateMarkup() {
    return this._data.map(recipe => previewView.render(recipe, false)).join('');
  }
}

export default new ResultsView();
