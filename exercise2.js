

function showhistory(){

	document.getElementsByTagName("input")[0].value='';

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://perso.telecom-paristech.fr/~cwei/text.html");
	xhr.onload = function() {
	//var textarray=this.responseText.replace('</a>','');
	var textarray=this.responseText.split('<br />');
    //var colorarray=["red" ,"blue","green" ,"orange" ,"yellow"];
    for (var i=0;i<textarray.length;i++)
    {
      var obj = document.createElement("p");
      obj.textContent=textarray[i];
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(obj);

      //obj.style.color = colorarray[(i%6)];
    }
  }
  xhr.send();
}
