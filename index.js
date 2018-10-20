/**
 * @name dbi.js
 * @author Wessel "wesselgame" Tip
 * @licence MIT
 * @type {{Client: DBIClient}}
 * @type {{getStats: getStats}}
 */

module.exports = {
    Client  : require('./lib/Client'),
    getStats: require('./lib/getStats')
};