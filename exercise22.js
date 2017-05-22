
function showhistory()
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://perso.telecom-paristech.fr/~cwei/text.html");
	xhr.onload = function() {
	//var textarray=this.text();
	var textarray=this.responseText.split('<br />');
	var colorarray=["white" ,"black","green" ,"orange" ,"yellow"];
	var userarray=new Array;

	for (var i=textarray.length-10;i<textarray.length;i++)
	{
    var hisdiv=document.getElementsByName("history")[0];
    var leftblock=document.createElement('div');
    leftblock.className="item center-block";
    var profile=document.createElement('div');
    profile.className="profile-holder";
    var image=document.createElement('img');
    image.className="profile-image";
    image.alt="profile";

    var quote=document.createElement('div');
    profile.className="quote-holder";
    var block=document.createElement('blockquote');
    block.className="quote";
    var para=document.createElement('p');
    var user=document.createElement('div');
    user.className="quote-source";
    var ip=document.createElement('span');
    ip.className="name";

      para.textContent=textarray[i].split(">")[2].split("-")[2];
			var username=textarray[i].split(">")[1].split("<")[0];
			ip.textContent=username+"   -   "+textarray[i].split(">")[2].split("-")[1];
			if (userarray.indexOf(username)==-1)
			{
				userarray=userarray.concat(username);
				para.style.color = colorarray[userarray.length-1];
				image.src="assets/images/profile-"+userarray.length+".png";
			}
			else
			{
				para.style.color = colorarray[userarray.indexOf(username)];
				image.src="assets/images/profile-"+(userarray.indexOf(username)+1)+".png";
			}
      user.appendChild(ip);
      block.appendChild(user);
      block.appendChild(para);
      quote.appendChild(block);
      profile.appendChild(image);
      leftblock.appendChild(profile);
      leftblock.appendChild(quote);
      hisdiv.appendChild(leftblock);
			console.log(i);
    }
	}
	xhr.send();
	document.getElementsByTagName("input")[0].value='';
  }

	// document.getElementById('testimonials').style="display: block";
