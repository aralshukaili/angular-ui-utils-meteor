Package.describe({
	summary: "angular-ui-utils-meteor"
});

Package.on_use(function (api) {
	api.use('ngMeteor', 'client');
	
	// Files to load in Client only.
	api.add_files([
		// Lib Files
		'ui-utils.js',
		'ui-utils-ieshiv.js',
		'ui-utils-meteor.js'
	], 'client');
});
