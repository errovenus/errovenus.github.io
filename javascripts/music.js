var bPlay = true;

function playControl(obj)
{
	var ms = document.getElementById(obj.id);
	var bm = document.getElementById("bgMusic");

	if (bPlay)
	{
		ms.innerHTML = "PLAY <strong>MUSIC</strong>";
		bm.pause();	///< ��ͣ
		bPlay = false;
	}
	else
	{
		//var ms = document.getElementById(obj.id);
		ms.innerHTML = "PAUSE <strong>MUSIC</strong>";
		bm.play(); ///< ����
		bPlay = true;
	}
}