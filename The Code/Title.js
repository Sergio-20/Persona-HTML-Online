//Click Status for each menu
let clicked = false;
let credits = false;
let instructions = false;
let optionsClicked = false;
let optionsOSTMenu = false;
let themesClicked = false;
let titlesClicked = false;


//Username for the client
let clientName = null;


//Document Variables
let creditsMenu = document.getElementById("credits");
let howToPlayMenu = document.getElementById("help");
let menu = document.getElementById("menu");
let optionz = document.getElementById("options");
let optionzOST = document.getElementById("optionsOST");
let themes = document.getElementById("themes");
let titleScreens = document.getElementById("optionsTitleScreens");

//OST Page Count
let pageNumber = 1;

function toSelectionScreen()
{
    playkickSomeAss();
    let kickSomeAss = document.getElementById("kickSomeAss");
    kickSomeAss.addEventListener("ended",()=>{
      window.open("The Code/Selection Screen.html","_self");
  });
}

function loadPreferences()
{

  if(localStorage.getItem("bgm") !== null)
  {
    document.getElementById("audio1").src = localStorage.getItem("bgm");
    document.getElementById("audio1").play();
  }
  else if(localStorage.getItem("bgm") === null)
  {
    document.getElementById("backgroundVideo").muted = true;

    randomOST();
  }

  if(localStorage.getItem("video") !== null)
  {
    document.getElementById("backgroundVideo").muted = true;
    document.getElementById("backgroundVideo").src = localStorage.getItem("video");
    document.getElementById("backgroundVideo").play();
  }

  else if(localStorage.getItem("video") === null)
  {
    document.getElementById("backgroundVideo").muted = true;
    randomTitle();
  }

  if(localStorage.getItem("menu") !== null)
  {
    creditsMenu.style.animation = localStorage.getItem("credits");
    howToPlayMenu.style.animation = localStorage.getItem("instructions");
    menu.style.animation = localStorage.getItem("menu");
    optionz.style.animation = localStorage.getItem("options");
    optionzOST.style.animation = localStorage.getItem("optionsOST");
    themes.style.animation = localStorage.getItem("themesPage");
    titleScreens.style.animation = localStorage.getItem("titleScreen");
  }
  else
  {
      randomTheme();
  }

  if(JSON.parse(localStorage.getItem("client")) === null)
  {
    clientName = JSON.stringify(prompt("Welcome to Persona HTML! Please, type in a username for yourself below:"));
    localStorage.setItem("client", clientName);
  }
  else
  {
    alert("Welcome back, " + JSON.parse(localStorage.getItem("client")) + "!");
  }


}

function saveOSTPreferences()
{
  localStorage.setItem("bgm", document.getElementById("audio1").src);
}

function saveVideoPreferences()
{
  localStorage.setItem("video", document.getElementById("backgroundVideo").src);
}

function saveThemePreferences()
{
  localStorage.setItem("credits", creditsMenu.style.animation);
  localStorage.setItem("instructions", howToPlayMenu.style.animation);
  localStorage.setItem("menu", menu.style.animation);
  localStorage.setItem("options", optionz.style.animation);
  localStorage.setItem("optionsOST", optionzOST.style.animation);
  localStorage.setItem("themesPage", themes.style.animation);
  localStorage.setItem("titleScreen", titleScreens.style.animation);
}

function resetPreferences()
{
  playSelect();
  localStorage.clear();
  randomOST();
  randomTitle();
  randomTheme();

}

function randomOST()
{
  let ost = ["OST/A Way Of Life.mp3","OST/Beneath the Mask.mp3","OST/Brand New Days.mp3","OST/Burn My Dread.mp3","OST/Changing Seasons.mp3","OST/Dance!.mp3","OST/Deep breath Deep breath.mp3","OST/Heartbreak, Heartbreak.mp3","OST/Heaven.mp3","OST/Joy.mp3","OST/Kimi no Kioku.mp3","OST/Last Surprise.mp3","OST/More Than One Heart.mp3","OST/Never More.mp3","OST/Our Moment.mp3","OST/Soul Phase"];

  let randomOST = Math.floor(Math.random() * 15);

  document.getElementById("audio1").src = ost[randomOST].toString();
  document.getElementById("audio1").play();

}

