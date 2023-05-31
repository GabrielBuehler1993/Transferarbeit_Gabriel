const socket = new WebSocket("ws://localhost:3000");
function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;
  document.getElementById("message").value = "";
  
  const messageObject = {
    username: username,
    message: message,
  };
  const serializedObject = JSON.stringify(messageObject);
  // Send Messsage to Backend through Websocket
receiveMessage(serializedObject);
  //socket.send(serializedObject);
}

/*socket.addEventListener("message", (event) => {
  receiveMessage(event.data);
});*/

function receiveMessage(serializedObject) {
  const messageObject = JSON.parse(serializedObject);
  const messageElement = document.createElement("div");
  const nameElement = document.createElement("b");
  const textElement = document.createElement("p");
  messageElement.appendChild(nameElement);
  messageElement.appendChild(textElement);
  messageElement.classList.add("message");
  nameElement.innerText = messageObject.username;
  textElement.innerText = messageObject.message;
  const messages = document.getElementById("messages");
  messages.appendChild(messageElement);
}
socket.addEventListener("open", (event) => {
  console.log("WebSocket connected!");
  //socket.send("Hello, server!");
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