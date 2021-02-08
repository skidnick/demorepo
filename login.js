
// check if stored data from register-form is equal to entered data in the login-form

function check() {
    var usrName = document.getElementById('userName').value;
    var usrPw = document.getElementById('userPw').value;
	var usrLogin;
	var c = false
	
	if (usrName == "" || usrPw == "")
	{
		alert('\nERROR\nYou must enter ALL Details.\n');
		window.status=('Missing data or Invalid. Check spelling and Ensure Names are in Correct Case.')
	}
	else
	{

    let stored_users = JSON.parse(localStorage.getItem('users'))
    if(stored_users) {
        for (let u = 0; u < stored_users.length; u++){
            if (usrName == stored_users[u].name && usrPw == stored_users[u].password) {
                alert('You are logged in ' + usrName);
                //return location.replace("./main.html");
				sessionStorage.setItem ('user', usrName);
				window.open('main.html', '_self');
				c = true;
				break;
				
             }
        }
		
		if (c == false) {
		
		 alert('Access denied. Valid username and password is required.');
		 
		}
     }else {
	 
	 alert('Access denied. Valid username and password is required.');
        
		localStorage.setItem('users', '[]');
		
    }
	
	c = false;
	window.status=(' Verifying: ' + iName +' Please wait........');
}
    
}

	