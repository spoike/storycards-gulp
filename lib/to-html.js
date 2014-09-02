var jade = require('jade'),
    stream = require('stream'),
    gutil = require('gulp-util');

module.exports = function(templateUrl, cards) {
    var fn = jade.compileFile(templateUrl);
    var html = fn({cards: cards});
    var src = stream.Readable({objectMode: true});
    src._read = function() {
        this.push(new gutil.File({
            cwd: '',
            base: '',
            path: 'cards.html',
            contents: new Buffer(html)
        }));
        this.push(null);
    }
    return src;
};