
let button = document.getElementById("show");
const sound = new Audio ('sound.mp3');

button.addEventListener('click', function(){
    sound.play()
})