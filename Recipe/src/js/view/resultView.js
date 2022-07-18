import View from "./view";

class ResultView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your search! Please try again :)";

  _generateMarkup() {
    return this._data
      .map((result) => {
        return `
        <li class="preview">
                <a class="preview__link" href="#${result.id}">
                  <figure class="preview__fig">
                    <img src="${result.image}" alt="Test" />
                  </figure>
                  <div class="preview__data">
                    <h4 class="preview__title">${result.title}</h4>
                    <p class="preview__publisher">${result.publisher}</p>
                  </div>
                </a>
              </li>
        `;
      })
      .join("");
  }
}
export default new ResultView();
