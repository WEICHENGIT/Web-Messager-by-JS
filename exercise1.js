function loadDoc()
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://perso.telecom-paristech.fr/~cwei/test.txt");
  xhr.onload = function() {
    var obj = document.createElement("div");
    obj.textContent=this.responseText;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(obj);
  }
  xhr.send();
}

function loadDoc2()
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://perso.telecom-paristech.fr/~cwei/test.txt");
  xhr.onload = function() {
    var textarray=this.responseText.split('\n');
    var colorarray=["red" ,"blue","green" ,"orange" ,"yellow"];
    for (var i=0;i<textarray.length;i++)
    {
      var obj = document.createElement("p");
      obj.textContent=textarray[i];
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(obj);

      obj.style.color = colorarray[i];
    }
  }
  xhr.send();
}
