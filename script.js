//Animación de la sección de planes
window.addEventListener('scroll', function(){
  let animacion = document.getElementById('planesSection');
  let posicionObj1 = animacion.getBoundingClientRect().top;
  console.log(posicionObj1);
  let tamañoDePantalla = window.innerHeight;

  if(posicionObj1 < tamañoDePantalla){
    animacion.style.animation = 'aparecer 4s linear'
  }
});