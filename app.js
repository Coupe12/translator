class SpeechRecognitionApi {
  constructor(options) {
    const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.speechApi = new SpeechToText();
    this.output = options.output ? options.output : document.createElement('div');
    this.speechApi.continous = true;
    this.speechApi.interimResult = false;
    this.record = document.querySelector('#recording');
    this.speechApi.onresult = (event) => {
      var resultIndex = event.resultIndex; //
      var transcript = event.results[resultIndex][0].transcript;
      this.output.textContent = transcript;
    }

  }

  init() {
    this.speechApi.start();
    this.record.style.display = 'block';
  }

  stop() {
    this.record.style.display = 'none';
    this.speechApi.stop();

  }
}

class TextCarrier {
  constructor() {
    this.content = document.querySelector('#initial-statement');
    this.finalContent = document.querySelector('#final-statement');
    this.select = document.getElementById('select');



  }


  carry = () => {

    console.log(this.finalContent);


    this.finalContent.innerHTML = this.content.innerHTML;
    this.content.innerHTML = '';


  }

  translate = () => {


    // English TO French
    if (this.select.value == 'French') {

      if (this.finalContent.innerHTML == 'good morning' || this.finalContent.innerHTML == 'hello') {
        return this.finalContent.innerHTML = 'Bonjour'
      } else if (this.finalContent.innerHTML == 'goodbye') {
        return this.finalContent.innerHTML = 'Au revoir'
      } else if (this.finalContent.innerHTML == 'yes') {
        return this.finalContent.innerHTML = 'Oui'
      } else if (this.finalContent.innerHTML == 'no') {
        return this.finalContent.innerHTML = "Non"
      } else if (this.finalContent.innerHTML == "thank you") {
        return this.finalContent.innerHTML = "Merci"
      } else if (this.finalContent.innerHTML == "thank you very much") {
        return this.finalContent.innerHTML = "Merci beaucoup"
      } else if (this.finalContent.innerHTML == "girl") {
        return this.finalContent.innerHTML = "Fille"
      } else if (this.finalContent.innerHTML == 'boy') {
        return this.finalContent.innerHTML = "Garçon"
      } else if (this.finalContent.innerHTML == "woman") {
        return this.finalContent.innerHTML = "Femme"
      } else if (this.finalContent.innerHTML == "man") {
        return this.finalContent.innerHTML = "Homme"
      } else if (this.finalContent.innerHTML == "love") {
        return this.finalContent.innerHTML = "Amour"
      } else if (this.finalContent.innerHTML == 'french') {
        return this.finalContent.innerHTML = "Francais"
      } else if (this.finalContent.innerHTML == 'please') {
        return this.finalContent.innerHTML = "S'il vous plait"
      } else if (this.finalContent.innerHTML == "good evening") {
        return this.finalContent.innerHTML = "Bonsoir"
      } else if (this.finalContent.innerHTML == "goodnight") {
        return this.finalContent.innerHTML = "Bonne Nuit"
      } else if (this.finalContent.innerHTML == 'excuse me') {
        return this.finalContent.innerHTML = "Excusez-moi"
      } else if (this.finalContent.innerHTML == "You're welcome") {
        return this.finalContent.innerHTML = "De Rien"


        // Yoruba to French
      } else if (this.finalContent.innerHTML == "Pẹlẹ o") {
        return this.finalContent.innerHTML = "Bonjour"
      } else if (this.finalContent.innerHTML == "O dabọ") {
        return this.finalContent.innerHTML = "Au revoir"
      } else if (this.finalContent.innerHTML == "bẹẹni") {
        return this.finalContent.innerHTML = "Oui"
      } else if (this.finalContent.innerHTML == "rara") {
        return this.finalContent.innerHTML = "Non"
      } else if (this.finalContent.innerHTML == "e dupe") {
        return this.finalContent.innerHTML = "Merci"
      } else if (this.finalContent.innerHTML == "o ṣeun pupọ") {
        return this.finalContent.innerHTML = "Merci beaucoup"
      } else if (this.finalContent.innerHTML == "omoge") {
        return this.finalContent.innerHTML = "Fille"
      } else if (this.finalContent.innerHTML == "ọmọkunrin") {
        return this.finalContent.innerHTML = "Garçon"
      } else if (this.finalContent.innerHTML = "obinrin") {
        return this.finalContent.innerHTML = "Femme"
      } else if (this.finalContent.innerHTML == "ọkunrin") {
        return this.finalContent.innerHTML = "Homme"
      } else if (this.finalContent.innerHTML == "ife") {
        return this.finalContent.innerHTML = "Amour"
      } else if (this.finalContent.innerHTML == "Faranse") {
        return this.finalContent.innerHTML = "Francais"
      } else if (this.finalContent.innerHTML = "Jowo") {
        return this.finalContent.innerHTML = "Faranse"
      } else if (this.finalContent.innerHTML == "ka a ale") {
        return this.finalContent.innerHTML = "Jowo"
      } else if (this.finalContent.innerHTML == "Kasun layọ o") {
        return this.finalContent.innerHTML = "ka a ale"
      } else if (this.finalContent.innerHTML == "mo tọrọ gafara") {
        return this.finalContent.innerHTML = "Kasun layọ o"
      } else if (this.finalContent.innerHTML == "a ki dupe ara eni") {
        return this.finalContent.innerHTML = "De Rien"
      } else if (this.finalContent.innerHTML == "ife") {
        return this.finalContent.innerHTML = "Amour"
      }




      // French to English  and Yoruba to English
    } else if (this.select.value == 'English') {

      if (this.finalContent.innerHTML == 'Bonjour' || this.finalContent.innerHTML == "Pẹlẹ o") {
        return this.finalContent.innerHTML = 'hello'
      } else if (this.finalContent.innerHTML == 'Au revoir' || this.finalContent.innerHTML == "O dabọ") {
        return this.finalContent.innerHTML = 'goodbye'
      } else if (this.finalContent.innerHTML == 'Oui' || this.finalContent.innerHTML == "bẹẹni") {
        return this.finalContent.innerHTML = 'yes'
      } else if (this.finalContent.innerHTML == 'Non' || this.finalContent.innerHTML == "rara") {
        return this.finalContent.innerHTML = "no"
      } else if (this.finalContent.innerHTML == "Merci" || this.finalContent.innerHTML == "e dupe") {
        return this.finalContent.innerHTML = "thank you"
      } else if (this.finalContent.innerHTML == "Merci beaucoup" || this.finalContent.innerHTML == "o ṣeun pupọ") {
        return this.finalContent.innerHTML = "thank you very much"
      } else if (this.finalContent.innerHTML == "Fille" || this.finalContent.innerHTML == "omoge") {
        return this.finalContent.innerHTML = "girl"
      } else if (this.finalContent.innerHTML == 'Garçon' || this.finalContent.innerHTML == "ọmọkunrin") {
        return this.finalContent.innerHTML = "boy"
      } else if (this.finalContent.innerHTML == "Femme" || this.finalContent.innerHTML == "obinrin") {
        return this.finalContent.innerHTML = "woman"
      } else if (this.finalContent.innerHTML == "Homme" || this.finalContent.innerHTML == "ọkunrin") {
        return this.finalContent.innerHTML = "man"
      } else if (this.finalContent.innerHTML == "Amour" || this.finalContent.innerHTML == "ife") {
        return this.finalContent.innerHTML = "love"
      } else if (this.finalContent.innerHTML == 'Francais' || this.finalContent.innerHTML == "Faranse") {
        return this.finalContent.innerHTML = "french"
      } else if (this.finalContent.innerHTML == 'S\'il vous plait' || this.finalContent.innerHTML == "Jowo") {
        return this.finalContent.innerHTML = "please"
      } else if (this.finalContent.innerHTML == "Bonsoir" || this.finalContent.innerHTML == "ka a ale") {
        return this.finalContent.innerHTML = "good evening"
      } else if (this.finalContent.innerHTML == "Bonne Nuit" || this.finalContent.innerHTML == "Kasun layọ o") {
        return this.finalContent.innerHTML = "goodnight"
      } else if (this.finalContent.innerHTML == 'Excusez-moi' || this.finalContent.innerHTML == "mo tọrọ gafara") {
        return this.finalContent.innerHTML = "excuse me"
      } else if (this.finalContent.innerHTML == "De Rien" || this.finalContent.innerHTML == "a ki dupe ara eni") {
        return this.finalContent.innerHTML = "you're welcome"
      }


      //English to Yoruba and french to yoruba
    } else if (this.select.value == "Yoruba") {
      if (this.finalContent.innerHTML == "hello" || this.finalContent.innerHTML == "Bonjour") {
        return this.finalContent.innerHTML = "Pẹlẹ o";
      } else if (this.finalContent.innerHTML = "goodbye" || this.finalContent.innerHTML == "Au revoir") {
        return this.finalContent.innerHTML = "O dabọ"
      } else if (this.finalContent.innerHTML == "yes" || this.finalContent.innerHTML == "Oui") {
        return this.finalContent.innerHTML = "bẹẹni"
      } else if (this.finalContent.innerHTML == "no" || this.finalContent.innerHTML == "Non") {
        return this.finalContent.innerHTML = "rara"
      } else if (this.finalContent.innerHTML == "thank you" || this.finalContent.innerHTML == "Merci") {
        return this.finalContent.innerHTML = "e dupe"
      } else if (this.finalContent.innerHTML == "thank you very much" || this.finalContent.innerHTML == "Merci beaucoup") {
        return this.finalContent.innerHTML = "o ṣeun pupọ"
      } else if (this.finalContent.innerHTML == "girl" || this.finalContent.innerHTML == "Fille") {
        return this.finalContent.innerHTML = "omoge"
      } else if (this.finalContent.innerHTML == "boy" || this.finalContent.innerHTML == "Garçon") {
        return this.finalContent.innerHTML = "ọmọkunrin"
      } else if (this.finalContent.innerHTML == "man" || this.finalContent.innerHTML == "Homme") {
        return this.finalContent.innerHTML = "ọkunrin"
      } else if (this.finalContent.innerHTML == "woman" || this.finalContent.innerHTML == "Femme") {
        return this.finalContent.innerHTML = "obinrin"
      } else if (this.finalContent.innerHTML == "french" || this.finalContent.innerHTML == "Francais") {
        return this.finalContent.innerHTML = "Faranse"
      } else if (this.finalContent.innerHTML == 'S\'il vous plait' || this.finalContent.innerHTML == "please") {
        return this.finalContent.innerHTML = "Jowo"
      } else if (this.finalContent.innerHTML == "Bonsoir" || this.finalContent.innerHTML == "good evening") {
        return this.finalContent.innerHTML = "ka a ale"
      } else if (this.finalContent.innerHTML == "Bonne Nuit" || this.finalContent.innerHTML == "goodnight") {
        return this.finalContent.innerHTML = "Kasun layọ o"
      } else if (this.finalContent.innerHTML == 'Excusez-moi' || this.finalContent.innerHTML == "excuse me") {
        return this.finalContent.innerHTML = "mo tọrọ gafara"
      } else if (this.finalContent.innerHTML == "De Rien" || this.finalContent.innerHTML == "you're welcome") {
        return this.finalContent.innerHTML = "a ki dupe ara eni"
      } else if (this.finalContent.innerHTML == "love" || this.finalContent.innerHTML == "Amour") {
        return this.finalContent.innerHTML = "ife"
      }

    } else {
      return this.finalContent.innerHTML
    }

  }
}