function randomTitle()
{
  let randomVideo = Math.floor(Math.random() * 7);

  let videos = ["Title Screens/P3 Opening.mp4","Title Screens/P3 FES.mp4","Title Screens/P3P.mp4","Title Screens/P3 Dancing.mp4","Title Screens/P4 Animation.mp4","Title Screens/P4G.mp4","Title Screens/P5.mp4"];
  document.getElementById("backgroundVideo").src = videos[randomVideo].toString();
}

function randomTheme()
{
  let allThemes = ["10000ms ease-in-out infinite color-change04","10000ms ease-in-out infinite color-change05","10000ms ease-in-out infinite color-change","10000ms ease-in-out infinite color-change02","10000ms ease-in-out infinite color-change03"];

  let randomTheme = Math.floor(Math.random() * 5);

  document.getElementById("prevSongPage").style.animation = allThemes[randomTheme].toString();
  document.getElementById("nextSongPage").style.animation = allThemes[randomTheme].toString();
  creditsMenu.style.animation = allThemes[randomTheme].toString();
  howToPlayMenu.style.animation = allThemes[randomTheme].toString();
  menu.style.animation = allThemes[randomTheme].toString();
  optionz.style.animation = allThemes[randomTheme].toString();
  optionzOST.style.animation = allThemes[randomTheme].toString();
  themes.style.animation = allThemes[randomTheme].toString();
  titleScreens.style.animation = allThemes[randomTheme].toString();
}

function chooseTheme()
{
  let blue = document.getElementById("blue");
  let grey = document.getElementById("grey");
  let inverse = document.getElementById("inverse");
  let red = document.getElementById("red");
  let yellow = document.getElementById("yellow");

  let prevBtn = document.getElementById("prevSongPage");
  let nextBtn = document.getElementById("nextSongPage");

  playSelect();
  if(!themesClicked)
  {
    themesClicked = true;
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "0.0";
    optionz.style.opacity = "0.0";
    themes.style.opacity = "1";
    titleScreens.style.opacity = "0.0";
    optionzOST.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "80%";
    howToPlayMenu.style.zIndex = "99";
    menu.style.zIndex = "99";
    optionz.style.zIndex = "99";
    themes.style.zIndex = "100";
    titleScreens.style.zIndex = "99";
    optionzOST.style.zIndex = "99";
  }
  else
  {
    themesClicked = false;
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "0.0";
    optionz.style.opacity = "1";
    themes.style.opacity = "0.0";
    titleScreens.style.opacity = "0.0";
    optionzOST.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "80%";
  }

  blue.addEventListener("click", ()=>{
    prevBtn.style.animation = "10000ms ease-in-out infinite color-change04";
    nextBtn.style.animation = "10000ms ease-in-out infinite color-change04";
    creditsMenu.style.animation = "10000ms ease-in-out infinite color-change04";
    howToPlayMenu.style.animation = "10000ms ease-in-out infinite color-change04";
    menu.style.animation = "10000ms ease-in-out infinite color-change04";
    optionz.style.animation = "10000ms ease-in-out infinite color-change04";
    optionzOST.style.animation = "10000ms ease-in-out infinite color-change04";
    themes.style.animation = "10000ms ease-in-out infinite color-change04";
    titleScreens.style.animation = "10000ms ease-in-out infinite color-change04";
    saveThemePreferences();
  })

  grey.addEventListener("click", ()=>{
    prevBtn.style.animation = "10000ms ease-in-out infinite color-change05";
    nextBtn.style.animation = "10000ms ease-in-out infinite color-change05";
    creditsMenu.style.animation = "10000ms ease-in-out infinite color-change05";
    howToPlayMenu.style.animation = "10000ms ease-in-out infinite color-change05";
    menu.style.animation = "10000ms ease-in-out infinite color-change05";
    optionz.style.animation = "10000ms ease-in-out infinite color-change05";
    optionzOST.style.animation = "10000ms ease-in-out infinite color-change05";
    themes.style.animation = "10000ms ease-in-out infinite color-change05";
    titleScreens.style.animation = "10000ms ease-in-out infinite color-change05";
    saveThemePreferences();
  })

  inverse.addEventListener("click", ()=>{
    prevBtn.style.animation = "10000ms ease-in-out infinite color-change";
    nextBtn.style.animation = "10000ms ease-in-out infinite color-change";
    creditsMenu.style.animation = "10000ms ease-in-out infinite color-change02";
    howToPlayMenu.style.animation = "10000ms ease-in-out infinite color-change02";
    menu.style.animation = "10000ms ease-in-out infinite color-change02";
    optionz.style.animation = "10000ms ease-in-out infinite color-change02";
    optionzOST.style.animation = "10000ms ease-in-out infinite color-change02";
    themes.style.animation = "10000ms ease-in-out infinite color-change02";
    titleScreens.style.animation = "10000ms ease-in-out infinite color-change02";
    saveThemePreferences();
  })

  red.addEventListener("click", ()=>{
    prevBtn.style.animation = "10000ms ease-in-out infinite color-change02";
    nextBtn.style.animation = "10000ms ease-in-out infinite color-change02";
    creditsMenu.style.animation = "10000ms ease-in-out infinite color-change";
    howToPlayMenu.style.animation = "10000ms ease-in-out infinite color-change";
    menu.style.animation = "10000ms ease-in-out infinite color-change";
    optionz.style.animation = "10000ms ease-in-out infinite color-change";
    optionzOST.style.animation = "10000ms ease-in-out infinite color-change";
    themes.style.animation = "10000ms ease-in-out infinite color-change";
    titleScreens.style.animation = "10000ms ease-in-out infinite color-change";
    saveThemePreferences();
  })

  yellow.addEventListener("click", ()=>{
    prevBtn.style.animation = "10000ms ease-in-out infinite color-change03";
    nextBtn.style.animation = "10000ms ease-in-out infinite color-change03";
    creditsMenu.style.animation = "10000ms ease-in-out infinite color-change03";
    howToPlayMenu.style.animation = "10000ms ease-in-out infinite color-change03";
    menu.style.animation = "10000ms ease-in-out infinite color-change03";
    optionz.style.animation = "10000ms ease-in-out infinite color-change03";
    optionzOST.style.animation = "10000ms ease-in-out infinite color-change03";
    themes.style.animation = "10000ms ease-in-out infinite color-change03";
    titleScreens.style.animation = "10000ms ease-in-out infinite color-change03";
    saveThemePreferences();
  })

}

