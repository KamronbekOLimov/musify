let mode = document.querySelector(".mode");
let header = document.querySelector("header");
let musPlay = document.querySelectorAll(".fa-circle-play");
let song = document.querySelector(".song");
let currentPlaying = null;
let songs = ["bezTebya", "hardasan", "memories", "vechera"];
let musics = document.querySelectorAll(".music");
let localMode = localStorage.getItem("mode")

mode.addEventListener("click", () => {
  header.classList.toggle("active");
  localFunction()
});

const localFunction = () => {
  localStorage.setItem("mode", "mode")
}
musPlay.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("fa-circle-play")) {
      if (currentPlaying !== null && currentPlaying !== item) {
        currentPlaying.classList.remove("fa-circle-pause");
        currentPlaying.classList.add("fa-circle-play");
        song.pause();
        musics[currentPlaying.dataset.index].querySelector(".airPots").classList.remove("anime");
      }
      item.classList.remove("fa-circle-play");
      item.classList.add("fa-circle-pause");
      song.src = `./css/music/${songs[index]}.mp3`;
      song.play().catch(error => {
        console.error(`Failed to load the song: ./css/music/${songs[index]}.mp3`, error);
        item.classList.remove("fa-circle-pause");
        item.classList.add("fa-circle-play");
        currentPlaying = null;
        musics[index].querySelector(".airPots").classList.remove("anime");
      });
      currentPlaying = item;
      musics[index].querySelector(".airPots").classList.add("anime");
      currentPlaying.dataset.index = index;
    } else {
      item.classList.remove("fa-circle-pause");
      item.classList.add("fa-circle-play");
      song.pause();
      musics[index].querySelector(".airPots").classList.remove("anime");
      currentPlaying = null;
    }
  });
});