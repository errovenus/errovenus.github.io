function toVaild()
{
	var cc = document.getElementById("cc");
	var bcc = document.getElementById("bcc");
	if(cc.value == "����")
	{
		cc.value="";
	}
	if(bcc.value == "����")
	{
		bcc.value="";
	}
	return true;
}
