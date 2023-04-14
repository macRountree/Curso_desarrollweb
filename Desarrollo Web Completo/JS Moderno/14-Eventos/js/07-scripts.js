//DELEgation
//Aqui evitamos escribir stoppropagation para el event bubblig
const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("titulo")) {
    console.log("titulo");
  }
  if (e.target.classList.contains("precio")) {
    console.log("'precio'");
  }
  if (e.target.classList.contains("info")) {
    console.log("info");
  }
});
