(function () {
	const ua = navigator.userAgent;
	const isIPad =
		/iPad/.test(ua) ||
		(navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
	const isIPhone = /iPhone|iPod/.test(ua);
	const isAndroidPhone = /Android/i.test(ua) && /Mobile/i.test(ua);
	const isAndroidTablet = /Android/i.test(ua) && !/Mobile/i.test(ua);
	const isPhone = isIPhone || isAndroidPhone;
	const isTablet = isIPad || isAndroidTablet;
	const isMobile = isPhone || isTablet;

	window.MobileConfig = {
		isIOS: isIPad || isIPhone,
		isAndroid: /Android/i.test(ua),
		isIPad,
		isPhone,
		isTablet,
		isMobile,
		useLightLoading: isPhone,
		rendererType: isPhone ? "CANVAS" : "AUTO",
		gameWidth: isPhone ? 800 : 1031,
		gameHeight: isPhone ? 450 : 580,
		targetFps: isPhone ? 30 : 60,
		parallelDownloads: isPhone ? 3 : isTablet ? 10 : 32,
		assetBatchSize: isPhone ? 50 : 80,
	};
})();
