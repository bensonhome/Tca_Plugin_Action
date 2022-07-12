const core = require('@actions/core')
const child_process = require('child_process')
const label = core.getInput('label')
const cwd = __dirname + '/../lib/tca-client-linux'
const fs = require('fs')

try{
    const cmd_init = './codepuppy quickinit --label ' + label
    child_process.execSync(cmd_init, { cwd }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
    })
} catch (error){
    core.error(error.message);
}

try {
    const cmd_scan = './codepuppy quickscan --label ' + label + ' -s ' + process.cwd()
    child_process.execSync(cmd_scan, { cwd }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
    })
} catch (error) {
    core.error(error.message)
}

try{
   fs.createReadStream(cwd + '/tca_quick_scan_report.json', (err, buffer) => {
    if(err) console.error(err)
    let d = buffer.toString()
    core.info(d)
   })
} catch (error) {
    core.error(error.message)
}