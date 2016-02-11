export class ArticlesController {
	constructor (ArticlesFactory) {
		'ngInject';

		this.articleIndex = 0;
		this.articlesQuantity = ArticlesFactory.length-2;
		this.article = ArticlesFactory[this.articleIndex];

		this.prevArticle = function(){
			this.articleIndex++;
			this.article = ArticlesFactory[this.articleIndex];
		};
		
		this.nextArticle = function(){
			this.articleIndex--;
			this.article = ArticlesFactory[this.articleIndex];
		};
	}
}