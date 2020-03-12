function registrationCheck()
{
    var un = document.querySelector("#user_name");
    //alert(un.value);
    var mail = document.querySelector("#email");
    //alert(mail.value);

    if(un.value == ""){
        alert("A felhasználónév üres");
        return false;
    }
    else if(mail.value == "")
    {
        alert("Az email mező üres");
        return false;
    }
    else if(!ValidateEmail(mail))
    {
        alert("Hibás email címet adtál meg");
        return false;
    }
	else{
		if(!confirm("Biztosan regisztrálsz?"))
		{
			return false;
		}else {return true;}
	}
}


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector("#email").value))
  {
    return (true)
  }
    return (false)
}
