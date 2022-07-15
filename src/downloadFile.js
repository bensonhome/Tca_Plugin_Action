exports.downloadFile = downloadFile

function downloadFile(url, fileName, dir){
    const core = require('@actions/core')
    const fs = require('fs')
    // const path = require('path')
    // const request = require('request')

    // var stream = fs.createWriteStream(path.join(dir, fileName))
    // request(url).pipe(stream).on('close', function(err){
    //     core.info('文件【' + fileName + '】下载完毕')
    // })
    core.info('还没事.................................')
    var express = require('express')
    var router = express.Router()
    var unzip = require('unzip')
    const download = require('download')
    core.info('报错了.................................')
    (async () => {
        // core.info('kaishi.................................')
        // fs.writeFileSync('./tca-client-v20220629.1-x86_64-linux.zip', await download('https://github.com/Tencent/CodeAnalysis/releases/download/20220629.1/tca-client-v20220629.1-x86_64-linux.zip'
        // ))
        // core.info('结束')
        // var extract = unzip.Extract({ path: './'})
        // fs.createReadStream('./tca-client-v20220629.1-x86_64-linux.zip').pipe(extract)
        // extract.on('close', function () {
        //     core.info(' 解压完成 ')

        //     fs.unlinkSync('./tca-client-v20220629.1-x86_64-linux.zip')
        // })
        // extract.on('error', function (err) {
        // })
    })
}