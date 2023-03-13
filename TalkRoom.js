const firebaseConfig = {
    apiKey: "AIzaSyBxsgC57g36QuoNLzvHklWMY2LEZOd_R30",
    authDomain: "kwitter-c99c7.firebaseapp.com",
    databaseURL: "https://kwitter-c99c7-default-rtdb.firebaseio.com",
    projectId: "kwitter-c99c7",
    storageBucket: "Talk Teck-c99c7.appspot.com",
    messagingSenderId: "658470659318",
    appId: "1:658470659318:web:12c09a625e03853d77f8d7"
  };

  firebase.initializeApp(firebaseConfig)
userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "indexPAge.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "indexPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
  }