function creditsAppear()
{

  playSonOfaNice();
  credits = false;
  
  if(!credits)
  {
    credits = true;
    creditsMenu.style.opacity = "1";
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "0.0";
    optionz.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    titleScreens.style.opacity = "0.0";
    optionzOST.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "77%";
    creditsMenu.style.zIndex = "100";
    howToPlayMenu.style.zIndex = "99";
    menu.style.zIndex = "99";
    optionz.style.zIndex = "99";
    themes.style.zIndex = "99";
    titleScreens.style.zIndex = "99";
    optionzOST.style.zIndex = "99";
  }
  else
  {
    credits = false;
    creditsMenu.style.opacity = "0.0";
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "1";
    optionz.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    titleScreens.style.opacity = "0.0";
    optionzOST.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "80%";
  }

}

function instructionsAppear()
{

  playSelect();
  instructions = false;
  if(!instructions)
  {
    instructions = true;
    creditsMenu.style.opacity = "0.0";
    howToPlayMenu.style.opacity = "1";
    menu.style.opacity = "0.0";
    optionz.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    titleScreens.style.opacity = "0.0";
    optionzOST.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "70%";
    creditsMenu.style.zIndex = "99";
    howToPlayMenu.style.zIndex = "100";
    menu.style.zIndex = "99";
    optionz.style.zIndex = "99";
    themes.style.zIndex = "99";
    titleScreens.style.zIndex = "99";
    optionzOST.style.zIndex = "99";
  }
  else
  {
    instructions = false;
    creditsMenu.style.opacity = "0.0";
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "1";
    optionz.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    titleScreens.style.opacity = "0.0";
    optionzOST.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "80%";
    creditsMenu.style.zIndex = "99";
    howToPlayMenu.style.zIndex = "99";
    menu.style.zIndex = "100";
    optionz.style.zIndex = "99";
    themes.style.zIndex = "99";
    titleScreens.style.zIndex = "99";
    optionzOST.style.zIndex = "99";
  }
}