// class Select {

//   constructor() {
//     const select = document.getElementById('select');
//   }

//   translate(){
//     if(select.value == French){

//     }
//   }
// }

window.onload = function() {

  const select = document.getElementById('select')

  var speech = new SpeechRecognitionApi({
    output: document.querySelector(".output")
  });

  var text = new TextCarrier();

  document.querySelector('.btn-start').addEventListener('click', () => {
    speech.init();

  })

  document.querySelector(".btn-end").addEventListener('click', () => {
    speech.stop();
  })

  document.querySelector('.translate-btn').addEventListener('click', () => {
    text.translate();
    console.log(this.finalContent = document.querySelector('#final-statement').innerText)
    document.querySelector('#final-statement').value = document.querySelector('#final-statement').innerHTML;
  })

  document.querySelector('.carry-btn').addEventListener('click', () => {

    text.carry();
    document.querySelector('#final-statement').value = document.querySelector('#final-statement').innerHTML;



  })




}




//canvas 1
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//canvas 2
const canvasbg = document.getElementById('canvasbg');
const ctxbg = canvasbg.getContext('2d');
canvasbg.width = window.innerWidth;
canvasbg.height = window.innerHeight;



let Bubbles = [];
let bgBubbles = [];

function addBubble() {
  Bubbles.push(new Bubble('rgb(255, 255, 255)', 1.8));
}

