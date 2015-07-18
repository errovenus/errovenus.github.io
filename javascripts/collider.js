var index = 0;
var flag = true;
var start = ["", ".", "..", "...", "....", "....."];

/***多参数传递***/
function variableParams()
{
	window.alert("params's length: " + arguments.length);
}

/***拼接***/
function dddd(head, i)
{
	return head + i;
}

/**正反向跑马灯**/
function rollingdot()
{
	var x=document.getElementById("myHeader");
	if (flag)
	{
		//x.innerHTML=dddd("下面开始小游戏实现", start[index++]);
		x.innerHTML = "<a href='" + "#" + "' style=" + "'text-decoration:underline'" + ">下面开始小游戏" + start[index++] + "</a></h1>";
	}
	else
	{
		x.innerHTML = "<a href='" + "#" + "' style=" + "'text-decoration:underline'" + ">下面开始小游戏" + start[--index] + "</a></h1>";
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

/**进入游戏**/
function toGameCenter()
{
	alert("进入游戏中心");
}

/**共享同一个函数、节省函数堆栈: alert("大家用一个好嘛！" + v + " " + v2)的参数以最后一个new share(v, v2)为准*/
function share(v, v2)
{
	share.prototype.message = function()
	{
		document.write("大家用一个好嘛！" + v + " " + v2);
	}
}

/***开始制作天天过马路游戏**/

/*@1 制作方向键和控制方向键范围区域*/
/*映射到第一条路的范围:  最右边(left/760, top/-38) 最左边(left/0, top/-38)*/
function keycontrol()
{
	document.onkeydown=function(event)
	{
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode==87)			// 按 W
		{ 
			var lead = document.getElementById("me");
			var uf = lead.style.top;
			uf = uf.replace("px", "");
			uf = Number(uf)-38;
			///< 达到上边界
			if (uf <= -342)
			{
				return;
			}
			lead.style.top = uf + "px";
		}
		else if(e && e.keyCode==65)		// 按 A 
		{ 
			var lead = document.getElementById("me");
			var lf = lead.style.left;
			lf = lf.replace("px", "");
			lf = Number(lf)-38;
			///< 达到左边界
			if (lf <= -38)
			{
				return;
			}
			lead.style.left = lf + "px";
		}            
		else if(e && e.keyCode==68)		// 按D
		{ 
			var lead = document.getElementById("me");
			var rf = lead.style.left;
			rf = rf.replace("px", "");
			rf = Number(rf)+38;
			///< 达到右边界
			if (rf > 760)
			{
				return;
			}
			lead.style.left = rf + "px";
		}
		else if(e && e.keyCode==83)		// 按S
		{ 
			var lead = document.getElementById("me");
			var df = lead.style.top;
			df = df.replace("px", "");
			df = Number(df)+38;
			///< 达到下边界
			if (df >= 70)
			{
				return;
			}
			lead.style.top = df + "px";
		}

		///< 判断是否发生碰撞【i是距离左边的坐标-x轴，j是距离底面的坐标-y轴】
		var lead = document.getElementById("me");
		var j = lead.style.top;
		j = j.replace("px", "");
		if (j > -38 || j <= -76)	///< 这种情况不会发生碰撞 ，因为在最底层
		{
			return;
		}
		j = Number(-j)/38 - 1;

		var lead = document.getElementById("me");
		var i = lead.style.left;
		i = i.replace("px", "");
		i = Number(i)/38;

		///< 恢复上一次的状态
		if (-1 != timerCopy[0][0] && -1 != timerCopy[0][1])
		{
			statusCopy[timerCopy[0][0]][timerCopy[0][1]] = false;
		}
		
		statusCopy[j][i] = true;
		timerCopy[0][0] = j;
		timerCopy[0][1] = i;
		if (true == statusS[j][i])
		{
			alert("Oh, 撞上了小车了！");
		}
	}; 
}

/*@2 构造每条马路产生的障碍物的定时事件、同时构造一个标志位数组，存储每个方块区域的状态【是否有障碍物】*/
/*构造第一条马路障碍物【从下往上数】*/
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
		for(var j = 0; j < 2; j++)	///< 0 - 存档当前编号对应的timer  1 - 存储当前编号对应的上一次走过格子的状态
		{
			timer[i][j] = null;
		}
	}

	timerCopy = new Array();
	for(var i = 0; i < 1; i++)
	{
		timerCopy[i] = new Array(); 
		for(var j = 0; j < 2; j++)	///< 0 - 存档当前编号对应的timer  1 - 存储当前编号对应的上一次走过格子的状态
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

/**一号路上产生一个【目前】障碍物**/
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

/***移动障碍物*/
function monstermove(monster, timerid)
{
	var lf = monster.style.left;
	lf = lf.replace("px", "");
	lf = Number(lf)-38;
	///< 达到左边界
	if (lf <= -38)
	{
		///< 恢复上一次走过的路状态
		statusS[0][timer[timerid][1]] = false;

		monster.style.visibility="hidden";
		clearInterval(timer[timerid][0]);
		timer[timerid][0] = null;
		return;
	}

	///< 恢复上一次走过的路状态
	statusS[0][timer[timerid][1]] = false;
	monster.style.left = lf + "px";
	///< 判断是否碰撞上小鸡[me]
	if (true == statusCopy[0][lf/38])
	{
		alert("Oh, 小车压扁你了！");
	}
	///< 设置当前走过的路的状态，便于上次恢复
	timer[timerid][1] = lf/38;
	statusS[0][timer[timerid][1]] = true;
}
			