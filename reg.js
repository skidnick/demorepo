// storing input from register-form

function store() {
    var usrName = document.getElementById('uName').value;
    var usrPw = document.getElementById('uPw').value;
	var firstName = document.getElementById('fName').value;
    var lastName = document.getElementById('lName').value;
	var e = false

if (usrName == "" || usrPw == "" || firstName == "" || lastName == "")
{
alert('\nERROR\nYou must enter ALL Details.\n');
window.status=('Missing data or Invalid. Check spelling and Ensure Names are in Correct Case.')
}
else
{
    let stored_users = JSON.parse(localStorage.getItem('users'));
    if(stored_users) {
	
	 for (let u = 0; u < stored_users.length; u++){
            if (usrName == stored_users[u].name)  {
                alert('The user name already exists' + usrName);
				e = true
                //return location.replace("./main.html");
				
				
             }
        }
		
		if (e == false) {
	
        stored_users.push({name: usrName, password: usrPw, first: firstName, last: lastName, score: ''});
        localStorage.setItem('users', JSON.stringify(stored_users));
		alert('The user has been created' + usrName);
		}
		
    } else {
        localStorage.setItem('users', JSON.stringify([{name: usrName, password: usrPw, first: firstName, last: lastName, score: ''}]));
    }
	
	e = false;
	window.status=(' Verifying: ' + iName +' Please wait........');
}
    
}
