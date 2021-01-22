var msg
//YOUR FIREBASE LINKS
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
 user_name=localStorage.getItem("name");
console.log(name);
function logout(){
      window.location="index.html";
      localStorage.removeItem("name");
      localStorage.removeItem("roomID");
    }
    id=localStorage.getItem("roomID");
    console.log(id);
    function send(){
      msg=document.getElementById("message").value;
         console.log(msg);
         firebase.database().ref(id).push({
               "Name":user_name,
               "message":msg,
               "likes":0
         })
    
    }
function getData() { firebase.database().ref("/"+id).on('value', function(snapshot) { document.getElementById("output1").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["Name"];
message=message_data["message"];
like=message_data["likes"];
name_with_tag="<h4>"+name+"<span><img src='tick.png' class='user_tick'></span></h4>";
message_with_tag="<label>"+message+"</label><br>";
like_button="<button id='"+firebase_message_id+"'onclick='addLike(this.id)' class=' btn btn-warning'value='"+like+"'><span class='glyphicon glyphicon-thumbs-up'></span>Like: "+like+"</button>";

row= name_with_tag + message_with_tag + like_button + "<hr>";
document.getElementById("output1").innerHTML +=row;

//End code
      } });  }); }
      function addLike(msg_id){
button_id=msg_id;
likes_screen=document.getElementById(button_id).value;
updated_likes=Number(likes_screen)+1;
console.log(updated_likes);
firebase.database().ref(id).child(msg_id).update({likes:updated_likes})
      }
getData();
