var index = 0;
var flag = true;
var start = ["", ".", "..", "...", "....", "....."];

/***���������***/
function variableParams()
{
	window.alert("params's length: " + arguments.length);
}

/***ƴ��***/
function dddd(head, i)
{
	return head + i;
}

/**�����������**/
function rollingdot()
{
	var x=document.getElementById("myHeader");
	if (flag)
	{
		//x.innerHTML=dddd("���濪ʼС��Ϸʵ��", start[index++]);
		x.innerHTML = "<a href='" + "#" + "' style=" + "'text-decoration:underline'" + ">���濪ʼС��Ϸ" + start[index++] + "</a></h1>";
	}
	else
	{
		x.innerHTML = "<a href='" + "#" + "' style=" + "'text-decoration:underline'" + ">���濪ʼС��Ϸ" + start[--index] + "</a></h1>";
	}
				
	if (index >= 6)
	{
		flag = false;
	}
	if (index <= 0)
	{
		flag = true;
	}
}

/**������Ϸ**/
function toGameCenter()
{
	alert("������Ϸ����");
}

/**����ͬһ����������ʡ������ջ: alert("�����һ�����" + v + " " + v2)�Ĳ��������һ��new share(v, v2)Ϊ׼*/
function share(v, v2)
{
	share.prototype.message = function()
	{
		document.write("�����һ�����" + v + " " + v2);
	}
}

/***��ʼ�����������·��Ϸ**/

/*@1 ����������Ϳ��Ʒ������Χ����*/
/*ӳ�䵽��һ��·�ķ�Χ:  ���ұ�(left/760, top/-38) �����(left/0, top/-38)*/
function keycontrol()
{
	document.onkeydown=function(event)
	{
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode==87)			// �� W
		{ 
			var lead = document.getElementById("me");
			var uf = lead.style.top;
			uf = uf.replace("px", "");
			uf = Number(uf)-38;
			///< �ﵽ�ϱ߽�
			if (uf <= -342)
			{
				return;
			}
			lead.style.top = uf + "px";
		}
		else if(e && e.keyCode==65)		// �� A 
		{ 
			var lead = document.getElementById("me");
			var lf = lead.style.left;
			lf = lf.replace("px", "");
			lf = Number(lf)-38;
			///< �ﵽ��߽�
			if (lf <= -38)
			{
				return;
			}
			lead.style.left = lf + "px";
		}            
		else if(e && e.keyCode==68)		// ��D
		{ 
			var lead = document.getElementById("me");
			var rf = lead.style.left;
			rf = rf.replace("px", "");
			rf = Number(rf)+38;
			///< �ﵽ�ұ߽�
			if (rf > 760)
			{
				return;
			}
			lead.style.left = rf + "px";
		}
		else if(e && e.keyCode==83)		// ��S
		{ 
			var lead = document.getElementById("me");
			var df = lead.style.top;
			df = df.replace("px", "");
			df = Number(df)+38;
			///< �ﵽ�±߽�
			if (df >= 70)
			{
				return;
			}
			lead.style.top = df + "px";
		}

		///< �ж��Ƿ�����ײ��i�Ǿ�����ߵ�����-x�ᣬj�Ǿ�����������-y�᡿
		var lead = document.getElementById("me");
		var j = lead.style.top;
		j = j.replace("px", "");
		if (j > -38 || j <= -76)	///< ����������ᷢ����ײ ����Ϊ����ײ�
		{
			return;
		}
		j = Number(-j)/38 - 1;

		var lead = document.getElementById("me");
		var i = lead.style.left;
		i = i.replace("px", "");
		i = Number(i)/38;

		///< �ָ���һ�ε�״̬
		if (-1 != timerCopy[0][0] && -1 != timerCopy[0][1])
		{
			statusCopy[timerCopy[0][0]][timerCopy[0][1]] = false;
		}
		
		statusCopy[j][i] = true;
		timerCopy[0][0] = j;
		timerCopy[0][1] = i;
		if (true == statusS[j][i])
		{
			alert("Oh, ײ����С���ˣ�");
		}
	}; 
}

