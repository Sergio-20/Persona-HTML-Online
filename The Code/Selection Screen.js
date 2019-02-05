let backgrounds = ["../Title Screens/P3 Dancing.mp4","../Title Screens/P4 Dancing.mp4","../Title Screens/P5 Dancing.mp4"];
let bgm = ["../OST/P3 Dancing.mp3","../OST/P4 Dancing.mp3","../OST/P5 Dancing.mp3"];

let audio = document.getElementById("audio");
let videoPlayer = document.getElementById("videoPlayer");

let randomInt = Math.floor(Math.random() * 3);

let characterActive = false;
let stageActive = false;

let beginGame = document.getElementById("loadSelections");

/*Character Animations*/
let AigisAnim = ["../Characters/Aigis/Aigis-Idle.gif"];
let ChieAnim = ["../Characters/Chie Satonaka/Chie-Idle.gif"];
let KumaAnim = ["../Characters/Kuma/Kuma-Idle.gif"];
let LabrysAnim = ["../Characters/Labrys/Labrys-Idle.gif"];
let MitsuruAnim = ["../Characters/Mitsuru Kirijo/Mitsuru-Idle.gif"];
let ShoAnim = ["../Characters/Sho Minazuki/Sho-Idle.gif"];
let YosukeAnim = ["../Characters/Yosuke Hanamura/Yosuke-Idle.gif"];
let YukikoAnim = ["../Characters/Yukiko Amagi/Yukiko-Idle.gif"];
let YuAnim = ["../Characters/Yu Narukami/Yu-Narukami-Idle.gif"];

let botAnim = [["../Characters/Aigis/Aigis-Idle.gif","../Characters/Chie Satonaka/Chie-Idle.gif","../Characters/Kuma/Kuma-Idle.gif"],
["../Characters/Labrys/Labrys-Idle.gif","../Characters/Mitsuru Kirijo/Mitsuru-Idle.gif","../Characters/Sho Minazuki/Sho-Idle.gif"],
["../Characters/Yosuke Hanamura/Yosuke-Idle.gif","../Characters/Yukiko Amagi/Yukiko-Idle.gif","../Characters/Yu Narukami/Yu-Narukami-Idle.gif"]];

let = botNameArray = [
  ["Aigis","Chie","Kuma"],
  ["Labrys","Mitsuru","Sho"],
  ["Yosuke","Yukiko","Yu"]
];

let botName = "";

let preventSameCharacter = "";

let currentAnim = "";
let currentBotAnim = "";

/*End of character animations*/

let stage = ["../Stages/Entrance.jpg","../Stages/Gym.jpg","../Stages/Hallway.jpg","../Stages/Lockers.jpg","../Stages/Music-Room.jpg","../Stages/P4.jpg"];
let selectedStage = "";

//Created Elements
let player = document.createElement("IMG");
let bot = document.createElement("IMG");
let stageImg = document.createElement("IMG");
let theBotName = document.createElement("H3");
let username = document.createElement("H3");

function randomBackground()
{
  videoPlayer.src = backgrounds[randomInt];
  videoPlayer.muted = true;
  videoPlayer.play();
  videoPlayer.style.minHeight = "100%";
  videoPlayer.style.minWidth = "100%";

  audio.src = backgrounds[randomInt];
  audio.play();
}

