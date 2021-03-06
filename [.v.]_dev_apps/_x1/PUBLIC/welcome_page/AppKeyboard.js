const keyPressSeq = [];
const pressed = [];
const secretCode = 'debugmode';

const AppKeyboard = {
  up(e){
    console.log(e.key);

    const index = pressed.indexOf(e.key);
    if (index > -1) {
      pressed.splice(index, 1);
    }

    keyPressSeq.splice(-secretCode.length - 1, keyPressSeq.length - secretCode.length);

    if(keyPressSeq.join('').includes(secretCode)) {
      console.log('Starting Developer Mode!');
      document.body.style.background = '#101525';
    }

    console.log("š SEQ:[ "+keyPressSeq+" ] <|> PRESSED:[ "+pressed+" ]");
  },
  down(e){
    //console.log(e.key); 
    
    const index = pressed.indexOf(e.key);
    if (index == -1) {
      pressed.push(e.key);
      keyPressSeq.push(e.key);
    } 
    console.log("SEQ:[ "+keyPressSeq+" ] <|> PRESSED:[ "+pressed+" ]");
    
  },
  attachEventListeners(){
    window.addEventListener('keydown', AppKeyboard.down);
    window.addEventListener('keyup', AppKeyboard.up);
  },
  init() {
    this.attachEventListeners();
  }
}

AppKeyboard.init();


function canUseWebWorker() {
	if (window.Worker) {
		console.log("ā OK WebWorkers are available.");
		return true;
	} else {
		console.log("ā­ WTF ARE YOU RUNNING?? ā­");
		return false;
	}
}

function messageWorker(msg = null){
	myWorker.postMessage(msg);
  console.log('š® Message posted to worker ā¤');
	return true;
}

var CanUseWW = canUseWebWorker();

if (CanUseWW) {
  var myWorker = new Worker('AppKeyboard.ww.js');

	myWorker.onmessage = function(e) {
		var messageRec = e.data;
		console.log('š Message received from worker šŖ \n\nš§ Message Content: \n'+messageRec);
	};

	messageWorker("ā YEAAA YOU WORK FOR ME YES??? š¢ [func: messageWorker()]");

} else {
	alert('š« Nope. Doesnt work without a worker ');
}