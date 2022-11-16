//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCyOJDruMH7A3mKXSdWq38YByPXys4jLlo",
      authDomain: "kwitter-website-dc834.firebaseapp.com",
      databaseURL: "https://kwitter-website-dc834-default-rtdb.firebaseio.com",
      projectId: "kwitter-website-dc834",
      storageBucket: "kwitter-website-dc834.appspot.com",
      messagingSenderId: "179330800730",
      appId: "1:179330800730:web:9f8921a56575ebbbd74c63",
      measurementId: "G-4R91PBT9KW"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}