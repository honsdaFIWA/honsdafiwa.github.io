const soundtracksogg = ["sweden.oga", "wethands.ogg", "miceonven.ogg"];
const soundtracksmp4 = ["sweden.mp4", "wethands.mp4", "miceonven.mp4"];
const engst = ["Sweden - C418", "Wet Hands - C418", "Mice on Venus - C418"];
var nig = document.getElementById("srcaudogg");
var ger = document.getElementById("srcaudmp4");
var joe = document.getElementById("joeaud");
var cum = document.getElementById("audbut");
let i = 0;

function aud_play_pause() {
    if (joe.paused) {
      joe.play();
      cum.classList.remove("fa-play");
      cum.classList.add("fa-pause");
    } else {
      joe.pause();
      cum.classList.add("fa-play");
      cum.classList.remove("fa-pause");
    }
};

function aud_next() {
  if (i === soundtracksogg.length - 1) {
      i = 0;
  } else {
      i++;
  }

  let j = `<p id="audplaying" class="audmin hg-maintitle">Playing ${engst[i]}</p>`;
  nig.src = "./files/sounds/" + soundtracksogg[i];
  ger.src = "./files/sounds/" + soundtracksmp4[i];
  document.getElementById("audplaying").innerHTML = j;
  //i hate everything
}

joe.onended = function() {
    aud_next();
    joe.pause();
    cum.classList.add("fa-play"); cum.classList.remove("fa-pause");
    joe.load();
    setTimeout(() => {
      if (joe.paused) joe.play(); cum.classList.add("fa-pause"); cum.classList.remove("fa-play");
    }, 5000);
};
