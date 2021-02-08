
	 var allUsers = [];
	 var loginUser = sessionStorage.getItem ("user");
	 var storedUsers = JSON.parse(localStorage.users);
	 var data;
	 
      var click=0; 
	var outOfTime = false;
	


	
function play(){
if(!outOfTime){
click+=1; 
document.getElementById("score").innerHTML = click;
}


//var allUsers = JSON.parse(localStorage.getItem("Users"));

}
var time = 60; //time in seconds
var timer = setInterval(

function(){
 time--;
 document.getElementById("timer").innerHTML = time + "s";
	document.getElementById("user").innerHTML = loginUser;
	
 if(time==0){
   clearInterval(timer);
    
   outOfTime = true;
   
   for (var i=0; i < storedUsers.length; i++) {
	if(loginUser == storedUsers[i].name){
		storedUsers[i].score = click;
		break;
	}
	}
	localStorage.setItem('users', JSON.stringify(storedUsers));
	
	text = "";
	
	for (i = 0; i < storedUsers.length; i++) { //displays multiple announcements
    text += "<tr>";
    text += "<td>" + storedUsers[i].name+ "</td>";//displaysname
    text += "<td>" + storedUsers[i].score+ "</td></tr>";//displaysscore
	}
	
	document.getElementById("cool").innerHTML = text;
	
 }
}, 1000);


