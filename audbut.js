const soundtracksogg = ["sweden.oga", "wethands.ogg", "miceonven.ogg"];
const soundtracksmp4 = ["sweden.mp4", "wethands.mp4", "miceonven.mp4"];
const engst = ["Sweden - C418", "Wet Hands - C418", "Mice on Venus - C418"]
var nig = document.getElementsByClassName("srcaudogg");
var ger = document.getElementsByClassName("srcaudmp4");
var myAudio = document.getElementById("myAudio");
var cum = document.getElementById("audbut");
var i = 0;

function aud_play_pause() {
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

function aud_next() {
  if (i === soundtracksogg.length - 1) {
      i = 0;
  } else {
      i++;
  }

  nig.src = (`./files/sounds/${soundtracksogg[i]}`).toString();
  ger.src = (`./files/sounds/${soundtracksmp4[i]}`).toString();
  document.getElementById("audplaying").innerHTML = (`Playing ${engst[i]}`).toString();
}

myAudio.onended = function() {
    cum.classList.add("fa-play")
    cum.classList.remove("fa-pause")
    aud_next();
    setInterval(() => {
      if (myAudio.paused) myAudio.play();
    }, 3000);
};
