const core = require('@actions/core')
function downloadFile(url, fileName, dir){
    core.info(url)
    core.info(fileName)
    core.info(dir)

    const core = require('@actions/core')
    const fs = require('fs')
    const path = require('path')
    const request = require('node:request')

    var stream = fs.createWriteStream(path.join(dir, fileName))
    request(url).pipe(stream).on('close', function(err){
        core.info('文件【' + fileName + '】下载完毕')
    })
}

exports.downloadFile = downloadFile