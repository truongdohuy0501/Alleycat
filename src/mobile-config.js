(function () {
	const ua = navigator.userAgent;
	const isIOS =
		/iPad|iPhone|iPod/.test(ua) ||
		(navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
	const isAndroid = /Android/i.test(ua);
	const isMobile = isIOS || isAndroid;
	const isPhone =
		/iPhone|Android.*Mobile/i.test(ua) ||
		(isMobile && Math.min(window.screen.width, window.screen.height) < 768);

	window.MobileConfig = {
		isIOS,
		isAndroid,
		isMobile,
		isPhone,
		isTablet: isMobile && !isPhone,
		useLightLoading: isMobile,
		rendererType: isPhone ? "CANVAS" : "AUTO",
		gameWidth: isPhone ? 800 : 1031,
		gameHeight: isPhone ? 450 : 580,
		targetFps: isPhone ? 30 : 60,
	};
})();
