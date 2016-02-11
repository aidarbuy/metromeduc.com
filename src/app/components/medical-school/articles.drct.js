export function MedicalSchoolDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/medical-school/articles.html',
    controller: MedicalSchoolController,
    controllerAs: 'ms',
    bindToController: true
  };

  return directive;
}


class MedicalSchoolController {
  constructor (ArticlesFactory) {
    'ngInject';

    this.articles = ArticlesFactory.query();

    this.articleIndex = 0;
    this.articlesQuantity = this.articles.length-2;
    this.article = this.articles[this.articleIndex];

    this.prevArticle = function(){
      this.articleIndex++;
      this.article = this.articles[this.articleIndex];
    };
    
    this.nextArticle = function(){
      this.articleIndex--;
      this.article = this.articles[this.articleIndex];
    };
  }
}
