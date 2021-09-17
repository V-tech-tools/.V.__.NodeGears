onmessage = function(e) {
  console.log('🔨 WebWorker Received the Message from main script 📪');
  var workerResult = 'Result: ' + (e.data);
  console.log('🔨 WebWorker Posting message back to main script 🔗');
  postMessage("[WorkerResponse: "+ workerResult+ "]");
}