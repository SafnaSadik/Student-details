function validateMobile(nums)
{
	var no = /[0-9]/g;
	if(nums.value.match(no)&&nums.value.length==10)
	{
		return true;
	}
	else
	{
		alert("Invalid Mobile Number.");
		return false;
	}
}    

function validateEmail(emailId)
{
	var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(emailId.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("Invalid email address.");
		return false;
	}
} 

