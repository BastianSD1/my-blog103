function addRoom (){
    room_name = document.getElementById ("room_name"). value;
firebase.database().ref("/").child(room_name).uptade({
    purpose : "ading room name" 
});
localStorage.setItem ("room_name","room_name")
window.location= "window_page.html";
}
function getData() {
firebase.database().ref("/").
document.getElementById("output")inner.HTML ="";
snapshot.forEach(fuction(childSnapshot) {
childkey =childSnapshot.key;
 
console.log("nombre de la sala :" + rooms_names);
row = "div class= 'room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id) >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row;

   });
});

}