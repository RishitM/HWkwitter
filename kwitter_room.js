var row;
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD1eXjaTOGsgMbpSdQXkmzHr15pNjW8Q-Q",
  authDomain: "kwitter-a-chat-app.firebaseapp.com",
  databaseURL: "https://kwitter-a-chat-app-default-rtdb.firebaseio.com",
  projectId: "kwitter-a-chat-app",
  storageBucket: "kwitter-a-chat-app.appspot.com",
  messagingSenderId: "699740989628",
  appId: "1:699740989628:web:e94564a23786eca93a48b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var name=localStorage.getItem("name");
document.getElementById("hello").innerHTML= ("Welcome "+ name + "!");
function logout(){
  window.location="index.html";
  localStorage.removeItem("name");
  localStorage.removeItem("roomID");
}
function add(){
      roomname=document.getElementById("room").value;
      localStorage.setItem("roomID", roomname);
      console.log("roomID= " + roomname);
      firebase.database().ref("/").child(roomname).update({roomId:roomname});
      window.location="kwitter_page.html";
      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
      //Start code
row="<div id='"+Room_names+"'class='room_name' onclick='next_page(this.id)'>"+Room_names+"</div>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
      function next_page(Room_ID){
         console.log(Room_ID);
         localStorage.setItem("roomID",Room_ID);
         window.location="kwitter_page.html";
      }
getData();
