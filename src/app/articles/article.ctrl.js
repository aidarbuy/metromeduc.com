export class ArticleController {
	constructor (ArticlesFactory, $stateParams, $http, $scope, $log) {
		'ngInject';

		$scope.article = ArticlesFactory.findOne($stateParams.id);

		getShortUrl();

		function getShortUrl() {
			var longUrl = "https://metromeduc.com/articles/" + $scope.article.img.src;
			// $log.log("longUrl: ", longUrl);

			$http.post('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDwiFXKJy7PwVr_WtiKPlnUgGIM2U_oHYI', {longUrl: longUrl})
			.success(function(data) {
				$scope.shortUrl = data.id;
				// $log.log($scope.shortUrl);
				// $log.log($scope.article.keywords);
			})
			.error(function(data){
				$log.log(data.error);
			});
		}
	}
}