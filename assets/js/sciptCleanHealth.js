// Exemplo 2
document.getElementById("estatisticasgerais").innerText = "Peterson Senha";
document.getElementById("quantidadeMaquina1").innerText = "732";

const socket = new WebSocket("ws://petersonsenha.github.io/CleanHealth/");
socket.onmessage = event => {
  const data = JSON.parse(event.data);
  const user = data.users[0];
  document.getElementById("username").innerText = user.username;
  document.getElementById("email").innerText = user.email;
};
/*
AT
OK
AT+HTTPINIT
OK
AT+HTTPPARA="URL","http://www.example.com/"
OK
AT+HTTPPARA="Method","PUT"
OK
AT+HTTPPARA="Content-Type","application/json"
OK
AT+HTTPPUT="{\"name\":\"John Doe\",\"age\":30}"
OK
AT+HTTPREAD
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 10

{"message":"Data sent successfully"}
*/