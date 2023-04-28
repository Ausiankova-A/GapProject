// class Search {
//     get 'SearchField'(page) {
//       return page.('#top-s');
//     }
  
//     get 'FirstSearchResult'() {
//       return '.viewer-type-card_has-filter.viewer-type-card li:first-child';
//     }
  
//     get 'Invalid Search Result'() {
//       return '.breadcrumbs__list__li.active.last.a-open h1 span';
//     }
//     get 'ProductName'() {
//         return '//*[@class="b-product-title__heading"]/h1';
//       }
//   }

class Search {
  constructor(page) {
      this.page = page;
      this.SearchField = '#top-s';
  }
}
  
  module.exports = {Search};

 