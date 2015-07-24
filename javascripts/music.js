var bPlay = true;

function playControl()
{
	if (bPlay)
	{
		var ms = document.getElementById("music_status");
		ms.innerHTML = "PAUSE <strong>MUSIC</strong>";
		bPlay = false;
	}
	else
	{
		var ms = document.getElementById("music_status");
		ms.innerHTML = "PLAY <strong>MUSIC</strong>";
		bPlay = true;
	}
}