window.addEventListener('load', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    // Attempt to play the music right away
    backgroundMusic.play().catch(() => {
        // If blocked by browser, wait for user interaction to play the music
        document.body.addEventListener('click', () => {
            backgroundMusic.play();
        });
    });
});
