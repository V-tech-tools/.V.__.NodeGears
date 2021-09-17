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

    console.log("📟 SEQ:[ "+keyPressSeq+" ] <|> PRESSED:[ "+pressed+" ]");
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
		console.log("✅ OK WebWorkers are available.");
		return true;
	} else {
		console.log("⭕ WTF ARE YOU RUNNING?? ⭕");
		return false;
	}
}

function messageWorker(msg = null){
	myWorker.postMessage(msg);
  console.log('📮 Message posted to worker ➤');
	return true;
}

var CanUseWW = canUseWebWorker();

if (CanUseWW) {
  var myWorker = new Worker('AppKeyboard.ww.js');

	myWorker.onmessage = function(e) {
		var messageRec = e.data;
		console.log('🏛 Message received from worker 📪 \n\n🧐 Message Content: \n'+messageRec);
	};

	messageWorker("✅ YEAAA YOU WORK FOR ME YES??? 🢂 [func: messageWorker()]");

} else {
	alert('🚫 Nope. Doesnt work without a worker ');
}