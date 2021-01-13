function LogIn(){
name=document.getElementById("UserName").value;
localStorage.setItem("name", name);
console.log("username= " + name);
window.location="kwitter_room.html";
}