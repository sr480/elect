var flag_p = 0;

buttonText_p.onclick = openInput_p;
buttonPointer_p.onclick = closeInput_p;
		
program1.addEventListener("click", closeInput_p);
program2.addEventListener("click", closeInput_p);
program3.addEventListener("click", closeInput_p);
program4.addEventListener("click", closeInput_p);
		
program1.addEventListener("click", changeTxt1_p);
program2.addEventListener("click", changeTxt2_p);
program3.addEventListener("click", changeTxt3_p);
program4.addEventListener("click", changeTxt4_p);


function changeTxt1_p()
{
	buttonText_p.innerHTML = program1.innerHTML;
}
function changeTxt2_p()
{
	buttonText_p.innerHTML = program2.innerHTML;
}
function changeTxt3_p()
{
	buttonText_p.innerHTML = program3.innerHTML;
}
function changeTxt4_p()
{
	buttonText_p.innerHTML = program4.innerHTML;
}

function openInput_p()
{
	if(flag_p == 0)
	{
		mainButton_p.classList.add('open');
		programSelectContainer.classList.add('open');
		programSelectContainer.classList.remove('close');
		programSelectContainer.style = 'z-index: 2;';
		modelSelectContainer_2.style = 'z-index: 0;';
		mainButton_2.style = 'z-index: 1;';
		mainButton_p.style = 'z-index: 3;';
		flag_p = 1;
	}
}

function closeInput_p()
{
	if(flag_p == 1)
	{
		mainButton_p.classList.remove('open');
		programSelectContainer.classList.remove('open');
		programSelectContainer.classList.add('close');
		programSelectContainer.style = 'z-index: 2;';
		modelSelectContainer_2.style = 'z-index: 0;';
		mainButton_2.style = 'z-index: 1;';
		mainButton_p.style = 'z-index: 3;';
		flag_p = 0;
	}
	else
	{
		openInput_p()
	}
}			