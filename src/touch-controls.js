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
		moveX: 0,
		jump: false,
		b: false,
	};

	const root = document.createElement("div");
	root.id = "touch-controls";
	root.innerHTML = `
		<div class="touch-joystick" aria-label="Move">
			<div class="joystick-base">
				<div class="joystick-thumb"></div>
			</div>
		</div>
		<div class="touch-actions">
			<button type="button" class="touch-btn touch-btn-jump" aria-label="Jump">▲</button>
			<button type="button" class="touch-btn touch-btn-action" aria-label="Action">B</button>
		</div>
	`;

	document.body.appendChild(root);

	const joystick = root.querySelector(".touch-joystick");
	const joystickBase = root.querySelector(".joystick-base");
	const joystickThumb = root.querySelector(".joystick-thumb");
	const DEADZONE = 0.15;
	let activePointerId = null;
	let joystickRadius = 50;

	function unlockAudio() {
		const game = window.game;
		if (!game || !game.sound || !game.sound.context) {
			return;
		}

		if (game.sound.context.state === "suspended") {
			game.sound.context.resume();
		}
	}

	function updateJoystickRadius() {
		joystickRadius = joystickBase.offsetWidth * 0.35;
	}

	function resetJoystick() {
		activePointerId = null;
		window.TouchInput.moveX = 0;
		joystickThumb.style.transform = "translate(-50%, -50%)";
	}

	function setJoystickFromPoint(clientX, clientY) {
		const rect = joystickBase.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		let offsetX = clientX - centerX;
		let offsetY = clientY - centerY;
		const distance = Math.hypot(offsetX, offsetY);

		if (distance > joystickRadius) {
			offsetX = (offsetX / distance) * joystickRadius;
			offsetY = (offsetY / distance) * joystickRadius;
		}

		joystickThumb.style.transform =
			"translate(calc(-50% + " + offsetX + "px), calc(-50% + " + offsetY + "px))";

		const normalizedX = offsetX / joystickRadius;
		window.TouchInput.moveX =
			Math.abs(normalizedX) < DEADZONE ? 0 : normalizedX;
	}

	function onJoystickStart(event) {
		event.preventDefault();
		unlockAudio();
		updateJoystickRadius();
		activePointerId = event.pointerId;
		joystick.setPointerCapture(event.pointerId);
		setJoystickFromPoint(event.clientX, event.clientY);
	}

	function onJoystickMove(event) {
		if (activePointerId !== event.pointerId) {
			return;
		}

		event.preventDefault();
		setJoystickFromPoint(event.clientX, event.clientY);
	}

	function onJoystickEnd(event) {
		if (activePointerId !== event.pointerId) {
			return;
		}

		event.preventDefault();
		resetJoystick();
	}

	joystick.addEventListener("pointerdown", onJoystickStart);
	joystick.addEventListener("pointermove", onJoystickMove);
	joystick.addEventListener("pointerup", onJoystickEnd);
	joystick.addEventListener("pointercancel", onJoystickEnd);

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

		button.addEventListener("pointerdown", press);
		button.addEventListener("pointerup", release);
		button.addEventListener("pointercancel", release);
		button.addEventListener("pointerleave", release);
	}

	bindButton(".touch-btn-jump", "jump");
	bindButton(".touch-btn-action", "b");

	window.addEventListener("resize", updateJoystickRadius);

	window.initTouchControls = function (game) {
		window.game = game;
		updateJoystickRadius();

		game.events.on("step", () => {
			const activeScenes = game.scene.getScenes(true);
			const currentScene = activeScenes[activeScenes.length - 1];
			const sceneKey = currentScene ? currentScene.scene.key : "";
			const hideControls =
				sceneKey === "Boot" ||
				sceneKey === "Preload" ||
				sceneKey === "StartMenuScreen";

			root.style.display = hideControls ? "none" : "block";

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
