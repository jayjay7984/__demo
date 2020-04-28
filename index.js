const { translate } = require('moji-translate')
exports.endpoint = function(request, response) {
    response.end(translate("Hello world!!!"));
    // response.end("Hello world!!!" + __dirname);
}
