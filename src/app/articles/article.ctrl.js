export class ArticleController {
	constructor (ArticlesFactory, $stateParams) {
		'ngInject';

		this.article = ArticlesFactory.findOne($stateParams.id);
	}
}