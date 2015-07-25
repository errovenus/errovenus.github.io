var bPlay = true;

function playControl()
{
	var ms = document.getElementById("music_status");
	var bm = document.getElementById("bgMusic");

	if (bPlay)
	{
		ms.innerHTML = "PLAY <strong>MUSIC</strong>";
		bm.pause();	///< ÔÝÍ£
		bPlay = false;
	}
	else
	{
		var ms = document.getElementById("music_status");
		ms.innerHTML = "PAUSE <strong>MUSIC</strong>";
		bm.play(); ///< ²¥·Å
		bPlay = true;
	}
}