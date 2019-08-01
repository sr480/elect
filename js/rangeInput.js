var number = levels.getElementsByTagName('span');


rangeInput.oninput = rangeInputFunc;

function rangeInputFunc() {
	rangeInput.style = 'background: linear-gradient(to right, #F44336 0% ' + rangeInput.value * 7.14 + '%, #E0E0E0 ' + rangeInput.value * 7.14 + '% 100%);';
	for (var i = 0; i < number.length; i++) {
		if (rangeInput.value == i) {
			number[i].classList.add('value');
		}
		else {
			number[i].classList.remove('value');
		}
	}


	if (rangeInput.value == 0) {
		sendMessage("<r0>");
	}
	if (rangeInput.value == 1) {
		sendMessage("<r1>");
	}
	if (rangeInput.value == 2) {
		sendMessage("<r2>");
	}
	if (rangeInput.value == 3) {
		sendMessage("<r3>");
	}

	if (rangeInput.value == 4) {
		sendMessage("<r4>");
	}

	if (rangeInput.value == 5) {
		sendMessage("<r5>");
	}

	if (rangeInput.value == 6) {
		sendMessage("<r6>");
	}

	if (rangeInput.value == 7) {
		sendMessage("<r7>");
	}

	if (rangeInput.value == 8) {
		sendMessage("<r8>");
	}

	if (rangeInput.value == 9) {
		sendMessage("<r9>");
	}

	if (rangeInput.value == 10) {
		sendMessage("<r10>");
	}

	if (rangeInput.value == 11) {
		sendMessage("<r11>");
	}

	if (rangeInput.value == 12) {
		sendMessage("<r12>");
	}

	if (rangeInput.value == 13) {
		sendMessage("<r13>");
	}
	if (rangeInput.value == 14) {
		sendMessage("<r14>");
	}
}