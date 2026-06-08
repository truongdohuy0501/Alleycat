(function () {
	const isTouchDevice =
		"ontouchstart" in window ||
		navigator.maxTouchPoints > 0 ||
		/iPad|iPhone|iPod|Android/i.test(navigator.userAgent);

	if (!isTouchDevice) {
		return;
	}

	window.TouchInput = {
		enabled: true,
		left: false,
		right: false,
		up: false,
		b: false,
	};

	const root = document.createElement("div");
	root.id = "touch-controls";
	root.innerHTML = `
		<div class="touch-dpad">
			<button type="button" class="touch-btn touch-btn-left" aria-label="Move left">◀</button>
			<button type="button" class="touch-btn touch-btn-up" aria-label="Jump">▲</button>
			<button type="button" class="touch-btn touch-btn-right" aria-label="Move right">▶</button>
		</div>
		<button type="button" class="touch-btn touch-btn-b" aria-label="Action">B</button>
	`;

	document.body.appendChild(root);

	const bindings = [
		[".touch-btn-left", "left"],
		[".touch-btn-right", "right"],
		[".touch-btn-up", "up"],
		[".touch-btn-b", "b"],
	];

	function bindButton(selector, key) {
		const button = root.querySelector(selector);

		const press = (event) => {
			event.preventDefault();
			window.TouchInput[key] = true;
			unlockAudio();
		};

		const release = (event) => {
			event.preventDefault();
			window.TouchInput[key] = false;
		};

		button.addEventListener("touchstart", press, { passive: false });
		button.addEventListener("touchend", release, { passive: false });
		button.addEventListener("touchcancel", release, { passive: false });
		button.addEventListener("mousedown", press);
		button.addEventListener("mouseup", release);
		button.addEventListener("mouseleave", release);
	}

	bindings.forEach(([selector, key]) => bindButton(selector, key));

	function unlockAudio() {
		const game = window.game;
		if (!game || !game.sound || !game.sound.context) {
			return;
		}

		if (game.sound.context.state === "suspended") {
			game.sound.context.resume();
		}
	}

	window.initTouchControls = function (game) {
		window.game = game;

		game.events.on("step", () => {
			const activeScenes = game.scene.getScenes(true);
			const currentScene = activeScenes[activeScenes.length - 1];
			const sceneKey = currentScene ? currentScene.scene.key : "";
			const hideControls =
				sceneKey === "Boot" ||
				sceneKey === "Preload" ||
				sceneKey === "StartMenuScreen";

			root.style.display = hideControls ? "none" : "flex";

			if (!window.TouchInput.enabled) {
				return;
			}

			for (const scene of activeScenes) {
				if ("BDown" in scene) {
					scene.BDown = window.TouchInput.b;
				}
			}
		});
	};
})();
