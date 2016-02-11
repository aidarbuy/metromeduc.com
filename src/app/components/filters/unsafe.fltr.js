export function UnsafeFilter($sce) {
	'ngInject';

	function unsafe (val) {
		return $sce.trustAsHtml(val);
	}

	return unsafe;
}