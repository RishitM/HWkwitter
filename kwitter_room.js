function add(){
      roomname=document.getElementById("room").value;
      localStorage.setItem("roomID", roomname);
      console.log("roomID= " + roomname);
}
//ADD YOUR FIREBASE LINKS HERE

  //Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD1eXjaTOGsgMbpSdQXkmzHr15pNjW8Q-Q",
    authDomain: "kwitter-a-chat-app.firebaseapp.com",
    projectId: "kwitter-a-chat-app",
    storageBucket: "kwitter-a-chat-app.appspot.com",
    messagingSenderId: "699740989628",
    appId: "1:699740989628:web:e94564a23786eca93a48b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