function menuAppear()
{

  playSelect();
  if(!clicked)
  {
    clicked = true;
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "1";
    optionz.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    titleScreens.style.opacity = "0.0";
    optionzOST.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "80%";
    howToPlayMenu.style.zIndex = "99";
    menu.style.zIndex = "100";
    optionz.style.zIndex = "99";
    themes.style.zIndex = "99";
    titleScreens.style.zIndex = "99";
    optionzOST.style.zIndex = "99";
  }
  else
  {
    clicked = false;
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "0.0";
    optionz.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    titleScreens.style.opacity = "0.0";
    optionzOST.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "100%";
  }
}

function menuReturn()
{
  clicked = false;
  if(!clicked)
  {
    clicked = true;
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "1";
    creditsMenu.style.opacity = "0.0";
    optionz.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    titleScreens.style.opacity = "0.0";
    optionzOST.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "80%";
    creditsMenu.style.zIndex = "99";
    howToPlayMenu.style.zIndex = "99";
    menu.style.zIndex = "100";
    optionz.style.zIndex = "99";
    themes.style.zIndex = "99";
    titleScreens.style.zIndex = "99";
    optionzOST.style.zIndex = "99";
  }
  else
  {
    clicked = false;
    creditsMenu.style.opacity = "0.0";
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "0.0";
    optionz.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    titleScreens.style.opacity = "0.0";
    optionzOST.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "100%";
  }
}

function options()
{
  playSelect();
  optionsClicked = false;
  if(!optionsClicked)
  {
    optionsClicked = true;
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    optionz.style.opacity = "1";
    document.getElementById("backgroundVideo").style.width = "80%";
    howToPlayMenu.style.zIndex = "99";
    menu.style.zIndex = "99";
    optionz.style.zIndex = "100";
    themes.style.zIndex = "99";
    titleScreens.style.zIndex = "99";
    optionzOST.style.zIndex = "99";
  }
  else
  {
    optionsClicked = false;
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "1";
    optionz.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "80%";
    howToPlayMenu.style.zIndex = "99";
    menu.style.zIndex = "100";
    optionz.style.zIndex = "99";
    themes.style.zIndex = "99";
    titleScreens.style.zIndex = "99";
    optionzOST.style.zIndex = "99";
  }
}

function optionsReturn()
{
  playReturn();
  optionsClicked = false;
  if(!optionsClicked)
  {
    optionsClicked = true;
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "0.0";
    optionzOST.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    titleScreens.style.opacity = "0.0";
    optionz.style.opacity = "1";
    document.getElementById("backgroundVideo").style.width = "80%";
    howToPlayMenu.style.zIndex = "99";
    menu.style.zIndex = "99";
    optionz.style.zIndex = "100";
    themes.style.zIndex = "99";
    titleScreens.style.zIndex = "99";
    optionzOST.style.zIndex = "99";
  }
  else
  {
    optionsClicked = false;
    howToPlayMenu.style.opacity = "0.0";
    menu.style.opacity = "1";
    optionzOST.style.opacity = "0.0";
    themes.style.opacity = "0.0";
    titleScreens.style.opacity = "0.0";
    optionz.style.opacity = "0.0";
    document.getElementById("backgroundVideo").style.width = "80%";
    howToPlayMenu.style.zIndex = "99";
    menu.style.zIndex = "100";
    optionz.style.zIndex = "99";
    themes.style.zIndex = "99";
    titleScreens.style.zIndex = "99";
    optionzOST.style.zIndex = "99";
  }
}

