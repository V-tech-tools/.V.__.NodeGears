const { exec } = require('child_process')


function bashDo(inputCommand = '') {
    exec(inputCommand, (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err)
      } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
      }
    })
  }

module.exports = bashDo;