function generateBot()
{
  let randomRow = Math.floor(Math.random() * 3);
  let randomColumn = Math.floor(Math.random() * 3);
  currentBotAnim = botAnim[randomRow][randomColumn];
  botName = botNameArray[randomRow][randomColumn];
  if(preventSameCharacter === botName)
  {
    generateBot();
  }

  //Generate Bot Stats:

  if(botName === botNameArray[0][0])
  {
    cpuAttackValue = 7;
    cpuBlockValue = 10;
    cpuHealthValue = 120;
    cpuHealthBar.setAttribute("value", "120");
    cpuHealthBar.setAttribute("max", "120");
  }
  else if(botName === botNameArray[0][1])
  {
    cpuAttackValue = 5;
    cpuBlockValue = 4;
    cpuHealthValue = 90;
    cpuHealthBar.setAttribute("value", "90");
    cpuHealthBar.setAttribute("max", "90");
  }
  else if(botName === botNameArray[0][2])
  {
    cpuAttackValue = 7;
    cpuBlockValue = 9;
    cpuHealthValue = 130;
    cpuHealthBar.setAttribute("value", "130");
    cpuHealthBar.setAttribute("max", "130");
  }
  else if(botName === botNameArray[1][0])
  {
    cpuAttackValue = 8;
    cpuBlockValue = 5;
    cpuHealthValue = 100;
    cpuHealthBar.setAttribute("value", "100");
    cpuHealthBar.setAttribute("max", "100");
  }
  else if(botName === botNameArray[1][1])
  {
    cpuAttackValue = 7;
    cpuBlockValue = 3;
    cpuHealthValue = 115;
    cpuHealthBar.setAttribute("value", "115");
    cpuHealthBar.setAttribute("max", "115");
  }
  else if(botName === botNameArray[1][2])
  {
    cpuAttackValue = 6;
    cpuBlockValue = 4;
    cpuHealthValue = 115;
    cpuHealthBar.setAttribute("value", "115");
    cpuHealthBar.setAttribute("max", "115");
  }
  else if(botName === botNameArray[2][0])
  {
    cpuAttackValue = 5;
    cpuBlockValue = 8;
    cpuHealthValue = 105;
    cpuHealthBar.setAttribute("value", "105");
    cpuHealthBar.setAttribute("max", "105");
  }
  else if(botName === botNameArray[2][1])
  {
    cpuAttackValue = 6;
    cpuBlockValue = 6;
    cpuHealthValue = 100;
    cpuHealthBar.setAttribute("value", "100");
    cpuHealthBar.setAttribute("max", "100");
  }
  else if(botName === botNameArray[2][2])
  {
    cpuAttackValue = 7;
    cpuBlockValue = 7;
    cpuHealthValue = 110;
    cpuHealthBar.setAttribute("value", "110");
    cpuHealthBar.setAttribute("max", "110");
  }

}


function returnToTitle()
{

  window.open("Title.html", "_Self");
}

