let imgCopo = document.querySelector(".starbucks");
    let circulo = document.querySelector(".circulo")

    let verde = document.querySelector(".verde");
    let amarelo = document.querySelector(".amarelo");
    let rosa = document.querySelector(".rosa");

    amarelo.addEventListener("click", () => {
      imgCopo.src = "./img/img-pequena2.png";
      circulo.style.background = "#eb7495"
    });

    verde.addEventListener("click", () => {
      imgCopo.src = "./img/img-pequena1.png";
      circulo.style.background = "#017143"
    });

    rosa.addEventListener("click", () => {
      imgCopo.src = "./img/img-pequena3.png";
      circulo.style.background = "#d752b1"
    });

    function alerta() {
      alert("BOTAO ILUSTRATIVO")
    }