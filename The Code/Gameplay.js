//Manages actual gameplay and mechanics
document.addEventListener("keydown", onKeyDownHandler);
document.addEventListener("keyup", onKeyUpHandler);


let userHealthBar = document.createElement("PROGRESS");
let cpuHealthBar = document.createElement("PROGRESS");


let playerXPos = 0;
let playerYpos = 28;

let cpuXPos = 1100;
let cpuYPos = 28;

let blockingActive = false;
let cpuBlockingActive = false;

let playerIsAttacking = false;

let playerMoveRight = false;
let playerMoveLeft = false;

let ost = [["../OST/A Way Of Life.mp3", "../OST/Beneath the Mask.mp3", "../OST/Brand New Days.mp3", "../OST/Burn My Dread.mp3"],
["../OST/Changing Seasons.mp3", "../OST/Dance!.mp3", "../OST/Deep breath Deep breath.mp3", "../OST/Heartbreak, Heartbreak.mp3"],
["../OST/Heaven.mp3", "../OST/Joy.mp3", "../OST/Kimi no Kioku.mp3", "../OST/Last Surprise.mp3"],
["../OST/More Than One Heart.mp3", "../OST/Never More.mp3", "../OST/Our Moment.mp3", "../OST/Soul Phase.mp3"]];

class Person{

  constructor(attack, block, health){
    this.attack = 5;
    this.block = 5;
    this.health = 100;
  }

}

class Player extends Person{

  constructor(){
      super();
  }

  attackCPU()
  {
      if(blockingActive && (playerXPos - cpuXPos <= 80 && playerXPos - cpuXPos > 0))
      {
        cpuHealthValue = cpuHealthValue - Math.abs(userAttackValue - cpuBlockValue);
        return (cpuHealthBar.setAttribute("value", cpuHealthValue));
      }
      else if(!blockingActive && (playerXPos - cpuXPos <= 80 && playerXPos - cpuXPos > 0))
      {
        cpuHealthValue -= userAttackValue;
        return (cpuHealthBar.setAttribute("value", cpuHealthValue));
      }

  }

}

class CPU extends Person{

  constructor(){
    super();
  }

  attackPlayer()
  {

      cpuBlockingActive = false;

      if(cpuBlockingActive && (playerXPos - cpuXPos <= 80 && playerXPos - cpuXPos > 0))
      {
        console.log("ATK");
        if(botName === "Aigis"){
          bot.src = "../Characters/Aigis/aigis-attack.gif";
        }
        else if(botName === "Chie"){
          bot.src = "../Characters/Chie Satonaka/chie-attack.gif";
        }
        else if(botName === "Kuma"){
          bot.src = "../Characters/Kuma/kuma-attack.gif";
        }
        else if(botName === "Labrys"){
          bot.src = "../Characters/Labrys/labrys-attack.gif";
        }
        else if(botName === "Mitsuru"){
          bot.src = "../Characters/Mitsuru Kirijo/mitsuru-attack.gif";
        }
        else if(botName === "Sho"){
          bot.src = "../Characters/Sho Minazuki/sho-attack.gif";
        }
        else if(botName === "Yosuke"){
          bot.src = "../Characters/Yosuke Hanamura/yosuke-attack.gif";
        }
        else if(botName === "Yukiko"){
          bot.src = "../Characters/Yukiko Amagi/yukiko-attack.gif";
        }
        else if(botName === "Yu"){
          bot.src = "../Characters/Yu Narukami/yu-attack.gif";
        }
        userHealthValue = userHealthValue - Math.abs(cpuAttackValue - userBlockValue);
        console.log("USER: " + userHealthValue);
        return (userHealthBar.setAttribute("value", userHealthValue));
      }
      else if(!cpuBlockingActive && (playerXPos - cpuXPos <= 80 && playerXPos - cpuXPos > 0))
      {
        console.log("ATK");
        if(botName === "Aigis"){
          bot.src = "../Characters/Aigis/aigis-attack.gif";
        }
        else if(botName === "Chie"){
          bot.src = "../Characters/Chie Satonaka/chie-attack.gif";
        }
        else if(botName === "Kuma"){
          bot.src = "../Characters/Kuma/kuma-attack.gif";
        }
        else if(botName === "Labrys"){
          bot.src = "../Characters/Labrys/labrys-attack.gif";
        }
        else if(botName === "Mitsuru"){
          bot.src = "../Characters/Mitsuru Kirijo/mitsuru-attack.gif";
        }
        else if(botName === "Sho"){
          bot.src = "../Characters/Sho Minazuki/sho-attack.gif";
        }
        else if(botName === "Yosuke"){
          bot.src = "../Characters/Yosuke Hanamura/yosuke-attack.gif";
        }
        else if(botName === "Yukiko"){
          bot.src = "../Characters/Yukiko Amagi/yukiko-attack.gif";
        }
        else if(botName === "Yu"){
          bot.src = "../Characters/Yu Narukami/yu-attack.gif";
        }
        userHealthValue -= cpuAttackValue;
        console.log("USER: " + userHealthValue);
        return (userHealthBar.setAttribute("value", userHealthValue));
      }
  }