function optionsOST()
{
    let aWayOfLife = document.getElementById("wayOfLife");
    let beneathMask = document.getElementById("beneathMask");
    let brandNewDays = document.getElementById("brandNewDays");
    let burnMyDread = document.getElementById("burnMyDread");
    let changingSeasons = document.getElementById("changingSeasons");
    let dance = document.getElementById("dance");
    let deepBreath = document.getElementById("deepBreath");
    let heartbreak = document.getElementById("heartbreak");

    let heaven = document.getElementById("heaven");
    let joy = document.getElementById("joy");
    let kimiNoKioku = document.getElementById("kimiNoKioku");
    let lastSurprise = document.getElementById("lastSurprise");
    let moreThanOneHeart = document.getElementById("moreThanOneHeart");
    let neverMore = document.getElementById("neverMore");
    let ourMoment = document.getElementById("ourMoment");
    let soulPhase = document.getElementById("soulPhase");
    let video = document.getElementById("backgroundVideo");



      if(!optionsOSTMenu)
      {
        optioptionsOSTMenuonsOST = true;
        optionz.style.opacity = "0.0";
        optionzOST.style.opacity = "1";
        document.getElementById("backgroundVideo").style.width = "77%";
        menu.style.zIndex = "98";
        optionz.style.zIndex = "99";
        titleScreens.style.zIndex = "97";
        optionzOST.style.zIndex = "100";
      }
      else
      {
        optionsOSTMenu = false;
        optionz.style.opacity = "1";
        optionzOST.style.opacity = "0.0";
        document.getElementById("backgroundVideo").style.width = "80%";
        menu.style.zIndex = "98";
        optionz.style.zIndex = "100";
        titleScreens.style.zIndex = "99";
        optionzOST.style.zIndex = "97";
      }


      document.getElementById("nextSongPage").addEventListener("click", ()=>{

          playSelect();
          pageNumber = 2;

            document.getElementById("wayOfLife").textContent = "Heaven";
            document.getElementById("beneathMask").textContent = "Joy";
            document.getElementById("brandNewDays").textContent = "Kimi no Kioku";
            document.getElementById("burnMyDread").textContent = "Last Surprise";
            document.getElementById("changingSeasons").textContent = "More Than One Heart";
            document.getElementById("dance").textContent = "Never More";
            document.getElementById("deepBreath").textContent = "Our Moment";
            document.getElementById("heartbreak").textContent = "Soul Phase";

      });

        document.getElementById("prevSongPage").addEventListener("click", ()=>{

            playSelect();
            pageNumber = 1;

            if(pageNumber === 1)
            {
              document.getElementById("wayOfLife").textContent = "A Way Of Life";
              document.getElementById("beneathMask").textContent = "Beneath the Mask";
              document.getElementById("brandNewDays").textContent = "Brand New Days";
              document.getElementById("burnMyDread").textContent = "Burn My Dread";
              document.getElementById("changingSeasons").textContent = "Changing Seasons";
              document.getElementById("dance").textContent = "Dance!";
              document.getElementById("deepBreath").textContent = "Deep breath";
              document.getElementById("heartbreak").textContent = "Heartbreak";
            }
        });


      aWayOfLife.addEventListener("click", ()=>{
        switch(pageNumber)
        {
          case 1:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/A Way Of Life.mp3";
          audio.play();
          saveOSTPreferences();
          break;
          case 2:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Heaven.mp3";
          audio.play();
          saveOSTPreferences();
          break;
        }
      });

      beneathMask.addEventListener("click", ()=>{
        switch(pageNumber)
        {
          case 1:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Beneath the Mask.mp3";
          audio.play();
          saveOSTPreferences();
          break;
          case 2:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Joy.mp3";
          audio.play();
          saveOSTPreferences();
          break;
        }
      });

      brandNewDays.addEventListener("click", ()=>{
        switch(pageNumber)
        {
          case 1:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Brand New Days.mp3";
          audio.play();
          saveOSTPreferences();
          break;
          case 2:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Kimi no Kioku.mp3";
          audio.play();
          saveOSTPreferences();
          break;
        }
      });

      burnMyDread.addEventListener("click", ()=>{
        switch(pageNumber)
        {
          case 1:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Burn My Dread.mp3";
          audio.play();
          saveOSTPreferences();
          break;
          case 2:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Last Surprise.mp3";
          audio.play();
          saveOSTPreferences();
          break;
        }
      });

      changingSeasons.addEventListener("click", ()=>{
        switch(pageNumber)
        {
          case 1:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Changing Seasons.mp3";
          audio.play();
          saveOSTPreferences();
          break;
          case 2:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/More Than One Heart.mp3";
          audio.play();
          saveOSTPreferences();
          break;
        }
      });

      dance.addEventListener("click", ()=>{
        switch(pageNumber)
        {
          case 1:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Dance!.mp3";
          audio.play();
          saveOSTPreferences();
          break;
          case 2:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Never More.mp3";
          audio.play();
          saveOSTPreferences();
          break;
        }
      });

      deepBreath.addEventListener("click", ()=>{
        switch(pageNumber)
        {
          case 1:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Deep breath Deep breath.mp3";
          audio.play();
          saveOSTPreferences();
          break;
          case 2:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Our Moment.mp3";
          audio.play();
          saveOSTPreferences();
          break;
        }
      });

      heartbreak.addEventListener("click", ()=>{
        switch(pageNumber)
        {
          case 1:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Heartbreak, Heartbreak.mp3";
          audio.play();
          saveOSTPreferences();
          break;
          case 2:
          playSelect();
          video.muted = true;
          var audio = document.getElementById("audio1");
          audio.src = "OST/Soul Phase.mp3";
          audio.play();
          saveOSTPreferences();
          break;
        }
      });

}

