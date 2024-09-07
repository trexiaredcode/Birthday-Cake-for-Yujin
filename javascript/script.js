let candleCount = 0;

function addCandle() {
    const cake = document.getElementById('cake');
    if (candleCount < 5) {  // Limit the number of candles
        const candle = document.createElement('div');
        candle.className = 'candle';
        candle.style.left = (candleCount * 40 + 70) + 'px';
        cake.appendChild(candle);
        candleCount++;
    }
}

function blowCandle() {
    const cake = document.getElementById('cake');
    cake.innerHTML = '<div id="name">Eugene</div>';  // Reset the cake with the name
    const song = document.getElementById('birthdaySong');
    song.play();
}