  cpuDefend()
  {

    cpuBlockingActive = true;
    console.log("BLK");
    if(botName === "Aigis"){
      bot.src = "../Characters/Aigis/aigis-block.gif";
    }
    else if(botName === "Chie"){
      bot.src = "../Characters/Chie Satonaka/chie-block.gif";
    }
    else if(botName === "Kuma"){
      bot.src = "../Characters/Kuma/kuma-block.gif";
    }
    else if(botName === "Labrys"){
      bot.src = "../Characters/Labrys/labrys-block.gif";
    }
    else if(botName === "Mitsuru"){
      bot.src = "../Characters/Mitsuru Kirijo/mitsuru-block.gif";
    }
    else if(botName === "Sho"){
      bot.src = "../Characters/Sho Minazuki/sho-block.gif";
    }
    else if(botName === "Yosuke"){
      bot.src = "../Characters/Yosuke Hanamura/yosuke-block.gif";
    }
    else if(botName === "Yukiko"){
      bot.src = "../Characters/Yukiko Amagi/yukiko-block.gif";
    }
    else if(botName === "Yu"){
      bot.src = "../Characters/Yu Narukami/yu-block.gif";
    }

  }

  cpuMoveLeft()
  {

    cpuBlockingActive = false;
    console.log("LEFT");
    if(botName === "Aigis"){
    bot.src = "../Characters/Aigis/aigis-run.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos -= 12;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Chie"){
    bot.src = "../Characters/Chie Satonaka/chie-stretch.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos -= 22;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Kuma"){
    bot.src = "../Characters/Kuma/kuma-walking.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos -= 8;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Labrys"){
    bot.src = "../Characters/Labrys/labrys-walking.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos -= 16;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Mitsuru"){
    bot.src = "../Characters/Mitsuru Kirijo/mitsuru-run.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos -= 28;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Sho"){
    bot.src = "../Characters/Sho Minazuki/sho-walking.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos -= 28;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Yosuke"){
    bot.src = "../Characters/Yosuke Hanamura/yosuke-walkback.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos -= 16;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Yukiko"){
    bot.src = "../Characters/Yukiko Amagi/yukiko-walking.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos -= 16;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Yu"){
    bot.src = "../Characters/Yu Narukami/yu-run.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos -= 20;
    bot.style.left = playerXPos + "px";
    }

  }

  cpuMoveRight()
  {

    cpuBlockingActive = false;
    console.log("RIGHT");
    if(botName === "Aigis"){
    bot.src = "../Characters/Aigis/aigis-run.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos += 12;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Chie"){
    bot.src = "../Characters/Chie Satonaka/chie-stretch.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos += 22;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Kuma"){
    bot.src = "../Characters/Kuma/kuma-walking.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos += 8;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Labrys"){
    bot.src = "../Characters/Labrys/labrys-walking.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos += 16;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Mitsuru"){
    bot.src = "../Characters/Mitsuru Kirijo/mitsuru-run.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos += 28;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Sho"){
    bot.src = "../Characters/Sho Minazuki/sho-walking.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos += 28;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Yosuke"){
    bot.src = "../Characters/Yosuke Hanamura/yosuke-walkback.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos += 16;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Yukiko"){
    bot.src = "../Characters/Yukiko Amagi/yukiko-walking.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos += 16;
    bot.style.left = playerXPos + "px";
    }

    else if(botName === "Yu"){
    bot.src = "../Characters/Yu Narukami/yu-run.gif";
    bot.style.transform = "scaleX(1)";
    cpuXPos += 20;
    bot.style.left = playerXPos + "px";
    }

  }

