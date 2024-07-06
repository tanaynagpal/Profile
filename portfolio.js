var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
const button = document.querySelector("#submit-btn")



async function sendMail(){
    button.innerHTML="Sending"
    button.setAttribute("disabled","true")
    let name= document.getElementById("name").value
    let email= document.getElementById("email").value
    let message= document.getElementById("message").value
    let toEmail="tanaynagpal5@gmail.com"
    if(!name || !email || !message){
        alert("Please fill all inputs")
        button.innerHTML="Submit"
        button.setAttribute("disabled","false")
        return
    }
    
    const data={name,email,message,toEmail}
    const response = await fetch("https://profile-backend-6tw2.onrender.com/send-mail",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)

    })
    if(response){
        alert("Thanks for Contacting me ! I will response You soon")
        button.innerHTML="Thanks"
        button.setAttribute("disabled","true")

    }


    
}

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}
