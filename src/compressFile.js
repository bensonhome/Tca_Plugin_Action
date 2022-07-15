exports.compressFile = compressFile

function compressFile(filepath, filedir){
    // const core = require('@actions/core')
    const compressing = require('compressing')

    compressing.zip.uncompress(filepath, filedir)
    .then(() => {
        core.info('解压成功')
    })
    .catch((err) => {
        core.error(err)
    })
}