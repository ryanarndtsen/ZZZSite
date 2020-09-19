function validate(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  var text;
  if(name.length < 3){
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) == false){
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 3){
    text = "Please Enter Valid Message";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