  cpuMoveDown()
  {
    cpuBlockingActive = false;

    cpuYPos += 2;
    bot.style.top = cpuYPos + "em";

  }

  cpuMoveUp()
  {
    cpuBlockingActive = false;

    cpuYPos -= 2;
    bot.style.top = cpuYPos + "em";

  }

  cpuIdle()
  {

    if(botName === "Aigis")
    {
      bot.src = "../Characters/Aigis/aigis-idle.gif";
    }

    else if(botName === "Chie")
    {
      bot.src = "../Characters/Chie Satonaka/chie-idle.gif";
    }

    else if(botName === "Kuma")
    {
      bot.src = "../Characters/Kuma/kuma-idle.gif";
    }

    else if(botName === "Labrys")
    {
      bot.src = "../Characters/Labrys/labrys-idle.gif";
    }

    else if(botName === "Mitsuru")
    {
      bot.src = "../Characters/Mitsuru Kirijo/mitsuru-idle.gif";
    }

    else if(botName === "Sho")
    {
      bot.src = "../Characters/Sho Minazuki/sho-idle.gif";
    }

    else if(botName === "Yosuke")
    {
      bot.src = "../Characters/Yu Hanamura/yosuke-idle.gif";
    }

    else if(botName === "Yukiko")
    {
      bot.src = "../Characters/Yukiko Amagi/yukiko-idle.gif";
    }

    else if(botName === "Yu")
    {
      bot.src = "../Characters/Yu Narukami/yu-idle.gif";
    }

  }

}
let c = new CPU();
let p = new Player();

let cpuAttackValue = c.attack;
let cpuBlockValue = c.block;
let cpuHealthValue = c.health;
let cpuHealthValueTie = cpuHealthValue;

let userAttackValue = p.attack;
let userBlockValue = p.block;
let userHealthValue = p.health;
let userHealthValueTie = userHealthValue;

function cpuBrain()
{

  let randomInt = Math.floor(Math.random() * 4);

  if(randomInt === 1)
  {
    c.cpuMoveLeft();
  }

  else if(randomInt === 2)
  {
    c.cpuMoveRight();
  }

  else
  {
    c.cpuIdle();
  }

}

//Prompts user on their win or loss
//Returns can return to Title Screen or Selection Screen
function battleEnd()
{

  if(cpuHealthValue <= 0 && userHealthValue <= 0)
  {
    alert("Woah, we have a tie! How about a rematch!?");
    userHealthBar.setAttribute("max", userHealthValueTie);
    cpuHealthBar.setAttribute("max", cpuHealthValueTie);
    userHealthValue = userHealthValueTie / 2;
    cpuHealthValue = cpuHealthValueTie / 2;
    userHealthBar.setAttribute("value", userHealthValueTie);
    cpuHealthBar.setAttribute("value", cpuHealthValueTie);
  }
  else if(userHealthValue <= 0)
  {
    alert(`${botName} has won the match!`);
    window.open("Selection Screen.html", "_self");
  }
  else if(cpuHealthValue <= 0)
  {
    alert(`${JSON.parse(localStorage.getItem("client"))} has won the match!`);
    window.open("Selection Screen.html", "_self");
  }

}

