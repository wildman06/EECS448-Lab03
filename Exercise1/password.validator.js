function validate()
{
  var fpassword = document.getElementById("firstPassword").value;
  var spassword = document.getElementById("secondPassword").value;
  var check1 = fpassword === spassword;
  var check2 = fpassword.length < 8;
  var check3 = spassword.length < 8;

  if(!check3 && !check2)
  {
      if(check1)
      {
        alert("Password is valid. Thank you for using the password validator.");
      }
      else
      {
        alert("Invalid: you did not enter identical passwords.");
      }
  }
  else
  {
    alert("Invalid: your password must be at least 8 characters long.");
  }
}
