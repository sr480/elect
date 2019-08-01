
var flag = new Boolean(false);
var isCurrentSelected = new Boolean(false);
var isDirectCurrent = new Boolean;

buttonText.onclick = openInput;
buttonPointer.onclick = closeInput;
		
model1.addEventListener("click", closeInput);
model2.addEventListener("click", closeInput); 
		
model1.addEventListener("click", changeTxt1);
model2.addEventListener("click", changeTxt2);


function changeTxt1()
{
	buttonText.innerHTML = model1.innerHTML;
	isDirectCurrent = true;
	isCurrentSelected = true;

	buttonPC.onclick = pressPC;
	buttonMC.onclick = pressMC;
	buttonPC.classList.remove('pressed');
	buttonMC.classList.remove('pressed');
	indicatorMC.classList.remove('on');
	indicatorPC.classList.remove('on');
	sendMessage("<a0>");
	sendMessage("<b0>");
	sendMessage("<c0>");
	sendMessage("<d0>");
}
function changeTxt2()
{
	buttonText.innerHTML = model2.innerHTML;
	isDirectCurrent = false;
	isCurrentSelected = true;

	buttonPC.onclick = pressPC;
	buttonMC.onclick = pressMC;
	buttonPC.classList.remove('pressed');
	buttonMC.classList.remove('pressed');
	indicatorMC.classList.remove('on');
	indicatorPC.classList.remove('on');
	sendMessage("<a0>");
	sendMessage("<b0>");
	sendMessage("<c0>");
	sendMessage("<d0>");
}


function openInput()
{
	if(flag == false)
	{
		mainButton.classList.add('open');
		modelSelectContainer.classList.add('open');
		modelSelectContainer.classList.remove('close');
		flag = true;
	}
}

function closeInput()
{
	if(flag == true){
		mainButton.classList.remove('open');
		modelSelectContainer.classList.remove('open');
		modelSelectContainer.classList.add('close');
		flag = false;
	}
	else{
		openInput()
	}
}			









function pressPC() {
	buttonPC.classList.add('pressed');
	buttonMC.classList.remove('pressed');

	indicatorPC.classList.add('on');
	indicatorMC.classList.remove('on');


	if (isDirectCurrent == true){
		sendMessage("<a1>");
		sendMessage("<b0>");
	}
	else{
		sendMessage("<c1>");
		sendMessage("<d0>");
	}
}

function pressMC() {
	buttonPC.classList.remove('pressed');
	buttonMC.classList.add('pressed');

	indicatorPC.classList.remove('on');
	indicatorMC.classList.add('on');

	if (isDirectCurrent == true){
		sendMessage("<b1>");
		sendMessage("<a0>");
	}
	else{
		sendMessage("<d1>");
		sendMessage("<c0>");
	}
}


