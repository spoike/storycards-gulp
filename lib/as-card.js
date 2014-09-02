var _ = require('lodash'),
    yaml = require('yaml-front-matter'),
    marked = require('marked');

function asJsonData(data) {
    var card = yaml.loadFront(data);
    card.description = marked(card.__content);
    return card;
}

module.exports = function(file) {
    var data = file.contents.toString();
    return asJsonData(data);
}