//your JS code here. If required.
const lineElement = document.getElementById('line');

function rotateLine() {
    let rotation = 0;
    const rotationInterval = 5; // Adjust the rotation speed here (smaller value for faster rotation)
    
    function animateRotation() {
        rotation += rotationInterval;
        lineElement.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(animateRotation);
    }

    animateRotation();
}


rotateLine();
