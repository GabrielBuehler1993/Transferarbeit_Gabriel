const socket = new WebSocket("ws://localhost:3000");

socket.addEventListener("open", (event) => {
  console.log("WebSocket connected!");
  socket.send("Hello, server!");
});

socket.addEventListener("message", (event) => {
  console.log(`Received message: ${event.data}`);
});

socket.addEventListener("close", (event) => {
  console.log("WebSocket closed.");
});

socket.addEventListener("error", (event) => {
  console.error("WebSocket error:", event);
});

function sendMessage(){
  const message = document.getElementById("message").value;
  socket.send(message);
}
function displayMessage(data){
  const displaymessage = document.createElement("message").value;
  let messageElement = document.createElement("p");
  let messageData  = JSON.parse(data);
  let username = messageData.username;
  let message = messageData.message;
  messageElement.textContent = username + ": " + message;
  messagesDiv.appendChild
}