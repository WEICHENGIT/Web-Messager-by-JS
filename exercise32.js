
var c=0;
var t;
function timedCount()
{
document.getElementById('timing').value=c+"s";
c=c+1;
t=setTimeout("timedCount()",1000);
}

	var xhr1 = new XMLHttpRequest();
	xhr1.open("GET", "http://perso.telecom-paristech.fr/~cwei/slides.json");
	var pausef=false;
	var i=0;

	xhr1.onload = function() {
		var data=JSON.parse(xhr1.responseText);
		var div = document.getElementById("MAIN");
		var box =document.createElement("iframe");
		box.width=1100; box.height=562;

		var para = document.createElement("p");
		para.textContent=data.slides[i].time + "s "+ data.slides[i].url;
		document.getElementById("textarea").appendChild(para);
		box.src=data.slides[i].url;
		div.appendChild(box);
		i=i+1;
		console.log(i);

			var change =function(){
				if (pausef)
				{clearInterval(playing);
				console.log("The slides have been paused.")
				document.getElementById('info').textContent="The slides have been paused.";}
				else{
			var para = document.createElement("p");
			para.textContent=data.slides[i].time + "s "+ data.slides[i].url;
			document.getElementById("textarea").appendChild(para);
			box.src=data.slides[i].url;
			div.appendChild(box);
			i=i+1;
			console.log(i);
			if (i==6)
			{clearInterval(playing);
			console.log("This is the end of the slides.");
			document.getElementById('info').textContent="This is the end of the presentation.";}
			}
		}
			var playing=setInterval(change,15000); //此处attention：http://www.cnblogs.com/fingerdancing/archive/2013/04/21/setIntervalClosure.html
		//http://www.runoob.com/js/js-timing.html js计时事件 (data.slides[i].time-data.slides[i-1].time)
	}
	xhr1.send();


	function pause()
	{pausef=true;}

	function Continue()
	{
		if(pausef)
		{document.getElementById('info').textContent="The presentation will continue in 15s.";}
		pausef=false;
		var xhr2 = new XMLHttpRequest();
		xhr2.open("GET", "http://perso.telecom-paristech.fr/~cwei/slides.json");
		xhr2.onload = function() {
			var data=JSON.parse(xhr2.responseText);
			var div = document.getElementById("MAIN");
			var box =document.getElementsByTagName("iframe")[0];
				var change =function(){
					if (pausef)
					{clearInterval(playing);
					console.log("The slides have been paused.");
					document.getElementById('info').textContent="The slides have been paused.";
					setInterval()}
					else{
				var para = document.createElement("p");
				para.textContent=data.slides[i].time + "s "+ data.slides[i].url;
				document.getElementById("textarea").appendChild(para);
				box.src=data.slides[i].url;
				div.appendChild(box);
				i=i+1;
				console.log(i);
				if (i==6)
				{clearInterval(playing);
				console.log("This is the end of the slides.");
			document.getElementById('info').textContent="This is the end of the presentation.";}
				}
			}
				var playing=setInterval(change,15000);
		}
		xhr2.send();
}

function next()
{
	document.getElementById('info').textContent="Alter to next slide now.";
	var xhr3 = new XMLHttpRequest();
	xhr3.open("GET", "http://perso.telecom-paristech.fr/~cwei/slides.json");
	xhr3.onload = function() {
		var data=JSON.parse(xhr3.responseText);
		var div = document.getElementById("MAIN");
		var box =document.getElementsByTagName("iframe")[0];

		var para = document.createElement("p");
		para.textContent=data.slides[i].time + "s "+ data.slides[i].url;
		document.getElementById("textarea").appendChild(para);
		box.src=data.slides[i].url;
		div.appendChild(box);
		i=i+1;
		console.log(i);
	}
		xhr3.send();
		Continue();
}

function previous()
{
		
		i=i-2;
		document.getElementById('info').textContent="Alter to previous slide now.";
		var xhr4 = new XMLHttpRequest();
		xhr4.open("GET", "http://perso.telecom-paristech.fr/~cwei/slides.json");
		xhr4.onload = function() {
			var data=JSON.parse(xhr4.responseText);
			var div = document.getElementById("MAIN");
			var box =document.getElementsByTagName("iframe")[0];

			var para = document.createElement("p");
			para.textContent=data.slides[i].time + "s "+ data.slides[i].url;
			document.getElementById("textarea").appendChild(para);
			box.src=data.slides[i].url;
			div.appendChild(box);
			i=i+1;
			console.log(i);
		}
			xhr4.send();
			Continue();
}
