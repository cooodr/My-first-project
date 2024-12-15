// Get references to video and controls
const videoPlayer = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeControl = document.getElementById('volumeControl');

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        videoPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Mute/Unmute functionality
muteBtn.addEventListener('click', () => {
    videoPlayer.muted = !videoPlayer.muted;
    muteBtn.textContent = videoPlayer.muted ? 'Unmute' : 'Mute';
});

// Volume control functionality
volumeControl.addEventListener('input', (event) => {
    videoPlayer.volume = event.target.value;
});
