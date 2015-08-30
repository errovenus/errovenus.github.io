function toVaild()
{
	var cc = document.getElementById("cc");
	var bcc = document.getElementById("bcc");
	if(cc.value == "密送")
	{
		cc.value="";
	}
	if(bcc.value == "抄送")
	{
		bcc.value="";
	}
	return true;
}
