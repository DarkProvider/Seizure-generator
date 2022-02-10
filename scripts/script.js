const colorChange = document.getElementById('colorChange');
const colorChangeMouseWheel = document.getElementById('colorChangeMouseWheel');
const colorChangeContainer = document.getElementById('colorChangeContainer');

colorChange.addEventListener('click', colorValue);


colorChangeMouseWheel.addEventListener('wheel', colorValue);


function colorValue(event) {
    
    var color = Math.floor(Math.random() * 16777215).toString(16);

    event.target.style.backgroundColor = '#' + color;
    event.target.innerHTML = '#' + color;

    colorChangeContainer.style.boxShadow = '5px 5px 2px 2px #' + color;

    navigator.clipboard.writeText(color);

}