function playError()
{
  document.getElementById("error").play();
}

function playkickSomeAss()
{
  document.getElementById("kickSomeAss").play();
}

function playReturn()
{
  document.getElementById('return').play();
}

function playSelect()
{
  document.getElementById('select').play();
}

function playSonOfaNice()
{
  document.getElementById("sonOfaNice").play();
}

function toTitles()
{
    playSelect();
    if(!titlesClicked)
    {
      titlesClicked = true;
      howToPlayMenu.style.opacity = "0.0";
      optionz.style.opacity = "0.0";
      themes.style.opacity = "0.0";
      titleScreens.style.opacity = "1";
      document.getElementById("backgroundVideo").style.width = "80%";
      howToPlayMenu.style.zIndex = "99";
      menu.style.zIndex = "99";
      optionz.style.zIndex = "99";
      themes.style.zIndex = "99";
      titleScreens.style.zIndex = "100";
      optionzOST.style.zIndex = "99";
    }
    else
    {
      titlesClicked = false;
      howToPlayMenu.style.opacity = "0.0";
      optionz.style.opacity = "1";
      themes.style.opacity = "0.0";
      titleScreens.style.opacity = "0.0";
      document.getElementById("backgroundVideo").style.width = "80%";
      howToPlayMenu.style.zIndex = "99";
      menu.style.zIndex = "99";
      optionz.style.zIndex = "100";
      themes.style.zIndex = "99";
      titleScreens.style.zIndex = "99";
      optionzOST.style.zIndex = "99";
    }
}

function titleVideo()
{
    let video = document.getElementById("backgroundVideo");

    let p3 = document.getElementById("p3");
    let p3p = document.getElementById("p3p");
    let p3d = document.getElementById("p3d");
    let p3FES = document.getElementById("p3FES");

    let p4a = document.getElementById("p4a");
    let p4g = document.getElementById("p4g");

    let p5 = document.getElementById("p5");

      p3.addEventListener("click", ()=>{
      playSelect();
      video.src = "Title Screens/P3 Opening.mp4";
      video.play();
      saveVideoPreferences();
    });

      p3p.addEventListener("click", ()=>{
      playSelect();
      video.src = "Title Screens/P3P.mp4";
      video.play();
      saveVideoPreferences();
    });

      p3d.addEventListener("click", ()=>{
      playSelect();
      video.src = "Title Screens/P3 Dancing.mp4";
      video.play();
      saveVideoPreferences();
    });

    p3FES.addEventListener("click", ()=>{
    playSelect();
    video.src = "Title Screens/P3 FES.mp4";
    video.play();
    saveVideoPreferences();
  });



    p4g.addEventListener("click", ()=>{
    playSelect();
    video.src = "Title Screens/P4G.mp4";
    video.play();
    saveVideoPreferences();
  });

    p4a.addEventListener("click", ()=>{
    playSelect();
    video.src = "Title Screens/P4 Animation.mp4";
    video.play();
    saveVideoPreferences();
  });

    p5.addEventListener("click", ()=>{
    playSelect();
    video.src = "Title Screens/P5.mp4";
    video.play();
    saveVideoPreferences();
  });

}
