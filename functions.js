var Time = document.querySelector("#Time")
var music = document.querySelector("#musicW")
var pause = document.querySelector("#Pause")
var play = document.querySelector("#play")
var progress = document.querySelector("#progress")
var currentsong = 'Music/1. My Burden Is Light.mp3'
var audio = new Audio(currentsong);
var MusicText =  document.querySelector("#MusicText")
var Music1 = document.querySelector("#Audio1")
var Music2 = document.querySelector("#Audio2")
var Music3 = document.querySelector("#Audio3")
var Music4 = document.querySelector("#Audio4")
var Music5 = document.querySelector("#Audio5")
var Music6 = document.querySelector("#Audio6")
var Music7 = document.querySelector("#Audio7")
var art = document.querySelector("#AlbumArt")
let timer = null
var switchh = true;
var durationText = document.querySelector("#durationMax");
var Srcs = "";
var duration = 0
var minute = 0
var sec = 0
var playing = true
var percentage = 0
let seconds = 0

function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime;
    }
    setInterval(updateTime, 1000);

function Check(){
  if (switchh == true){
    hide.style.background= "#000000";Time.style.display = "none"; switchh = false
  }
  else if (switchh == false){
    hide.style.background= "#ffffff";Time.style.display = "block"; switchh = true
  }
}
CalculateDuration("Song1")
play.addEventListener("click", function() {PlayMusic(audio)})
pause.addEventListener("click", function() {StopMusic(audio)})
function CalculateDuration(song){
  var audioEl = document.getElementById(song)
  audioEl.onloadedmetadata = function () {
  durationText = document.querySelector("#durationMax");
  duration = document.getElementById(song).duration;
  minute = parseInt(duration/60);
  sec = parseInt(duration%60);
  console.log(minute, sec)
  if (sec < 10){
    durationText.innerHTML = (minute + ":0" + sec);}
  else{
  durationText.innerHTML = (minute + ":" + sec);}
  }
  audioEl.load();
}

function PlayMusic(song){
  function PlayAudio(){
    playing = true
    song.play();
    setInterval(() =>{
      if(playing == true){
       percentage = (((seconds/10) - 0)/(duration - 0))*100
       progress.style.width = percentage + "%";
       if (percentage >= 100){
         playing = false
       } 
      }
      else{
        song.pause();
      }
    },1)
  }

  function Timer(){
    if (timer == null ){
      timer = setInterval(()=>{
        if (playing == true){
          seconds++ 
        }
      },100)
    }
  }

  PlayAudio()
  Timer()
}

function StopMusic(song){
  playing = false
  song.pause();
}

Music1.addEventListener("click" , function(){UpdateSong("Song1" , "My Burden Is Light"), MusicText.style.top = 65+"%" ,MusicText.style.left = 17+"%", art.src = "idk.jpg", MusicText.style.fontSize = 33+"px"})
Music2.addEventListener("click" , function(){UpdateSong("Song2", "On Little Cat Feet"), MusicText.style.top = 65+"%" ,MusicText.style.left = 17+"%",art.src = "idk.jpg", MusicText.style.fontSize = 33+"px"})
Music3.addEventListener("click" , function(){UpdateSong("Song3", "99.9"),  MusicText.style.top = 65+"%" ,MusicText.style.left = 42+"%", art.src = "mob_song.jpg", MusicText.style.fontSize = 33+"px"})
Music4.addEventListener("click" , function(){UpdateSong("Song4", "Catastrophes before the calamity") , MusicText.style.top = 65+"%" ,MusicText.style.left = 8+"%", art.src = "a2145936506_10.jpg" , MusicText.style.fontSize = 25+"px"})
Music5.addEventListener("click" , function(){UpdateSong("Song5", "Self Contained Universe") , MusicText.style.top = 65+"%" ,MusicText.style.left = 8+"%", art.src = "idk.jpg", MusicText.style.fontSize = 33+"px"})
Music6.addEventListener("click" , function(){UpdateSong("Song6", "Street Cat") , MusicText.style.top = 65+"%" ,MusicText.style.left = 32+"%", art.src = "images.jpg", MusicText.style.fontSize = 33+"px"})
Music7.addEventListener("click" , function(){UpdateSong("Song7", "Roar of the Jungle Dragon") , MusicText.style.top = 65+"%" ,MusicText.style.left = 12+"%", art.src = "a2145936506_10.jpg" , MusicText.style.fontSize = 30+"px"})
function UpdateSong(song,text){
  seconds = 0
  progress.style.width = 0 + "%";
  audio = new Audio(document.getElementById(song).src);
  CalculateDuration(song)
  MusicText.innerHTML = `<div>${text}</div>`
  playing = false

}
var currentdate = document.getElementById("calendar-date");
let date = new Date();
var day = document.querySelector("#calendar .day");
var currentYear = date.getFullYear() ;
var currentMonth = date.getMonth() ;
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(currentYear, currentMonth)

const renderCalendar = () => {
  let firstDay = new Date(currentYear , currentMonth, 1).getDay()
  let lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  let NextFirstDay = new Date(currentYear, currentMonth , lastDay).getDay();
  let PreviusLastDay = new Date(currentYear, currentMonth, 0).getDate();
  let liTag = "";

  for(let i = firstDay; i > 0 ; i--){
    liTag += '<li class = "inactive">' + (PreviusLastDay - i +1  )+ '</li>';
  }
  for (let i = 1; i <= lastDay; i++) {
    let today = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class="${today}" >${i}</li>`;
  }
  for(let i = NextFirstDay; i < 6 ; i++){
    liTag += `<li class="inactive">${i - NextFirstDay + 1}</li>`;
  }

  currentdate.innerText = `${Months[currentMonth]} ${currentYear}`;
  day.innerHTML = liTag;
}
renderCalendar();

var display = document.getElementById("display");
function appendValue(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch (error) {
    display.ATTRIBUTE_NODE.value = "Error";
  }
}  