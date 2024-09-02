

let up=document.getElementById("up")

onscroll=function(){
    if(this.scrollY>400){
        up.style.display="inline-block"
    }
}
up.onclick=function(){
    window.scrollTo({top: 0, behavior:'smooth'})
}

function send_email(){
    var userName = document.getElementById('name').value;
	var subject = document.getElementById('subject').value;
	var email = document.getElementById('email').value;
    var message=document.getElementById('message').value;

	var messageBody = "Name: " + userName +
	"<br/> Subject: " + subject +
	"<br/> Email: " + email+
    "<br/>Message: " + message;
    Email.send({
        SecureToken :"1d1b91f4-0770-4d5c-9473-d444909d6ad9",
        To :email,
        From :  'hashour456@gmail.com',
        Subject : subject,
        Body : messageBody,
    }).then(
      message =>{
        if(message=="OK"){
            swal("Secussful", "We are happy to send your opinin", "success");
        }
        else{
            swal("Error", "Something Wrong", "error");

        }
      }
    );
}
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
let menu=document.getElementById("menu")
let cancel = document.getElementById("cancel")
cancel.onclick = function () {
    menu.style.display="none"
}

