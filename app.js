function playSound(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e) {
    if (e.propertyName === 'transform') {
        e.target.classList.remove('playing');
    }
}

const keys = Array.from(document.querySelectorAll('.key'));
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
