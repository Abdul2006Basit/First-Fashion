function validation(){
    let fname =  document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = getElementById("confirmpassword").value;
    let passregex = /.{8,}/;
    let emailregex = /\w+@[a-z]+\.[a-z]{2,4}[\.[a-z]+]?/;
    if(fname == "" || lname == "" || email == ""|| password == "" || confirmpassword == "" || !email.test(emailregex) || !password.test(passregex)){
        if(fname == ""){
            document.getElementById("ferror").innerText = "Must Enter your First Name";
        }else{
            document.getElementById("ferror").innerText = "";
    
        }
        if(lname == ""){
            document.getElementById("eerror").innerText = "Must Enter your Last Name";
    
        }else{
            document.getElementById("eerror").innerText = "";
    
        }
        if(email == ""){
            document.getElementById("emailerror").innerText = "Must Enter your Email Address";

        }else if(!email.test(emailregex)){
            document.getElementById("emailerror").innerText = "Invalid Email";

        }else{
            document.getElementById("emailerror").innerText = "";

        }
        if(password == ""){
            document.getElementById("passerror").innerText = "Must Enter your Password";

        }else if(!password.test(passregex)){
            document.getElementById("passerror").innerText = "Your password contain atleast 8 characters";

        }else{
            document.getElementById("passerror").innerText = "";

        }
        if(confirmpassword == ""){
            document.getElementById("conerror").innerText = "Re-enter your password";
        }else if (password != confirmpassword){
            document.getElementById("conerror").innerText = "Password does'nt match";

        }else{
            document.getElementById("conerror").innerText = "";

        }
        location.href = "login.html";
    }
}