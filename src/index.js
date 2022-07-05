const core = require('@actions/core')
const child_process = require('child_process')
const label = core.getInput('label')
const cwd = __dirname + '/../lib/tca-client-linux'

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
console.log('开始打印分析报告。。。。。。。')
const jsonFile = cwd + '/tca_quick_scan_report.json'
var fs = require('fs')
fs.readFile(jsonFile, 'utf8', function(error, data){
    if(error){
        console.log(error)
    }
    var str = JSON.parse(data)
    console.log(str)
})