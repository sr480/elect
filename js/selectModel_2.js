var flag_2 = 0;

buttonText_2.onclick = openInput_2;
buttonPointer_2.onclick = closeInput_2;
		
model1_2.addEventListener("click", closeInput_2);
model2_2.addEventListener("click", closeInput_2);
model3_2.addEventListener("click", closeInput_2);
model4_2.addEventListener("click", closeInput_2);
		
model1_2.addEventListener("click", changeTxt1_2);
model2_2.addEventListener("click", changeTxt2_2);
model3_2.addEventListener("click", changeTxt3_2);
model4_2.addEventListener("click", changeTxt4_2);


function changeTxt1_2()
{
	buttonText_2.innerHTML = model1_2.innerHTML;
}
function changeTxt2_2()
{
	buttonText_2.innerHTML = model2_2.innerHTML;
}
function changeTxt3_2()
{
	buttonText_2.innerHTML = model3_2.innerHTML;
}
function changeTxt4_2()
{
	buttonText_2.innerHTML = model4_2.innerHTML;
}

function openInput_2()
{
	if(flag_2 == 0)
	{
		mainButton_2.classList.add('open');
		modelSelectContainer_2.classList.add('open');
		modelSelectContainer_2.classList.remove('close');
		programSelectContainer.style = 'z-index: 0;';
		modelSelectContainer_2.style = 'z-index: 2;';
		mainButton_2.style = 'z-index: 3;';
		mainButton_p.style = 'z-index: 1;';
		flag_2 = 1;
	}
}

function closeInput_2()
{
	if(flag_2 == 1)
	{
		mainButton_2.classList.remove('open');
		modelSelectContainer_2.classList.remove('open');
		modelSelectContainer_2.classList.add('close');
		programSelectContainer.style = 'z-index: 0;';
		modelSelectContainer_2.style = 'z-index: 2;';
		mainButton_2.style = 'z-index: 3;';
		mainButton_p.style = 'z-index: 1;';
		flag_2 = 0;
	}
	else
	{
		openInput_2()
	}
}			