function selectedCharacter()
{
  let Aigis = document.getElementById("Aigis");
  let Chie = document.getElementById("Chie");
  let Kuma = document.getElementById("Kuma");
  let Labrys = document.getElementById("Labrys");
  let Mitsuru = document.getElementById("Mitsuru");
  let Sho = document.getElementById("Sho");
  let Yosuke = document.getElementById("Yosuke");
  let Yukiko = document.getElementById("Yukiko");
  let Yu = document.getElementById("Yu");

      Aigis.addEventListener("click", ()=>{
        if(characterActive === false)
        {

            document.getElementById("statAttack").textContent = `Attack: 7`;
            document.getElementById("statBlock").textContent = `Block: 10`;
            document.getElementById("statHealth").textContent = `Health: 120`;
            document.getElementById("statSpeed").textContent = `Speed: 12`;

            characterActive = true;
            Aigis.style.boxShadow = "10px 10px lime";
            Chie.style.boxShadow = "";
            Kuma.style.boxShadow = "";
            Labrys.style.boxShadow = "";
            Mitsuru.style.boxShadow = "";
            Sho.style.boxShadow = "";
            Yosuke.style.boxShadow = "";
            Yukiko.style.boxShadow = "";
            Yu.style.boxShadow = "";

            sessionStorage.setItem("Aigis-Save", AigisAnim[0].toString() );
            currentAnim = sessionStorage.getItem("Aigis-Save");

            userAttackValue = 7;
            userBlockValue = 10;
            userHealthValue = 120;
            userHealthBar.setAttribute("max", "120");


        }
        else
        {
            characterActive = false;
            userAttackValue = 5;
            userBlockValue = 5;
            userHealthValue = 100;
            userHealthBar.setAttribute("max", "100");
        }
      });

      Chie.addEventListener("click", ()=>{
        if(characterActive === false)
        {

            document.getElementById("statAttack").textContent = `Attack: 5`;
            document.getElementById("statBlock").textContent = `Block: 4`;
            document.getElementById("statHealth").textContent = `Health: 90`;
            document.getElementById("statSpeed").textContent = `Speed: 22`;

            characterActive = true;
            Aigis.style.boxShadow = "";
            Chie.style.boxShadow = "10px 10px lime";
            Kuma.style.boxShadow = "";
            Labrys.style.boxShadow = "";
            Mitsuru.style.boxShadow = "";
            Sho.style.boxShadow = "";
            Yosuke.style.boxShadow = "";
            Yukiko.style.boxShadow = "";
            Yu.style.boxShadow = "";

            sessionStorage.setItem("Chie-Save", ChieAnim[0].toString() );
            currentAnim = sessionStorage.getItem("Chie-Save");

            preventSameCharacter = botNameArray[0][1];

            userAttackValue = 5;
            userBlockValue = 4;
            userHealthValue = 90;
            userHealthBar.setAttribute("max", "90");
        }
        else
        {
            characterActive = false;
            userAttackValue = 5;
            userBlockValue = 5;
            userHealthValue = 100;
            userHealthBar.setAttribute("max", "100");
        }
      });

      Kuma.addEventListener("click", ()=>{
        if(characterActive === false)
        {

            document.getElementById("statAttack").textContent = `Attack: 7`;
            document.getElementById("statBlock").textContent = `Block: 9`;
            document.getElementById("statHealth").textContent = `Health: 130`;
            document.getElementById("statSpeed").textContent = `Speed: 8`;

            characterActive = true;
            Aigis.style.boxShadow = "";
            Chie.style.boxShadow = "";
            Kuma.style.boxShadow = "10px 10px lime";
            Labrys.style.boxShadow = "";
            Mitsuru.style.boxShadow = "";
            Sho.style.boxShadow = "";
            Yosuke.style.boxShadow = "";
            Yukiko.style.boxShadow = "";
            Yu.style.boxShadow = "";

            sessionStorage.setItem("Kuma-Save", KumaAnim[0].toString() );
            currentAnim = sessionStorage.getItem("Kuma-Save");

            preventSameCharacter = botNameArray[0][2];

            userAttackValue = 7;
            userBlockValue = 9;
            userHealthValue = 130;
            userHealthBar.setAttribute("max", "130");
        }
        else
        {
            characterActive = false;
            userAttackValue = 5;
            userBlockValue = 5;
            userHealthValue = 100;
            userHealthBar.setAttribute("max", "100");
        }
      });

      Labrys.addEventListener("click", ()=>{
        if(characterActive === false)
        {

            document.getElementById("statAttack").textContent = `Attack: 8`;
            document.getElementById("statBlock").textContent = `Block: 5`;
            document.getElementById("statHealth").textContent = `Health: 100`;
            document.getElementById("statSpeed").textContent = `Speed: 16`;

            characterActive = true;
            Aigis.style.boxShadow = "";
            Chie.style.boxShadow = "";
            Kuma.style.boxShadow = "";
            Labrys.style.boxShadow = "10px 10px lime";
            Mitsuru.style.boxShadow = "";
            Sho.style.boxShadow = "";
            Yosuke.style.boxShadow = "";
            Yukiko.style.boxShadow = "";
            Yu.style.boxShadow = "";

            sessionStorage.setItem("Labrys-Save", LabrysAnim[0].toString() );
            currentAnim = sessionStorage.getItem("Labrys-Save");

            preventSameCharacter = botNameArray[1][0];

            userAttackValue = 8;
            userBlockValue = 5;
            userHealthValue = 100;
            userHealthBar.setAttribute("max", "100");
        }
        else
        {
            characterActive = false;
            userAttackValue = 5;
            userBlockValue = 5;
            userHealthValue = 100;
            userHealthBar.setAttribute("max", "100");
        }
      });

      Mitsuru.addEventListener("click", ()=>{
        if(characterActive === false)
        {

            document.getElementById("statAttack").textContent = `Attack: 7`;
            document.getElementById("statBlock").textContent = `Block: 3`;
            document.getElementById("statHealth").textContent = `Health: 115`;
            document.getElementById("statSpeed").textContent = `Speed: 28`;

            characterActive = true;
            Aigis.style.boxShadow = "";
            Chie.style.boxShadow = "";
            Kuma.style.boxShadow = "";
            Labrys.style.boxShadow = "";
            Mitsuru.style.boxShadow = "10px 10px lime";
            Sho.style.boxShadow = "";
            Yosuke.style.boxShadow = "";
            Yukiko.style.boxShadow = "";
            Yu.style.boxShadow = "";

            sessionStorage.setItem("Mitsuru-Save", MitsuruAnim[0].toString() );
            currentAnim = sessionStorage.getItem("Mitsuru-Save");

            preventSameCharacter = botNameArray[1][1];

            userAttackValue = 7;
            userBlockValue = 3;
            userHealthValue = 115;
            userHealthBar.setAttribute("max", "115");
        }
        else
        {
            characterActive = false;
            userAttackValue = 5;
            userBlockValue = 5;
            userHealthValue = 100;
            userHealthBar.setAttribute("max", "100");
        }
      });

      Sho.addEventListener("click", ()=>{
        if(characterActive === false)
        {

            document.getElementById("statAttack").textContent = `Attack: 6`;
            document.getElementById("statBlock").textContent = `Block: 4`;
            document.getElementById("statHealth").textContent = `Health: 115`;
            document.getElementById("statSpeed").textContent = `Speed: 28`;

            characterActive = true;
            Aigis.style.boxShadow = "";
            Chie.style.boxShadow = "";
            Kuma.style.boxShadow = "";
            Labrys.style.boxShadow = "";
            Mitsuru.style.boxShadow = "";
            Sho.style.boxShadow = "10px 10px lime";
            Yosuke.style.boxShadow = "";
            Yukiko.style.boxShadow = "";
            Yu.style.boxShadow = "";

            sessionStorage.setItem("Sho-Save", ShoAnim[0].toString() );
            currentAnim = sessionStorage.getItem("Sho-Save");

            preventSameCharacter = botNameArray[1][2];

            userAttackValue = 6;
            userBlockValue = 4;
            userHealthValue = 115;
            userHealthBar.setAttribute("max", "115");
        }
        else
        {
            characterActive = false;
            userAttackValue = 5;
            userBlockValue = 5;
            userHealthValue = 100;
            userHealthBar.setAttribute("max", "115");
        }
      });

      Yosuke.addEventListener("click", ()=>{
        if(characterActive === false)
        {

            document.getElementById("statAttack").textContent = `Attack: 5`;
            document.getElementById("statBlock").textContent = `Block: 8`;
            document.getElementById("statHealth").textContent = `Health: 105`;
            document.getElementById("statSpeed").textContent = `Speed: 16`;

            characterActive = true;
            Aigis.style.boxShadow = "";
            Chie.style.boxShadow = "";
            Kuma.style.boxShadow = "";
            Labrys.style.boxShadow = "";
            Mitsuru.style.boxShadow = "";
            Sho.style.boxShadow = "";
            Yosuke.style.boxShadow = "10px 10px lime";
            Yukiko.style.boxShadow = "";
            Yu.style.boxShadow = "";

            sessionStorage.setItem("Yosuke-Save", YosukeAnim[0].toString() );
            currentAnim = sessionStorage.getItem("Yosuke-Save");

            preventSameCharacter = botNameArray[2][0];

            userAttackValue = 5;
            userBlockValue = 8;
            userHealthValue = 105;
            userHealthBar.setAttribute("max", "105");
        }
        else
        {
            characterActive = false;
            userAttackValue = 5;
            userBlockValue = 5;
            userHealthValue = 105;
            userHealthBar.setAttribute("max", "105");
        }
      });

      Yukiko.addEventListener("click", ()=>{

        if(characterActive === false)
        {

            document.getElementById("statAttack").textContent = `Attack: 6`;
            document.getElementById("statBlock").textContent = `Block: 6`;
            document.getElementById("statHealth").textContent = `Health: 100`;
            document.getElementById("statSpeed").textContent = `Speed: 16`;

            characterActive = true;
            Aigis.style.boxShadow = "";
            Chie.style.boxShadow = "";
            Kuma.style.boxShadow = "";
            Labrys.style.boxShadow = "";
            Mitsuru.style.boxShadow = "";
            Sho.style.boxShadow = "";
            Yosuke.style.boxShadow = "";
            Yukiko.style.boxShadow = "10px 10px lime";
            Yu.style.boxShadow = "";

            sessionStorage.setItem("Yukiko-Save", YukikoAnim[0].toString() );
            currentAnim = sessionStorage.getItem("Yukiko-Save");

            preventSameCharacter = botNameArray[2][1];

            userAttackValue = 6;
            userBlockValue = 6;
            userHealthValue = 100;
            userHealthBar.setAttribute("max", "100");
        }
        else
        {
            characterActive = false;
            userAttackValue = 5;
            userBlockValue = 5;
            userHealthValue = 100;
            userHealthBar.setAttribute("max", "100");
        }
      });

      Yu.addEventListener("click", ()=>{
        if(characterActive === false)
        {

            document.getElementById("statAttack").textContent = `Attack: 7`;
            document.getElementById("statBlock").textContent = `Block: 7`;
            document.getElementById("statHealth").textContent = `Health: 110`;
            document.getElementById("statSpeed").textContent = `Speed: 20`;

            characterActive = true;
            Aigis.style.boxShadow = "";
            Chie.style.boxShadow = "";
            Kuma.style.boxShadow = "";
            Labrys.style.boxShadow = "";
            Mitsuru.style.boxShadow = "";
            Sho.style.boxShadow = "";
            Yosuke.style.boxShadow = "";
            Yukiko.style.boxShadow = "";
            Yu.style.boxShadow = "10px 10px lime";

            sessionStorage.setItem("Yu-Save", YuAnim[0].toString() );
            currentAnim = sessionStorage.getItem("Yu-Save");

            preventSameCharacter = botNameArray[2][2];

            userAttackValue = 7;
            userBlockValue = 7;
            userHealthValue = 110;
            userHealthBar.setAttribute("max", "110");
        }
        else
        {
            characterActive = false;
            userAttackValue = 5;
            userBlockValue = 5;
            userHealthValue = 100;
            userHealthBar.setAttribute("max", "100");
        }
      });

}