//Used for player actions
function onKeyDownHandler(e)
{

  battleEnd();
  cpuBrain();

  if(e.keyCode === 65)//"A" Button Press
  {

    blockingActive = false;
    playerIsAttacking = true;
    playerMoveLeft = false;
    playerMoveRight = false;


    p.attackCPU();


    if(currentAnim === AigisAnim[0].toString()){
      player.src = "../Characters/Aigis/aigis-attack.gif";
    }
    else if(currentAnim === ChieAnim[0].toString()){
      player.src = "../Characters/Chie Satonaka/chie-attack.gif";
    }
    else if(currentAnim === KumaAnim[0].toString()){
      player.src = "../Characters/Kuma/kuma-attack.gif";
    }
    else if(currentAnim === LabrysAnim[0].toString()){
      player.src = "../Characters/Labrys/labrys-attack.gif";
    }
    else if(currentAnim === MitsuruAnim[0].toString()){
      player.src = "../Characters/Mitsuru Kirijo/mitsuru-attack.gif";
    }
    else if(currentAnim === ShoAnim[0].toString()){
      player.src = "../Characters/Sho Minazuki/sho-attack.gif";
    }
    else if(currentAnim === YosukeAnim[0].toString()){
      player.src = "../Characters/Yosuke Hanamura/yosuke-attack.gif";
    }
    else if(currentAnim === YukikoAnim[0].toString()){
      player.src = "../Characters/Yukiko Amagi/yukiko-attack.gif";
    }
    else if(currentAnim === YuAnim[0].toString()){
      player.src = "../Characters/Yu Narukami/yu-attack.gif";
    }

  }

  if(e.keyCode === 83)//"S" Button Press
  {
      blockingActive = true;
      playerIsAttacking = false;
      playerMoveLeft = false;
      playerMoveRight = false;

      if(currentAnim === AigisAnim[0].toString()){
        player.src = "../Characters/Aigis/aigis-block.gif";
      }
      else if(currentAnim === ChieAnim[0].toString()){
        player.src = "../Characters/Chie Satonaka/chie-block.gif";
      }
      else if(currentAnim === KumaAnim[0].toString()){
        player.src = "../Characters/Kuma/kuma-block.gif";
      }
      else if(currentAnim === LabrysAnim[0].toString()){
        player.src = "../Characters/Labrys/labrys-block.gif";
      }
      else if(currentAnim === MitsuruAnim[0].toString()){
        player.src = "../Characters/Mitsuru Kirijo/mitsuru-block.gif";
      }
      else if(currentAnim === ShoAnim[0].toString()){
        player.src = "../Characters/Sho Minazuki/sho-block.gif";
      }
      else if(currentAnim === YosukeAnim[0].toString()){
        player.src = "../Characters/Yosuke Hanamura/yosuke-block.gif";
      }
      else if(currentAnim === YukikoAnim[0].toString()){
        player.src = "../Characters/Yukiko Amagi/yukiko-block.gif";
      }
      else if(currentAnim === YuAnim[0].toString()){
        player.src = "../Characters/Yu Narukami/yu-block.gif";
      }

  }

  if(e.keyCode === 37 && playerXPos >= -32)//Left Arrow Key
  {

    blockingActive = false;
    playerIsAttacking = false;
    playerMoveLeft = true;
    playerMoveRight = false;

    if(currentAnim === AigisAnim[0].toString()){
    player.src = "../Characters/Aigis/aigis-run.gif";
    player.style.transform = "scaleX(1)";
    playerXPos -= 12;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === ChieAnim[0].toString()){
    player.src = "../Characters/Chie Satonaka/chie-stretch.gif";
    player.style.transform = "scaleX(1)";
    playerXPos -= 22;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === KumaAnim[0].toString()){
    player.src = "../Characters/Kuma/kuma-walking.gif";
    player.style.transform = "scaleX(1)";
    playerXPos -= 8;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === LabrysAnim[0].toString()){
    player.src = "../Characters/Labrys/labrys-walking.gif";
    player.style.transform = "scaleX(1)";
    playerXPos -= 16;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === MitsuruAnim[0].toString()){
    player.src = "../Characters/Mitsuru Kirijo/mitsuru-run.gif";
    player.style.transform = "scaleX(1)";
    playerXPos -= 28;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === ShoAnim[0].toString()){
    player.src = "../Characters/Sho Minazuki/sho-walking.gif";
    player.style.transform = "scaleX(1)";
    playerXPos -= 28;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === YosukeAnim[0].toString()){
    player.src = "../Characters/Yosuke Hanamura/yosuke-walkback.gif";
    player.style.transform = "scaleX(1)";
    playerXPos -= 16;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === YukikoAnim[0].toString()){
    player.src = "../Characters/Yukiko Amagi/yukiko-walking.gif";
    player.style.transform = "scaleX(1)";
    playerXPos -= 16;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === YuAnim[0].toString()){
    player.src = "../Characters/Yu Narukami/yu-run.gif";
    player.style.transform = "scaleX(1)";
    playerXPos -= 20;
    player.style.left = playerXPos + "px";
    }

  }

  else if(e.keyCode === 39 && playerXPos <= 1140)//Right Arrow Key
  {

    blockingActive = false;
    playerIsAttacking = false;
    playerMoveLeft = false;
    playerMoveRight = true;

    if(currentAnim === AigisAnim[0].toString()){
    player.src = "../Characters/Aigis/aigis-run.gif";
    player.style.transform = "scaleX(-1)";
    playerXPos += 12;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === ChieAnim[0].toString()){
    player.src = "../Characters/Chie Satonaka/chie-stretch.gif";
    player.style.transform = "scaleX(-1)";
    playerXPos += 22;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === KumaAnim[0].toString()){
    player.src = "../Characters/Kuma/kuma-walking.gif";
    player.style.transform = "scaleX(-1)";
    playerXPos += 8;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === LabrysAnim[0].toString()){
    player.src = "../Characters/Labrys/labrys-walking.gif";
    player.style.transform = "scaleX(-1)";
    playerXPos += 16;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === MitsuruAnim[0].toString()){
    player.src = "../Characters/Mitsuru Kirijo/mitsuru-run.gif";
    player.style.transform = "scaleX(-1)";
    playerXPos += 28;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === ShoAnim[0].toString()){
    player.src = "../Characters/Sho Minazuki/sho-walking.gif";
    player.style.transform = "scaleX(-1)";
    playerXPos += 28;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === YosukeAnim[0].toString()){
    player.src = "../Characters/Yosuke Hanamura/yosuke-walkback.gif";
    player.style.transform = "scaleX(-1)";
    playerXPos += 16;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === YukikoAnim[0].toString()){
    player.src = "../Characters/Yukiko Amagi/yukiko-walking.gif";
    player.style.transform = "scaleX(-1)";
    playerXPos += 16;
    player.style.left = playerXPos + "px";
    }

    else if(currentAnim === YuAnim[0].toString()){
    player.src = "../Characters/Yu Narukami/yu-run.gif";
    player.style.transform = "scaleX(-1)";
    playerXPos += 20;
    player.style.left = playerXPos + "px";
    }

  }

  else if(e.keyCode === 38 && playerYpos >= 10)//Up Arrow Key
  {
      blockingActive = false;

      playerYpos -= 2;
      player.style.top = playerYpos + "em";
  }

  else if(e.keyCode === 40 && playerYpos <= 28)//Down Arrow Key
  {
    blockingActive = false;

    playerYpos += 2;
    player.style.top = playerYpos + "em";
  }

}

