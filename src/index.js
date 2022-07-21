const settings = require('./settings')
const downloadFile = require('./downloadFile')
const compressFile = require('./compressFile')
const core = require('@actions/core')
const label = core.getInput('label')
var white_paths = core.getInput('white_paths')
var ignore_paths = core.getInput('ignore_paths')
const os = process.platform

if(white_paths.length != 0 || white_paths){
    white_paths = ' --include ' + white_paths
}
if(ignore_paths.length != 0 || ignore_paths){
    ignore_paths = ' --exclude ' + ignore_paths
}


if(os=='linux'){
    // downloadFile.downloadFile(settings.linuxURL, settings.linuxName, settings.dir)
    // compressFile.compressFile(settings.dir + '/' + settings.linuxName, settings.dir + '/' + settings.linuxName.split('.')[0])
    var cmd_init = './codepuppy quickinit --label ' + label
    var cmd_scan = './codepuppy quickscan --label ' + label + ' -s ' + process.cwd() + white_paths + ignore_paths
    var cwd = __dirname + '/../lib/tca-client-linux'
}else if(os=='win32'){
    var cmd_init = 'codepuppy.exe quickinit --label ' + label
    var cmd_scan = 'codepuppy.exe quickscan --label ' + label + ' -s ' + process.cwd() + white_paths + ignore_paths
    var cwd = __dirname + '/../lib/tca-client-windows'
    // downloadFile.downloadFile(settings.windowsURL, settings.windowsName, settings.dir)
}else if(os=='darwin'){
    var cmd_init = './codepuppy quickinit --label ' + label
    var cmd_scan = './codepuppy quickscan --label ' + label + ' -s ' + process.cwd() + white_paths + ignore_paths
    var cwd = __dirname + '/../lib/tca-client-mac'
    // downloadFile.downloadFile(settings.darwinURL, settings.darwinName, settings.dir)
}

const child_process = require('child_process')

try{  // client 初始化
    child_process.execSync(cmd_init, { cwd }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
    })
} catch (error){
    core.error(error.message);
}

try {  // client 启动
    child_process.execSync(cmd_scan, { cwd }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
    })
} catch (error) {
    core.error(error.message)
}

try{  // 输出json分析报告
    const fs = require('fs')
    fs.readFile(cwd + '/tca_quick_scan_report.json', (err, buffer) => {
        if(err){
            console.error(err)
        }
        let d = buffer.toString()
        core.info(d)
    })
} catch (error) {
    core.error(error.message)
}