function stageSelect()
{
  let entrance = document.getElementById("Entrance");
  let gym = document.getElementById("Gym");
  let hallway = document.getElementById("Hallway");
  let lockers = document.getElementById("Lockers");
  let musicRoom = document.getElementById("Music-Room");
  let p4 = document.getElementById("P4");

  let selectFX = document.getElementById("select");

  entrance.addEventListener("click", ()=>{
    if(stageActive === false)
    {
        stageActive = true;
        selectFX.play();
        entrance.style.boxShadow = "10px 10px lime";
        gym.style.boxShadow = "";
        hallway.style.boxShadow = "";
        lockers.style.boxShadow = "";
        musicRoom.style.boxShadow = "";
        p4.style.boxShadow = "";

        sessionStorage.setItem("Entrance", stage[0].toString());
        selectedStage = sessionStorage.getItem("Entrance");
    }
    else
    {
        stageActive = false;
    }
  });

  gym.addEventListener("click", ()=>{
    if(stageActive === false)
    {
        stageActive = true;
        selectFX.play();
        entrance.style.boxShadow = "";
        gym.style.boxShadow = "10px 10px lime";
        hallway.style.boxShadow = "";
        lockers.style.boxShadow = "";
        musicRoom.style.boxShadow = "";
        p4.style.boxShadow = "";

        sessionStorage.setItem("Gym", stage[1].toString());
        selectedStage = sessionStorage.getItem("Gym");
    }
    else
    {
        stageActive = false;
    }
  });

  hallway.addEventListener("click", ()=>{
    if(stageActive === false)
    {
        stageActive = true;
        selectFX.play();
        entrance.style.boxShadow = "";
        gym.style.boxShadow = "";
        hallway.style.boxShadow = "10px 10px lime";
        lockers.style.boxShadow = "";
        musicRoom.style.boxShadow = "";
        p4.style.boxShadow = "";

        sessionStorage.setItem("Hallway", stage[2].toString());
        selectedStage = sessionStorage.getItem("Hallway");
    }
    else
    {
        stageActive = false;
    }
  });

  lockers.addEventListener("click", ()=>{
    if(stageActive === false)
    {
        stageActive = true;
        selectFX.play();
        entrance.style.boxShadow = "";
        gym.style.boxShadow = "";
        hallway.style.boxShadow = "";
        lockers.style.boxShadow = "10px 10px lime";
        musicRoom.style.boxShadow = "";
        p4.style.boxShadow = "";

        sessionStorage.setItem("Lockers", stage[3].toString());
        selectedStage = sessionStorage.getItem("Lockers");
    }
    else
    {
        stageActive = false;
    }
  });

  musicRoom.addEventListener("click", ()=>{
    if(stageActive === false)
    {
        stageActive = true;
        selectFX.play();
        entrance.style.boxShadow = "";
        gym.style.boxShadow = "";
        hallway.style.boxShadow = "";
        lockers.style.boxShadow = "";
        musicRoom.style.boxShadow = "10px 10px lime";
        p4.style.boxShadow = "";

        sessionStorage.setItem("Music_Room", stage[4].toString());
        selectedStage = sessionStorage.getItem("Music_Room");
    }
    else
    {
        stageActive = false;
    }
  });

  p4.addEventListener("click", ()=>{
    if(stageActive === false)
    {
        stageActive = true;
        selectFX.play();
        entrance.style.boxShadow = "";
        gym.style.boxShadow = "";
        hallway.style.boxShadow = "";
        lockers.style.boxShadow = "";
        musicRoom.style.boxShadow = "";
        p4.style.boxShadow = "10px 10px lime";

        sessionStorage.setItem("P4", stage[5].toString());
        selectedStage = sessionStorage.getItem("P4");
    }
    else
    {
        stageActive = false;
    }
  });

}

