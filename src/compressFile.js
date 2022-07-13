const { core } = require('.')
exports.compressFile = compressFile

function compressFile(filepath, filedir){
    const compressing = require('compressing')

    compressing.gzip.uncompress(filepath, filedir).then(() => {
        core.info('解压成功')
    })
}