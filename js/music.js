"use strict";var trackNumber,elMusic=document.querySelector(".music__list"),elPlaybackBtns=document.querySelectorAll(".music__playback-button"),songs=["./../music/Fire_Breather.mp3","./../music/In_the_Shadows.mp3","./../music/Jupiter_One.mp3","./../music/Please_Tell_Me.mp3","./../music/Reckless_Shred.mp3","./../music/Spots_Action.mp3","./../music/The_Fiery_Furnace.mp3"],audioElement=new Audio;elMusic.addEventListener("click",function(e){if(e.target.classList.contains("music__playback-button")&&!e.target.classList.contains("isActive")&&(elPlaybackBtns.forEach(function(e,t){e.classList.remove("fa-pause-circle"),e.classList.add("fa-play-circle"),e.classList.remove("isActive")}),e.target.classList.add("isActive"),audioElement.load()),e.target.classList.contains("isActive")){e.target.dataset.tracknumber!=trackNumber&&(trackNumber=e.target.dataset.tracknumber,audioElement=new Audio(songs[trackNumber-1])),e.target.classList.toggle("fa-pause-circle"),e.target.classList.toggle("fa-play-circle");var t=e.target.parentNode;trackDuration=t.children[0].children[1].innerHTML,e.target.classList.contains("fa-pause-circle")?audioElement.play():audioElement.pause()}});et.dataset.tracknumber;
      audioElement = new Audio(songs[trackNumber - 1]);
    } // Toggle playback buttons


    e.target.classList.toggle('fa-pause-circle');
    e.target.classList.toggle('fa-play-circle'); // Set countdown

    var parent = e.target.parentNode;
    trackDuration = parent.children[0].children[1].innerHTML; // Check state of player - paused or playing

    if (e.target.classList.contains('fa-pause-circle')) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }
});