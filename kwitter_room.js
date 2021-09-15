var firebaseConfig = {
  apiKey: "AIzaSyAT6YSbEV6mUKa_eS0lEM3f1ET7bmiHTr4",
  authDomain: "let-s-chat-884f1.firebaseapp.com",
  databaseURL: "https://let-s-chat-884f1-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-884f1",
  storageBucket: "let-s-chat-884f1.appspot.com",
  messagingSenderId: "376396239348",
  appId: "1:376396239348:web:b9573a88fa47ebf9d1a9a1"
};


firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() 
{
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
});
});
}
getData();
function redirectToRoomName(name)
{
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}