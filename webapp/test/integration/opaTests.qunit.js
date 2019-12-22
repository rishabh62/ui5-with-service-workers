/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ui5/service/worker/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});