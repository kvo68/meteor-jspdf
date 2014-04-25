Package.describe({
	summary: "jsPDF packaged for Meteor"
});

Package.on_use(function (api){
	api.add_files('dist/jspdf.source.js', 'client');
	api.add_files('export-jspdf.js', 'client');
	api.add_files('jspdf.plugin.png_support.js', 'client');

	api.export && api.export('jsPDF');
});