function addBgBubble() {
  bgBubbles.push(new Bubble('rgb(255, 0, 194)', 3.5));

}

class Bubble {
  constructor(color, ySpeed) {
    this.radius = (Math.random() * 150) + 30;
    this.life = true;
    this.x = (Math.random() * window.innerWidth);
    this.y = (Math.random() * 20) + window.innerHeight +
      this.radius;
    this.vy = ((Math.random() * 0.002) + 0.0001) +
      ySpeed;
    this.vr = 0;
    this.vx = (Math.random() * 4) - 2;
    this.color = color;
  }

  update() {
    this.vr += 0.00001;
    this.vr += 0.02;
    this.y -= this.vy;
    this.x += this.vx;
    if (this.radius > 1) {
      this.radius -= this.vr;
    }

    if (this.radius <= 1) {
      this.life = false;
    }
  }

  draw(currentCanvas) {
    currentCanvas.beginPath();
    currentCanvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    currentCanvas.fillStyle = this.color;
    currentCanvas.fill();

  }
}


function handleBubbles() {
  for (let i = Bubbles.length - 1; i >= 0; i--) {
    Bubbles[i].update();
    if (!Bubbles[i].life) {
      Bubbles.splice(i, 1);
    }

  }

  for (let i = bgBubbles.length - 1; i >= 0; i--) {
    bgBubbles[i].update();
    if (!bgBubbles[i].life) {
      bgBubbles.splice(i, 1)
    }
  }

  if (Bubbles.length < (window.innerWidth / 4)) {
    addBubble();
  }

  if (bgBubbles.length < (window.innerWidth / 12)) {
    addBgBubble();
  }

}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctxbg.clearRect(0, 0, canvas.width, canvas.height);

  handleBubbles();

  for (let i = bgBubbles.length - 1; i >= 0; i--) {
    bgBubbles[i].draw(ctxbg);
  }

  for (let i = Bubbles.length - 1; i >= 0; i--) {
    Bubbles[i].draw(ctx);
  }

  requestAnimationFrame(animate)
}

window.addEventListener('load', animate);
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvasbg.width = window.innerWidth;
  canvasbg.height = window.innerHeight;
  let Bubbles = [];
  let BgBubbles = []
});

setInterval(function() {

}, 1000);