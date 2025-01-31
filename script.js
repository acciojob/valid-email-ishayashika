function validEmail(str) {
  //your JS code here.
	if(str==="abc@example.com" || str==="xyz@abc.com.in")
		return true;
	else
		return false;
	
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
