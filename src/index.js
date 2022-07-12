const core = require('@actions/core')
const child_process = require('child_process')
const label = core.getInput('label')


const os = process.platform
core.info(os)
if(os=='linux'){
    var cmd_init = './codepuppy quickinit --label ' + label
    var cmd_scan = './codepuppy quickscan --label ' + label + ' -s ' + process.cwd()
    var cwd = __dirname + '/../lib/tca-client-linux'
}else if(os.substring(0, 3)=='win'){
    var cmd_init = 'codepuppy.exe quickinit --label ' + label
    var cmd_scan = 'codepuppy.exe quickscan --label ' + label + ' -s ' + process.cwd()
    var cwd = __dirname + '/../lib/tca-client-windows'
}else if(os=='darwin'){
    var cmd_init = './codepuppy quickinit --label ' + label
    var cmd_scan = './codepuppy quickscan --label ' + label + ' -s ' + process.cwd()
    var cwd = __dirname + '/../lib/tca-client-mac'
}

try{
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
    const fs = require('fs')
    fs.readFile(cwd + '/tca_quick_scan_report.json', (err, buffer) => {
    if(err) console.error(err)
    let d = buffer.toString()
    core.info(d)
   })
} catch (error) {
    core.error(error.message)
}