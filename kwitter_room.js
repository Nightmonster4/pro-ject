var firebaseConfig = {
      apiKey: "AIzaSyAdErm4khBm89mvUPFVT9MX8VXs2A_oIK0",
      authDomain: "kwitter-749a5.firebaseapp.com",
      databaseURL: "https://kwitter-749a5-default-rtdb.firebaseio.com",
      projectId: "kwitter-749a5",
      storageBucket: "kwitter-749a5.appspot.com",
      messagingSenderId: "119593707747",
      appId: "1:119593707747:web:6fc29b1a5ba5eac614bdd6",
      measurementId: "G-EYTKE3BBGZ"
    };
    firebase.initializeApp(firebaseConfig);

    get_username = localStorage.getItem("giveitem");
    document.getElementById("user_name").innerHTML = "Welcome " + get_username + "!"
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
