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
    const jsonFile = cwd + '/tca_quick_scan_report.json'
    core.info('开始打印分析报告。。。。。。。' + jsonFile)
    core.info(JSON.stringify(jsonFile, null, '\t'))
} catch (error) {
    core.error(error.message)
}