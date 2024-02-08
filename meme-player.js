document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById('playButton');

    const mp3Files = [
        'cat-meme.mp3',
        'cat-meow-meme.mp3',
        'cat-rap.mp3',
        'cat-vibing-to-ievan-polkka.mp3',
        'chipi-chapa-cat-meme.mp3',
        'huh-cat-meme.mp3',
        'im-not-a-cat.mp3',
        'interstellar.mp3',
        'lets-go.mp3',
        'smurf-cat-meme.mp3',
        'wha-wha-wha-cat.mp3'
    ];

    playButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * mp3Files.length);
        const randomMP3 = mp3Files[randomIndex];

        const audio = new Audio('assets/audio/' + randomMP3);
        audio.play();
    });
});