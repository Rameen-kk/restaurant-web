function filterMenu(category){

let cards=document.querySelectorAll(".menu-card");

cards.forEach(card=>{

if(category==="all"){
card.style.display="block";
}

else if(card.classList.contains(category)){
card.style.display="block";
}

else{
card.style.display="none";
}

});

}

document.addEventListener("DOMContentLoaded",()=>{

let form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

let name=document.getElementById("name").value;

if(name===""){
alert("Please enter your name");
return;
}

alert("Message Sent Successfully");

});

}

});
