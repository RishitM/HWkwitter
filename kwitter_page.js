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
               "Name":name,
               "message":msg,
               "likes":0
         })
    
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output1").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
