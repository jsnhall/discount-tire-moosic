const elMusic = document.querySelector('.music__list');
const elPlaybackBtns = document.querySelectorAll('.music__playback-button');
const songs = [
  './music/Fire_Breather.mp3',
  './music/In_the_Shadows.mp3',
  './music/Jupiter_One.mp3',
  './music/Please_Tell_Me.mp3',
  './music/Reckless_Shred.mp3',
  './music/Spots_Action.mp3',
  './music/The_Fiery_Furnace.mp3',
];
let trackNumber;
let audioElement = new Audio();

elMusic.addEventListener('click', (e) => {
  // Reset music player and set new selected song to active
  if (e.target.classList.contains('music__playback-button') && !e.target.classList.contains('isActive')) {  
    elPlaybackBtns.forEach((btn, i) => {
      btn.classList.remove('fa-pause-circle');
      btn.classList.add('fa-play-circle');
      btn.classList.remove('isActive');
    })
    e.target.classList.add('isActive');
    audioElement.load();
  }

  // Do things if current track is active
  if (e.target.classList.contains('isActive')) {

    // Determing current track number and swap out Audio objects song
    let newTrackNumber = e.target.dataset.tracknumber;

    if (newTrackNumber != trackNumber) {
      trackNumber = e.target.dataset.tracknumber;
      audioElement = new Audio(songs[trackNumber - 1]);
    }   

    // Toggle playback buttons
    e.target.classList.toggle('fa-pause-circle');
    e.target.classList.toggle('fa-play-circle');

    // Set countdown
    const parent = e.target.parentNode;
    trackDuration = parent.children[0].children[1].innerHTML;     
    
    // Check state of player - paused or playing
    if (e.target.classList.contains('fa-pause-circle')) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }
});
