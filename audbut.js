const soundtracks = ["sweden", "wethands", "miceonven"];

function aud_play_pause() {
    var myAudio = document.getElementById("myAudio");
    var nig = document.getElementsByClassName("srcaud");
    var cum = document.getElementById("audbut");
    if (myAudio.paused) {
      myAudio.play();
      cum.classList.remove("fa-play")
      cum.classList.add("fa-pause")
    } else {
      myAudio.pause();
      cum.classList.add("fa-play")
      cum.classList.remove("fa-pause")
    }
};

myAudio.onended = function() {
    cum.classList.add("fa-play")
    cum.classList.remove("fa-pause")
};
