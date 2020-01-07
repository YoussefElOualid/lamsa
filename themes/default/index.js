exports.install = function() {
	MERGE('/default/js/default.js', '=default/public/js/ui.js', '=default/public/js/default.js');

	MERGE('/default/css/default.css', '=default/public/css/ui.css', '=default/public/css/default.css');

	MERGE('/default/css/default.css', '=default/public/css/bootstrap.min.css.css', '=default/public/css/default.css');

	MERGE('/default/css/default.css', '=default/public/css/slick.css', '=default/public/css/default.css');

	MERGE('/default/css/default.css', '=default/public/css/slick-theme.css', '=default/public/css/default.css');


	MERGE('/default/css/default.css', '=default/public/css/nouislider.min.css', '=default/public/css/default.css');

	MERGE('/default/css/default.css', '=default/public/css/font-awesome.min.css', '=default/public/css/default.css');

	MERGE('/default/css/default.css', '=default/public/css/style.css', '=default/public/css/default.css');


	LOCALIZE('/default/widgets/*.html');
};