function onKeyUpHandler(e)
{

  battleEnd();

  if(e.keyCode === 65 || e.keyCode === 83 || e.keyCode === 68 || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38){

    playerIsAttacking = false;
    playerMoveLeft = false;
    playerMoveRight = false;

    if(currentAnim.includes("Aigis")){
      player.src = AigisAnim[0].toString();
    }
    else if(currentAnim.includes("Chie")){
      player.src = ChieAnim[0];
    }
    else if(currentAnim.includes("Kuma")){
      player.src = KumaAnim[0];
    }
    else if(currentAnim.includes("Labrys")){
      player.src = LabrysAnim[0];
    }
    else if(currentAnim.includes("Mitsuru")){
      player.src = MitsuruAnim[0];
    }
    else if(currentAnim.includes("Sho")){
      player.src = ShoAnim[0];
    }
    else if(currentAnim.includes("Yosuke")){
      player.src = YosukeAnim[0];
    }
    else if(currentAnim.includes("Yukiko")){
      player.src = YukikoAnim[0];
    }
    else if(currentAnim.includes("Yu")){
      player.src = YuAnim[0];
    }

  }

}

function OST()
{
  let randomRow = Math.floor(Math.random() * 4);
  let randomCol = Math.floor(Math.random() * 4);
  audio.src = ost[randomRow][randomCol];
  audio.play();
}

function setHealthbar()
{

  userHealthBar.setAttribute("id", "playerHealth");

  cpuHealthBar.setAttribute("id", "cpuHealth")

  userHealthBar.setAttribute("style", "display: block; position: absolute; top: 1em; left: 0.5em; background-color: red;");

  cpuHealthBar.setAttribute("style", "display: block; position: absolute; top: 1em; right: 0.5em; background-color: red; transform: scaleX(-1);");
}
