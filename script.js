document.getElementById("regForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

alert("Registration Successful\nName: "+name+"\nEmail: "+email);

});