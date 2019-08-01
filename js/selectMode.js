handModeTab.onclick = selectHandMode;
autoModeTab.onclick = selectAutoMode;
function selectHandMode()
{
	handModeInput.classList.add('select');
	autoModeInput.classList.remove('select');	
	handModeOutput.classList.add('select');
	autoModeOutput.classList.remove('select');
	tabSelectLine.classList.remove('move');
}
function selectAutoMode()
{
	handModeInput.classList.remove('select');
	autoModeInput.classList.add('select');
	handModeOutput.classList.remove('select');
	autoModeOutput.classList.add('select');
	tabSelectLine.classList.add('move');
}