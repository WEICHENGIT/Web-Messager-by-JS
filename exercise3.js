
function showdata()
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://perso.telecom-paristech.fr/~cwei/slides.json");
	xhr.onload = function() {
		var data=JSON.parse(xhr.responseText);
		var div = document.getElementById("MAIN");
		var box =document.createElement("iframe");
		box.width=1100; box.height=562;
		var i=0;

		var para = document.createElement("p");
			para.textContent=data.slides[i].time + " "+ data.slides[i].url;
			document.getElementById("textarea").appendChild(para);
			box.src=data.slides[i].url;
			div.appendChild(box);
			i=i+1;
			console.log(i);

		var change =function(){
			var para = document.createElement("p");
			para.textContent=data.slides[i].time + "s "+ data.slides[i].url;
			document.getElementById("textarea").appendChild(para);
			box.src=data.slides[i].url;
			div.appendChild(box);
			i=i+1;
			console.log(i);
			if (i==6)
			{clearInterval(loop);}
			}
		var loop=setInterval(change,15000); //此处attention：http://www.cnblogs.com/fingerdancing/archive/2013/04/21/setIntervalClosure.html



		//http://www.runoob.com/js/js-timing.html js计时事件 (data.slides[i].time-data.slides[i-1].time)
	}
	xhr.send();
}

var c=0;
var t;
function timedCount()
{
document.getElementById('timing').value=c+"s";
c=c+1;
t=setTimeout("timedCount()",1000);
}
