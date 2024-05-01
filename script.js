function validate(){
    var FName=document.reg_form.FName;
    var Lname = document.reg_form.LName;
    var phone = document.reg_form.phone;
    var email = document.reg_form.email;
    var password = document.reg_form.password;
    var dob = document.reg_form.dob;
    var percentage = document.reg_form.percentage;
    if(FName.value.length<=0){
        alert("First Name is required ....");
        FName.focus();
        return false;       
    }
    if(Lname.value.length<=0){
        alert("Last Name is required ....");
        Lname.focus();
        return false;       
    }
    if(phone.value.length<=0){
        alert("phone Number is required ....");
        phone.focus();
        return false;       
    }
    if(email.value.length<=0){
        alert("email is required ....");
        email.focus();
        return false;       
    }
    if(password.value.length<=8){
        alert("password is required ....");
        password.focus();
        return false;       
    }   
    if(password.value.length<8){
        alert("password is required ....");
        password.focus();
        return false;       
    } 
    if(dob.value.length<=0){
        alert("DOF  is required ....");
        dob.focus();
        return false;       
    }
    if(percentage.value.length<=0){
        alert("Percentage is required ....");
        percentage.focus();
        return false;       
    }
}
// show and hide the password
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eye-open.png";
    }
    else{
        password.type = "password";
        eyeicon.src = "eye-close.png";


    }
}