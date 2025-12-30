let usernamePattern =/^[A-Z]{1}[a-z]{3,8}$/;
let passwordPattern = /^[0-9]{4}[@A-Z]{2}[a-z]{3,8}$/;

let erroru = document.getElementById("erroru");
let errorp = document.getElementById("errorp");

function errormsg(element,msg){
    element.innerText = msg;
    element.style.color = msg?"red":"";
}

function validate(){
    let isvalid = true;

    let fields =[
        {
            value:document.getElementById("username").value,
            pattern:usernamePattern,
            error:erroru,
            msg:"please enter valid username"
        },
        {
            value:document.getElementById("password").value,
            pattern:passwordPattern,
            error:errorp,
            msg:"please enter valid password"
        }
    ]

    fields.forEach((field)=>{
        if(!field.pattern.test(field.value)){
            errormsg(field.error,field.msg);
            isvalid=false;
        }
        else{
            errormsg(field.error,"")
        }
    })

    if(isvalid){
        alert("Success");
    }

    return isvalid;
 }
