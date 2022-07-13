exports.dir = __dirname + '/../lib'

var linuxURL = 'https://github.com/Tencent/CodeAnalysis/releases/download/20220629.1/tca-client-v20220629.1-x86_64-linux.zip'
exports.linuxURL = linuxURL
exports.linuxName = linuxURL.split('/')[linuxURL.split('/').length - 1]

var darwinURL = 'https://github.com/Tencent/CodeAnalysis/releases/download/20220629.1/tca-client-v20220629.1-x86_64-apple-darwin.zip'
exports.darwinURL = darwinURL
exports.darwinName = darwinURL.split('/')[darwinURL.split('/').length - 1]

var windowsURL = 'https://github.com/Tencent/CodeAnalysis/releases/download/20220629.1/tca-client-v20220629.1-x86_64-windows.zip'
exports.windowsURL = windowsURL
exports.windowsName = windowsURL.split('/')[windowsURL.split('/').length - 1]