/*@2 ����ÿ����·�������ϰ���Ķ�ʱ�¼���ͬʱ����һ����־λ���飬�洢ÿ�����������״̬���Ƿ����ϰ��*/
/*�����һ����·�ϰ��������������*/
var road1_id = 0;
var timer = null;
var timerCopy = null;
var statusS = null;
var statusCopy = null;
function init()
{
	timer = new Array();
	for(var i = 0; i < 1; i++)
	{
		timer[i] = new Array(); 
		for(var j = 0; j < 2; j++)	///< 0 - �浵��ǰ��Ŷ�Ӧ��timer  1 - �洢��ǰ��Ŷ�Ӧ����һ���߹����ӵ�״̬
		{
			timer[i][j] = null;
		}
	}

	timerCopy = new Array();
	for(var i = 0; i < 1; i++)
	{
		timerCopy[i] = new Array(); 
		for(var j = 0; j < 2; j++)	///< 0 - �浵��ǰ��Ŷ�Ӧ��timer  1 - �洢��ǰ��Ŷ�Ӧ����һ���߹����ӵ�״̬
		{
			timerCopy[i][j] = -1;
		}
	}

	statusS = new Array();
	for(var i = 0; i < 1; i++)
	{
		statusS[i] = new Array(); 
		for(var j = 0; j < 21; j++)
		{
			statusS[i][j] = false;
		}
	}

	statusCopy = new Array();
	for(var i = 0; i < 1; i++)
	{
		statusCopy[i] = new Array(); 
		for(var j = 0; j < 21; j++)
		{
			statusCopy[i][j] = false;
		}
	}
}

/**һ��·�ϲ���һ����Ŀǰ���ϰ���**/
function randomRoad1()
{
	if (1 == road1_id)
	{
		return;
	}
	var monster1 = document.getElementById("monster" + 1);
	monster1.style.visibility="visible";
	var lf = monster1.style.left;
	lf = lf.replace("px", "");
	timer[road1_id][1] = Number(lf)/38;
	statusS[0][timer[road1_id][1]] = true;

	var mid = road1_id;
	timer[road1_id][0] = setInterval(function(){monstermove(monster1, mid);}, 1000);
	road1_id++;

	//var road1 = document.getElementById("Road1Monster1");
	/*var monster1 = document.createElement("img");
	monster1.setAttribute("id", "monster" + road1_id);
	monster1.setAttribute("src", "carblue.png");
	monster1.setAttribute("width", 38);
	monster1.setAttribute("height", 38);
	monster1.setAttribute("sytle", "position:relative; left:762px; top:38px");
	//monster1.innerHTML = "<img id='monster" + (road1_id) + "' src='" + "carblue.png" + "' height = 38 width=38 style='" + "position:relative; left:762px; top:38px;'/>";
	road1.appendChild(monster1);*/
	//addElementDiv("Road1Monster1", road1_id);
	
	//timer[road1_id][1] = monster1;
	//timer[road1_id][0] = setInterval(function(){monstermove(road1, 0);}, 1000);
	//road1_id++;
	//<img id="Road1Monster1" height="38" width="38" style="position:relative; left:762px; top:38px ; visibility:hidden" />
	//road1.src="carblue.png";
	//road1.style.visibility="visible";
}

/***�ƶ��ϰ���*/
function monstermove(monster, timerid)
{
	var lf = monster.style.left;
	lf = lf.replace("px", "");
	lf = Number(lf)-38;
	///< �ﵽ��߽�
	if (lf <= -38)
	{
		///< �ָ���һ���߹���·״̬
		statusS[0][timer[timerid][1]] = false;

		monster.style.visibility="hidden";
		clearInterval(timer[timerid][0]);
		timer[timerid][0] = null;
		return;
	}

	///< �ָ���һ���߹���·״̬
	statusS[0][timer[timerid][1]] = false;
	monster.style.left = lf + "px";
	///< �ж��Ƿ���ײ��С��[me]
	if (true == statusCopy[0][lf/38])
	{
		alert("Oh, С��ѹ�����ˣ�");
	}
	///< ���õ�ǰ�߹���·��״̬�������ϴλָ�
	timer[timerid][1] = lf/38;
	statusS[0][timer[timerid][1]] = true;
}
			