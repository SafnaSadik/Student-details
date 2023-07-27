function validateMobile(nums)
{
	error=document.getElementById("errormob");
	var mobilenum = /[0-9]/g;
	if(nums.value.match(mobilenum)&&nums.value.length==10)
	{
		error.innerHTML = "";
		return true;
	}
	else
	{
		error.innerHTML = "Invalid Mobile Number!";
		return false;
	}
}    

function validateEmail(emailId)
{
	error=document.getElementById("error");
	var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(emailId.value.match(mailformat))
	{
		error.innerHTML = "";
		return true;
	}
	else
	{
		error.innerHTML = "Invalid Email Address !";
		return false;
	}
} 

function validateEmailLogin(emailId)
{
	error=document.getElementById("error");
	var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(!emailId.value.match(mailformat))
	{
		emailId.style.border = "2px solid red";
		error.innerHTML = "Invalid Email Address !";
		return false;
	}
	else
	{
		emailId.style.border = "2px solid green";
		error.innerHTML = "";
		return true;
	}
}

function borderred(bred)
{
	if(bred.value==="")
	{
		bred.style.border = "2px solid red";
		error=document.getElementById("errorpass");
		error.innerHTML = "Invalid Password !";
		
	}
	else
	{
		bred.style.border = "2px solid green";
		error.innerHTML = "";
	}
}


var myInput = document.getElementById("psw1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var special = document.getElementById("special");
var length = document.getElementById("length");


myInput.onfocus = function()
{
	document.getElementById("message").style.display = "block";
}


myInput.onblur = function()
{
	document.getElementById("message").style.display = "none";
}


myInput.onkeyup = function()
{

	var lowerCaseLetters = /[a-z]/g;
	if(myInput.value.match(lowerCaseLetters)) 
	{  
		letter.classList.remove("invalid");
		letter.classList.add("valid");
	}
	else 
	{
		letter.classList.remove("valid");
		letter.classList.add("invalid");
	}
  
 
	var upperCaseLetters = /[A-Z]/g;
	if(myInput.value.match(upperCaseLetters)) 
	{  
		capital.classList.remove("invalid");
		capital.classList.add("valid");
 	} 
	else 
	{
		capital.classList.remove("valid");
		capital.classList.add("invalid");
	}

 
	var numbers = /[0-9]/g;
	if(myInput.value.match(numbers)) 
	{  
		number.classList.remove("invalid");
		number.classList.add("valid");
	} 
	else 
	{
		number.classList.remove("valid");
		number.classList.add("invalid");
  	}

 
  	var specialChars = /[-.@$!%+=<>#?&]/g;
  	if(myInput.value.match(specialChars)) 
	{  
		special.classList.remove("invalid");
    		special.classList.add("valid");
  	} 
	else 
	{
    		special.classList.remove("valid");
    		special.classList.add("invalid");
  	}
  
 
  	if(myInput.value.length >= 8 && myInput.value.length<15) 
	{
    		length.classList.remove("invalid");
    		length.classList.add("valid");
  	} 
	else 
	{
    		length.classList.remove("valid");
    		length.classList.add("invalid");
 	 }
}


function validate_password() 
{
	var pass = document.getElementById('psw1').value;
	var confirm_pass = document.getElementById('psw2').value;
	if (pass != confirm_pass) 
	{
		document.getElementById('wrong_pass_alert').style.color = 'red';
		document.getElementById('wrong_pass_alert').innerHTML
                    = '☒ Use same password';
                document.getElementById('create').disabled = true;
                document.getElementById('create').style.opacity = (0.4);
        } else 
	{
                document.getElementById('wrong_pass_alert').style.color = 'green';
                document.getElementById('wrong_pass_alert').innerHTML =
                    '🗹 Password Matched';
                document.getElementById('create').disabled = false;
                document.getElementById('create').style.opacity = (1);
        }
}

function submitRegister(event)
{
	event.preventDefault();
	let myForm=document.getElementById("form2");
	if(myForm.checkValidity())
	{
		alert("Registration Complete");
	}
	else
	{
		alert("Fill All Fields");
	}
}

function submitLogin(event)
{
	event.preventDefault();
	let myForm=document.getElementById("form1");
	if(myForm.checkValidity())
	{
		alert("Query Submitted");
	}
	else
	{
		alert("Fill All Fields");
	}
}

function submitContact(event)
{
	event.preventDefault();
	let myForm=document.getElementById("form3");
	if(myForm.checkValidity())
	{
		alert("Query Submitted");
	}
	else
	{
		alert("Fill All Fields");
	}
}

var today = new Date().toISOString().split('T')[0];
document.getElementById("todayDate").setAttribute("max",today);
