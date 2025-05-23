var ClickMouse = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/click%20do%20mouse.mp3?v=1661006466474');
const link = "https://www.mediafire.com/file/8hn9s99aed0uq68/Project_Zomboid_v2.9.9.10_setup.rar/file"
const plataforma = navigator.platform 
const largura = screen.width

function install() { 
  ClickMouse.play();
  
  if(largura >= 1024){
    window.open(link);
  }else{
    alert("O Jogo E Apenas Para Computadores e Notebooks , Atualmente Voce Está Em Um " + plataforma)
  }
  
}