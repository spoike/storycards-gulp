var jade = require('jade'),
    stream = require('stream'),
    gutil = require('gulp-util'),
    _ = require('lodash');

module.exports = function(templateUrl, cards) {
    var fn = jade.compileFile(templateUrl);
    var html = fn({
        cards: cards,
        cardPages: function(perPage) {
            return _.reduce(cards, function(memo, card, idx) {
                var row = Math.floor(idx / perPage);
                if (idx % perPage === 0) {
                    memo.push([]);
                }
                memo[row].push(card);
                return memo;
            }, []);
        }
    });
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