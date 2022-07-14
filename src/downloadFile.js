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

    var express = require('express')
    var router = express.Router()
    var unzip = require('unzip')
    const download = require('download')

    (async () => {
        fs.writeFileSync(dir + '/' + fileName, await download(url))

        var extract = unzip.Extract({ path: dir})
        fs.createReadStream(dir + '/' + fileName).pipe(extract)
        extract.on('close', function () {
            core.info(' 解压完成 ')

            fs.unlinkSync(dir + '/' + fileName)
        })
        extract.on('error', function (err) {
            core.error(err)
        })
    })
}