//Loads and creates gameplay aesthetics
function loadSelections()
{
  beginGame.addEventListener("click",()=>{

    if(characterActive === true && stageActive === true)
    {
      //Clear Screen
      document.body.innerHTML = "";
      document.body.style.animation = "none";
      document.body.style.backgroundColor = "white";
      document.title = "Gameplay";

      /*Method Calls*/
      generateBot();
      OST();
      /*End od Method Calls*/


      //Modify Selections
      player.id = "player";
      player.src = currentAnim;
      player.height = "200";
      player.width = "200";

      bot.id = "bot";
      bot.src = currentBotAnim;
      bot.height = "200";
      bot.width = "200";

      stageImg.id = "stageImg";
      stageImg.src = selectedStage;
      stageImg.height = "0%";
      stageImg.width = "0%";
      document.body.setAttribute("style", "background-image: url("+ selectedStage +"); background-repeat: no-repeat; background-size: cover;");

      theBotName.innerHTML = botName;
      theBotName.setAttribute("style", "background-color: grey; color: white; position: absolute; right: 0.5em;");

      username.innerHTML = JSON.parse(localStorage.getItem("client"));
      username.setAttribute("style", "background-color: grey; color: white; position: absolute; left: 0.5em;");

      //Load Selections
      document.body.appendChild(player);
      document.body.appendChild(bot);
      document.body.appendChild(stageImg);

      //Append created health bars found in Gameplay.js
      document.body.appendChild(userHealthBar);
      document.body.appendChild(cpuHealthBar);
      document.body.appendChild(theBotName);
      document.body.appendChild(username);
      document.body.appendChild(audio);

      //Spawn Points
      player.setAttribute("style", "position: absolute; top: 28em; transform: scaleX(-1);");
      bot.setAttribute("style", "position: absolute; top: 28em; right: 0.5em;");

      }
    else {document.getElementById("error").play();}
  });
}

function resetSelections()
{
  botName = "";
  currentAnim = "";
  currentBotAnim = "";
  selectedStage = "";
}
