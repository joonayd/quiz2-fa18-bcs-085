  $(function () {
    $("#myForm").submit(handleFormSubmit);
  });
  function handleFormSubmit(e) {
    e.preventDefault();

  
  var validation = true
  var name = $("#name").val()
  var password = $("#password").val()
  var confirmpass = $("#confirm_password").val()
  if(name.length<5){
    alert("Name should be atleast 5 characters long")
    $("#name").addClass("error")
    validation = false
  }
  else{
    $("#name").removeClass("error")
  }
  if(password.length<8 ){
    alert("Password should be atleast 8 characters long")
    $("#password").addClass("error")
    validation = false
  }
  else{
    $("#password").removeClass("error")
  }

  if(confirmpass.length<8 ){
    alert("Password should be atleast 8 characters long")
    $("#confirm_password").addClass("error")
    validation = false
  }
  else{
    $("#confirm_password").removeClass("error")
  }
  if(password !== confirmpass ){
    alert("Passwords do not match")
    $("#confirm_password").addClass("error")
    validation = false
  }
  if(validation == true){
  alert("Form is being submitted");
  }
  }