// Exemplo 2
document.getElementById("estatisticasgerais").innerText = "Peterson Senha";
document.getElementById("nomeMaquina1").innerHTML = "Bruno";
document.getElementById("qtdeM1").innerText = "732";

var contador=0; 

function atualizarContador() {
  contador++;
  document.getElementById("qtdeM1").innerText = contador;

  // Chama a função novamente após um segundo
  setTimeout(atualizarContador, 1000);
}

// Chama a função pela primeira vez
atualizarContador();

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