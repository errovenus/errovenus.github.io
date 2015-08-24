function goHome(obj)
{
	var rd = document.getElementById("resumeDiv");
	var hd = document.getElementById("homeDIv");
	if ("meIg" == obj.id)
	{
		hd.style.display="none";
		rd.style.display='block'
	}
	else if ("homeA" == obj.id)
	{
		rd.style.display="none";
		hd.style.display='block'
	}
}