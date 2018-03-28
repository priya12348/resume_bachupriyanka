
function loadjson(file,callback)
 {
   var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("applcation/json");
   xhr.open("GET",file,true)//true is representing asynchronous operation
   xhr.onreadystatechange=function () {
     if(xhr.readyState ===4 && xhr.status =="200") {
     callback(xhr.responseText);
   }
}
xhr.send();
}
//function calling
loadjson("data.json",function (text) {
  let data=JSON.parse(text);
  console.log(data);
  basics(data.left);
})

// for main div calling

var main=document.getElementById('main');

//element creation
var left=document.createElement("div");
//add class name to element
left.classList.add("left");
//add id to  elemnt
left.setAttribute("id","left")
//add text to Element

left.textContent="Profile details:"
left.appendChild(document.createElement("HR"));
//appending to main div
main.appendChild(left);

function basics(leftside){
  var image=document.createElement("img");
  image.src=leftside.photo;
  left.appendChild(image);
  var name=document.createElement("h1");
  name.textContent=leftside.name;
  left.appendChild(name);
  var email=document.createElement("h2");
email.textContent=leftside.email;
name.appendChild(email);
var ph=document.createElement("p");
ph.textContent=leftside.phone;
email.appendChild(ph);
console.log("left");
}
