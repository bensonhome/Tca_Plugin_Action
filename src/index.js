const core = require('@actions/core')
const child_process = require('child_process')
const label = core.getInput('label')
const client_path = __dirname + '/../lib/tca-client-linux'

try{
    const cmd_init = './codepuppy quickinit --label ' + label
    child_process.execSync(cmd_init, { client_path }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
        core.info(stderr)
    })
} catch (error){
    core.error(error.message);
}

try {
    const cmd_scan = './codepuppy quickscan --label ' + label + ' -s ' + process.cwd()
    child_process.execSync(cmd_scan, { client_path }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
        core.info(stderr)
    })
} catch (error) {
    core.error(error.message)
}